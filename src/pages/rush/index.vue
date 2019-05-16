<template>
  <div class="project">
    <img class="menu" v-if="imgUrl" :src="imgUrl+'menu.png'" @click="show"/>
    <div class="project-title">
      <div class="lt"></div>
      <div class="rb"></div>
      回收站
      </div>
    <div class="project-content">
        <img-list v-for="element in list" :key="element.projectId" :url="element.imgUrl" :projectName="element.projectName" :projectId="element.projectId" :element="element" @newList="newList"></img-list>
    </div>
    <div class="sideBar" v-if="showSide">
      <div class="sideBar-back change-color" @click="hide"></div>
      <div class="sideBar-menu animation-up">
        <siderbar @closeSide="hide"></siderbar>
      </div>
    </div>
  </div>
</template>
<script>
import imgList from '@/components/img-list'
import siderbar from '@/components/siderbar'
import {getRushList} from '@/utils/API'
export default {
  data(){
    return {
      has:false,
      imgUrl: this.GLOBAL.localImg,
      showSide: false,
      list:''
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
  async onShow(){
    let res = await getHome().catch((err)=>{
      console.log(err);
      throw new Error('fail')
    });
    if(options.page == 'create'){
      this.list = res.data.create
    }
    if(options.page == 'join'){
      this.list = res.data.follow
    }
  },
  async onLoad(options){
    let res = await getRushList().catch((err)=>{
      console.log(err);
      throw new Error('fail')
    });
    console.log(res)
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
.project{
  padding: 5rpx 70rpx;
  padding-right: 70rpx;
  &-title{
      position:relative;
      font-size: 50rpx;
      font-weight: 900;
      margin-top: 75rpx;
      margin-bottom: 29rpx;
      padding: 7rpx 30rpx;
      display: inline-block;
        div{
            height:23rpx;
            width: 22rpx;
        }
        .lt{
            position: absolute;
            border-top: 3px solid #00d3e7;
            border-left: 3px solid #00d3e7;
            left: -2px;
            top: -2px;
        }
        .rt{
            position: absolute;
            border-top: 3px solid #00d3e7;
            border-right: 3px solid #00d3e7;
            right: -2px;
            top: -2px;
        }
        .rb{
            position: absolute;
            border-bottom:3px solid #00d3e7;
            border-right: 3px solid #00d3e7;
            right: -2px;
            bottom: -2px;
        }
        .lb{
            position: absolute;
            border-bottom:3px solid #00d3e7;
            border-left: 3px solid #00d3e7;
            left: -2px;
            bottom: -2px;
        }
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
