<template>
    <div class="model">
        <div class="model-area">
            <div class="model-area-content">
                <i-cell-group>
                    <i-cell title="进度数">
                        <picker slot="footer" :value="index" :range="array" @change="changeNum">
                            <view class="picker">
                                {{array[index]}}个
                            </view>
                        </picker>
                    </i-cell>
                    <i-cell class="line" v-for="(aa,index) in list" :key="aa" title="进度名称">
                        <i-icon type="activity" size="25"  slot="icon" />
                        <input v-model="list[index].stateName" slot="footer" placeholder="请输入"/>
                    </i-cell>
                </i-cell-group>
            </div>
            <i-button class="submit" @click="handleClick" type="info" shape="circle" size="small">提 交</i-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            array:[3,4,5,6],
            index:0,
            list:[
                {stateName:'项目策划'},
                {stateName:'项目实施'},
                {stateName:'项目完结'},
            ]
        }
    },
    methods:{
        aa(){
            console.log('ppp')
        },
        changeNum(e){
            if(e.mp.detail.value > this.index){
                for(let i = 0;i < e.mp.detail.value-this.index;i++){
                    this.list.push({stateName:''})
                }
                console.log(this.list)
                this.index = e.mp.detail.value;
            }else if(e.mp.detail.value < this.index){
                for(let i = 0;i < this.index-e.mp.detail.value;i++){
                    this.list.pop()
                }
                this.index = e.mp.detail.value;
            }
        },
        handleClick(){
            console.log(this.list)
            this.$emit('submitMy',this.list)
        }
    }
}
</script>
<style lang="scss" scoped>
.model{
    &-area{
        padding: 16rpx;
        // margin-top: 10rpx;
        &-title{
            font-weight: 900;
        }
        &-content{
            width: 100%;
            margin: 20rpx auto;
            margin-top: 10rpx;  
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
            input{
                width: 200rpx;
            }
        }
    }
}
</style>
