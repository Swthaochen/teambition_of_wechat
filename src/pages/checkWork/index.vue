<template>
    <div class="work">
        <div class="work-title">查看任务</div>
        <div class="work-content">
            <i-cell-group>
                <i-cell title="状态">
                    <i-icon slot="icon" type="createtask" size="26"/>
                    <p slot="footer">{{sname}}</p>
                </i-cell>
                <i-cell title="任务名称">
                    <i-icon slot="icon" type="accessory" size="26"/>
                    <input slot="footer" v-model="workName" placeholder="请输入任务名称" disabled/>
                </i-cell>
                <i-cell title="设置截止时间" class="aaa">
                    <view class="inner"></view>
                    <view slot="footer" class="picker">{{date}}</view>
                    <i-icon slot="icon" type="clock" size="26"/>
                </i-cell>
                <i-cell title="备注">
                    <i-icon slot="icon" type="barrage" size="26"/>
                </i-cell>
                <i-cell>
                    <textarea v-show="!showSide" v-model="remark" class="add" placeholder="请填写项目备注" disabled></textarea> 
                </i-cell>
                <i-cell title="参与者">
                    <i-icon slot="icon" type="addressbook" size="26"/>
                </i-cell>
                <i-cell>
                    <div class="avater">
                        <div class="avater-area" v-for="element in part" :key="element" >
                            <i-avatar size="large" shape="square">{{element.substr(0,1)}}</i-avatar>
                            <span>{{element}}</span>
                        </div>
                    </div>
                </i-cell>
            </i-cell-group>
        </div>
        <div class="work-bnt">
            <i-button class="aaa" v-if="isPart && done == 'N'" @click="handleClick" type="info" shape="circle" size="large">确 认 完 成</i-button>
        </div>
    </div>
</template>
<script>
import {getWork, configFinish} from '@/utils/API'
import {showToast, showModal} from '@/utils/wxFunc'
export default {
    data(){
        return{
            imgUrl: this.GLOBAL.localImg,
            workName:'',
            remark:'',
            part:'',
            date:'',
            sname:'',
            sid:'',
            pname:'',
            pid:'',
            id:'',
            done:''
        }
    },
    async onLoad(options){
        let {id,name,done} = options;
        this.id = id;
        this.name = name;
        this.done = done;
        let info = await getWork(id).catch((err)=>{
            throw new Error('fail')
            console.log("请登录 ")
        })
        let {stateName, remark, executor,endtime} = info.data
        this.sname = stateName
        this.remark = remark
        this.part = executor;
        this.date = endtime;
        this.workName = name;
    },
    async onShow(){
        let info = await getWork(this.id).catch((err)=>{
            throw new Error('fail')
            console.log("请登录 ")
        })
        let {stateName, remark, executor,endtime} = info.data
        this.sname = stateName
        this.remark = remark
        this.part = executor;
        this.date = endtime;
        this.workName = name;
    },
    methods:{
        async handleClick(){
            await configFinish(this.id).catch((err)=>{
                throw new Error('fail')
                console.log("请登录 ")
            })
        }
    },
    computed:{
        isPart(){
            
            return this.part.indexOf(this.$store.state.userInfo.truename) != -1
        }
    }
}
</script>
<style lang="scss" scoped>
.work{
    padding: 30rpx 20rpx;
    &-title{
        font-size: 42rpx;
        font-weight: 900;
        text-align: center
    }
    &-content{
        padding: 0rpx 25rpx;
        margin-top: 60rpx;
    }
    &-bnt{
        margin-top: 80rpx;
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
    padding: 0 10rpx;
    display: flex;
    flex-wrap: wrap;
    &-area{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 10rpx;
        margin-bottom: 10rpx;
    }
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
.aaa{
    position: relative;
}
.inner{
    height: 76rpx;
    width: 100%;
    right: 0;
    position: absolute;
    bottom: 0;
    z-index: 999;
}
</style>
