<template>
    <div class="project">
        <div class="project-head">
            <title class="project-head-title">新建项目</title>
            <span> 构建项目进展链</span>
            <img class="pen" v-if="imgUrl" :src="imgUrl+'pen.png'"/>
        </div>
        <div class="project-content">
            <i-cell-group>
                <i-cell title="项目名称">
                    <i-icon type="activity" size="25"  slot="icon" />
                    <input v-model="projectName" slot="footer" placeholder="请输入项目名称" checked />
                </i-cell>
                <i-cell title="项目进度" @click="show">
                     <p @click="show" slot="footer" v-if="states.length == 0">添加项目阶段</p> 
                     <p @click="show" slot="footer" v-else>共有{{states.length}}个阶段</p> 
                    <i-icon type="task" size="25"  slot="icon" />
                </i-cell>
                <i-cell @click="show" v-if="states.length">
                    <i-steps class="area">
                        <i-step v-for="element in states" :key="element" status="process">
                            <view slot="title">
                                {{element.stateName}}
                            </view>
                        </i-step>
                    </i-steps>
                </i-cell>
                <i-cell @click="show" v-else>
                <i-steps class="area">
                    <div class="empty">
                        <img class="empty-pic" v-if="imgUrl" :src="imgUrl+'empty.png'"/>
                        <span>这里空空的，快去添加吧~~~</span>
                    </div>
                </i-steps>
                </i-cell>
                <i-cell title="项目封面">
                    <i-icon type="picture" size="25"  slot="icon" />
                    <p @click="addPic" slot="footer">点击添加图片</p> 
                </i-cell>
                <i-cell class="test">
                    <img class="pic" v-if="imgUrlSub != ''" :src="imgUrlSub"/>
                    <div class="pic2" v-else @click="addPic">
                        <img class="img2" :src="imgUrl+'plus.png'"/>
                    </div>
                </i-cell>
            </i-cell-group>
        </div>
        <div class="bnt">
            <i-button class="aaa" @click="handleClick" type="info" shape="circle" size="large">提 交</i-button>
        </div>
        <div class="toast" v-if="showSide">
            <div class="toast-back change-color" @click="hide"></div>
            <div class="toast-menu animation-up">
                <initmodel @submitList="submitList" :states="states" :initNum="initNum"></initmodel>
            </div>
        </div>
    </div>
</template>
<script>
import initmodel from '@/components/initmodel'
import {uploadFile,chooseImage,showToast} from '@/utils/wxFunc'
import {showModal} from '@/utils/wxToast'
import {newProject} from '@/utils/API'
export default {
    data(){
        return{
            imgUrl: this.GLOBAL.localImg,
            showSide: false,
            projectName:'',
            states:'',
            imgUrlSub:'',
            initNum:""
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
        },
        submitList(list,num){
            this.states = list;
            if(num != undefined)
                this.initNum = num;
            else
                this.initNum = ""
        },
        async addPic(){
            const res = await chooseImage({
                count: 1,
                sizeType: ["original", "compressed"],
                sourceType: ["album", "camera"]
            });
            this.imgUrlSub = res.tempFilePaths[0];
        },
        async handleClick(){
            if(this.states.length == 0 || this.projectName == "" || this.imgUrlSub == ""){
                showModal('请正确地将数据填写完整！')
                throw new Error('fail')
            }
            wx.showLoading({
                title: '加载中',
                mask: 'true'
            })
            var stateList = []
            this.states.forEach((element)=>{
                stateList.push({stateName:element.stateName})
            })
            let str = this.imgUrlSub;
            let params = {
                url: `https://www.sweethaochen.cn:466/noteapp/uploadImg`, 
                filePath: str,
                name: 'logo'
            }
            // 上传封面到服务器
            let res = await uploadFile(params).catch((err)=>{
                wx.hideLoading()
                console.log(err)
                showModal('图片上传失败，请重试！')
                throw new Error('fail')
            });
            res = JSON.parse(res.data)
            let par = {
                projectName:this.projectName,
                imgUrl:res.body,
                states:this.states
            }
            // 请求添加一个项目
            res = await newProject(par).catch((err)=>{
                wx.hideLoading()
                showModal('图片上传失败，请重试！')
                console.log(err)
                throw new Error('fail')
            })
            wx.hideLoading()
            showToast('项目创建成功','succ')
        }
    }
}
</script>
<style lang="scss" scoped>
.empty{
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
.project{
    font-size: 35rpx;
    height: 100vh;
    &-head{
        display: flex;
        align-items: flex-end;
        background: white;
        margin: 40rpx 30rpx;
        padding-bottom: 15rpx;
        width: 93vw;
        border-bottom: 1rpx dashed black;
        &-title{
            font-size: 60rpx;
            font-weight: 900;
            margin-right: 175rpx;
        }
        span{
            font-size: 32rpx;
        }
    }
    &-content{
        padding-right: 15rpx;
        background: white;
        margin-top: 100rpx;
        box-sizing: border-box;
    }
}
.bnt{
    width: 75vw;
    text-align: center;
    margin: 0 auto;
    margin-top: 70rpx;
    .aaa{
        font-size: 40rpx;
    }
    font-weight: 900;
}
.pic{
    height: 230rpx;
    width: 300rpx;
    margin: 0 auto;
    border-radius: 10rpx;
}
.pic2{
    height: 230rpx;
    width: 300rpx;
    margin: 0 auto;
    border-radius: 10rpx;
    border: 1rpx dashed black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20rpx;
}
.img2{
    height: 120rpx;
    width: 120rpx;
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
.pen{
    position: relative;
    left: 20rpx;
    height: 59rpx;
    width: 43rpx;
    z-index: 999;
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
