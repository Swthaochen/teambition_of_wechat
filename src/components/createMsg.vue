<template>
    <div class="msg">
        <img class="close" v-if="imgUrl" :src="imgUrl+'shut-down.png'" @click="closeMsg"/>
        <div class="msg-title">
            {{id == undefined ? '发布公告' : '查看公告'}}
        </div>
        <div class="msg-area" v-if="info == undefined">
            <i-cell-group>
                <i-cell title="公告标题">
                    <i-icon type="activity" size="25"  slot="icon" />
                    <input v-model="title" slot="footer" placeholder="请输入标题" checked />
                </i-cell>
                <i-cell title="公告内容" @click="show">
                     <p @click="show" slot="footer">输入公告内容</p>
                    <i-icon type="task" size="25"  slot="icon" />
                </i-cell>
                <i-cell>
                    <textarea v-model="content" class="text" placeholder="请输入内容"></textarea>
                </i-cell>
            </i-cell-group>
        </div>
        <div class="msg-area" v-else>
            <i-cell-group>
                <i-cell title="公告标题">
                    <i-icon type="activity" size="25"  slot="icon" />
                    <span slot="footer">{{info.title}}</span>
                </i-cell>
                <i-cell title="公告内容" @click="show">
                    <i-icon type="task" size="25"  slot="icon" />
                </i-cell>
                <i-cell>
                    <div class="text1">{{info.content}}</div>
                </i-cell>
            </i-cell-group>
        </div>
        <i-button class="aaa" @click="handleClick" type="info" shape="circle" size="large" v-if="info == undefined">提 交</i-button>
        <i-button class="aaa" @click="closeMsg" type="info" shape="circle" size="large" v-else>确 认</i-button>
    </div>
</template>
<script>
export default {
    props:["info"],
    data(){
        return{
            imgUrl: this.GLOBAL.localImg,
            contend:'',
            title:''
        }
    },
    methods:{
        closeMsg(){
            this.$emit('closeMsg')
        },
        handleClick(){
            let params = {
                title:this.title,
                content:this.content
            }
            this.$emit('submitForm',params)
        }
    }
}
</script>
<style lang="scss" scoped>
.msg{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 65vh;
    width: 80vw;
    background: white;
    box-sizing: border-box;
    border-radius: 15rpx;
    padding: 15rpx;
    padding-top: 30rpx;
    border: 1rpx solid black;
    &-title{
        width: 100%;
        text-align: center;
    }
    &-area{
        margin-top: 50rpx;
    }
}
.bnt{
    
}
.text{
    height: 250rpx;
}
.text1{
    height: 300rpx;
    overflow: scroll;
}
.close{
    position: absolute;
    width: 50rpx;
    height: 50rpx;
    right: 20rpx;
    top: 20rpx;
}
</style>
