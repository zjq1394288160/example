<template>
    <div>
        <header class="myinfo">
            <div class="my">
                <div class="jian"><a href="#/"> < </a></div>
                <h2>选择地址</h2>
            </div>
        </header>
        <section class="Location-tit">
            <form action="">
                <input type="search" placeholder="请输入地址" autofocus="autofocus">
            </form>
        </section>
        <section class="admin-loca">
            <h4>收货地址</h4>
            <div class="admin-address">
                <p>
                    <span>杨博</span>
                    <span>18404905852</span>
                </p>
                <p class="location-p">太原市小店区</p>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name:'location',
    }

</script>


<style>
    header.myinfo{
        height: 1.173333rem;
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
    .Location-tit{
        padding:0 0.26rem 0.3rem 0.26rem;
        background-image: linear-gradient(90deg,#EECE13,#B210FF );
        text-align: center;
        vertical-align: middle;
    }
    .Location-tit input{
        margin-top: .13rem;
        width: 90%;
        height: .73rem;
        line-height: .53rem;
        border-radius: .73rem;
        padding: 0 .48rem;
        font-size: .35rem;
    }
    .admin-loca{
        font-size: .373333rem;
        font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
        line-height: 1.2;
    }
    .admin-loca h4{
        padding: .3rem .4rem;
        color: #333;
    }
    .admin-address{
        font-size: .32rem;
        background: #fff;
        padding:0.3rem .4rem;
    }
    .admin-address p:first-child span:first-child{
        font-weight: 700;
        font-size: .373333rem;
    }
    .location-p{
        color: #999;
        font-size: .32rem;
    }

</style>