<template>
    <div class="sidebar">
        <img class="sidebar-vater" :src="imgUrl + '11.jpg'" />
        <div class="sidebar-name">我的名字</div>
        <div class="sidebar-truename">我的名字</div>
        <div class="sidebar-middle">
            <div class="sidebar-middle-menu select" @click="jumpMy">
                <img :src="imgUrl + 'project.png'"/>
                <span>全部项目</span>
            </div>
            <div class="sidebar-middle-menu" @click="jumpMyDia">
                <img :src="imgUrl + 'liked.png'"/>
                <span>我的关注</span>
            </div>
            <div class="sidebar-middle-menu" @click="jumpMySe('create')">
                <img :src="imgUrl + 'create.png'"/>
                <span>我的创建</span>
            </div>
            <div class="sidebar-middle-menu" @click="jumpMySe('join')">
                <img :src="imgUrl + 'join.png'"/>
                <span>我参与的</span>
            </div>
            <div class="sidebar-middle-menu" @click="jumpMySe">
                <img :src="imgUrl + 'recle.png'"/>
                <span>回收站</span>
            </div>
        </div>
    </div>
</template>
<script>
import {jumpTo, switchTab} from '@/utils/wxFunc'
export default {
    data(){
        return{
            imgUrl: this.GLOBAL.localImg,
        }
    },
    methods:{
        jumpMySe(e){
            this.$emit('closeSide')
            if(e == 'create'){
                let page = 'create';
                jumpTo(`../myProject/main?page=${page}`)
            }if(e == 'join'){
                let page = 'join';
                jumpTo(`../myProject/main?page=${page}`)
            }
        },
        jumpMy(){
            this.$emit('closeSide')
            switchTab('../index/main')
        }
    },
}
</script>
<style lang="scss" scoped>
.sidebar{
    padding: 0 40rpx;
    &-vater{
        display: block;
        height: 180rpx;
        width: 180rpx;
        margin: 70rpx auto;
        border-radius: 50%;
    }
    &-name{
        text-align: center;
        margin: 10rpx auto;
        margin-top: -40rpx;
        font-size: 42rpx;
        font-weight: bolder;
    }
    &-truename{
        text-align: center;
        font-size: 32rpx;
    }
    &-sign{
        max-width: 100%;
        text-align: center;
    }
    &-middle{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-top: 30rpx;
        font-size: 38rpx;
        div{
            margin-top: 30rpx;
        }
        &-menu{
            display: flex;
            align-items: center;
            font-size: 32rpx;
            line-height: 70rpx;
            img{
                height: 55rpx;
                width: 55rpx;
                margin-right: 25rpx;
            }
        }
    }
}
</style>
