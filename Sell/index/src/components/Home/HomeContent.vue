<template>
    <div>
        <section class="liebiao" v-for="v in headinfo">
            <router-link :to="{name:'hello',query:{sid:v.id}}">
                <section class="shop ">
                    <div class="shops-logo">
                        <div class="shop-pic">
                            <img src="../../assets/img/2832434032107926dad004c4d2e21jpeg.jpeg" alt="">
                        </div>
                    </div>
                    <div class="shops-main">
                        <section class="pinpai">
                            <h3 class="head1">
                                <span>{{v.name}}</span>
                            </h3>
                            <div class="baopiao">
                                <div class="bao">{{v.bao}}</div>
                                <div class="piao">{{v.piao}}</div>
                            </div>

                        </section>
                        <section class="pinpai">
                            <div class="star">
                                <div class="stars">
                                    <svg>
                                        <polygon points="5,0 8,9 0.5,3 9.5,3 2,9" style="fill:#ffaa0c;strock-width:1;fill-rule:nonzero" />
                                    </svg>
                                    <svg>
                                        <polygon points="5,0 8,9 0.5,3 9.5,3 2,9" style="fill:#ffaa0c;strock-width:1;fill-rule:nonzero" />
                                    </svg>
                                    <svg>
                                        <polygon points="5,0 8,9 0.5,3 9.5,3 2,9" style="fill:#ffaa0c;strock-width:1;fill-rule:nonzero" />
                                    </svg>
                                    <svg>
                                        <polygon points="5,0 8,9 0.5,3 9.5,3 2,9" style="fill:#ffaa0c;strock-width:1;fill-rule:nonzero" />
                                    </svg>
                                    <svg>
                                        <polygon points="5,0 8,9 0.5,3 9.5,3 2,9" style="fill:#ffaa0c;strock-width:1;fill-rule:nonzero" />
                                    </svg>
                                    <span class="pingjia">{{v.score}}</span>
                                    <span class="dan">月售{{v.month}}单</span>
                                </div>

                            </div>
                            <div class="feng">
                        <span class="fengword">
                            <span>{{v.express}}</span>
                        </span>
                            </div>
                        </section>
                        <section class="pinpai index margin-top">
                            <div class="index-qi">
                                <span>{{v.qi}}起送 /</span>
                                <span>配送费{{v.money}}元</span>
                            </div>
                            <div class="index-km">
                                <span>{{v.distance}}km /</span>
                                <span>20分钟</span>
                            </div>
                        </section>
                        <section class="pinpai reduce">
                            <div class="delete-one">

                                <div class="home-active1">
                                    <span class="zhe">折</span>
                                    <span>
                                    <span>{{v.activies1}}</span>
                                </span>
                                </div>

                                <div class="home-active1">
                                    <span class="zhe">折</span>
                                    <span>
                                    <span>{{v.activies2}}</span>
                                </span>
                                </div>

                            </div>
                        </section>
                    </div>
                </section>
            </router-link>

        </section>
    </div>
</template>
<script>
    export default {
        name:'homecontent',
        props:['headinfo'],
    }
</script>
<style>
    .reduce{
        margin-top: .2rem;
        border-top: 1px solid #eee;
        color: #939393;
    }
    .delete-one{
        padding-top: .133333rem;
    }
    .zhe{
        background-color: rgb(240, 115, 115);
        color: rgb(255, 255, 255);
        border-color: rgb(240, 115, 115);
    }
    .home-active1{
        margin-top: .07rem;
    }
    .home-active1 span{
        line-height: .426667rem;
        font-size: .266667rem;
    }
    .liebiao{
        background-color: #fff;
        /*background-image: url("../../assets/img/list.svg");*/
        background-size: 100% auto;
        overflow: hidden;
    }
    .shop{
        overflow: hidden;
        position: relative;
        border-bottom: 1px solid #eee;
        background-color: #fff;
        color: #666;
        list-style: none;
        font-size: .293333rem;
    }
    .shops-logo{
        float: left;
        width:20%;
        padding: .4rem .266667rem;
    }
    .shop-pic{
        position: relative;
        width: 1.6rem;
        height: 1.6rem;
    }
    .shop-pic img{
        width:100%;
        height:100%;
    }
    .shops-main{
        float: right;
        width:80%;
        padding: .4rem .27rem .4rem 0.2rem;
    }
    .head1{
        float: left;
    }
    .head1 span{
        color: #333;
        font-weight: 700;
        font-size: .4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .shops-main h3:before{
        margin-right: .133333rem;
        padding: 0 .066667rem;
        height: .4rem;
        border-radius: .03rem;
        background-color: #ffd930;
        color: #52250a;
        content: "\54C1\724C";
        vertical-align: top;
        text-align: center;
        white-space: nowrap;
        font-weight: 700;
        font-size: .293333rem;
        line-height: .5rem;
    }
    .baopiao{
        float: right;
    }
    .bao{
        float: left;
        color: rgb(153, 153, 153);
        border-color: rgb(221, 221, 221);
    }
    .piao{
        float: right;
        color: rgb(153, 153, 153);
        border-color: rgb(221, 221, 221);
    }
    .pinpai{
        width:100%;
        float: left;
    }
    .pinpai:nth-child(2){
        margin-top: .2rem;
    }
    .star{
        float: left;
    }
    .pingjia{
        margin: 0 .05rem;
        color: #ff6000;
    }
    .feng{
        float: right;
    }
    .fengword{
        background-color: #2395ff;
        color: #fff;

    }
    .fengword span{
        padding: 0 .02rem;
        border: 1px solid #44a5ff;
        border-radius: .02rem;

        font-size: .27rem;
        line-height: .27rem;
    }

    svg{
        width:0.27rem;
        height:0.27rem;
    }
    .index{
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
    }
    .index-qi{
         display: -webkit-box;
         display: -webkit-flex;
        display: -ms-flexbox;
         display: flex;
        -webkit-align-content: center;
        -ms-flex-line-pack: center;
        align-content: center;
    }
    .index-km{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .margin-top{
        margin-top:0.2rem;
    }


</style>