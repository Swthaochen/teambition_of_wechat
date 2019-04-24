<template>
  <div class="home">
    <img class="menu" v-if="imgUrl" :src="imgUrl+'menu.png'" @click="show"/>
    <div class="home-care">
      <span class="home-care-left">
        我的关注
      </span>
    </div>
    <div class="home-content">
      <img-list></img-list>
      <img-list></img-list>
      <img-list></img-list>
      <!-- <div class="toast" v-if="!has">亲，这里暂时没有哦，快去创建一个项目吧~~</div> -->
    </div>
    <div class="home-area">
      <span class="home-care-left">
        我的分组
      </span>
      <div class="home-group">
        <span class="home-group-left">我创建的</span>
        <span>换一批</span>
      </div>
      <div class="home-content">
        <img-list></img-list>
        <img-list></img-list>
      </div>
    </div>
    <div class="home-area">
      <div class="home-group">
        <span class="home-group-left">我参与的</span>
        <span>换一批</span>
      </div>
      <div class="home-content">
        <img-list></img-list>
        <img-list></img-list>
      </div>
    </div>
    <div class="sideBar" v-if="showSide">
      <div class="sideBar-back change-color" @click="hide"></div>
      <div class="sideBar-menu animation-up">
        <siderbar></siderbar>
      </div>
    </div>
  </div>
</template>
<script>
import imgList from '@/components/img-list'
import siderbar from '@/components/siderbar'
export default {
  data(){
    return {
      has:false,
      imgUrl: this.GLOBAL.localImg,
      showSide: false
    }
  },
  components:{
    imgList,
    siderbar
  },
  methods:{
    hide(){
      this.showSide = false
    },
    show() {
      this.showSide = true;
    }
  }
}
</script>
<style lang="scss" scoped>
.menu{
  height: 40rpx;
  width: 48rpx;
  position: absolute;
  top: 15rpx;
  left: 20rpx;
}
.home{
  padding: 10rpx 90rpx;
  padding-right: 70rpx;
  &-care{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    &-left{
      font-weight: bolder;
      font-size: 38rpx;
    }
    &-right{
      font-size: 30rpx;
    }
  }
  &-content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &-area{
    margin-top: 20rpx;
  }
  &-group{
    display: flex;
    justify-content: space-between;
    font-size: 30rpx;
    margin-top: 15rpx;
    &-left{
      font-size: 34rpx;
    }
  }
}
.toast{
  margin:20rpx 20rpx;
  line-height: 58rpx;
}
.sideBar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  &-menu{
    position: fixed;
    width: 50vw;
    background: white;
    height: 100%;
    background: rgba(187, 187, 187, 1);
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
  left: 0;
  animation: bottom-toast-up 0.1s linear;
}

@keyframes bottom-toast-up {
  0% {
    left: -400px;
  }
  100% {
    left: 0;
  }
}
</style>
