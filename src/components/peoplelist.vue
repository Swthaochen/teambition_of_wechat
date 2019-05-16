<template>
    <div class="friend">
        <!-- <ul>
            <li class="friend-list" v-for="element in peoList" :key="element.openid">
                <div class="friend-list-left">
                    <img class="avater" v-if="imgUrl" :src="element.avatar"/>
                    <span>{{element.userName}}{{choose}}</span>
                </div>
                <img class="check"  v-if="choose.indexOf(element.openid)" :src="imgUrl+'select.png'"/>
                <img class="check"  v-else :src="imgUrl+'not.png'"/>
            </li>
            <li class="friend-list">
                <div class="friend-list-left">
                    <img class="avater" v-if="imgUrl" :src="imgUrl+'11.jpg'"/>
                    <span>苏国涛</span>
                </div>
                <img class="check"  v-if="imgUrl" :src="imgUrl+'not.png'"/>
            </li>
        </ul> -->
        <i-panel title="group-水果">
            <i-checkbox-group :current="current" @change="handleChange">
                <i-checkbox v-for="element in peoList" :position="right" :key="element.openid" :value="element.userName">
                </i-checkbox>
            </i-checkbox-group>
        </i-panel>
    </div>
</template>
<script>
import {getparticipant} from '@/utils/API'
export default {
    props:["part"],
    data(){
        return{
            imgUrl: this.GLOBAL.localImg,
            peoList:'',
            current:[],
            right:"right"
        }
    },
    async mounted(){
        let res = await getparticipant('36ac534c-7626-11e9-bcfa-00163e32111e').catch((err)=>{
            console.log(err);
            throw new Error('fail')
        })
        this.peoList = res.data.data
        this.part.forEach((element)=>{
            this.current.push(element.userName)
        })
    },
    methods:{
        handleChange(e){
            console.log(e)
            let arr = this.current;
            const index = this.current.indexOf(e.mp.detail.value);
            index === -1 ? arr.push(e.mp.detail.value) : arr.splice(index, 1);
            console.log(arr)
            this.current = arr
        },
        parentHandleclick(){
            let arr = [];
            this.current.forEach((element,index)=>{
                for(let i = 0;i < this.peoList.length;i++){
                    if(element == this.peoList[i].userName){
                        arr.push({
                            avatar:this.peoList[i].avatar,
                            openid:this.peoList[i].openid,
                            userName:this.peoList[i].userName,
                        })
                    }
                }
            })
            this.$emit('submitList',arr)
        }
    }
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
            font-size: 32rpx;   
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
