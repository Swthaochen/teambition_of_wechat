<template>
    <div class="image">
        <img class="image-pic" v-if="imgUrl" :src="imgUrl+'11.JPG'"/>
        <img class="image-icon" v-if="imgUrl" :src="imgUrl+'cared.png'"/>
        <div class="image-title">teambition小程序teambition小程序</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgUrl: this.GLOBAL.localImg,
        }
    }
}
</script>
<style lang="scss" scoped>
.image{
    position: relative;
    width: 270rpx;
    &-pic{
        height: 180rpx;
        width: 270rpx;
        margin-top: 20rpx;
        border-radius: 15rpx;
    }
    &-icon{
        height: 40rpx;
        width: 40rpx;
        position: absolute;
        right: 10rpx;
        top: 30rpx;
    }
    &-title{
        font-size: 32rpx;
        text-align: center;
    }
}
</style>
