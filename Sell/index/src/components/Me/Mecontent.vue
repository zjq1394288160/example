<template>
    <div>
        <header class="myinfo">
            <div class="my">
                <div class="jian"><a href="#/"> < </a></div>
                <h2>我的</h2>
            </div>
        </header>
        <section class="wode">
            <div class="wode-info">
                <span class="touxiang"></span>
                <div class="my-info" v-if="active">
                    <p>{{user.account}}</p>
                    <p>
                        <span>{{tel}}</span>
                    </p>
                </div>
                <div class="my-info" v-else>
                    <p>登录 / 注册</p>
                    <p>
                        <span>登录后享受更多特权</span>
                    </p>
                </div>
                <span class="arrow"><a href="#/zhanghu"> > </a></span>
            </div>
        </section>
        <div class="jifen">
            <a href="">
                <p class="nub">
                    <span class="you">{{admininfo.youhui}}</span>
                    <span>个</span>
                </p>
                <p class="word">优惠</p>
            </a>
            <a href="">
                <p class="nub">
                    <span class="ji">{{admininfo.jifen}}</span>
                    <span>个</span>
                </p>
                <p class="word">积分</p>
            </a>
        </div>
        <section class="my-order">
            <a href="#/order">
                <aside>
                    <img src="../../assets/img/2017-08-16_125000.png" alt="">
                </aside>
                <div class="iconlist iconlist1">
                    我的订单
                    <span class="arrow xian"><a href="#/order"> > </a></span>
                </div>
            </a>
            <a href="">
                <aside>
                    <img src="../../assets/img/2017-08-16_125052.png" alt="">
                </aside>
                <div class="iconlist iconlist1">
                    积分商城
                    <span class="arrow xian"><a href="#/zhanghu"> > </a></span>
                </div>
            </a>
            <a href="">
                <aside>
                    <img src="../../assets/img/2017-08-16_125124.png" alt="">
                </aside>
                <div class="iconlist">
                    会员卡
                    <span class="arrow xian"><a href="#/zhanghu"> > </a></span>
                </div>
            </a>
        </section>
        <section class="my-order">
            <a href="">
                <aside>
                    <img src="../../assets/img/2017-08-16_125000.png" alt="">
                </aside>
                <div class="iconlist iconlist1">
                    服务中心
                    <span class="arrow xian"><a href="#/zhanghu"> > </a></span>
                </div>
            </a>
            <a href="">
                <aside>
                    <img src="../../assets/img/2017-08-16_125124.png" alt="">
                </aside>
                <div class="iconlist">
                    下载APP
                    <span class="arrow xian"><a href="#/zhanghu"> > </a></span>
                </div>
            </a>
        </section>
    </div>
</template>

<script>
    export default {
        name:'mecontent',
        props:['admininfo'],
        data(){
            return{
                active:true,
                id:localStorage.user,
                user:{},
            }
        },
        methods:{

        },
        computed:{
            tel:function () {
                if(this.user.account){
                    return this.user.account.slice(0,3)+'****'+this.user.account.slice(-4);
                }
            }
        },
        mounted:function () {
            if(!localStorage.user){
                location.href='#/exit';
            }
            fetch('/api/get_c_user_info?id='+this.id)
                .then(res=>res.json())
                .then(r=>this.user=r);
        }
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
    .arrow{
        font-size:0.4rem;
        line-height: 1.173333rem;
        font-weight:600;
        font-family:'宋体';
    }
    .arrow a{
        color: #fff;
    }
    .xian{
        line-height: normal;
    }
    .xian a{
        color: #bbb;
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
    .wode{

    }
    .wode-info{
        display: flex;
        padding: .666667rem .4rem;
        color: #fff;
        background-image: linear-gradient(90deg,#EECE13,#B210FF );
    }
    .wode-info>span.touxiang{
        display: inline-block;
        width:1.6rem;
        height:1.6rem;
        border-radius: 50%;
        background: #fff;
        vertical-align: center;
    }
    .my-info {
        margin-left:0.48rem;
        flex-grow: 1;
    }
    .my-info p:first-child{
        font-size: .586667rem;
        margin-bottom: .213333rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .my-info p:last-child{
        font-size: .373333rem;

    }
    .jifen{
        display: table;
        width:100%;
        height:2.24rem;
        border-bottom: 1px solid #ddd;
        background-color: #fff;
    }
    .jifen a {
        display: table-cell;
        width: 33.3333%;
        vertical-align: middle;
        text-align: center;
    }
    .jifen a p.nub span:first-child{
        padding: .453333rem 0 .293333rem;
        font-size: .693333rem;
        line-height: .693333rem;
        font-weight: 700;
    }
    .jifen a p.nub span:last-child{
        font-size: .32rem;
        line-height: .32rem;
    }
    .jifen a:not(:last-child){
        border-right: 1px solid #ddd;
    }
    .jifen a p.word{
        margin-top: .133333rem;
        font-size: .32rem;
        line-height: .373333rem;
        font-weight: 500;
        color: #666;
    }
    .you{
        color: rgb(255, 95, 62);
    }
    .ji{
        color: rgb(106, 194, 11);
    }
    .my-order{
        margin-top: .27rem;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        font-size: .45rem;
        line-height: .45rem;
        background: #fff;
    }
    .my-order a{
        display: flex;
        align-items: center;
        padding-left: .666667rem;
    }
    .iconlist{
        justify-content: space-between;
        display: flex;
        width: 100%;
        padding: .333333rem .266667rem .333333rem 0;
        font-size: .453333rem;
        line-height: .453333rem;
        color: #333;
    }
    .iconlist1{
        border-bottom: 1px solid #ddd;
    }
    aside{
        margin-left: -.266667rem;
        margin-right: .266667rem;
    }
    aside img{
        width: .48rem;
        height: .48rem;
    }
</style>