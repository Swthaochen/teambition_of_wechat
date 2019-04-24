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
                            <div>
                                <i-icon type="success_fill" size="28" color="#80848f" />
                                <p>模板一</p>
                            </div>
                            <span>查看详情</span>
                        </li>
                        <li class="model-area-content-check-list">
                            <div>
                                <i-icon type="success" size="28" color="#80848f" />
                                <p>模板二</p>
                            </div>
                            <span>查看详情</span>
                        </li>
                        <li class="model-area-content-check-list">
                            <div>
                                <i-icon type="success" size="28" color="#80848f" />
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
export default {
    methods:{
        aa(){
            console.log('ppp')
        }
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
                        color: #A8A8A8;
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
