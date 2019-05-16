<template>
    <div class="work">
        <div class="work-title">
            <div class="lt"></div>
            <div class="rb"></div>
            项目的可行性分析报告
        </div>
        <div class="work-content">
        <i-notice-bar icon="systemprompt" loop speed="900">
            您暂时没有领取该任务哦，快快领取吧！！
        </i-notice-bar>
            <i-cell-group>
                <i-cell title="状态">
                    <i-icon slot="icon" type="createtask" size="26"/>
                    <p slot="footer">项目筹划</p>
                </i-cell>
                <i-cell title="执行者">
                    <i-tag 
                        slot="footer"
                        class="i-tags" 
                        name="标签一" 
                        color="green">
                        苏国涛
                    </i-tag>
                    <i-tag 
                        slot="footer"
                        class="i-tags" 
                        name="标签一" 
                        color="blue">
                        周茂林
                    </i-tag>
                    <i-icon slot="icon" type="group" size="26"/>
                </i-cell>
                <i-cell title="时间">
                    <p slot="footer">项目筹划</p>
                    <i-icon slot="icon" type="clock" size="26"/>
                </i-cell>
                <i-cell title="备注">
                    <i-icon slot="icon" type="barrage" size="26"/>
                </i-cell>
                <i-cell>
                    <p class="text">项目筹划项目筹划项目筹划</p>
                </i-cell>
                <i-cell title="发布人">
                    <i-icon slot="icon" type="addressbook" size="26"/>
                    <p slot="footer">啦啦啦</p>
                </i-cell>
            </i-cell-group>
        </div>
        <div class="work-bnt">
            <i-button class="aaa" @click="handleClick" type="info" shape="circle" size="large">领 取 任 务</i-button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.work{
    padding: 30rpx;
    &-title{
        font-size: 42rpx;
        font-weight: 900;
        position: relative;
        display: inline-block;
        padding: 14rpx 30rpx;
        div{
            height:15rpx;
            width: 28rpx;
        }
        .lt{
            position: absolute;
            border-top: 3px solid #00d3e7;
            border-left: 3px solid #00d3e7;
            left: -2px;
            top: -2px;
        }
        .rt{
            position: absolute;
            border-top: 3px solid #00d3e7;
            border-right: 3px solid #00d3e7;
            right: -2px;
            top: -2px;
        }
        .rb{
            position: absolute;
            border-bottom:3px solid #00d3e7;
            border-right: 3px solid #00d3e7;
            right: -2px;
            bottom: -2px;
        }
        .lb{
            position: absolute;
            border-bottom:3px solid #00d3e7;
            border-left: 3px solid #00d3e7;
            left: -2px;
            bottom: -2px;
        }
    }
    &-content{
        padding: 0rpx 25rpx;
        margin-top: 80rpx;
    }
    &-bnt{
        margin-top: 170rpx;
    }
}
.text{
    text-align: left;
    padding: 0 30rpx;
    padding-left: 60rpx;
}
</style>
