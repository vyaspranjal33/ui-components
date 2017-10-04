import typescript from 'typescript';
import typescriptRollup from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

const pkg = require('./package.json');

const external = Object.keys(pkg.dependencies);

export default {
  entry: 'src/index.ts',
  dest: 'dist/ui-components.js',
  format: 'es',
  globals: {
    react: 'React',
  },
  plugins: [
    typescriptRollup({
      typescript,
    }),
    nodeResolve({
      jsnext: true,
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        './node_modules/react/react.js': [
          'cloneElement',
          'createElement',
          'PropTypes',
          'Children',
          'Component',
        ],
      },
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  external,
};
