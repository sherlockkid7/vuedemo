<template>
    <div calss="progress" style="position: relative;">
            <div class="label">{{value}}<span v-if="ispercent">%</span></div>
            <div class="pie" ref="pie_wrap">
            </div>
            <h3 class="pie-title">{{title}}</h3>
    </div>
</template>

<script>
// 引入 ECharts 主模块
import echarts from  "echarts/lib/echarts";
// 引入饼图
import "echarts/lib/chart/pie";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
export default {
    props:{
        title:{type:String,required:true},
        value:{type:Number,required:true},
        ispercent:{type:Boolean,required:true,default:false}
    },
    mounted() {
        this.initCircle();
    },
    watch: {
        value:function () {
            this.initCircle();
        }
    },
    methods: {
        initCircle(){
            let data = [];
        if(this.ispercent){
            data.push({value:this.value,name:''});
            data.push({value:100-this.value,name:''});
        }else{
            data.push({value:0,name:''});
            data.push({value:100,name:''});
        }
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(this.$refs.pie_wrap);
        // 绘制图表
        myChart.setOption({
            color:['rgb(102,200,113)','rgb(223,223,223)'],
            series: [
                {
                    name: this.title,
                    type: 'pie',
                    radius: ['95%', '100%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal:{
                            show: false,
                            position: 'center',
                            textStyle:{
                                fontSize:'48',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    emphasis: {
                        label: {
                            show: true,
                            textStyle:{
                                fontSize:'30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal:{
                            show: false
                        }
                    },
                    data
                }
            ]
        });
        }
    },
}
</script>

<style lang="scss" scoped>  
.label{
    font-size:$text-size-impor;
    position:absolute;
    top:32%;
    left:50%;
    transform: translateX(-50%);
    span{
        position:absolute;
        top:0;
        right:px2rem(-20);
        font-size:$text-size-small;
        }
    }
.pie{
    width:px2rem(175);
    height:px2rem(175);
    margin-bottom:px2rem(22);
} 
.pie-title{
    font-size:$text-size-mid;
    text-align:center;
 } 
  
</style>