<template>
    <div class="tophead">
        <div class="th-left" @click="backAction">
            <a herf="javascript:;"><i class="icon iconfont icon-back"></i></a>
        </div>
        <div class="th-center">{{title}}</div>
        <div class="th-right">
            <slot name="sl-right">右侧插槽</slot>
        </div>
    </div>
</template>

<script>
export default {
    props:["title","backurl"],
    methods:{
        backAction(){
            if(this.backurl){
                this.$router.push(this.backurl);
            }else{
                this.$router.go(-1);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .tophead{
        display:flex;
        justify-content: space-between;
        height:$th;
        line-height:$th;
        color:#fff;
        background:#4fc08d;
        font-size:$text-size-impor;
        .th-left{
            padding-left:px2rem(25);
        }
        .th-center{
            text-align:center;
        }
        .th-right{
            padding-right:px2rem(25);
        }
        .icon{
            font-size:px2rem(40);
        }
    }
</style>