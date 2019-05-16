<template>
    <div class="msg">
        <div class="msg-title">
            通知
        </div>
        <div class="msg-area">
            <ul>
               <li class="msg-area-list" v-for="element in list" :key="element.noticeid" @click="checkIn(element)">
                   <img v-if="imgUrl" :src="imgUrl+'plus.png'"/>
                   <div class="msg-area-list-card">
                       <span>{{element.title}}</span>
                       <div>
                           <span>{{element.publisherName}}</span>
                           <span class="right">{{element.time}}</span>
                       </div>
                   </div>
               </li> 
            </ul>
            <div class="plus" @click="checkIn()">
                <img class="plus-img" v-if="imgUrl" :src="imgUrl+'plus.png'"/>
            </div> 
        </div>
    </div>
</template>
<script>
import {checkNotice} from '@/utils/API'
import {jumpTo} from '@/utils/wxFunc'
export default {
    props:["id"],
    data(){
        return {
             imgUrl: this.GLOBAL.localImg,
             list:''
        }
    },
    methods:{
        checkIn(e){
            this.$emit('closeList')
            this.$emit('showMsg',e)
        }
    },
    async mounted(){
        let list = await checkNotice(this.id).catch((err)=>{
            console.log(err);
            throw new Error('fail')
        });
        list.data.data.forEach((element)=>{
            element.time = element.time.split(" ")[0]
        })
        this.list = list.data.data
    }
}
</script>
<style lang="scss" scoped>
.msg{
    height: 100vh;
    width: 55vw;
    position: fixed;
    top: -608rpx;
    right: 0;
    background: white;
    border: 1rpx black solid;
    padding: 0 20rpx;
    &-title{
        width: 100%;
        height: 100rpx;
        font-size: 40rpx;
        border-bottom: 1rpx solid black;
        line-height: 100rpx;
        text-align: center;
        font-weight: bolder;
    }
    &-area{
        &-list{
            margin: 18rpx 8rpx;
            display: flex;
            align-items: center;
            height: 130rpx;
            font-size: 30rpx;
            border: 1rpx solid black;
            position: relative;
            border-radius: 10rpx;
            padding: 0 25rpx;
            img{
                height: 60rpx;
                width: 60rpx; 
                margin-right: 25rpx;  
            }
            &-card{
                .right{
                    margin-left: 10rpx;
                }
            }
            
        }
    }
}
.cir{
    position: absolute;
    height: 18rpx;
    width: 18rpx;
    background: red;
    border-radius: 50%;
    right: 20rpx;
    top: 50%;
    transform: translateY(-50%);
}
.plus{
    height: 55rpx;
    border: 1rpx solid black;
    border-radius: 10rpx;
    margin-top: 18rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10rpx 10rpx;
    &-img{
        height: 40rpx;
        width: 40rpx;
    }
}
</style>
