const fs = require('fs');
const path = require('path');

const rollup = require('rollup');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const json = require('rollup-plugin-json');
const typescriptPlugin = require('rollup-plugin-typescript');
const multiEntry = require('rollup-plugin-multi-entry');
const typescript = require('typescript');
const glob = require('glob');
const { paramCase } = require('change-case');

const extension = '.tsx';
const filePath = path.join('.', 'src', 'components');

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
    classnames: 'classNames'
  },
  sourcemap: true,
  format: 'umd',
  exports: 'named',
};

rollup
  .rollup({
    ...inputOptions,
    input: 'src/index.ts',
  })
  .then(bundle => {
    bundle.write({
      ...outputOptions,
      name: 'UI Components',
      file: 'dist/ui-components.js',
    });
  });

getFiles()
  .then(files => {
    for (const file of files) {
      const component = path.parse(file).name;
      const fileName = paramCase(component);

      rollup
        .rollup({
          ...inputOptions,
          input: file,
        })
        .then(bundle => {
          bundle.write({
            ...outputOptions,
            name: component,
            file: `dist/${fileName}.js`,
          });
        });
    }
  })
  .catch(console.error);
