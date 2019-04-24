<template>
  <div class="project">
    <img class="menu" v-if="imgUrl" :src="imgUrl+'menu.png'" @click="show"/>
    <div class="project-title">我参与的</div>
    <div class="project-content">
        <img-list></img-list>
        <img-list></img-list>
        <img-list></img-list>
        <img-list></img-list>
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
  methods:{
    hide(){
      this.showSide = false
    },
    show() {
      this.showSide = true;
    }
  },
  components:{
    imgList,
    siderbar
  },
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
.project{
  padding: 5rpx 90rpx;
  padding-right: 70rpx;
  &-title{
      font-size: 50rpx;
      font-weight: 900;
      margin-bottom: 20rpx;
      width: 450rpx;
      border-bottom: 4rpx dashed black;
      padding-bottom: 15rpx;
  }
  &-content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
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
