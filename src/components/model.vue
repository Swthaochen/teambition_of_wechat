<template>
    <div class="model">
        <div class="model-area">
            <div class="model-area-title">
                可选的模板
            </div>
            <div class="model-area-content">
                <div class="model-area-content-check">
                    <ul>
                        <li class="model-area-content-check-list">
                            <div @click="initNum = 0">
                                <i-icon :type="initNum === 0 ? 'success_fill' : 'success'" size="28" color="#2db7f5" />
                                <p>模板一</p>
                            </div>
                            <span>查看详情</span>
                        </li>
                        <li class="model-area-content-check-list">
                            <div @click="initNum = 1">
                                <i-icon :type="initNum == 1 ? 'success_fill' : 'success'" size="28" color="#2db7f5" />
                                <p>模板二</p>
                            </div>
                            <span>查看详情</span>
                        </li>
                        <li class="model-area-content-check-list">
                            <div @click="initNum = 2">
                                <i-icon :type="initNum == 2 ? 'success_fill' : 'success'" size="28" color="#2db7f5" />
                                <p>模板三</p>
                            </div>
                            <span>查看详情</span>
                        </li>
                    </ul>
                    <i-button class="submit" @click="handleClick" type="info" shape="circle" size="small">提 交</i-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const initList = require('../utils/data.json') 
export default {
    props:["initNum"],
    data(){
        return{
            
        }
    },
    methods:{
        aa(){
            console.log('ppp')
        },
        handleClick(){
            console.log(this.initNum)
            this.$emit('submitMy',initList[this.initNum].moban,this.initNum)
        }
    },
    mounted(){
        console.log(initList)
    }
}
</script>
<style lang="scss" scoped>
.model{
    height: 100%;
    &-area{
        padding: 20rpx;
        // margin-top: 10rpx;
        &-title{
            font-weight: 900;
        }
        &-content{
            width: 95%;
            margin: 20rpx auto;
            &-check{
                display: flex;
                flex-direction: column;
                font-size: 28rpx;
                &-list{
                    height: 100rpx;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1rpx solid #E3E3E3;
                    padding: 0 10rpx;
                    div{
                        display: flex;
                        align-items: center
                    }
                    p{
                        margin-left: 5rpx;
                    }
                    span{
                        color: #2db7f5;
                    }
                }
                li:last-child{
                    border: none;
                }
            }
        }
    }
}
.submit{
    margin-top: 150rpx;
}
</style>
