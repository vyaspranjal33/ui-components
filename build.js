const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const rollup = require('rollup');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const json = require('rollup-plugin-json');
const typescriptPlugin = require('rollup-plugin-typescript');
const typescript = require('typescript');
const glob = require('glob');
const { paramCase } = require('change-case');

const extension = '.tsx';
const filePath = path.join(__dirname, 'src', 'components');
const packagePath = path.join(__dirname, 'packages', 'ui-components');

const cleanDirectory = directory =>
  new Promise((resolve, reject) => {
    rimraf(directory, (error, ...args) => {
      if (error) reject(error);
      resolve(...args);
    });
  });

const getFiles = () =>
  new Promise((resolve, reject) => {
    glob(path.join(filePath, '**/*.tsx'), (error, files) => {
      if (error) return reject(error);
      resolve(
        files.filter(
          file => !file.includes('test') || !file.includes('index.tsx'),
        ),
      );
    });
  });

const plugins = [
  resolve({ preferBuiltins: true }),
  commonjs(),
  json(),
  typescriptPlugin({
    typescript,
  }),
];

const inputOptions = {
  external: ['react', 'classNames'],
  plugins,
};

const outputOptions = {
  globals: {
    react: 'React',
    classnames: 'classNames',
  },
  sourcemap: true,
  format: 'umd',
  exports: 'named',
};

(async () => {
  const mainBundle = await rollup.rollup({
    ...inputOptions,
    input: 'src/index.ts',
  });

  mainBundle.write({
    ...outputOptions,
    name: 'UI Components',
    file: 'packages/ui-components/ui-components.js',
  });

  const files = await getFiles();

  for (const file of files) {
    const component = path.parse(file).name;
    const fileName = paramCase(component);

    const componentBundle = await rollup.rollup({
      ...inputOptions,
      input: file,
    });

    componentBundle.write({
      ...outputOptions,
      name: component,
      file: `packages/ui-components/${fileName}.js`,
    });
  }
})();
