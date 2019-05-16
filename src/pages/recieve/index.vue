<template>
    <div class="work">
        <div class="work-title">
            任务
        </div>
        <div class="work-content">
            <div class="work-content-title">
                未领取的任务
            </div>
            <div class="work-content-area">
                <ul>
                    <li class="work-content-list" v-for="element in unRecieve" :key="element.workid">
                        <div class="work-content-list-left">
                            {{element.projectName}} / {{element.workName}}
                        </div>
                        <div class="work-content-list-right" @click="submitBnt(element.workid)">
                        <form @submit="handleClick" report-submit="true">
                            <button  class="aaa" type="info" shape="circle" size="small" formType="submit">领取</button>
                        </form>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="work-content-title2">
                未完成的任务
            </div>
            <div class="work-content-area">
                <ul>
                    <li class="work-content-list">
                        <div class="work-content-list-left" v-for="element in unFinish" :key="element.workid">
                            {{element.projectName}} / {{element.workName}}
                        </div>
                        <div class="work-content-list-right">
                            <button class="aaa" @click="handleClick" type="info" size="small">领取</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import {getUnreceived, recieveWork, getUnfinish} from '@/utils/API'
export default {
    data(){
        return {
            unRecieve:'',
            unFinish:'',
            checkId:'',
            formid:''
        }
    },
    methods:{
        handleClick(e,id){
            console.log(e)
            this.formid = e.mp.detail.formId
            console.log('openid',this.formid)
        },
        async submitBnt(e){
            let body = {
                workid: e,
                formid: this.formid
            }
            console.log(body)
            await recieveWork(body).catch((err)=>{
                console.log(err);
                throw new Error('fail')
            })
            console.log(e)
            this.checkId = e;
        }
    },
    async mounted(){
        let list = await getUnreceived().catch((err)=>{
            console.log(err)
            throw new Error('fail')
        })
        console.log(list)
        this.unRecieve = list.data.data
        list = await getUnfinish().catch((err)=>{
            console.log(err)
            throw new Error('fail')
        })
        console.log(list)
        this.unFinish = list.data.data

    }
}
</script>
<style lang="scss" scoped>
.work{
    padding: 20rpx 30rpx;
    &-title{
        color: blue;
        font-size: 50rpx;
    }
    &-content{
        margin-top: 50rpx;
        &-title2{
            margin-top: 50rpx;
        }
        &-list{
            border: 1rpx solid black;
            height: 120rpx;
            margin-top: 20rpx;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 32rpx;
            padding-left: 15rpx;
            &-right{
                width: 200rpx;
                font-size: 32rpx;
            }
        }
    }
}
button{
    width: 130rpx;
    font-size: 32rpx;
    background: #1890FF;
    color: white;
    border-radius: 20rpx;
    height: 70rpx;
    line-height: 70rpx;
}
</style>
