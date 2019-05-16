<template>
    <div class="resign">
        <div class="aa">
            
        </div>
        <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
         <div class="box">
        <div class="wifi-symbol">
            <div class="wifi-circle first"></div>
            <div class="wifi-circle second"></div>
            <div class="wifi-circle third"></div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:''
        }
    },
    methods:{
        submit(){
            
        }
    }
}
</script>
<style lang="scss" scoped>
.aa{
    height: 50vh;
    width: 50vw;
    padding:10rpx;
  border: 10rpx solid transparent;
  border-radius: 10rpx;
  background: linear-gradient(white,white) padding-box,repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 0, transparent 25%, #58a 0, #58a 37.5%, transparent 0, transparent 50%) 0/5em 5em; 
}
.spinner {
  margin: 100rpx auto;
  width: 50rpx;
  height: 60rpx;
  text-align: center;
  font-size: 10rpx;
}
 
.spinner > div {
  background-color: #67CF22;
  height: 100%;
  width: 6rpx;
  display: inline-block;
  margin-left: 5rpx;
   
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}
 
.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
 
.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
 
.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
 
.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
 
@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) } 
  20% { -webkit-transform: scaleY(1.0) }
}
 
@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}



.box {
            width: 120rpx;
            height: 120rpx;
            box-sizing: border-box;
            position: relative;
            margin: 50rpx auto;
        }
        .wifi-symbol {
            width: 50rpx;
            height: 50rpx;
            box-sizing: border-box;
            overflow: hidden;
            transform: rotate(135deg);

        }
        .wifi-circle {
            border: 5rpx solid #999999;
            border-radius: 50%;
            position: absolute;
        }

        .first {
            width: 5rpx;
            height: 5rpx;
            background: #cccccc;
            top: 45rpx;
            left: 45rpx;
        }

        .second {
            width: 25rpx;
            height: 25rpx;
            top: 35rpx;
            left: 35rpx;
            animation: fadeInOut 1s infinite 0.2s;
        }

        .third {
            width: 40rpx;
            height: 40rpx;
            top: 25rpx;
            left: 25rpx;
            animation: fadeInOut 1s infinite 0.4s;
        }

        @keyframes fadeInOut {
            0% {
                opacity: 0; /*初始状态 透明度为0*/
            }
            100% {
                opacity: 1; /*结尾状态 透明度为1*/
            }
        }

</style>
