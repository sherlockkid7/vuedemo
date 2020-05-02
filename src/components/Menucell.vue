<template>
    <div calss="menucell">
        <router-link :to="url">
            <div class="menu-pic">
                <img :src="imgUrl" :alt="menuName"/>
            </div>
            <div class="menu-title">
                {{menuName}}
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props:["menuName","imgUrl","url"],
}
</script>

<style lang="scss" scoped>

    .menu-pic{
        display:inline-block;
        height:px2rem(62);
        width:px2rem(62);
        margin-bottom:px2rem(16);
        img{
            height:px2rem(62);
            width:px2rem(62);
        }
        }
    .menu-title{
        font-size:$text-size-mid;
    }

</style>