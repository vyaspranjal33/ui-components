import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescriptPlugin from 'rollup-plugin-typescript';
import typescript from 'typescript';

export default {
  external: ['react'],
  input: './src/index.ts',
  output: {
    file: './dist/ui-components.js',
    format: 'umd',
    globals: {
      react: 'React',
    },
    name: 'ui-components',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescriptPlugin({
      typescript,
    }),
  ],
};
