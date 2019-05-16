<template>
    <div class="invite">
        <div class="invite-title">邀请新成员</div>
        <div class="invite-content">
            <div class="invite-content-title">
                从项目中邀请成员
            </div>
            <peoplelist ref="mychild" @submitList="submitList" :part="part"></peoplelist>
            <div class="invite-content-bottom">
                <span>已选{{part.length}}人</span>
                <span>全选</span>
            </div>
        </div>
        <div class="invite-bnt">
            <i-button class="aaa" @click="handleClick" type="info" shape="circle" size="large">发 布 任 务</i-button>
        </div>
    </div>
</template>
<script>
import peoplelist from '@/components/peoplelist'
export default {
    props:["part"],
    data(){
        return {
            tabss:'tab1',
            showFirst:false,
        }
    },
    components:{
        peoplelist
    },
    methods:{
        changeBar(){
            if(this.tabss == 'tab2')
                this.tabss = 'tab1'
            else
                this.tabss = 'tab2'
            console.log(this.tabss)
            this.showFirst = !this.showFirst
        },
        handleClick(){
            this.$refs.mychild.parentHandleclick();
        },
        submitList(e){
            this.$emit('submitList',e)
        }
    }
}
</script>
<style lang="scss" scoped>
.invite{
    z-index: 999;
    padding: 10rpx 20rpx;
    position: relative;
    &-title{
        padding: 15rpx 15rpx 15rpx 0;
        margin-left: 15rpx;
        margin-bottom: 15rpx;
        font-size: 40rpx;
        font-weight: 900;
        width: 100%;
        text-align: center
    }
    &-content{
        &-title{
            font-size: 32rpx;
        }
        &-bottom{
            display: flex;
            justify-content: space-between;
            padding: 0 15rpx;
            font-size: 32rpx;
        }
    }
}
</style>
