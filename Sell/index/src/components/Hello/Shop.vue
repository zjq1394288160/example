<template>
    <div>
        <div class="lie">
            <div class="lie-right">
                <ul>
                    <li v-for="v in categories" :key="v.id" :class="{active:v.id===1}">
                        <span>{{v.name}}</span>
                        <span class="minadd" v-if="v.num">{{v.num}}</span>
                    </li>
                </ul>
            </div>
            <div class="lie-left">
                <section>
                    <div class="scroller">
                        <dl v-for="(t,k) in goods">
                            <dt>
                                <div class="category">
                                    <strong>{{k}}</strong>
                                    <span>大家喜欢吃，才叫真好吃。</span>
                                </div>
                            </dt>
                            <dd v-for="s in t">
                                <span class="img">
                                    <img src="" alt="">
                                </span>
                                <section class="foodinfo">
                                    <header>
                                        <span>{{s.name}}</span>
                                    </header>
                                    <p class="info">{{s.info}}</p>
                                    <p class="yueshou">
                                        <span>月售21份</span>
                                        <span>好评率98%</span>
                                    </p>
                                    <!--<p class="money">-->
                                        <strong>
                                            <span>{{s.price}}</span>
                                            <span>起</span>
                                        </strong>
                                        <div class="calculate">
                                            <span class="jian" v-if="s.num" @click="min(s)"><a href="javascript:;">-</a></span>
                                            <span class="num" v-if="s.num">{{s.num}}</span>
                                            <span class="add" @click="add(s)"><a href="javascript:;">+</a></span>
                                        </div>

                                    <!--</p>-->

                                </section>
                            </dd>
                        </dl>
                    </div>
                </section>
            </div>
        </div>
        <div class="footer">
            <!--:style=`transform:translate3d(0,${tabs}?0:100%,0)`-->
            <div class="goodlist"  :style="{'zIndex':11,transform:`translate3d(0,${tabs?'0%':'100%'},0)`}">
                <div class="goodlist-title">
                    <span class="shopcar">购物车</span>
                    <span class="shopclear" @click="clear">清空</span>
                </div>
                <ul>
                    <li v-for="list in choicecates">
                        <span>
                            <em>{{list.name}}</em>
                        </span>
                        <span>
                            <span>¥{{list.num*list.price}}</span>
                        </span>
                        <span class="calculate">
                            <span class="jian" @click="min(list)" ><a href="javascript:;">-</a></span>
                            <span class="num" >{{list.num}}</span>
                            <span class="add" @click="add(list)" ><a href="javascript:;">+</a></span>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="foot">
                <span class="shop-button" v-if="tabs" @click="toggle"></span>
                <span class="shop-button shop-button1" v-else @click="toggle"></span>
                <div class="shop-money">
                    <p><span>¥{{total}}</span></p>
                    <p>配送费 ¥{{shopdata.pei}}</p>
                </div>
                <a href="javascript:;" class="shop-calc" v-if="total>20">
                    <span v-if="total" @click="goorder">去结算</span>
                </a>
                <a href="javascript:;" v-else class="shop-calc shop-calc1">
                    <span v-if="total<=0">¥{{shopdata.qi}}起送</span>
                    <span v-else>还差¥{{shopdata.qi-total}}起送</span>
                </a>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        active:true,
        name:'shop',
        props:['categories','goods','shopdata','total','choicecates'],
        data(){
            return {
                isActive:true,
                tabs:false,
            }
        },
        methods:{
            add:function (t) {
                t.num += 1;
            },
            min:function (t) {
                t.num -= 1
            },
            clear:function () {
                this.choicecates.forEach(v=>{
                    v.num=0;
                })
            },
            toggle:function () {
                return this.tabs=!this.tabs;
            },
            goorder:function () {
                localStorage.choicecates=JSON.stringify(this.choicecates);
                localStorage.shopdata=JSON.stringify(this.shopdata);
                location.href='#/calculate?sid='+this.$route.query.sid;
            },
            watch: {
                'choicecates': function () {
                    if (this.choicecates.length === 0) {
                        this.tabs = false;
                    }
                }
            },
        }
    }
</script>

<style scoped>
    *{
        list-style: none;
        margin:0;
        padding:0;
    }
    .lie{
        /*display: none;*/
        overflow: hidden;
        padding-bottom:0.96rem;
        background-color: #fff;
        height:950px;
    }
    .lie-right{
        float: left;
        width:20%;
        height:100%;
    }
    .lie-right ul{
        /*overflow-y: auto;*/
        height: 100%;
        background-color: #f8f8f8;
    }
    .lie-right li{
        position: relative;
        padding: .466667rem .2rem;
        border-bottom: 1px solid #ededed;
        font-size: .346667rem;
        color: #666;
    }
    .lie-right li.active{
        background-color: #fff;
        border-right-color: #fff;
        font-weight: bolder;
    }
    .minadd{
        position: absolute;
        right: .08rem;
        top: .08rem;
        color: #fff;
        background-color: #ff461d;
        border-radius: .2rem;
        font-size: .27rem;
        font-weight: 700;
        text-align: center;
        min-width: .37rem;
        padding: 0 .11rem;
        line-height: .37rem;
    }
    .lie-right span{
        line-height: 1.2em;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    .lie-left{
        height:870px;
        width:80%;
        float: right;
    }
    .lie-right section{
        position: relative;
        height: 100%;
    }
    .lie-left>section{
        position: relative;
        height: 100%;
    }
    .scroller{
        height: 100%;
        overflow-y: auto;
    }
    .scroller dl dt{
        position: relative;
        padding: .2rem .8rem .2rem .266667rem;
        background-color: #f1f1f1;
    }
    .scroller dl dd{
        position: relative;
        background-color: #fff;
        margin: 0;
        padding: .4rem .266667rem;
        margin-bottom: 1px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        min-height: 2.4rem;
        box-shadow: 0.4rem 1px 0 0 #ddd;
    }
    .scroller dl dd span.img{
        width:35%;
        margin-right: 4%;
        -webkit-box-flex: 2;
        -ms-flex: 2;
        flex: 2;
        vertical-align: top;
    }
    .foodinfo{
        position: relative;
        -webkit-box-flex: 8;
        -ms-flex: 8;
        flex: 8;
        padding-bottom: .7rem;
    }
    .scroller dl dd span.img img{
        width: 100%;
        border-radius: .053333rem;
    }
    .category{
        display: flex;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
        overflow: hidden;
    }
    .category strong{
        margin-right: .133333rem;
        font-weight: 700;
        font-size: .373333rem;
        color: #666;
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
    }
    .category span{
        color: #999;
        font-size: .266667rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .foodinfo header{
        font-size: .4rem;
        font-weight: 700;
        line-height: 1.1;
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
    .foodinfo header span{
        font-size: .4rem;
        font-weight: 700;
        line-height: 1.1;
    }
    .foodinfo p.info{
        margin: .133333rem 0;
        font-size: .253333rem;
        color: #999;
    }
    .foodinfo p.yueshou{
        margin: .173333rem 0;
        color: #666;
        font-size: .293333rem;
        line-height: 1;
    }
    .foodinfo p.yueshou span{
        color: #666;
        font-size: .293333rem;
        line-height: 1;
    }
    .foodinfo>strong{
        position: absolute;
        left: 0;
        bottom: 0;
        font-weight: 700;
        font-size: .43rem;
        line-height: .43rem;
        color: #f60;
    }
    .foodinfo .calculate{
        position: absolute;
        right: 0;
        bottom: -.07rem;
        font-weight:200;
    }
    .add{
        width:0.5rem;
        display:inline-block;
        height:0.5rem;
        border-radius: 50%;
        background:#EECE13;
        text-align: center;
    }
    .jian{
        width:0.5rem;
        display:inline-block;
        border:1px solid #EECE13 ;
        height:0.5rem;
        border-radius: 50%;
        background:#fff;
        text-align: center;
    }
    .calculate .add a{
        color: #fff;
    }
    .calculate .jian a{
        color: #EECE13;
    }
    .calculate span{
        font-size: .426667rem;
        line-height: .426667rem;
    }
    .num{
        color: #333;
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
    .shop-button{
        position: absolute;
        left: .32rem;
        bottom: .2rem;
        width: 1.333333rem;
        height: 1.333333rem;
        box-sizing: border-box;
        border-radius: 100%;
        background-color: #EECE13;
        border: .133333rem solid #444;
        box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0,0,0,.1);
        will-change: transform;
    }
    .shop-button1{
        background-image: radial-gradient(circle,#363636 .626667rem,#444 0);
    }
    .shop-money{
        flex: 1;
    }
    .shop-money p:first-child{
        font-size: .48rem;
        line-height: normal;
        color: #fff;
    }
    .shop-money p:last-child{
        color: #f5f5f5;
        font-size: .266667rem;
    }
    .shop-calc{
        height: 100%;
        width: 2.8rem;
        background-color: #EECE13;
        color: #fff;
        text-align: center;
        text-decoration: none;
        font-size: .4rem;
        font-weight: 700;
        line-height: 1.28rem;
    }
    .shop-calc1{
        background-color: #535356;
    }
    .shop-calc span{
        font-size: .4rem;
        font-weight: 700;
        line-height: 1.28rem;
    }
    span{
        font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
    }

    .goodlist{
        position: fixed;
        left:0;
        /*transform: translate3d(0,100%,0);*/
        transition: transform .3s ease;
        background-color: #fff;
        bottom: 1.28rem;
        width:100%;
    }
    .goodlist-title{
        padding:0 0.33rem ;
        color: #666;
        background-color: #eceff1;
        border-bottom: 1px solid #ddd;
        line-height: 1rem;
        font-size: .42rem;
    }
    .shopcar{
        padding-left: .13rem;
        border-left: .09rem solid #3190e8;
    }
    .shopclear{
        float: right;
    }
    .goodlist>ul>li{
        display: flex;
        align-items: center;
        padding: .2rem .3rem .2rem 0;
        min-height: 1.4rem;
        margin-left: .3rem;
    }
    .goodlist>ul>li>span{
        font-size: .43rem;
    }
    .goodlist>ul>li>span:first-child{
        flex:5.5;
    }
    .goodlist>ul>li>span:first-child em{
        display: inline-block;
        font-style: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;
        max-width: 4.666667rem;
    }
    .goodlist>ul>li>span:nth-child(2){
        flex:2.5;
    }
    .goodlist>ul>li>span:nth-child(2) span{
        color: #f60;
        text-align: right;
        white-space: nowrap;
        font-weight: 700;
    }
    .goodlist>ul>li>span:last-child{
        flex:3;
    }


</style>