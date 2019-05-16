<template>
    <div class="welcome">
        <i-modal title="请授权" :visible="visible" @click="handleclick">
            <div>请授权，否则无法正常使用</div>
        </i-modal>
        <i-toast id="toast" />
        <button class="bnt" open-type="getUserInfo" @getuserinfo="bindinfo">授 权 信 息</button>
    </div>
</template>
<script>
const { $Toast } = require('../../../static/iview/base/index');
import {getUserInfo, WXLogin, getSetting, switchTab,jumpTo} from '@/utils/wxFunc'
import {showModal} from '@/utils/wxToast'
import {userLogin,sendUser} from '@/utils/API'
import { setTimeout } from 'timers';
export default {
    data(){
        return {
            imgUrl: this.GLOBAL.localImg,
            visible: false
        }
    },
    components:{

    },
    methods:{
        handleclick(){
            this.visible = !this.visible
        },
        async bindinfo(){
            let info = await getUserInfo().catch((err)=>{
                console.log(err)
                this.visible = true
                throw new Error('fail')
            });
            let code = await WXLogin().catch((err)=>{
                console.log('err');
            });
            let param = {
                code: code.code,
            }
            let res = await userLogin(param).catch((err)=>{
                console.log(err)
                throw new Error('fail')
            });
            $Toast({
                content: '登陆成功，正在进入',
                type: 'success'
            });
            wx.setStorageSync('cookie',res.data.cookie);
            this.$store.commit('commitInfo',res.data)
            if(res.data.status == 'OK'){
                setTimeout(()=>{
                    switchTab('../index/main')
                },2000)
            }else{
                await showModal('您需要先注册您的信息，否则无法正常使用小程序').finally(()=>{
                    jumpTo('../resign/main')
                })
            }

        }
    },
    async mounted(){
        let info = await getSetting();
        if(!info.authSetting['scope.userInfo']){
            $Toast({
                content: '请先授权',
                type: 'warning'
            });
        }
    },
    async created(){
        let info = await getSetting();
        var pages = getCurrentPages();
        // 检查授权情况
        if(info.authSetting['scope.userInfo'] == undefined){
            // 跳转到登录页面
            if(pages[pages.length-1].route != 'pages/welcome/main'){
                jumpTo('../welcome/main')
            }
        }else{

        }
    }
}
</script>
<style lang="scss" scoped>
.bnt{
    position: absolute;
    bottom: 150rpx;
    width: 300rpx;
    background: chartreuse;
    color: white;
    left: 50%;
    transform: translate(-50%);
    font-size: 35rpx;
    font-weight: 600;
}
.welcome{
    height: 100vh;
    background: url('http://www.sweethaochen.cn/mpvue/static/beijing.jpg')
}
</style>
