<template>
    <div class="states">
        <div class="states-top">
            <div class="states-top-title">项目进度</div>
            <div class="states-top-menu">
                <img v-if="imgUrl" :src="imgUrl+'addpeo.png'" @click="addPeo"/>
                <img v-if="imgUrl" :src="imgUrl+'msg.png'" @click="addMsg"/>
                <img v-if="imgUrl" :src="imgUrl+'set.png'" @click="deletePro"/>
            </div>
        </div>
        <i-notice-bar icon="systemprompt" loop speed="1000">
            公告：今天晚上在大活开会，望周知！！
        </i-notice-bar>
        <div class="states-content" v-for="(ele,index1) in state" :key="ele.stateid">
            <div class="states-content-title">{{ele.stateName}}<span class="states-content-num">{{ele.work.length}}</span></div>
            <div class="states-content-box" v-for="element in ele.work" :key="element.workid" @click="checkWork(element.workid,element.workName,element.isFinished)">
                <p>{{element.workName}}</p>
                <div class="states-content-box-cir"></div>
            </div>      
            <div class="empty" v-if="ele.work.length == 0" @click="jumpAdd(ele.stateName,ele.stateid)">
                <img class="empty-pic" v-if="imgUrl" :src="imgUrl+'empty.png'"/>
                <span>这里空空的，快去添加吧~~~</span>
            </div>
            <div class="states-content-plus" v-else  @click="jumpAdd(ele.stateName,ele.stateid)">
                <img class="states-content-plus-img" v-if="imgUrl" :src="imgUrl+'plus.png'"/>
            </div>
        </div>
        <i-drawer mode="right" :visible="showAdd" @close="toggleRight1">  
            <add-people v-if="showAdd" :id="id"></add-people>
        </i-drawer>
        <!-- <inviteme></inviteme> -->
        <i-drawer mode="right" :visible="showMsg" @close="showMsg = !showMsg"> 
            <check-msg v-if="showMsg" :id="id" @showMsg="showMsgInfo" @closeList="closeList"></check-msg>
        </i-drawer>
        <createMsg @closeMsg="hideMsgInfo" v-if="showInfo" @submitForm="createNoti" :info="info"></createMsg>
    </div>
</template>
<script>
import addPeople from '@/components/addPeople'
import checkMsg from '@/components/check-msg'
import inviteme from '@/components/inviteme'
import createMsg from '@/components/createMsg'
import {getState, moveToRush,createNotice} from '@/utils/API'
import {jumpTo} from '@/utils/wxFunc'
export default {
    data(){
        return {
            imgUrl: this.GLOBAL.localImg,
            state:'',
            name:'',
            id:'',
            showAdd:false,
            showMsg:false,
            visible1:false,
            showInfo:'',
            Info:''
        }
    },
    components:{
        addPeople,
        checkMsg,
        inviteme,
        createMsg
    },
    async onLoad(options){
        this.name = options.name;
        this.id = options.id;
        let list = await getState(options.id).catch((err)=>{
            console.log(err);
            throw new Error('fail')
        })  
        this.state = list.data.data;
    },
    async onShow(options){
        let list = await getState(this.id).catch((err)=>{
            console.log(err);
            throw new Error('fail')
        })  
        this.state = list.data.data;
    },
    methods:{
        jumpAdd(name,id){
            jumpTo(`../createWork/main?sname=${name}&sid=${id}&pname=${this.name}&pid=${this.id}`)
        },
        toggleRight1(){
            this.showAdd = !this.showAdd
        },
        addPeo(){
            this.showAdd = true
        },
        closeList(){
            this.showMsg = false
        },
        addMsg(){
            this.showMsg = true
        },
        showMsgInfo(e){
            this.info = e
            this.showInfo = true
        },
        hideMsgInfo(){
            this.showInfo = false
        },
        async deletePro(){
            let list = await moveToRush(this.id).catch((err)=>{
                console.log(err);
                throw new Error('fail')
            })
            console.log(list)
        },
        async createNoti(params){
            console.log(params)
            let list = await createNotice(this.id,params).catch((err)=>{
                console.log(err);
                throw new Error('fail')
            })
            console.log(list)
        },
        checkWork(e,name,done){
            jumpTo(`../checkWork/main?id=${e}&name=${name}&done=${done}`)
        }
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
</style>
