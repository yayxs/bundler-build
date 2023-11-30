模块打包
路径别名
全局变量注入
代码压缩

```sh
npx rollup input.js -f esm -o bundle.js
```

Tree-Shaking 的副作用
顶级调用是可能产生副作用的 对于函数调用 只要函数 bar 没有被调用

`webpack` 或者 `rollup` 寻找资源时候 优先使用 `module` 字段指向的资源 代替 main

```json
 "main": "index.js",
  "module": "dist/vue.runtime.esm-bundler.js",
```
