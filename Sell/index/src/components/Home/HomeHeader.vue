<template>
    <div>
        <header class="first-page">
            <div class="position">
                <div class="pos-left">
                    <a href="#/location">
                        <span class="iconfont"></span>
                        <span class="address">嘉定区杏花小区(外钱公路南90米)</span>
                        <span class="iconfont "></span>
                    </a>
                </div>
                <div class="pos-right">
                    <div>
                        <h2 class="tem">30°</h2>
                        <p>阴</p>
                    </div>
                    <img src="../../assets/img/614c1229282673bb8609909812e76png.png" alt="">
                </div>
            </div>
            <a href="#/search">
                <input type="text" placeholder="搜索商家、商品" readonly="readonly" class="sousuo">
            </a>
            <div class="recommend">
                <a href="javascript:;">沙县小吃</a>
                <a href="javascript:;">黄焖鸡米饭</a>
                <a href="javascript:;">沙县小吃</a>
                <a href="javascript:;">黄焖鸡米饭</a>
                <a href="javascript:;">沙县小吃</a>
                <a href="javascript:;">黄焖鸡米饭</a>
                <a href="javascript:;">沙县小吃</a>
                <a href="javascript:;">黄焖鸡米饭</a>
            </div>
        </header>

        <div>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="foodlist">
                            <a href="#/classify">
                                <div class="food">
                                    <img src="../../assets/img/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg" alt="">
                                </div>
                                <span>美食</span>
                            </a>
                            <a href="javascript:;">
                                <div class="food">
                                    <img src="../../assets/img/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg" alt="">
                                </div>
                                <span>美食</span>
                            </a>
                            <a href="javascript:;">
                                <div class="food">
                                    <img src="../../assets/img/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg" alt="">
                                </div>
                                <span>美食</span>
                            </a>
                            <a href="javascript:;">
                                <div class="food">
                                    <img src="../../assets/img/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg" alt="">
                                </div>
                                <span>美食</span>
                            </a>
                            <a href="javascript:;">
                                <div class="food">
                                    <img src="../../assets/img/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg" alt="">
                                </div>
                                <span>美食</span>
                            </a>
                            <a href="javascript:;">
                                <div class="food">
                                    <img src="../../assets/img/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg" alt="">
                                </div>
                                <span>美食</span>
                            </a>
                            <a href="javascript:;">
                                <div class="food">
                                    <img src="../../assets/img/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg" alt="">
                                </div>
                                <span>美食</span>
                            </a>
                            <a href="javascript:;">
                                <div class="food">
                                    <img src="../../assets/img/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg" alt="">
                                </div>
                                <span>美食</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <h3 class="shang">推荐商家</h3>
    </div>
</template>

<script>
    export default {
        name:'homeheader',
        props:['headinfo'],
    }
</script>

<style>

    *{
        padding:0;
        margin:0;
        list-style: none;
        box-sizing: inherit;
    }
    body{
        box-sizing: border-box;
        background-color: #f5f5f5;
        color: #333;
        font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
        line-height: 1.2;
    }
    .first-page{
        padding: .27rem .37rem;
        background-image: linear-gradient(90deg,#EECE13,#B210FF );
        color: #fff;
        height:3.25rem;
    }
    button,input{
        outline: none;
        border: none;
        font-size: inherit;
        font-family: inherit;
    }
    a{
        outline: 0;
        color: inherit;
        text-decoration: none;
    }
    .position{
        display: flex;
        justify-content: space-between;
        height:0.96rem;
    }
    .pos-left{
        width:60%;
        display: flex;
        align-items: center;
    }
    .pos-left a{
        width:80%;
        overflow: hidden;
    }
    .pos-right{
        display: flex;
        -moz-box-align: center;
        align-items: center;
    }
    .iconfont{
        font-family:iconfont;
    }
    .icon-zbbicon03101{
        font-size:0.4rem !important;
        color: #fff;
    }
    .pos-left a .address{
        display: block;
        margin: 0 .12rem;
        font-size: .48rem;
        max-width: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .pos-right h2{
        font-size:0.37rem;
        color: #fff;
    }
    .pos-right p{
        font-size:0.37rem;
        font-weight: 400;
    }
    .pos-right img{
        width:0.55rem;
        height:0.55rem;
        margin-left:0.06rem;
    }
    .sousuo{
        display: block;
        margin: .2rem 0;
        width: 100%;
        height: .96rem;
        text-align: center;
        border-radius: .6rem;
        box-shadow: 0 0.026667rem 0.066667rem 0 rgba(0,0,0,.2);
        color: #333;
        font-size: .3rem;
    }
    .recommend{
        width: 100%;
        /*height:0.18rem;*/
        white-space: nowrap;
        overflow-x: auto;
        display: flex;
    }
    .recommend a{
        display: flex;
        font-size:0.34rem;
        margin-right: .5rem;
    }
    .recommend::-webkit-scrollbar {
        display: none;
    }
    .foodlist{
        overflow: hidden;
        height: 4.72rem;
        background: #fff;
    }
    .foodlist a{
        width:25%;
        float: left;
        display: block;
        /*height:calc(50% - 0.24rem);*/
        text-align: center;
        margin-top:0.24rem;
    }
    .food{
        margin:0 auto;
        width: 1.2rem;
        height:1.2rem;
    }
    .food img{
        width:100%;
        height:100%;
        display: block;
    }
    .foodlist span{
        display: block;
        margin-top: .05rem;
        color: #666;
        font-size: .34rem;
    }
    .shang{
        margin-top: .266667rem;
        line-height: .906667rem;
        font-weight: 600;
        border-top: 1px solid #eee;
        font-size: .4rem;
        padding-left: .4rem;
        border-bottom: 1px solid #eee;
        background-color: #fff;
    }

</style>