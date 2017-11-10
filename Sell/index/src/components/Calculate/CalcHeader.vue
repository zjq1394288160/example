<template>
    <div>
        <header class="myinfo">
            <div class="my">
                <div class="jian" @click="goshop"><a href="javascript:;"> < </a></div>
                <h2>确认订单</h2>
            </div>
        </header>
        <!--<router-link :to="{name:'address'}">-->
        <section class="order-section" @click="goaddress" v-if="!address">
            <div class="address-item">
                请添加一个收货地址
                <span class="arrow xian"><a href="javascript:;"> > </a></span>
            </div>
        </section>
        <section class="order-section" @click="goaddress" v-else>
            <div class="address-item">
                <h2>
                    <b>{{address.name}}</b>
                    <span v-if="address.gender==1">先生</span>
                    <span v-else>女士</span>
                    <span>{{address.phone}}</span>
                </h2>
                <p>
                    <span v-if="address.label==1">家</span>
                    <span v-if="address.label==2">公司</span>
                    <span v-if="address.label==3">学校</span>
                    {{address.address}}
                </p>
                <span class="arrow xian"><a href="javascript:;"> > </a></span>
            </div>
        </section>
        <!--</router-link>-->


        <section class="arrivetime arrivetime1">
            <div class="arrive-left">
                <span>送达时间</span>
            </div>
            <div class="arrive-right">
                <span>尽快送达 | 预计22:58</span>
                <div class="arrive-fengniao">
                    <span>蜂鸟专送</span>
                </div>
            </div>

        </section>

        <section class="checkout">
            <section>
                <div class="checkout-item">
                    <span>支付方式</span>
                    <span class="checkout-online">
                        在线支付&nbsp
                        <span class="checkout-arrow"><a href="#/zhanghu"> > </a></span>
                    </span>
                </div>
            </section>
            <div class="checkout-item disabled">
                <span>红包</span>
                <span class="checkout-online ">
                    选择地址后使用红包&nbsp
                    <span class="checkout-arrow"><a href="#/zhanghu"> > </a></span>
                </span>
            </div>
        </section>

        <section class="checkout">
            <h3 class="shopaddress">
                <img src="" alt="">
                {{shopdata.name}}
            </h3>
            <ul class="shopfoodlist" v-for="v in choicecates">
                <li>
                    <span class="callname">{{v.name}}</span>
                    <span class="callquery">x {{v.num}}</span>
                    <span class="callmoney">¥{{v.price*v.num}}</span>
                </li>
            </ul>
            <ul class="fee">
                <!--<li>-->
                    <!--<div>餐盒</div>-->
                    <!--<div>¥0.3</div>-->
                <!--</li>-->
                <li>
                    <div>配送费</div>
                    <div>¥{{shopdata.pei}}</div>
                </li>
            </ul>
            <!--<ul class="activities">-->
                <!--<li>-->
                    <!--<div>-->
                        <!--<span class="jian">减</span>-->
                        <!--<span>在线支付立减优惠</span>-->
                    <!--</div>-->
                    <!--<div class="activities-price">- ¥12</div>-->
                <!--</li>-->
            <!--</ul>-->
            <div class="total">
                <div>
                    <span class="callname">订单 ¥{{total}}</span>
                    <!--<span class="callquery">优惠 ¥12</span>-->
                </div>
                <span class="callmoney">待支付 ¥{{total}}</span>
            </div>
        </section>

        <section class="checkout">
            <section>
                <div class="checkout-item">
                    <span>订单备注</span>
                    <span class="checkout-online">
                        口味，偏好等&nbsp
                        <span class="checkout-arrow"><a href="#/zhanghu"> > </a></span>
                    </span>
                </div>
            </section>
            <div class="checkout-item disabled">
                <span>发票抬头</span>
                <span class="checkout-online ">
                    商家不支持开发票&nbsp
                    <span class="checkout-arrow"><a href="#/zhanghu"> > </a></span>
                </span>
            </div>
        </section>
        <div class="foot">
            <div class="shop-money">
                <p><span>待支付 ¥ {{total}}</span></p>
            </div>
            <a href="javascript:;" class="shop-calc" @click="submit">
                <span>去结算</span>
            </a>
            <!--<router-link :to="{name:'order'}" class="shop-calc">-->
                <!--<span>去结算</span>-->
            <!--</router-link>-->
        </div>

    </div>
</template>

<script>
    export default {
        name:'calculate',
        data(){
            return {
                address:null,
                choicecates:JSON.parse(localStorage.choicecates),
                shopdata:JSON.parse(localStorage.shopdata),
            }
        },
        methods:{
            goshop:function () {
                location.href='#/hello?sid='+this.$route.query.sid;
            },
            goaddress:function () {
                location.href='#/address?sid='+this.$route.query.sid;
            },
            submit:function () {
                let orderlist={
                    uid:localStorage.user,
                    sid:this.$route.query.sid,
                    address_id:this.address.id,
                    goods:this.choicecates,
                }
                fetch('/api/send_order',{
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(orderlist)
                })
                    .then(res=>res.json())
                    .then(r=>{
                        if(r.code==2){
                            location.href='#/order?sid='+this.$route.query.sid;
                        }
                    })

            }
        },
        computed:{
            total:function () {
                let t=0;
                this.choicecates.forEach(v=>{
                    t+=(v.num*v.price);
                })
                t+=Number(t);
                return t;
            }
        },
        mounted:function(){
            fetch('/api/show_default?uid='+localStorage.user)
                .then(res=>res.json())
                .then(data=>this.address=data[0])
        }

    }
</script>

<style scoped>
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
        text-decoration: none;
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
    .arrow{
        /*font-size:0.4rem;*/
        /*line-height: 1.173333rem;*/
        /*font-weight:600;*/
        font-family:'宋体';
    }
    .arrow a {
        color: #bbb;
        text-decoration: none;
    }
    .order-section{
        min-height: 2rem;
        justify-content: center;
        background:#fff url('../../assets/img/dashed.png') repeat-x 0 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
    }
    .address-item{
        font-size: .426667rem;
        color: #333;
        -webkit-box-flex: 0;
        -webkit-flex: 0 100%;
        -ms-flex: 0 100%;
        flex: 0 100%;
        padding: 0 .613333rem 0 1.133333rem;
        margin-bottom: .066667rem;
        position: relative;
    }
    .address-item h2{
        font-size: .44rem;
    }
    .address-item span.arrow{
        position: absolute;
        right: .346667rem;
        top: 50%;
        width: .4rem;
        height: .4rem;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .arrivetime{
        display: flex;
        border-left: .13rem solid #EECE13;
        padding: .27rem .4rem;
        display: -webkit-flex;
        display: -webkit-box;
        align-items: center;
        justify-content: space-between;
        background: #fff;
    }
    .arrivetime1{
        margin-top: .27rem;
    }
    .arrive-left{
        display: flex;
    }
    .arrive-left span{
        font-size: .43rem;
        color: #333;
        font-weight:700;
    }
    .arrive-right{
        text-align: right;
    }
    .arrive-right{
        margin-left: 2em;
        font-size: .43rem;
        flex: 1;
        color: #EECE13;
    }
    .arrive-fengniao{
        margin-top: .213333rem;
        padding-top: .213333rem;
        border-top: 1px solid #eee;
        font-size: .293333rem;
        word-spacing: .066667rem;
    }
    .arrive-fengniao span{
        background-color: #EECE13;
        border: 1px solid #EECE13;
        color: #fff;
        border-radius: .066667rem;
    }
    .checkout{
        background: #fff;
        border-top: 1px solid #eee;
        border-bottom: .013333rem solid #eee;
        margin-top: .27rem;
        font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;

    }
    .checkout-item{
        display: flex;
        justify-content: space-between;
        padding: .24rem .346667rem .28rem 0;
        font-size: .426667rem;
        color: #333;
        margin-left: .386667rem;
    }
    .checkout-item .checkout-online{
        display: flex;
        align-items: center;
        color: #999;
        font-size: .346667rem;
        max-width: 6.933333rem;
    }
    .checkout-arrow{
        font-family: '宋体';
    }
    .checkout-arrow a{
        text-decoration: none;
    }
    .checkout-item.disabled,.checkout-item.disabled span{
        color: #bbb;
    }
    .checkout-item:not(:first-child) {
        border-top: .013333rem solid #d8d8d8;
    }
    .shopaddress img{
        display: inline-block;
        margin-right: .13rem;
        width: .5rem;
        height: .5rem;
        vertical-align: middle;
    }
    .shopaddress{
        padding: .27rem .4rem;
        border-bottom: .013rem solid #eee;
        font-size: .5rem;
        font-weight:400;
    }
    .shopfoodlist,.total{
        padding: .266667rem .4rem;
        font-size: .346667rem;
        color: #666;
        border-bottom: .013333rem solid #eee;
    }
    .shopfoodlist li{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        width: 100%;
        font-size: .373333rem;
        color: inherit;
        padding: .2rem 0;
    }
    .callname{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -webkit-box-flex: 9;
        -webkit-flex: 9;
        -ms-flex: 9;
        flex: 9;
    }
    .callquery{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: right;
        color: #999;
    }
    .callmoney{
        -webkit-box-flex: 2;
        -webkit-flex: 2;
        -ms-flex: 2;
        flex: 2;
        text-align: right;
    }
    .fee{
        padding: .27rem .4rem;
        font-size: .35rem;
        color: #666;
        border-bottom: .013rem solid #eee;
    }
    .fee li{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: .2rem 0;
    }
    .activities{
        padding: .266667rem .4rem;
        border-bottom: 1px solid #eee;
        font-size: .32rem;
    }
    .activities li {
        padding:.2rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        -webkit-box-align: center;
    }
    .activities li span.jian{
        width: .346667rem;
        height: .346667rem;
        text-align: center;
        line-height: .346667rem;
        color: #fff;
        border-radius: .066667rem;
        font-size: .266667rem;
        background-color: rgb(240, 115, 115);
    }
    .activities li span{
        display: inline-block;
        vertical-align: middle;
    }
    .activities-price{
        color: #ff4a07;
    }
    .total{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .foot{
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        padding-left: 2.1rem;
        background-color: rgba(61,61,63,.9);
        -webkit-backdrop-filter: blur(.27rem);
        height: 1.28rem;
        z-index:13;
    }
    .shop-money{
        flex: 1;
    }
    .shop-money p{
        font-size: .56rem;
        line-height: normal;
        color: #fff;
    }
    .shop-calc{
        height: 100%;
        width: 2.8rem;
        background-color:#EECE13;
        color: #fff;
        text-align: center;
        text-decoration: none;
        font-size: .4rem;
        font-weight: 700;
        line-height: 1.28rem;
    }
    .shop-calc span{
        font-size: .4rem;
        font-weight: 700;
        line-height: 1.28rem;
    }
    span{
        font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
    }


</style>