<template>
    <div class="friend">
        <ul>
            <li class="friend-list">
                <div class="friend-list-left">
                    <img class="avater" v-if="imgUrl" :src="imgUrl+'11.jpg'"/>
                    <span>苏国涛</span>
                </div>
                <img class="check"  v-if="imgUrl" :src="imgUrl+'select.png'"/>
            </li>
            <li class="friend-list">
                <div class="friend-list-left">
                    <img class="avater" v-if="imgUrl" :src="imgUrl+'11.jpg'"/>
                    <span>苏国涛</span>
                </div>
                <img class="check"  v-if="imgUrl" :src="imgUrl+'not.png'"/>
            </li>
            <li class="friend-list">
                <div class="friend-list-left">
                    <img class="avater" v-if="imgUrl" :src="imgUrl+'11.jpg'"/>
                    <span>苏国涛</span>
                </div>
                <img class="check"  v-if="imgUrl" :src="imgUrl+'not.png'"/>
            </li>
            <li class="friend-list">
                <div class="friend-list-left">
                    <img class="avater" v-if="imgUrl" :src="imgUrl+'11.jpg'"/>
                    <span>苏国涛</span>
                </div>
                <img class="check"  v-if="imgUrl" :src="imgUrl+'not.png'"/>
            </li>
            <li class="friend-list">
                <div class="friend-list-left">
                    <img class="avater" v-if="imgUrl" :src="imgUrl+'11.jpg'"/>
                    <span>苏国涛</span>
                </div>
                <img class="check"  v-if="imgUrl" :src="imgUrl+'not.png'"/>
            </li>
            <li class="friend-list">
                <div class="friend-list-left">
                    <img class="avater" v-if="imgUrl" :src="imgUrl+'11.jpg'"/>
                    <span>苏国涛</span>
                </div>
                <img class="check"  v-if="imgUrl" :src="imgUrl+'not.png'"/>
            </li>
            <li class="friend-list">
                <div class="friend-list-left">
                    <img class="avater" v-if="imgUrl" :src="imgUrl+'11.jpg'"/>
                    <span>苏国涛</span>
                </div>
                <img class="check"  v-if="imgUrl" :src="imgUrl+'not.png'"/>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgUrl: this.GLOBAL.localImg,
        }
    },

}
</script>
<style lang="scss" scoped>
.friend{
    margin: 15rpx 0;
    border-radius: 12rpx;
    border: 1rpx dashed black;
    height: 550rpx;
    width:  100%;
    overflow: scroll;
    padding: 0 20rpx;
    box-sizing: border-box;
    &-list{
        height: 110rpx;
        display: flex;
        align-items: center;
        border-bottom: 1rpx dashed black;
        justify-content: space-between;
        &-left{
            display: flex;
            align-items: center;
        }
    }
    li:last-child{
        border: none;
    }
}
.avater{
    height: 80rpx;
    width: 80rpx;
    margin-right: 20rpx;
    border-radius: 50%;
}
.check{
    height: 45rpx;
    width: 45rpx;
    border-radius: 50%;
    margin-right: 20rpx;
}
</style>
