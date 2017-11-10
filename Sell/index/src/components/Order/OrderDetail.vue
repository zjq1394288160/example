<template>

    <div class="order_info">
        <header class="myinfo">
            <div class="my">
                <div class="jian" @click="goAllorder"><a href="javascript:;"> < </a></div>
                <h2>全部订单</h2>
            </div>
        </header>
        <main>
            <div class="order_top">
                <div class="top">
                    <img src="" alt="">
                </div>
                <h1>
                    <span style="color:#6ec81c;" v-if="order.state==3">订单已完成</span>
                    <span style="color: #0a89ff;" v-if="order.state==2">商家已接单</span>
                    <span style="color: #e45cee;" v-if="order.state==0">等待商家接单</span>
                    <span v-if="order.state==1">订单已取消</span>
                </h1>
                <p v-if="order.state==1">系统取消了订单，理由是“超过15分钟未支付”</p>
                <p v-if="order.state==2">商家已接单，请耐心等待</p>
                <p v-if="order.state==3">订单已完成！欢迎下次选购</p>
                <p v-if="order.state==0">等待商家接单，若超过15分钟未接单系统将自动取消</p>
            </div>
            <div class="order_contain">
                <ul>
                    <li @click="get_shop">
                        <div class="order_shop">
                            <img src="" alt="">
                            <span>{{order.name}}</span>
                        </div>
                        <img src="" alt="">
                    </li>
                    <li>
                        <ul class="dish">
                            <li v-for="v in goods" :key="v.id">
                                <p>{{v.name}}</p>
                                <div>
                                    <span>x{{v.num}}</span>
                                    <span>¥{{v.price}}</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class="dish">
                            <li>
                                <p>配送费</p>
                                <div>
                                    <span></span>
                                    <span>¥{{order.pei}}</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p class="youhui">
                            <span>在线支付立减优惠</span>
                            <span>- ¥11</span>
                        </p>
                    </li>
                    <li>
                        实付 ¥{{total}}
                    </li>
                </ul>
            </div>
            <div class="order_bottom">
                <div class="peisong">
                    <h1>配送信息</h1>
                    <ul>
                        <li>
                            <span>送达时间：</span>
                            尽快送达
                        </li>
                        <li>
                            <span>送货地址：</span>
                            <div class="person_info">
                                <p></p>
                                <p>{{order.phone}}</p>
                                <p>{{order.address}}{{order.address_more}}</p>
                            </div>
                        </li>
                        <li>
                            <span>配送方式：</span>
                            蜂鸟专送
                        </li>
                    </ul>
                </div>
                <div class="peisong">
                    <h1>订单信息</h1>
                    <ul>
                        <li>
                            <span>订单号：</span>
                            {{order.id}}
                        </li>
                        <li>
                            <span>支付方式：</span>
                            在线支付
                        </li>
                        <li>
                            <span>下单时间：</span>
                            {{formdate(order.ctime)}}
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </div>

</template>

<script>
    export default {
        name: 'order_info',
        data(){
            return {
                order:this.$route.params.order,
                goods:this.$route.params.good,
            }
        },
        methods:{
            get_shop(){
                location.href='#/hello?sid='+this.order.sid;
            },
            goAllorder:function () {
                location.href='#/order?sid='+this.order.sid;
            },
            formdate:function (time) {
                let date=new Date(time);
                let y=[date.getFullYear(),date.getMonth()+1,date.getDate()].join('-');
                let t=[date.getHours(),date.getMinutes()].join(':');
                return y+' '+t;
            }
        },
        mounted(){

        },
        computed:{
            total:function () {
                if(this.goods){
                    var t=0;
                    this.goods.forEach(v=>t+=v.num*v.price)
                }
                return t-11+Number(this.order.pei);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    span{
        font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
    }
    header.myinfo{
        height: 1.17rem;
        /*position: fixed;*/
    }
    .my{
        position: fixed;
        z-index: 20;
        width: 100%;
        height: 1.17rem;
        color: #fff;
        background-image: linear-gradient(90deg,#EECE13,#B210FF );
    }
    .jian{
        width: 1.17rem;
        height: 1.17rem;
        text-align: center;
        font-size:0.6rem;
        line-height: 1.17rem;
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
        height: 1.17rem;
        max-width: 50%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 700;
        font-size: 0.48rem;
        line-height: 1.173333rem;
        transform: translateX(-50%);
    }
    .order_info{
        background: #f5f5f5;
    }
    .order_top{
        position: relative;
        text-align: center;
        background-color: #fff;
        padding-bottom: .4rem;
    }
    .top{
        margin-bottom: -1.033333rem;
    }
    .top > div{
        background-image: linear-gradient(90deg,#b43bdf,#d888ec);
        height: .8rem;
    }
    .top > img{
        position: relative;
        top: -.693333rem;
        width: 2.133333rem;
        height: 2.133333rem;
        border-radius: 50%;
    }
    .order_top > h1{
        display: inline-block;
        margin: 0 auto .133333rem;
        color: #333;
        font-size: .506667rem;
        font-weight: 700;
    }
    .order_top > p{
        padding: 0 2.133333rem;
        color: #999;
        font-size: .32rem;
        font-weight: 400;
    }
    .order_contain{
        background-color: #fff;
        padding-left: .32rem;
        border-top: 1px solid #efefef;
        border-bottom: 1px solid #efefef;
        margin-bottom: .266667rem;
        margin-top: .266667rem;
    }
    .order_contain > ul > li{
        display: flex;
        border-bottom: 1px solid #efefef;
        align-items: center;
        justify-content: space-between;
        padding: .346667rem .32rem .346667rem 0;
        padding-bottom: .266667rem;
    }
    .order_shop{
        display: flex;
        align-items: center;
        font-size: .373333rem;
        color: #333;
    }
    .order_shop > img{
        height: .533333rem;
        width: .533333rem;
        margin-right: .186667rem;
    }
    .dish{
        width:100%;
    }
    .dish > li{
        display: flex;
        justify-content: space-between;
        font-size: .346667rem;
        margin-bottom: .266667rem;
        position: relative;
        color: #6e6e6e;
    }
    .dish > li > p{
        font-size: .346667rem;
        color: #6e6e6e;
    }
    .dish > li > div > span:first-child{
        position: absolute;
        right: 1.666667rem;
        color: #bbb;
    }
    p.youhui{
        width:100%;
        font-size: .32rem;
        display: flex;
        justify-content: space-between;
        color: #fb6b23;
    }
    .order_contain > ul > li:last-child{
        text-align: right;
        color: #333;
        font-size: .373333rem;
        display: block;
    }
    .peisong{
        background-color: #fff;
        margin-bottom: .266667rem;
    }
    .peisong > h1{
        font-size: .4rem;
        color: #333;
        border-bottom: 1px solid #eee;
        padding-left: .32rem;
        line-height: 1.04rem;
        font-weight: 400;
    }
    .peisong > ul{
        color: #6e6e6e;
        padding-left: .4rem;
        border-bottom: 1px solid #f2f2f2;
    }
    .peisong > ul > li{
        display: flex;
        align-items: baseline;
        line-height: .48rem;
        font-size: .373333rem;
        padding: .32rem .8rem .266667rem 0;
        border-bottom: 1px solid #f2f2f2;
    }
    .person_info{
        line-height: 1.5em;
        padding-bottom: .266667rem;
    }
</style>