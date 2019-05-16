<template>
    <div class="image" @click="jumpIn">
        <img class="image-pic" v-if="imgUrl" :src="imgSrc"/>
        <img class="image-icon" v-if="element.isAttention == 'N'" :src="imgUrl+'care.png'" @click.stop="addCare"/>
        <img class="image-icon" v-else :src="imgUrl+'cared.png'"/>
        <div class="image-title">#{{projectName}}</div>
        <div class="image-bot">
            <span>{{element.creater}}</span>
            <span>{{element.total}}人</span>
        </div>
    </div>
</template>
<script>
import {jumpTo} from '@/utils/wxFunc'
import {addAttention} from '@/utils/API'
export default {
    props:["url","projectName","projectId","element"],
    data(){
        return{
            imgUrl: this.GLOBAL.localImg,
        }
    },
    computed:{
        imgSrc(){
            return "http://www.sweethaochen.cn/tbmaster/upload/" + this.url;
        }
    },
    methods:{
        jumpIn(){
            jumpTo(`../states/main?id=${this.projectId}&name=${this.projectName}`)
        },
        async addCare(){
            await addAttention(this.element.projectId).catch((err)=>{
                console.log(err);
                throw new Error('fail')
            })
            this.$emit('newList')
        }
    },
    mounted(){
        // console.log('pp',this.projectId,this.element)
    }
}
</script>
<style lang="scss" scoped>
.image{
    position: relative;
    width: 295rpx;
    &-pic{
        height: 193rpx;
        width: 295rpx;
        margin-top: 20rpx;
        border-radius: 15rpx;
    }
    &-icon{
        height: 40rpx;
        width: 40rpx;
        position: absolute;
        right: 10rpx;
        top: 30rpx;
    }
    &-title{
        font-size: 33rpx;
        text-align: left;
        display: inline;
    }
    &-bot{
        display: flex;
        justify-content: space-between;
        font-size: 30rpx;
        color: #8E8E8E
    }
}
</style>
