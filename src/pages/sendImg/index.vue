<template>
    <div class="img">
        <div class="img-title">
            发布公告
        </div>
        <div class="img-content">
            <div class="img-content-list">
                <div>公告主题</div>
                <input placeholder="请输入主题"/>
            </div>
            <div class="img-content-list">
                <div>公告内容</div>
                <textarea placeholder="请输入公告内容">
                </textarea>
            </div>
            <div class="img-content-peo">
                <span>公告发布人</span>
                <span>历史老师</span>
            </div>
        </div>
        <div class="bnt">
            <i-button class="aaa" @click="handleClick" type="info" shape="circle" size="large">提 交</i-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style>
page{
    background: #eeeeee;
}
</style>

<style lang="scss" scoped>

.bnt{
    position: absolute;
    bottom: 80rpx;
    width: 80vw;
    transform: translateX(-50%);
    left: 50%;
}
.img{
    padding: 20rpx 0;
    &-title{
        margin: 0 auto;
        text-align: center;
        font-size: 42rpx;
        font-weight: bolder;
    }
    &-content{
        margin-top: 50rpx;
        div{
            margin: 30rpx 10rpx;
        }
        &-list{
            width: 100%;
            input{
                margin: 20rpx 0;
                padding: 0 10rpx;
                width: 100%;
                font-size: 32rpx;
                background: white;
                height: 100rpx;
            }
            textarea{
                margin: 20rpx 0;
                padding: 20rpx 10rpx;
                width: 100%;
                font-size: 32rpx;
                background: white;
                height: 300rpx;
            }
        }
        &-peo{
            width: 100%;
            display: flex;
            justify-content: space-between;
            background: white;
            height: 120rpx;
            align-items: center;
            margin-top: 20rpx;
        }
    }
}
</style>
