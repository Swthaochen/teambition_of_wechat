<template>
    <div class="states">
        <div class="states-top">
            <div class="states-top-title">项目进度</div>
            <div class="states-top-menu">
                <img v-if="imgUrl" :src="imgUrl+'addpeo.png'"/>
                <img v-if="imgUrl" :src="imgUrl+'msg.png'"/>
                <img v-if="imgUrl" :src="imgUrl+'menu2.png'"/>
            </div>
        </div>
        <i-notice-bar icon="systemprompt" loop speed="1000">
            公告：今天晚上在大活开会，望周知！！
        </i-notice-bar>
        <div class="states-content">
            <div class="states-content-title">项目筹划<span class="states-content-num">2</span></div>
            <div class="states-content-box">
                <p>项目需求调查分析</p>
                <div class="states-content-box-cir"></div>
            </div>
            <div class="states-content-box">
                <p>项目需求调查分析</p>
                <div class="states-content-box-cir"></div>
            </div>
            <div class="states-content-box">
                <p>项目需求调查分析</p>
                <div class="states-content-box-cir"></div>
            </div>
            <div class="states-content-plus">
                <img class="states-content-plus-img" v-if="imgUrl" :src="imgUrl+'plus.png'"/>
            </div>
        </div>
        <div class="states-content">
            <div class="states-content-title">项目设计<span class="states-content-num">0</span></div>
            <div class="states-content-none">这里暂时没有什么任务哦~~</div>
        </div>
        <div class="states-content">
            <div class="states-content-title">项目设计<span class="states-content-num">0</span></div>
            <div class="states-content-none">这里暂时没有什么任务哦~~</div>
        </div>
        <div class="states-content">
            <div class="states-content-title">项目设计<span class="states-content-num">0</span></div>
            <div class="states-content-none">这里暂时没有什么任务哦~~</div>
        </div>
        <add-people v-if="showAdd"></add-people>
        <!-- <check-msg v-if="!showMsg"></check-msg> -->
        <!-- <check-msg></check-msg> -->
    </div>
</template>
<script>
import addPeople from '@/components/addPeople'
import checkMsg from '@/components/check-msg'
export default {
    data(){
        return {
            imgUrl: this.GLOBAL.localImg,
        }
    },
    components:{
        addPeople,
        checkMsg
    }
}
</script>
<style lang="scss" scoped>
.states{
    padding: 30rpx;
    &-top{
        font-size: 40rpx;
        display: flex;
        justify-content: space-between;
        &-menu{
            img{
                height: 60rpx;
                width: 60rpx;
                margin-left: 15rpx;
            }
        }
    } 
    &-content{
        margin-top: 20rpx;
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        &-none{
            padding:10rpx 0;
            font-size: 30rpx;
            margin-left: 20rpx;
        }
        &-title{
            font-size: 35rpx;
            font-weight: bolder;
            margin-bottom: 20rpx;
        }
        &-num{
            margin-left: 30rpx;
        }
        &-box{
            width: 450rpx;
            height: 140rpx;
            border: 1rpx solid black;
            font-size: 32rpx;
            line-height: 150rpx;
            text-align: center;
            border-radius: 10rpx;
            margin-top: 18rpx;
            margin-left: 20rpx;
            padding: 0 30rpx;
            box-sizing: border-box;
            position: relative;
            &-cir{
                position: absolute;
                height: 15rpx;
                width: 15rpx;
                background: red;
                border-radius: 50%;
                right: 25rpx;
                top: 50%;
                transform: translateY(-50%);
            }
        }
        &-plus{
            width: 450rpx;
            height: 55rpx;
            border: 1rpx solid black;
            border-radius: 10rpx;
            margin-top: 18rpx;
            margin-left: 20rpx;
            display: flex;
            justify-content: center;
            align-items: center;
            &-img{
                height: 40rpx;
                width: 40rpx;
            }
        }
    }
}
</style>
