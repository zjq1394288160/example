<template>
    <div>
        <footer>
            <ul>
                <li :class="{tabs:id==1}">
                    <a href="#/">
                        <span class="icon iconfont icon-icon-"></span>
                        <span class="footerword">外卖</span>
                    </a>
                </li>
                <li :class="{tabs:id==2}">
                    <a href="#/find">
                        <span class="icon iconfont icon-faxian"></span>
                        <span class="footerword">发现</span>
                    </a>
                </li>
                <li :class="{tabs:id==3}">
                    <a href="#/order">
                        <span class="icon iconfont icon-dingdan1"></span>
                        <span class="footerword">订单</span>
                    </a>
                </li>
                <li :class="{tabs:id==4}">
                    <a href="#/me">
                        <span class="icon iconfont icon-gerenzhongxin"></span>
                        <span class="footerword">我的</span>
                    </a>
                </li>
            </ul>
        </footer>

    </div>
</template>

<script>
    export default {
        props:['id'],
        data(){
            return {
                active:1,
            }
        },
        methods:{
            tabs:function (v) {
                this.active=v;
            }
        }
    }
</script>

<style>
    footer{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        width:100%;
        height: 1.333333rem;
        background: #fff;
    }
    footer ul{
        box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
        width:100%;
        height:100%;

    }
    footer ul li{
        width:25%;
        float: left;
        text-align: center;
        padding-top: .2rem;
    }
    a{
        text-decoration: none;
    }
    footer ul li a{
        display: block;
        color: #666;
        font-size: .266667rem;
    }
    .footerword{
        display: block;
        color: #666;
        font-size: .266667rem;
    }
    .tabs .footerword{
        color: #EECE13;
    }
    .tabs .icon{
        color: #EECE13;
    }
    .icon{
        width: .54rem;
        height: .54rem;
        display: inline-block;
        font-size: .54rem;
    }
    /*.icon img{*/
        /*width: .533333rem;*/
        /*height: .533333rem;*/
    /*}*/
</style>