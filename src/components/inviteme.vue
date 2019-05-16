<template>
    <div class="invite">
        <div class="invite-title">
            邀请人：苏国涛
        </div>
        <div class="invite-area">
            <div class="invite-area-toast">
                邀请您加入
            </div>
            <div class="invite-area-content">
                <i-cell-group>
                <i-cell title="项目名称">
                    <i-icon slot="icon" type="createtask" size="26"/>
                    <p slot="footer">项目筹划</p>
                </i-cell>
                <i-cell title="项目简介">
                    <p slot="footer">2019.01.01</p>
                    <i-icon slot="icon" type="clock" size="26"/>
                </i-cell>
                <i-cell title="参与者">
                    <i-icon slot="icon" type="addressbook" size="26"/>
                </i-cell>
                <i-cell>
                    <div class="avater">
                        <img class="addpng" v-if="imgUrl" :src="imgUrl+'11.jpg'" @click="show"/>
                        <img class="addpng" v-if="imgUrl" :src="imgUrl+'11.jpg'" @click="show"/>
                        <img class="addpng" v-if="imgUrl" :src="imgUrl+'add.png'" @click="show"/>
                    </div>
                </i-cell>
            </i-cell-group>
        <div class="invite-bnt">
            <i-button class="aaa" @click="handleClick" type="info" shape="circle" size="large">接受并成为该项目成员</i-button>
        </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgUrl: this.GLOBAL.localImg,
        }
    }
}
</script>
<style lang="scss" scoped>
.invite{
    position: absolute;
    height: 900rpx;
    width: 600rpx;
    background: white;
    border: 1rpx black solid;
    border-radius: 15rpx;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 20rpx 30rpx;
    &-title{
        padding-bottom: 15rpx;
        border-bottom: 1rpx dashed black;
        width: 325rpx;
        font-size: 40rpx;
        font-weight: bolder;
    }
    &-area{
        &-toast{
            font-size: 34rpx;
            margin-top: 15rpx;
            color: #737272;
        }
        &-content{
            margin-top: 95rpx;
        }
    }
    &-bnt{
        margin-top: 120rpx;
    }
}
.avater{
    display: flex;
    .addpng{
        height: 100rpx;
        width: 100rpx;
        margin-right: 20rpx;
        border-radius: 50%;
    }
}
</style>
