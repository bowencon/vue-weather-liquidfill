# vue-weather-liquidfill

###
npm安装 vue-weather-liquidfill 插件

### npm install vue-weather-liquidfill --save

### 
npm 导入
#### import weatherLiquidfill from 'vue-weather-liquidfill'
#### Vue.use(weatherLiquidfill)
###
在组件中使用
### `<weatherLiquidfill :titles="warnTitle" :options="warnList"></weatherLiquidfill>`
##
#####dataList内每个类型可单独使用，并可以自定义类型个数, 最多5种类型[weather, typhoon, heavy, high-temp, flood]
####Examples
```

	data: ()=> {
		return {
			dataList: [
				{
					type: 'weather',
					name: '天气预报',
					value: 'sunny',  //天气图标详情见下方样式设置
					text: '晴天',
					tips: '' 		 //red, yellow, blue, orange
				},
				{
					type: 'typhoon',
					name: '台风预警',
					value: '',		//例：100m/s
					text: '无台风',	//台风名称
					tips: '' //red, yellow, blue, orange
				},
				{
					type: 'heavy', 	//暴雨类型
					name: '暴雨预警',
					value: 'heavy-rain', //图标类型与天气一样
					text: '大雨',
					tips: 'blue' //red, yellow, blue, orange
				},
				{
					type: 'high-temp',
					name: '高温预警',
					value: '27°C',
					text: '正常',
					tips: ''//red, yellow, blue, orange, 空green
				},
				{
					type: 'flood',
					name: '汛情水位',
					value: '2.7m', //当前值
					text: '4.9m', //警戒线
					tips: 'green' //red, yellow, blue, orange, green
				}
			]
			
	    }
	}
	
``` 
  
###天气 value 图标样式：
##### sunny  晴天 
##### sunny-cloudy 多云
##### sunny-rain   晴转雨
##### cloudy 	   阴天 
##### rain-snow    雨夹雪
##### light-rain   小雨
##### moderate-rain  中雨 
##### heavy-rain  	 大雨
##### thunder-shower  	 雷阵雨 
##### thunder-lightning  雷电
##### snow   雪
##### spray  雾

##
###洪水 tips 图标样式：
##### red
##### yellow
##### blue
##### orange
##
#### [Configuration Reference] See [https://www.npmjs.com/~bowencon](https://www.npmjs.com/~bowencon).
#### https://github.com/bowencon/
![Image text](https://github.com/bowencon/vue-weather-liquidfill/blob/master/preview.jpg)