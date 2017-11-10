<template>
    <div>
        <header class="myinfo">
            <div class="my">
                <div class="jian"><a href="#/"> < </a></div>
                <h2>发现</h2>
            </div>
        </header>
        <section class="findheader">
            <div class="findheader_content">
                <a href="">
                    <img src="./../../assets/img/9c9aea0e856149083d84af3444b78jpeg.jpeg" alt="">
                    <p class="jifen-shop">积分商城</p>
                    <p class="shopping">0元好物在这里！</p>
                </a>
                <a href="">
                    <img src="./../../assets/img/9c9aea0e856149083d84af3444b78jpeg.jpeg" alt="">
                    <p class="jifen-shop">积分商城</p>
                    <p class="shopping">0元好物在这里！</p>
                </a>
                <a href="">
                    <img src="./../../assets/img/9c9aea0e856149083d84af3444b78jpeg.jpeg" alt="">
                    <p class="jifen-shop">积分商城</p>
                    <p class="shopping">0元好物在这里！</p>
                </a>
            </div>
            <div class="entry">
                <a href="">
                    <img src="./../../assets/img/656006edcd86033a1b32b23ddea37jpeg.jpeg" alt="">
                </a>
            </div>
        </section>

    </div>
</template>

<script>

    export default {
        name:'findheader',
    }
</script>

<style>
    header.myinfo{
        height: 1.173333rem;
        /*position: fixed;*/
    }
    .my{
        position: fixed;
        width: 100%;
        height: 1.173333rem;
        color: #fff;
        background-image: linear-gradient(90deg,#EECE13,#B210FF );
    }
    .jian{
        width: 1.173333rem;
        height: 1.173333rem;
        text-align: center;
        font-size:0.6rem;
        line-height: 1.173333rem;
        font-weight:600;
        font-family:'宋体';
    }
    .jian a{
        color: #fff;
    }
    .my h2{
        position: absolute;
        top: 0;
        left: 50%;
        height: 1.173333rem;
        max-width: 50%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 700;
        font-size: 0.48rem;
        line-height: 1.173333rem;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
    }

    .findheader{
        margin-bottom: .28rem;
        border-top:1px solid #ddd;
    }

    .findheader_content{
        display: flex;
        flex-wrap: wrap;
        position: relative;
        background: #fff;
    }
    .findheader_content a{
        display: block;
        width:50%;
        border-bottom: 1px solid #ededed;
        height: 2.3rem;
        padding: .64rem .4rem;
        position: relative;
    }
    .findheader_content a:first-child{
        position: absolute;
        height:4.6rem;
        padding:.4rem;
        border-right: 1px solid #ededed;
    }
    .findheader_content a:not(:first-child){
        margin-left: 50%;
    }
    .findheader_content a:not(:first-child) img{
        width:1.2rem;
        right:0.1rem;
    }
    .findheader_content a img{
        width: 2rem;
        margin: .56rem .693333rem 0;
        position: absolute;
        bottom: .64rem;
    }
    .jifen-shop{
        color: rgb(255, 151, 0);
        line-height: 1.2;
        font-size: .48rem;
        margin-bottom: .16rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .shopping{
        line-height: 1.2;
        font-size: .32rem;
        color: #999;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .entry{
        margin-top:.2rem;
    }
    .entry img{
        width:100%;
    }

</style>