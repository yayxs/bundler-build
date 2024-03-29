import resolve from '@rollup/plugin-node-resolve' // 允许加载第三方依赖
import commonjs from '@rollup/plugin-commonjs' // 将cjs 转为 esm
// /**
//  * @type { import('rollup').RollupOptions }
//  */
// const buildOptions = {
//   input: ['src/index.js'],
//   // 打包为不同的产物
//   // output: {
//   //   dir: 'dist/es',
//   //   format: 'esm',
//   // },
//   output: [
//     {
//       dir: 'dist/es',
//       format: 'esm',
//     },
//     {
//       dir: 'dist/cjs',
//       format: 'cjs',
//     },
//   ],
//   plugins: [resolve(), commonjs()],
// }

/**
 * @type { import('rollup').RollupOptions }
 */
const buildOptions = {
  input: 'input.js',
  output: [
    {
      file: 'output-iife.js',
      format: 'iife' // 浏览器
    },
    {
      file: 'output-esm',
      format: 'esm' // 浏览器esm
    },
    {
      file: 'output-cjs',
      format: 'cjs'
    }
  ]
}

export default buildOptions
