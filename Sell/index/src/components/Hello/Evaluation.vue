<template>
    <div>
        <div  class="pingjia">
            <section class="pingjia-info">
                <div class="confirm-score">
                    <strong>4.6</strong>
                    <div>综合评价</div>
                    <p>高于周边商家71.8%</p>
                </div>
                <div class="confirm-star">
                    <div class="confirm_stars">
                        <span>服务态度</span>
                        <span class="con-score">
                            <div></div>
                            <span>4.6</span>
                        </span>
                    </div>
                    <div class="confirm_stars">
                        <span>菜品评价</span>
                        <span class="con-score">
                            <div></div>
                            <span>4.6</span>
                        </span>
                    </div>
                    <div class="confirm_stars">
                        <span>送达时间</span>
                        <span class="con-score con-score1">
                            <div></div>
                            <span>39分钟</span>
                        </span>
                    </div>
                </div>
            </section>
            <section class="customer">
                <div class="customer-tit">
                    <ul>
                        <li :class="{custarget:state===1}" @click="show(1)">全部(1910)</li>
                        <li :class="{discontent:isactive,custarget:state===2}" @click="show(2)">不满意(19)</li>
                        <li :class="{custarget:state===3}" @click="show(3)">有图(34)</li>
                        <li :class="{custarget:state===4}" @click="show(4)">味道好(89)</li>
                        <li :class="{custarget:state===5}" @click="show(5)">送货快(89)</li>
                        <li :class="{custarget:state===6}" @click="show(6)">物美价廉(53)</li>
                        <li :class="{custarget:state===7}" @click="show(7)">包装精美(46)</li>
                        <li :class="{custarget:state===8}" @click="show(8)">服务不错(38)</li>
                        <li :class="{custarget:state===9}" @click="show(9)">分量足(31)</li>
                        <li :class="{custarget:state===10}" @click="show(10)">很新鲜(23)</li>
                    </ul>
                </div>
                <ul>
                    <li>
                        <div>
                            <span class="committime">2017-08-16</span>
                            <img src="" alt="">
                            <div class="commit_main">
                                <h2>匿名用户</h2>
                                <div class="starstar"></div>
                                <span>40分钟送达</span>
                                <ul>
                                    <li></li>
                                </ul>
                                <div class="commitlist">
                                    <ul>
                                        <li>扫码❤抢20元红包</li>
                                        <li>味好美番茄酱</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name:'evaluation',
        data(){
            return {
                isactive:true,
                state:1,
            }
        },
        methods:{
            show:function (state) {
                return this.state=state;
            }
        }
    }
</script>

<style>
    .pingjia{
        font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
        /*display: none;*/
        height:960px;
        background-color: #eee;
        overflow-y: auto;
        font-size: .346667rem;
    }
    .pingjia-info{
        padding:.4rem;
        background-color: #fff;
        margin-bottom: .266667rem;
        font-size: .36rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .confirm-score{
        padding-right: .4rem;
        border-right: 1px solid #ddd;
        text-align: center;
        line-height: 1.5;
    }
    .confirm-score strong{
        font-size: .8rem;
        line-height: 1;
        font-weight: 400;
        color: #f60;
        display: block;
    }
    .confirm-score div{

    }
    .confirm-score p{
        font-size: .266667rem;
        color: #999;
    }
    .confirm-star{
        display: flex;
        align-items:center;
        flex-direction: column;
        font-size:0.37rem;
        flex: 1;
    }
    .confirm_stars{
        width: 80%;
        margin: .11rem 0;
    }
    .con-score div{
        position: relative;
        overflow: hidden;
        display: inline-block;
        vertical-align: middle;
    }
    .con-score span{
        color: #f60;
        padding-left: .27rem;
    }
    .con-score1 span{
        font-size: .266667rem;
        color: #999;
    }

    .customer {
        background-color: #fff;
        padding: .27rem .32rem 0;
        font-size: .36rem;
    }
    .customer-tit{
        border-bottom: 1px solid #ddd;
        padding-bottom:0.27rem;
    }
    .customer-tit>ul{

    }
    .customer-tit>ul>li{
        display: inline-block;
        padding: .2rem;
        margin: .067rem .13rem;
        border-radius: .13rem;
        color: #6d7885;
        background-color: #ebf5ff;
    }
    .customer-tit .custarget{
        color: #fff;
        background-color: #3190e8;
    }
    .customer-tit .discontent{
        color: #aaa;
        background-color: #f5f5f5;
    }

    .customer>ul{

    }
    .customer>ul>li{
        padding: .4rem 0;
        border-bottom: .013rem solid #ddd;
    }
    .customer>ul>li>div{
        position: relative;
        padding-left: 1.2rem;
    }
    .committime{
        position: absolute;
        top: .13rem;
        right: 0;
        font-size: .32rem;
        color: #999;
    }
    .customer>ul>li>div>img{
        position: absolute;
        top: 0;
        left: 0;
        width: .8rem;
        height: .8rem;
        border-radius: 50%;
    }
    .commit_main{
        font-size: .35rem;
    }
    .commit_main h2{
        margin-top: 0;
        margin-bottom: .133333rem;
        color: #666;
        font-size: .35rem;
    }
    .commit_main ul li{
        display: inline-block;
        margin: .13rem;
    }
    .commit_main ul li img{
        width: 1.9rem;
        height: 1.9rem;
    }
    .commitlist ul li{
        display: inline-block;
        font-size: .293333rem;
        color: #999;
        border: 1px solid #ddd;
        padding: .106667rem .266667rem;
        margin: .093333rem;
        border-radius: .08rem;
        max-width: 1.6rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }


</style>