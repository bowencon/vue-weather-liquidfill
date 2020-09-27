<template>
  <div id="app">
    <weatherLiquidfill :titles="warnTitle" :options="warnList"></weatherLiquidfill>
  </div>
</template>

<script>
// import weatherLiquidfill from '../packages/index'
export default {
  name: 'app',
  components: {
    //weatherLiquidfill
  },
  data: ()=> {
  	return {
		warnTitle: '天气预警情况',
  		warnList: [
			{
				type: 'weather',
				name: '天气预报',
				value: 'thunder-lightning', //天气图标详情见README.md
				text: '雷电',
				tips: 'orange' //red, yellow, blue, orange
			},
  			{
				type: 'typhoon',
  				name: '台风预警',
  				value: '100m/s',	//例：100m/s
  				text: '台风',		//台风名称	
  				tips: 'yellow' //red, yellow, blue, orange
			},
			{
				type: 'heavy', //暴雨类型
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
  				tips: '' //red, yellow, blue, orange, 空值为 green
  			}, 
  			{
				type: 'flood',
  				name: '汛情水位',
  				value: '4.3m',		//当前值
  				text: '4.6m',		//警戒线
  				tips: 'red' //red, yellow, blue, orange, green
  			}
  		],
  		
      }
  },
  mounted() {
	  
  },
  methods: {
	  
  }
}
</script>

<style>
@import './assets/css/common.css';
#app{
    padding: 10px 20px 20px;
	background: rgba(11,53,83,.98);
	transform-origin: 0px 0px 0px;
	transition: transform .4s ease-in-out;
}
/*  sunny 			  晴天 
	sunny-cloudy 	  多云
	sunny-rain        晴转雨
	cloudy 			  阴天 
	rain-snow 		  雨夹雪
	light-rain		  小雨
	moderate-rain     中雨 
	heavy-rain 		  大雨
	thunder-shower    雷阵雨 
	thunder-lightning 雷电
	snow              雪
	spray             雾
*/
</style>
