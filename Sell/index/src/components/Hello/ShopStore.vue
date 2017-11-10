<template>
    <div>
        <div  class="dianpu">
            <section class='dianpu-info'>
                <h3 class="section-title">
                    活动与属性
                </h3>
                <div>
                    <div class="active1 zhekou">
                        <span class="zhe">折</span>
                        <span>
                            <span>工作晚餐_饮品5折</span>
                        </span>
                    </div>
                    <div class="active2 zhekou">
                        <span class="zhe">买</span>
                        <span>
                            <span>工作晚餐_饮品5折</span>
                        </span>
                    </div>
                    <div class="active3 zhekou"></div>
                    <div class="active4 zhekou"></div>
                </div>
            </section>
            <section class="dianpu-info info2">
                <h3 class="section-title">
                    商家实景
                </h3>
                <a href="">
                    <img src="" alt="">
                    <span>门面一张</span>
                </a>
            </section>
            <section class="dianpu-info info3">
                <h3 class="section-title">
                    商家信息
                </h3>
                <ul>
                    <li>地址：太原市迎泽区柳巷北路24号柳巷金街国际港第04区一层B16房</li>
                    <li>营业时间：10:00-21:40</li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name:'shopstore',
    }
</script>

<style>
    .dianpu{
        /*display: none;*/
        background-color: #eee;
        font-size: .346667rem;
        overflow-y: auto;
        height:965px;

    }
    .dianpu-info{
        margin-bottom: .266667rem;
        padding: 0 .4rem .4rem;
        font-size: .346667rem;
        background-color: #fff;
        color: #666;
    }
    .section-title{
        margin: 0 -.4rem;
        padding: .213333rem .4rem;
        border-bottom: 1px solid #eee;
        color: #333;
        font-weight: 400;
        font-size: .4rem;
        line-height: .6rem;
    }
    .active1{
        margin: .4rem 0;
    }
    .zhekou span{
        line-height: .426667rem;
        font-size: .266667rem;
    }
    .info2{
        overflow: hidden;
    }
    .info2 a{
        position: relative;
        float: left;
        overflow: hidden;
        margin-top: .32rem;
        margin-right: .186667rem;
        width: 2.106667rem;
        height: 2.106667rem;
    }
    .info2 a img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .info2 a span{
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        height: .48rem;
        line-height: .48rem;
        color: #eee;
        background-color: rgba(0,0,0,.6);
    }
    .info3{

    }
    .info3 ul {

    }
    .info3 ul li{
        font-size: .346667rem;
        color: #666;
        padding: .4rem .133333rem .4rem 0;
    }
    .info3 ul li:last-child{
        border-top: 1px solid #ddd;
    }
</style>