<template>
  <div class="home">
    <topheader title="VUE">
      <router-link to="/user" slot="sl-right" class="icon iconfont icon-gerenzhongxin_default"></router-link>
    </topheader>
    <div class="home-body">
        <h3 class="time">{{getYearMonth}}</h3>
        <div class="pie-box">
          <hprogress title="当前月进度" :value="getDM" :ispercent="true"></hprogress>
          <hprogress title="月工作进度" :value="50" :ispercent="true"></hprogress>
          <hprogress title="有效项目数" :value="220" :ispercent="false"></hprogress>
        </div>
    </div>
    <div class="main-bd">
          <div class="table-box" v-for = "i in 9" :key="i">
            <template v-if="i<= menuList.length">
              <menucell :url="menuList[i-1].url" :img-url="menuList[i-1].imgUrl" :menu-name="menuList[i-1].menuName"></menucell>
            </template>
          </div>
    </div>
  </div>
</template>

<script>
import TopHeader from "../components/TopHeader";
import Progress from "../components/Progress";
// import service from "../service";
import Menucell from "../components/Menucell";
const menuList = [
    {
      "menuName":"公司通告",
      "imgUrl":require("@/assets/images/tall.png"),
      "url":"/notice"
    },
    {
      "menuName":"进店拜访",
      "imgUrl":require("@/assets/images/shop.png"),
      "url":"/notice"
    },
    {
      "menuName":"电话订单",
      "imgUrl":require("@/assets/images/order.png"),
      "url":"/notice"
    },
    {
      "menuName":"订单状态",
      "imgUrl":require("@/assets/images/status.png"),
      "url":"/notice"
    },
    {
      "menuName":"培训资料",
      "imgUrl":require("@/assets/images/read.png"),
      "url":"/notice"
    },
    {
      "menuName":"消息中心",
      "imgUrl":require("@/assets/images/news.png"),
      "url":"/notice"
    },
    {
      "menuName":"新增项目",
      "imgUrl":require("@/assets/images/demo.png"),
      "url":"/notice"
    },
    {
      "menuName":"LIKE",
      "imgUrl":require("@/assets/images/like.png"),
      "url":"/notice"
    }
]
export default {
  name: "Home",
  components: {
    topheader:TopHeader,
    hprogress:Progress,
    menucell:Menucell

  },
  data() {
    return {
      monthPercent:0,
      demos:0,
      menuList
    }
  },
  created() {
    // service.getUserProgress().then(res=>{
    //   this.monthPercent = parseInt(res.data.monthPercent*100);
    //   this.demos = res.data.totalShops; 
    // });
  },
  computed: {
    getYearMonth(){
      let t = new Date();
      return `${t.getFullYear()}年${t.getMonth()+1}月`;
    },
    getDM(){
      let t = new Date();
      return parseInt((t.getDate()/30)*100);
    }
  },

};
</script>

<style lang="scss" scoped>
.home{
  height:100%;
  display:flex;
  flex-direction:column;
  background:#fff;
   .main-bd{
    flex:1;
    display:flex;
    flex-wrap: wrap;
    padding:0 px2rem(30);
    align-items: stretch;
    align-content: stretch;
    border-top:1px solid #ccc;
    .table-box{
      border-bottom:1px solid #ccc;
      border-right:1px solid #ccc;
      flex:1 1 30%;
      display:flex;
      justify-content:center;
      align-items:center;
      text-align:center;
   }
   .table-box:nth-child(3n){
     border-right:none;
   }
  }
}
.home-body{ 
  padding-bottom:px2rem(40);
  .time{
    font-size:$text-size-mid;
    padding:px2rem(40) 0 px2rem(22);
    text-align:center;
  } 
  .pie-box{
      display:flex;
      justify-content:space-around;
    }
}

</style>