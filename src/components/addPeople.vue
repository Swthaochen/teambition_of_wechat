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
                <li class="add-area-item">
                    <div class="add-area-item-left">
                        <img  v-if="imgUrl" :src="imgUrl+'add.png'"/>
                        <p>成员一</p>
                    </div>
                </li>
                <li class="add-area-item">
                    <div class="add-area-item-left">
                        <img  v-if="imgUrl" :src="imgUrl+'add.png'"/>
                        <p>成员一</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
             imgUrl: this.GLOBAL.localImg,
        }
    }
}
</script>
<style lang="scss" scoped>
.add{
    height: 1130rpx;
    width: 60vw;
    position: absolute;
    bottom: 0;
    right: 0;
    background: white;
    border: 1rpx black solid;
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
                    height: 70rpx;
                    width: 70rpx;
                }
            }
        }
    }
}

</style>
