# Scaffold
## 工具用途
快速开启前端项目，可用于demo级产品的开发，也可在此基础上进行扩展，作为前端脚手架工具
## 功能说明
1、模块热替换  
2、typescript 语法支持  
3、实时更新  
4、es6 语法  
5、以 commonJs 方式组织代码（可修改 AMD、UMD 是需求而定 ）  
6、以 js 库的形式打包供外部项目使用  

## 可扩展  
1、文件加载 file-loader  
2、样式加载 style-loader | css-loader | sass-loader .etc  

## 使用说明

```npm run dev```    : 开发阶段使用，代码缓存进内存，不生成 dist  
```npm run build```  : 生产测试阶段使用，打包的代码未压缩，方便查看打包形式，排查错误  
```npm run release```: 生产打包阶段使用，代码压缩，在 build 未出错时，建议再使用该命令  

## 文档编辑
使用Gitbook作为文档编辑器，可下载对应的文档编辑工具[GitBook Editor](https://github.com/GitbookIO/editor-legacy)

## 依赖资源文档
* 单元测试工具 [Jest](https://jestjs.io/docs/zh-Hans/getting-started.html)  
* 打包工具 [Rollup](https://www.rollupjs.com/)
