<template>
    <div>
        <header class="myinfo">
            <div class="my">
                <div class="jian" @click="gostore"><a href="javascript:;"> < </a></div>
                <h2>全部订单</h2>
            </div>
        </header>
        <section class="order-info" v-for="v in orders" :key="v.id">

                <div class="order-list">
                    <router-link :to="{name:'orderdetail',params:{order:v,good:goods.filter(function(c) {
                      return c.oid == v.id;
                    })}}">
                    <div class="order-left">
                        <img src="" alt="">
                    </div>
                    <div class="order-right">
                        <div class="order-name orderall">
                            <p class="justy">
                                <span>{{v.name}}</span>
                                <span class="iconfont icon-mjiantou-copy1"></span>
                            </p>
                            <p class="justy justytt">
                                <span v-if="v.state==0">订单待完成</span>
                                <span v-if="v.state==1">订单配送中</span>
                                <span v-if="v.state==2">订单已完成</span>
                            </p>
                        </div>
                        <div class="order-time orderall">
                            <span>{{formdate(v.ctime)}}</span>
                        </div>
                        <div class="order-num orderall">
                            <p>
                                <span>{{getinfo(v.id)}}</span>
                                <span>等{{getnum(v.id)}}件商品</span>
                            </p>
                            <p>
                                <span>¥{{gettotal(v.id)}}</span>
                            </p>


                        </div>
                    </div>
                    </router-link>
                </div>
            <div class="bottom">
                <button @click="returnstore">再来一单</button>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name:'orderheader',
        data(){
            return{
                orders:{},
                goods:{},
            }
        },
        methods:{
            gettotal:function (oid) {
                let t=0;
                this.goods.forEach(v=>{
                    if(oid==v.oid){
                        t+=v.price*v.num;
                    }
                })
                return t;
            },
            getinfo:function (oid) {
                let s='';
                this.goods.forEach(v=>{
                    if(oid==v.oid){
                        s+=v.name+'+'
                    }
                })
                return s.slice(0,-1);
            },
            getnum:function (oid) {
                return this.goods.filter(v=>v.oid==oid).length
            },
            formdate:function (time) {
                let date=new Date(time);
                let y=[date.getFullYear(),date.getMonth()+1,date.getDate()].join('-');
                let t=[date.getHours(),date.getMinutes()].join(':');
                return y+' '+t;
            },
            gostore:function () {
                location.href='#/hello?sid='+this.$route.query.sid;
            },
            returnstore:function (e) {
                e.preventDefault();
                location.href='#/hello?sid='+this.$route.query.sid;
            }
        },
        mounted(){
             fetch('/api/get_order?uid='+localStorage.user)
                 .then(res=>res.json())
                 .then(r=>{
                     this.orders=r.data.orders;
                     this.goods=r.data.goods;
                 })
        },
    }

</script>

<style scoped>
    header.myinfo{
        height: 1.17rem;
    }
    .my{
        position: fixed;
        z-index:20;
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
    .order-info{
        font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
        padding: .3rem .24rem;
        margin-bottom: .27rem;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        font-size: .42rem;
        line-height: .42rem;
        background: #fff;
        color: #333;
    }
    .order-list{
        position: relative;
    }
    .order-left{
        position: absolute;
        left: 0;
        top: 0;
        width: 1.4rem;
        color: #333;
    }
    .order-left img{
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: .08rem;
    }
    .order-right{
        color: #333;
        box-sizing: border-box;
        margin-left: 1.5rem;
    }
    .icon-mjiantou-copy1{
        font-size:.20rem;
        margin-left:.1rem;
    }
    .orderall{
        margin-bottom:0.2rem;
    }
    .order-name{
        margin-bottom:0.3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .justy{
        display: flex;
        justify-content: space-between;
        align-items:center;
    }
    .justytt span{
        font-size:.32rem;
    }
    .order-num{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .order-time{
        font-size: .29rem;
        color: #999;
        padding: 0.1rem 0 ;
        border-bottom: 1px solid #eee;
    }
    .order-time span{
        font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
    }
    .order-num span{
        font-size: .36rem;
    }
    .bottom{
        display: flex;
        border-top: 1px solid #eee;
        padding: .266667rem .426667rem;
        justify-content: flex-end;
    }
    .bottom button{
        padding: .13rem .27rem;
        border: 1px solid #2395ff;
        border-radius: .053rem;
        background-color: transparent;
        outline: none;
        font-size: .35rem;
        color: #2395ff;
        margin-left: .2rem;
    }

</style>