<template>
    <div class="project">
        <div class="project-head">
            <title class="project-head-title">新建项目</title>
            <span>————构建项目进展链</span>
        </div>
        <div class="project-content">
            <i-cell-group>
                <i-cell title="项目名称">
                    <i-icon type="activity" size="25"  slot="icon" />
                    <input slot="footer" placeholder="请输入项目名称" checked />
                </i-cell>
                <i-cell title="项目进度" value="共6个步骤" @click="show">
                    <i-icon type="task" size="25"  slot="icon" />
                </i-cell>
                <i-cell @click="show">
                    <i-steps class="area">
                        <i-step status="finish">
                            <view slot="title">
                                项目规划
                            </view>
                        </i-step>
                        <i-step status="finish">
                            <view slot="title">
                                项目设计
                            </view>
                        </i-step>
                        <i-step status="process">
                            <view slot="title">
                                项目开发
                            </view>
                        </i-step>
                        <i-step status="process">
                            <view slot="title">
                                项目测试
                            </view>
                        </i-step>
                        <i-step status="process">
                            <view slot="title">
                                项目发布
                            </view>
                        </i-step>
                        <i-step status="">
                            <view slot="title">
                                项目收尾
                            </view>
                        </i-step>
                    </i-steps>
                </i-cell>
                <i-cell title="项目封面">
                    <i-icon type="picture" size="25"  slot="icon" />
                    <p slot="footer">点击添加图片</p> 
                </i-cell>
                <i-cell class="test">
                    <img class="pic" v-if="imgUrl" :src="imgUrl+'11.jpg'"/>
                </i-cell>
            </i-cell-group>
        </div>
        <div class="bnt">
            <i-button class="aaa" @click="handleClick" type="info" shape="circle" size="large">提 交</i-button>
        </div>
        <div class="toast" v-if="showSide">
            <div class="toast-back change-color" @click="hide"></div>
            <div class="toast-menu animation-up">
                <initmodel></initmodel>
            </div>
        </div>
    </div>
</template>
<script>
import initmodel from '@/components/initmodel'
export default {
    data(){
        return{
            imgUrl: this.GLOBAL.localImg,
            showSide: true
        }
    },
    components:{
        initmodel
    },
    methods:{
        hide(){
        this.showSide = false
        },
        show() {
        this.showSide = true;
        },
        aa(){
            console.log('ppp')
        }
    }
}
</script>
<style lang="scss" scoped>
.project{
    font-size: 35rpx;
    background: #EDEDED;
    height: 100vh;
    &-head{
        background: white;
        padding: 40rpx 30rpx;
        &-title{
            font-size: 60rpx;
            font-weight: 900;
        }
    }
    &-content{
        background: white;
        margin-top: 40rpx;
    }
}
.bnt{
    width: 75vw;
    text-align: center;
    margin: 0 auto;
    margin-top: 100rpx;
    .aaa{
        font-size: 40rpx;
    }
    font-weight: 900
}
.pic{
    height: 230rpx;
    width: 300rpx;
    margin: 0 auto;
    border-radius: 10rpx;
}
.test{
    display: flex;
    justify-content: center;
}
.toast{
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.4);
    z-index: 999;
}
.toast{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  &-menu{
    position: fixed;
    width: 75vw;
    background: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 15rpx;
  }
  &-back{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: black;
    opacity:0.6;
    z-index: -1
  }
}
.change-color {
  opacity: 0.7;
  animation: change-to-black 0.1s linear;
}
@keyframes change-to-black {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.7;
  }
}

.animation-up {
  opacity: 1;
  animation: bottom-toast-up 0.1s linear;
}

@keyframes bottom-toast-up {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
