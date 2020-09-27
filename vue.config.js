// 执行环境
const NODE_ENV = process.env.NODE_ENV;
console.log("-----NODE_ENV===", NODE_ENV);
//production | development
module.exports = {
    pages: { // 修改 src 入口文件添加为新的页面 packages
        index: {
		  entry: NODE_ENV == 'development' ? 'src/main.js' : 'packages/index.js', // 根据不同的执行环境配置不同的入口
          template: 'public/index.html',  // 模板来源
          filename: 'index.html',		  // 输出文件名
		  output: {
		    /* path: path.resolve(__dirname, '/packages/'),
		    publicPath: '/packages/', */
		    filename: 'index.js',
		    library: 'weatherLiquidfill', // 指定的就是你使用require时的模块名
		    libraryTarget: 'umd', // 指定输出格式
		    umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
		  },
        }
    },	  
    chainWebpack: config => {
	   config.module
		   .rule('js')
		   .include
		   .add(__dirname+ '/packages/')
		   .end()
		   .use('babel')
		   .loader('babel-loader')
		   .tap(options => {
			   // 修改它的选项...
			   return options
		   })
    },
	css: {
		// 是否使用css分离插件 ExtractTextPlugin
		extract: false,		//注意这里要设置为false
		// 开启 CSS source maps 样式行号
		sourceMap: true,	//注意这里要设置为 true
		// css预设器配置项
		loaderOptions: {},
		// 启用 CSS modules for all css / pre-processor files.
		modules: false
	}
}
