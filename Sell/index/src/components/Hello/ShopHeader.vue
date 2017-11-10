<template>
    <div>
        <div class="shop-header">
            <div class="shopmain">

            </div>
            <nav>
                <a href="#/">
                    <span><</span>
                </a>
            </nav>
            <div class="shop-info">
                <img src="../../assets/img/2832434032107926dad004c4d2e21jpeg.jpeg" alt="">
                <div class="xinxi">
                    <h2>{{data.name}}</h2>
                    <p>
                        <span>商家配送</span>
                        <span> / {{data.time}}分钟送达</span>
                        <span> / 配送费{{data.send}}¥</span>
                    </p>
                    <div class="gonggao">
                        <span>公告:</span>
                        <span>{{data.news}}</span>
                    </div>
                </div>
            </div>
            <div class="shop-active">
                <div class="active-info">
                    <span class="zhe">折</span>
                    <span>
                        <span>满50减10，满80减20，满90减30</span>
                    </span>
                    <div class="active-right">
                        1个活动
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:'shop-header',
        props:['data'],
    }
</script>

<style>
    #app{
        margin:0;
        text-align:left;
    }
    body{
        padding:0;
        margin:0;
    }
    a{
        text-decoration: none;
    }
    .shop-header{
        position: relative;
        padding-bottom: .8rem;
        color: #fff;
        font-size: .293333rem;
        background-image: linear-gradient(90deg,#EECE13,#B210FF );
    }
    nav{
        position: relative;
        padding: .106667rem .266667rem;
    }
    nav a{
        width:0.5rem;
        height:0.5rem;
        display: inline-block;
    }
    nav a span{
        color: #fff;
        font-family:'宋体';

        font-size: 0.6rem;
    }
    .shop-info{
        padding: .266667rem .4rem 0;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }
    .shop-info img{
        width: 1.733333rem;
        height: 1.733333rem;
        border: 1px solid #fff;
        border-radius: .053333rem;
        margin: 0 .266667rem 0 0;
    }
    .shop-active{
        position: absolute;
        left: .4rem;
        right: .4rem;
        bottom: .133333rem;
    }
    .zhe{
        background-color: rgb(240, 115, 115);
        color: rgb(255, 255, 255);
        border-color: rgb(240, 115, 115);
        font-size: .266667rem;
        height: .293333rem;
        border-radius: .04rem;
    }
    .active-right{
        float: right;
    }
    .xinxi{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        width: 7.2rem;
    }
    .xinxi h2{
        margin: 0;
        font-size: .466667rem;
        line-height: 1.2em;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .xinxi p{
        white-space: nowrap;
        margin:0.2rem 0;
    }
    .xinxi p span{
        line-height: .32rem;
    }
    .gonggao{
        height: .6rem;
        line-height: .6rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .gonggao span{
        color: #fff;
        font-size: .293333rem;
    }


</style>
<!--<script src="../assets/js/rem.js"></script>-->