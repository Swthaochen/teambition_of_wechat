<template>
    <div class="work">
        <div class="work-title">创建任务</div>
        <div class="work-content">
            <i-cell-group>
                <i-cell title="状态">
                    <i-icon slot="icon" type="createtask" size="26"/>
                    <p slot="footer">项目筹划</p>
                </i-cell>
                <i-cell title="设置截止时间">
                    <p slot="footer">2019.01.01</p>
                    <i-icon slot="icon" type="clock" size="26"/>
                </i-cell>
                <i-cell title="备注">
                    <i-icon slot="icon" type="barrage" size="26"/>
                </i-cell>
                <i-cell>
                    <textarea class="add" placeholder="请填写项目备注"></textarea> 
                </i-cell>
                <i-cell title="参与者">
                    <i-icon slot="icon" type="addressbook" size="26"/>
                </i-cell>
                <i-cell>
                    <div class="avater">
                        <img class="addpng" v-if="imgUrl" :src="imgUrl+'11.jpg'" @click="show"/>
                        <img class="addpng" v-if="imgUrl" :src="imgUrl+'11.jpg'" @click="show"/>
                        <img class="addpng" v-if="imgUrl" :src="imgUrl+'add.png'" @click="show"/>
                    </div>
                </i-cell>
            </i-cell-group>
        </div>
        <div class="work-bnt">
            <i-button class="aaa" @click="handleClick" type="info" shape="circle" size="large">发 布 任 务</i-button>
        </div>
        <div class="toast" v-if="showSide">
            <div class="toast-back change-color" @click="hide"></div>
            <div class="toast-menu animation-up">
                <invite></invite>
            </div>
        </div>
    </div>
</template>
<script>
import invite from '@/components/invite'
export default {
    data(){
        return{
            imgUrl: this.GLOBAL.localImg,
            showSide: true
        }
    },
    components:{
        invite
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
.work{
    padding: 30rpx 50rpx;
    &-title{
        font-size: 42rpx;
        font-weight: 900;
        text-align: center
    }
    &-content{
        padding: 0rpx 25rpx;
        margin-top: 80rpx;
    }
    &-bnt{
        margin-top: 170rpx;
    }
}
.text{
    text-align: left;
    padding: 0 30rpx;
    padding-left: 60rpx;
}
.add{
    height: 100rpx;
    padding: 0 30rpx;
    font-size: 30rpx;
}
.addpng{
    height: 90rpx;
    width: 90rpx;
    margin-right: 15rpx;
    border-radius: 50%;
}
.avater{
    padding: 0 30rpx;
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
