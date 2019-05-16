<template>
  <div class="home">
    <img class="menu" v-if="imgUrl" :src="imgUrl+'menu.png'" @click="show"/>
    <img @click="add" class="add" v-if="imgUrl" :src="imgUrl+'add.png'"/>
    <div class="home-peo">
      <img class="home-peo-avatar" :src="avatar"/>
      <div class="home-peo-info">
        <div class="home-peo-info-box">
          <div>创建项目</div>
          <div>{{create.length}}</div>
        </div>
        <div class="home-peo-info-box">
          <div>参与项目</div>
          <div>{{follow.length}}</div>
        </div>
      </div>
    </div>  
    <i-notice-bar class="notice" icon="systemprompt" loop speed="900" closable>
        {{msg.publisher}}向您发送了任务{{msg.workName}}的邀请，快快接收吧！！
    </i-notice-bar>
    <div class="home-care">
      <div class="home-care-left">
        <i-icon class="icon" type="like" size="26" color="#80848f" />
        <p>我的关注</p>
      </div>
    </div>
    <div class="home-content">
      <img-list v-for="element in attention" :key="element.projectId" :url="element.imgUrl" :projectName="element.projectName" :projectId="element.projectId" :element="element" @newList="newList"></img-list>
      <div class="empty"  v-if="attention.length == 0">
          <img class="empty-pic" v-if="imgUrl" :src="imgUrl+'empty.png'"/>
          <span>这里空空的，快去添加吧~~~</span>
      </div>
    </div>
    <div class="home-area">
      <div class="home-group">
        <span class="home-group-left">
          <i-icon class="icon" type="task" size="26" color="#80848f" />
          <p>我创建的</p>
        </span>
        <i-tag 
          @click="jumpCreate"
          class="i-tags"
          name="标签一" 
          color="blue"
          type="border">
            more
        </i-tag>
      </div>
      <div class="home-content">
        <img-list v-for="element in createShow" :key="element.projectId" :url="element.imgUrl" :projectName="element.projectName" :projectId="element.projectId" :element="element" @newList="newList"></img-list>
        <div class="empty"  v-if="create.length == 0">
            <img class="empty-pic" v-if="imgUrl" :src="imgUrl+'empty.png'"/>
            <span>这里空空的，快去添加吧~~~</span>
        </div>
      </div>
    </div>
    <div class="home-area">
      <div class="home-group">
        <span class="home-group-left">
          <i-icon class="icon" type="group" size="26" color="#80848f" />
          <p>我参与的</p>
        </span>
        <i-tag 
          @click="jumpJoin"
          class="i-tags"
          name="标签一" 
          color="blue"
          type="border">
            more
        </i-tag>
      </div>
      <div class="home-content">
        <img-list v-for="element in followShow" :key="element.projectId" :url="element.imgUrl" :projectName="element.projectName" :projectId="element.projectId" :element="element" @newList="newList"></img-list>
        <div class="empty"  v-if="follow.length == 0">
            <img class="empty-pic" v-if="imgUrl" :src="imgUrl+'empty.png'"/>
            <span>这里空空的，快去添加吧~~~</span>
        </div>
      </div>
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
import {getHome,getTopMsg} from '@/utils/API'
import siderbar from '@/components/siderbar' 
import {jumpTo} from '@/utils/wxFunc'
export default {
  data(){
    return {
      has:false,
      imgUrl: this.GLOBAL.localImg,
      showSide: false,
      attention:'',
      create:'',
      follow:'',
      msg:''
    }
  },
  components:{
    imgList,
    siderbar
  },
  computed:{
    followShow(){
      if(this.follow[0] == undefined){
        return []
      }else if(this.follow[1] == undefined){
        return [this.follow[0]]
      }else{
        return [this.follow[0],this.follow[1]]
      }
    },
    createShow(){
      if(this.create[0] == undefined){
        return []
      }else if(this.create[1] == undefined){
        return [this.create[0]]
      }else{
        return [this.create[0],this.create[1]]
      }
    },
    avatar(){
      return this.$store.state.userInfo.avatar
    }
  },
  methods:{
    hide(){
      this.showSide = false
    },
    show() {
      this.showSide = true;
    },
    add(){
      jumpTo('../createProject/main')
    },
    jumpCreate(){
      let page = 'create';
      jumpTo(`../myProject/main?page=${page}`)
    },
    jumpJoin(){
      let page = 'join';
      jumpTo(`../myProject/main?page=${page}`)
    },
    async newList(){
      let res = await getHome().catch((err)=>{
        console.log(err);
        throw new Error('fail')
      });
      let { attention, create, follow } = res.data
      this.attention = attention;
      this.follow = follow;
      this.create = create;
    }
  },
  async mounted(){
    console.log('avatar',this.$store.state.userInfo.avatar)
    let res = await getHome().catch((err)=>{
      console.log(err);
      throw new Error('fail')
    });
    console.log(res)
    let { attention, create, follow } = res.data
    this.attention = attention;
    this.follow = follow;
    this.create = create;
    let msg = await getTopMsg().catch((err)=>{
      console.log(err);
      throw new Error('fail')
    })
    this.msg = msg.data
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
  padding: 10rpx 30rpx;
  &-peo{
    display: flex;
    height: 280rpx;
    padding: 50rpx 30rpx;
    box-sizing: border-box;
    align-items: center;
    margin-top: 30rpx;

    &-avatar{
      height: 200rpx;
      width: 200rpx;
      border-radius: 50%;
      background: yellow;
    }
    &-info{
      display: flex;
      margin-left: 40rpx;
      width: 388rpx;
      justify-content: space-around;
      &-box{
        display: flex;
        flex-direction: column;
        font-size: 33rpx;
        text-align: center;
        div:last-child{
          font-size: 100rpx;
          line-height: 100rpx;
          margin-top: 10rpx;
        }
      }
    }
  }
  &-care{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 20rpx;
    &-left{
      display: flex;
      align-items: center;
      font-size: 38rpx;
      color: #8E8E8E;
      .icon{
        margin-right:8rpx;
      }
    }
    &-right{
      font-size: 30rpx;
    }
  }
  &-content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 35rpx;
  }
  &-area{
    margin-top: 20rpx;
  }
  &-group{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 13rpx;
    font-size: 30rpx;
    margin-top: 15rpx;    
    &-left{
      display: flex;
      align-items: center;
      font-size: 38rpx;
      
        color: #8E8E8E;
      .icon{
        margin-right:8rpx;
      }
    }
  }
}

.empty{
    width: 100%;
    padding: 20rpx 0;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 32rpx;
    &-pic{
        height: 100rpx;
        width: 100rpx;
        margin-right: 20rpx;
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
.add{
    height: 120rpx;
    width: 120rpx;
    border-radius: 50%;
    position: fixed;
    bottom: 110rpx;
    right: 10rpx;
    z-index:999;

}
</style>
