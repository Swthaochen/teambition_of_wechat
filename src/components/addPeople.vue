<template>
    <div class="add">
        <div class="add-title">
            项目成员
        </div>
        <div class="add-area">
            <ul>
                <li class="add-area-item">
                    <div class="add-area-item-left">
                        <img  v-if="imgUrl" :src="imgUrl+'add.png'"/>
                        <p>邀请新成员</p>
                    </div>
                    <img v-if="imgUrl" :src="imgUrl+'send.png'"/>
                </li>
                <li class="add-area-item" v-for="element in list" :key="element.openid">
                    <div class="add-area-item-left">
                        <img  v-if="imgUrl" :src="element.avatar"/>
                        <p>{{element.userName}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {checkPeo} from '@/utils/API'
export default {
    props:["id"],
    data(){
        return {
             imgUrl: this.GLOBAL.localImg,
             list:''
        }
    },
    async mounted(){
        let list = await checkPeo(this.id).catch((err)=>{
            console.log(err);
            throw new Error('fail')
        })
        console.log(list)
        this.list = list.data.data
    }
}
</script>
<style lang="scss" scoped>
.add{
    height: 100vh;
    width: 55vw;
    position: fixed;
    top: -608rpx;
    right: 0;
    background: white;
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
        padding: 0 15rpx;
        &-item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 130rpx;
            img{
                height: 50rpx;
                width: 50rpx;
            }
            &-left{
                display: flex;
                align-items: center;
                font-size: 34rpx;
                img{
                    margin-right: 20rpx;
                    height: 80rpx;
                    width: 80rpx;
                    border-radius: 50%;
                }
            }
        }
    }
}

</style>
