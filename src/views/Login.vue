<template>
  <div class="login">
    <h1>欢迎登录VUE系统</h1>
    <div class="top-hat"></div>
    <div class="login-box">
      <div class="login-wrapper">
        <!-- logo -->
        <div class="logo"></div>
        <!-- 登录 -->
        <!-- 使用vee-validate3.0插件实现表单验证有问题 -->
        <!-- <ValidationProvider name="field" rules="max:6,min:4" v-slot="{classes}">
                    <div class="input-group" :class="{active:active_index === 1,classes}">
                        <label for="cm_code">公司编号&nbsp;:</label>
                        <input  @focus="active_index=1" type="number" id="cm_code"  v-model="cm_code">
                    </div>
                </ValidationProvider> -->
        <div
          class="input-group"
          :class="{ active: active_index === 1, error: errors.has('cno') }"
        >
          <label for="cm_code">公司编号&nbsp;:</label>
          <input
            v-validate="{ required: true, max: 6, min: 4 }"
            name="cno"
            @focus="active_index = 1"
            type="number"
            id="cm_code"
            v-model="cm_code"
            placeholder="请输入4~6位数字"
          />
        </div>
        <div
          class="input-group"
          :class="{ 
            active: active_index === 2, 
            error: errors.has('pon') }">
          <label for="pon_code">员工编号&nbsp;:</label>
          <input
            v-validate="{required:true, max:8, min:6}"
            name="pon"
            @focus="active_index = 2"
            type="number"
            id="pon_code"
            v-model="pon_code"
            placeholder="请输入6~8位数字"
          />
        </div>
        <div
          class="input-group"
          :class="{ active: active_index === 3, error: errors.has('pwd') }"
        >
          <label for="pword">用户密码&nbsp;:</label>
          <input
            v-validate="{ required: true, min: 6 }"
            name="pwd"
            @focus="active_index = 3"
            type="password"
            id="pword"
            v-model="pword"
          />
        </div>
        <div class="btn-group">
          <div class="btn" @click="pwordSave" :class="{ active: repword }">
            <a href="javascript:;">
              <i
                class="iconfont"
                :class="{
                  'icon-kongjianweixuan': !repword,
                  'icon-kongjianyixuan': repword
                }"
              ></i>
            </a>
            <span>保存密码</span>
          </div>
          <div class="btn" @click="setLogin" :class="{ active: autologin }">
            <a href="javascript:;">
              <i
                class="iconfont"
                :class="{
                  'icon-kongjianweixuan': !autologin,
                  'icon-kongjianyixuan': autologin
                }"
              ></i>
            </a>
            <span>自动登录</span>
          </div>
        </div>
      </div>
    </div>
    <div class="reg" @click="regClick">
      登录
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { Indicator ,Toast } from "mint-ui";
import "../assets/iconfont/iconfont.css";
import service from "../service";
export default {
  data() {
    return {
      active_index: 1,
      cm_code: "",
      pon_code: "",
      pword: "",
      repword: false,
      autologin: false
    }
  },
  mounted(){
    let data = JSON.parse(localStorage.getItem("Login_data"));
    if(data){
      this.cm_code = data.CNO;
      this.pon_code = data.PNO;
      this.pword = data.PWD;
      this.repword = data.repword;
      this.autologin = data.autologin;
    }
    if(this.autologin){
      this.regClick();
    }
    // 强制执行校验
    this.$validator.validate();
  },
  methods: {
    ...mapMutations(["initUser"]),
    pwordSave() {
      this.repword = !this.repword;
      this.repword || (this.autologin = false);
    },
    setLogin() {
      // 设置当前自动登录为取反
      this.autologin = !this.autologin;
      // 当自动登录为true时，设置记住密码也为true
      this.autologin && (this.repword = true);
    },
    regClick() {
      // 判断当前校验是否通过
      // this.errors.any(); boolean 如果有错误那么返回true,否则为false
      if (this.errors.any()) {
          return;
      }
      Indicator.open("正在登陆...");
      // setTimeout(() => {
      //   Indicator.close();
      // }, 2000);
      // 发送ajax请求，axios
      service
      .login({
        CNO:this.cm_code,
        PNO:this.pon_code,
        PWD:this.pword
      })
      .then(res=>{
        if(res.data.code == 1){
          // 登陆成功
          // 记住用户名密码
          localStorage.setItem("Login_data",JSON.stringify({
             repword:this.repword,
             autologin:this.autologin,
             PNO:this.repword ? this.pon_code:"",
             CNO:this.repword ? this.cm_code:"",
             PWD:this.repword ? this.pword:""
          }));
          // 把当前登录的用户信息放到 sessionStorage里面一份
          sessionStorage.setItem("LoginUser",JSON.stringify(res.data.user));
          sessionStorage.setItem("LoginToken",res.data.token);
          // 把当前登录的用户信息放到 vuex
          // this.$store.commit("initUser",res.data.user);
          this.initUser(res.data.user);
          // 跳转到home页面
          this.$router.push("/home");
        }else{
          // 登陆失败，用户名、密码不正确
          Toast({ 
            message: "登陆失败,用户名、密码不正确!",
            duration:2000
          });
        }
        Indicator.close();
      })
      .catch(e=>{
        console.log(e);
        Toast({
          message: "登陆异常",
          duration: 2000
        });
        Indicator.close();
      })
    }
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}
</style>
<style lang="scss" scoped>
.login {
  background: #4fc08d;
  height: 100%;
  h1 {
    text-align: center;
    font-size: px2rem(36);
    color: #fff;
    padding: px2rem(148-36-44) 0 px2rem(44) 0;
  }
  .top-hat {
    width: px2rem(537);
    height: px2rem(18);
    border-radius: px2rem(18) px2rem(18) 0 0;
    margin: 0 auto;
    background: #eee;
  }
  .login-box {
    width: px2rem(600);
    height: px2rem(836);
    background: #fff;
    margin: 0 auto;
    border-radius: px2rem(20);
    .login-wrapper {
      padding-top: px2rem(80);
      .logo {
        width: px2rem(190);
        height: px2rem(190);
        margin: 0 auto px2rem(80);
        background: url(../assets/logo.png) no-repeat;
        background-size: cover;
      }
      .input-group,
      .btn-group {
        display: flex;
        width: px2rem(401);
        height: px2rem(90);
        padding: 0 px2rem(36);
        color: $text-color;
        line-height: px2rem(90);
      }
      .input-group {
        font-size: $text-size-mid;
        border: px2rem(2) solid #e2e2e2;
        border-radius: px2rem(45);
        margin: 0 auto px2rem(30);
        input {
          // line-height:px2rem(86);
          width: px2rem(220);
          font-size: $text-size-mid;
          padding-left: 1em;
        }
        input::placeholder {
          color: #ccc;
        }
      }
      .input-group.active {
        color: $active-color;
        border-color: $active-color;
      }
      .input-group.error {
        color: #ca0c16;
        border-color: #ca0c16;
      }
      .btn-group {
        font-size: $text-size;
        margin: 0 auto;
        .btn {
          width: 50%;
          > span {
            vertical-align: top;
            margin-left: px2rem(4);
          }
          > a {
            > i {
              font-size: px2rem(30);
            }
          }
        }
        .btn.active {
          color: $active-color;
        }
      }
    }
  }
  .reg {
    width: px2rem(600);
    height: px2rem(100);
    line-height: px2rem(100);
    background: #fff;
    color: $active-color;
    text-align: center;
    margin: px2rem(20) auto 0;
    font-size: $text-size-impor;
    border-radius: px2rem(20);
    letter-spacing: px2rem(10);
    font-weight: bold;
  }
}
</style>
