<template>
    <div>
        <aside class="filter">
            <div class="filter-header">
                <a href="javascript:;" :class="{active:active===1}" @click="showactive(1)">
                    <span>分类</span>
                    <span class="bottomarrow"></span>
                </a>
                <a href="javascript:;" :class="{active:active===2}" @click="showactive(2)">
                    <span>排序</span>
                    <span class="bottomarrow"></span>
                </a>
                <a href="javascript:;" :class="{active:active===3}" @click="showactive(3)">
                    <span>筛选</span>
                    <span class="bottomarrow"></span>
                </a>
            </div>
            <section class="filter-extends different" v-if="active==1">

            </section>
            <section class="filter-extends sort" v-if="active==2">
                <ul>
                    <li>
                        <span>
                            <img src="../../assets/img/2017-08-20_122228.png" alt="">
                        </span>
                        <span>智能排序</span>
                    </li>
                    <li>
                        <span>
                            <img src="../../assets/img/2017-08-20_122508.png" alt="">
                        </span>
                        <span>距离最近</span>
                    </li>
                    <li>
                        <span>
                            <img src="../../assets/img/2017-08-20_122627.png" alt="">
                        </span>
                        <span>销量最高</span>
                    </li>
                    <li>
                        <span>
                            <img src="../../assets/img/2017-08-20_122508.png" alt="">
                        </span>
                        <span>智能排序</span>
                    </li>
                    <li>
                        <span>
                            <img src="../../assets/img/2017-08-20_122743.png" alt="">
                        </span>
                        <span>起送价最低</span>
                    </li>
                    <li>
                        <span>
                            <img src="../../assets/img/2017-08-20_122825.png" alt="">
                        </span>
                        <span>好评优先</span>
                    </li>
                </ul>
            </section >
            <section class="filter-extends screening" v-if="active==3">
                <div class="backfff">
                    <div class="screen1">
                        <h4>配送方式</h4>
                        <ul>
                            <li>蜂鸟专送</li>
                        </ul>
                    </div>
                    <div class="screen1">
                        <h4>品牌商家(可选)</h4>
                        <ul>
                            <li>品牌商家</li>
                            <li>外卖保</li>
                            <li>新店</li>
                        </ul>
                    </div>
                    <div class="screen2">
                        <div class="choice">
                            <a href="">清空</a>
                        </div>
                        <div class="choice choice1">
                            <a href="">确定</a>
                        </div>
                    </div>
                </div>

            </section>
        </aside>
    </div>

</template>

<script>
    export default {
        name:'classcont',
        data(){
            return{
                active:1,
            }
        },
        methods:{
            showactive:function (active) {
                return this.active=active;
            }
        }
    }

</script>

<style scoped>
    .filter{
        position: relative;
        border-bottom: 1px solid #ddd;
        height:1rem;
        line-height:1rem;
    }
    .filter-header{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        display: flex;
        background: #fff;
    }
    .filter-header a{
        font-size:0.35rem;
        text-align: center;
        color: #666;
        position: relative;
        flex: 1;
    }
    .filter-header a.active{
        color: #3190e8;
    }
    .bottomarrow{
        display:inline-block;
        width:0;
        height:0;
        border-style: solid;
        margin-bottom: .05rem;
        border-width: .1rem .1rem 0;
        border-color:  #666 #fff #fff;
    }
    .filter-extends{
        left: 0;
        right: 0;
        top: 100%;
        border-top: 1px solid #ddd;
        position: absolute;
        max-height: 0;
        background-color: #fff;
        -webkit-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
        /*visibility: hidden;*/
        /*overflow: auto;*/
        /*opacity: 0;*/
        z-index: 3;
    }
    .sort ul li{
        position: relative;
        padding-left: .4rem;
        line-height: 1.3rem;
        background: #fff;
    }
    .sort ul li img{
        width:0.5rem;
        height:0.54rem;
    }
    .sort ul li:after{
        position: absolute;
        content: "";
        bottom: 0;
        left: 1.066667rem;
        right: 0;
        height: 1px;
        background-color: #ddd;
    }
    .sort ul li span{
        line-height: 1.3rem;
        font-size:.4rem;
    }
    .screening{
        background: #fff;
    }
    .screen1{
        margin: .27rem 0;
        padding: 0 .4rem;
        overflow: hidden;
    }
    .screen1 h4{
        color: #333;
        font-size:0.4rem;
        font-weight:400;
    }
    .screen1 ul li{
        font-size:0.4rem;
        width:31%;
        float: left;
        padding:.14rem 0;
        margin-right:2%;
        text-align: center;
        border-radius: .06rem;
        border:1px solid #ddd;
    }
    .screen2{
        border-top: 1px solid #eee;
        background-color: #fafafa;
        padding: 0 .13rem;
        height: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items:center;
    }
    .screen2 .choice{
        flex: 1;

    }
    .screen2 .choice:first-child{
        margin-right: .27rem;
    }
    .screen2 .choice a{
        display: block;
        width:100%;
        font-size: .48rem;
        line-height: 1.1rem;
        border-radius: .08rem;
        text-align: center;
        text-decoration: none;
        background-color: #fff;
        border: 1px solid #ddd;
        margin-right: .27rem;
        color: #333;
    }
    .screen2 .choice1 a{
        color: #fff;
        background-color: #56d176;
        border: 1px solid #56d176;
    }
    .backfff{
        background: #fff;
    }

</style>