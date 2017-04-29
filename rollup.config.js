import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

const pkg = require('./package.json');

const external = Object.keys(pkg.dependencies);

export default {
  entry: 'src/index.js',
  dest: 'dist/ui-components.js',
  format: 'es',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: ['react', 'es2015-rollup', 'flow', 'stage-3'],
      plugins: [
        'external-helpers',
        'transform-export-extensions',
      ],
    }),
    nodeResolve({
      jsnext: true,
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports:
      {
        './node_modules/react/react.js':
        [
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
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'rollupStarterProject',
      sourceMap: true,
    },
    {
      dest: pkg.module,
      format: 'es',
      sourceMap: true,
    },
  ],
};
