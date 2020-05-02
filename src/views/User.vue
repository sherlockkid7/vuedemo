<template>
    <div>
        <topheader title="个人中心">
            <span  slot="sl-right"></span>
        </topheader>
        <div class="userbg">
            <div class="mask">
                <img src="../assets/toux.jpg" />
                <h3>君莫笑&nbsp;|&nbsp;133****4077</h3>
            </div> 
        </div>
        <div class="usercontent">
            <div class="userlist">
                <div class="userleft">
                    <i class="icon iconfont icon-user-fill" ></i>
                    <span>用户名</span>
                </div>
                <div class="userright">
                    <a href="javascript:;">
                    <span>君莫笑</span>
                    <i class="icon iconfont icon-angle-right"></i>
                    </a>
                </div>
            </div>
            <div class="userlist">
                <div class="userleft">
                    <i class="icon iconfont icon-layergroup-fill" ></i>
                    <span>性别</span>
                </div>
                <div class="userright">
                    <a href="javascript:;">
                    <span>男</span>
                    <i class="icon iconfont icon-angle-right"></i>
                    </a>
                </div>
            </div>
            <div class="userlist">
                <div class="userleft">
                    <i class="icon iconfont icon-paperplane-fill" ></i>
                    <span>梦想</span>
                </div>
                <div class="userright">
                    <a href="javascript:;">
                    <span>荣誉之巅</span>
                    <i class="icon iconfont icon-angle-right"></i>
                    </a>
                </div>
            </div>
            <div class="userlist">
                <div class="userleft">
                    <i class="icon iconfont icon-mobile-alt" ></i>
                    <span>修改手机</span>
                </div>
                <div class="userright">
                    <a href="javascript:;">
                    <i class="icon iconfont icon-angle-right"></i>
                    </a>
                </div>
            </div>
            <div class="userlist">
                <div class="userleft">
                    <i class="icon iconfont icon-key" ></i>
                    <span>修改密码</span>
                </div>
                <div class="userright">
                    <a href="javascript:;">
                    <i class="icon iconfont icon-angle-right"></i>
                    </a>
                </div>
            </div>
            <div class="userlist">
                <div class="userleft">
                    <i class="icon iconfont icon-link" ></i>
                    <span>分享</span>
                </div>
                <div class="userright">
                    <a href="javascript:;">
                    <i class="icon iconfont icon-angle-right"></i>
                    </a>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import "../assets/iconfont/iconfont.css";
import TopHeader from "../components/TopHeader";
export default {
    name: "User",
    components: {
        topheader:TopHeader
    }
}
</script>

<style lang="scss" scoped>
.userbg{
    height:px2rem(350);
    line-height:px2rem(350);
    text-align:center;
    background:url(../assets/toux.jpg) no-repeat center center;
    background-size:cover;
    position:relative;
    .mask{
        background:rgba(10,10,10,.7);
        img{
        display:inline-block;
        position:relative;
        width:px2rem(120);
        background:hsla(0,0,100%,.25) border-box;
        border-radius:50%;
        box-shadow: 0 0 0 1px hsla(0,0,100%,.3) inset,0 .5em 1em rgba(0, 0, 0, 0.6);
        }
        img::before{
            content:"";
            position:absolute;
            top: 0; 
            right: 0; 
            bottom: 0; 
            left: 0;
            -webkit-filter:blur(px2rem(20));
            filter:blur(px2rem(20));
        }
        h3{
            position:absolute;
            bottom:-20%;
            left:50%;
            transform:translateX(-50%);
            font-size:$text-size-mid;
            color:#fff;
        }
    }
}
.userlist{
    height:px2rem(100);
    line-height:px2rem(100);
    padding:0 px2rem(20);
    display:flex;
    justify-content: space-between;
    border-bottom:1px solid #ccc;
    font-size:$text-size-impor;
    .userleft{
        .icon{
            color:$active-color;
            font-size:px2rem(56);
        }
        span{
            margin-left:px2rem(20);
            vertical-align: top;
        }
    }
    .userright{
        color:#ccc;
        .icon{ 
            font-size:px2rem(40);
        }
        span{
            margin-right:px2rem(20);
            vertical-align: top;
        }
    }
}    
</style>