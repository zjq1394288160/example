    <template>
    <div>
        <mecontent :admininfo="admininfo"></mecontent>
        <app-footer :id="id"></app-footer>
    </div>
</template>
<script>
    import Footer from './Footer.vue'
    import Mecontent from './Me/Mecontent.vue'

    export default {
        name:'me',
        data () {
            return {
                id:4,
                admininfo:{
                    name:'杨博',
                    tele:'18404905852',
                    youhui:1,
                    jifen:0,
                }
            }
        },
        components:{
            'mecontent':Mecontent,
            'app-footer':Footer,
        }
    }
</script>
<!--<style>-->
    <!--header{-->
        <!--height: 1.173333rem;-->
        <!--/*position: fixed;*/-->
    <!--}-->
    <!--.my{-->
        <!--position: fixed;-->
        <!--width: 100%;-->
        <!--height: 1.173333rem;-->
        <!--color: #fff;-->
        <!--background-image: linear-gradient(90deg,#0af,#0085ff);-->
    <!--}-->
    <!--.jian{-->
        <!--width: 1.173333rem;-->
        <!--height: 1.173333rem;-->
        <!--text-align: center;-->
        <!--font-size:0.6rem;-->
        <!--line-height: 1.173333rem;-->
        <!--font-weight:600;-->
        <!--font-family:'宋体';-->
    <!--}-->
    <!--.jian a{-->
        <!--color: #fff;-->
    <!--}-->
    <!--.jiantou{-->
        <!--font-size:0.4rem;-->
        <!--line-height: 1.173333rem;-->
        <!--font-weight:600;-->
        <!--font-family:'宋体';-->
    <!--}-->
    <!--.jiantou a{-->
        <!--color: #fff;-->
    <!--}-->
    <!--.xian{-->
        <!--line-height: normal;-->
    <!--}-->
    <!--.xian a{-->
        <!--color: #bbb;-->
    <!--}-->
    <!--.my h2{-->
        <!--position: absolute;-->
        <!--top: 0;-->
        <!--left: 50%;-->
        <!--height: 1.173333rem;-->
        <!--max-width: 50%;-->
        <!--white-space: nowrap;-->
        <!--overflow: hidden;-->
        <!--text-overflow: ellipsis;-->
        <!--font-weight: 700;-->
        <!--font-size: 0.48rem;-->
        <!--line-height: 1.173333rem;-->
        <!-- -webkit-transform: translateX(-50%);-->
        <!--transform: translateX(-50%);-->
    <!--}-->
    <!--.wode{-->

    <!--}-->
    <!--.wode-info{-->
        <!--display: flex;-->
        <!--padding: .666667rem .4rem;-->
        <!--color: #fff;-->
        <!--background-image: linear-gradient(90deg,#0af,#0085ff);-->
    <!--}-->
    <!--.wode-info>span.touxiang{-->
        <!--display: inline-block;-->
        <!--width:1.6rem;-->
        <!--height:1.6rem;-->
        <!--border-radius: 50%;-->
        <!--background: #fff;-->
        <!--vertical-align: center;-->
    <!--}-->
    <!--.my-info {-->
        <!--margin-left:0.48rem;-->
        <!--flex-grow: 1;-->
    <!--}-->
    <!--.my-info p:first-child{-->
        <!--font-size: .586667rem;-->
        <!--margin-bottom: .213333rem;-->
        <!--overflow: hidden;-->
        <!--white-space: nowrap;-->
        <!--text-overflow: ellipsis;-->
    <!--}-->
    <!--.my-info p:last-child{-->
        <!--font-size: .373333rem;-->

    <!--}-->
    <!--.jifen{-->
        <!--display: table;-->
        <!--width:100%;-->
        <!--height:2.24rem;-->
        <!--border-bottom: 1px solid #ddd;-->
        <!--background-color: #fff;-->
    <!--}-->
    <!--.jifen a {-->
        <!--display: table-cell;-->
        <!--width: 33.3333%;-->
        <!--vertical-align: middle;-->
        <!--text-align: center;-->
    <!--}-->
    <!--.jifen a p.nub span:first-child{-->
        <!--padding: .453333rem 0 .293333rem;-->
        <!--font-size: .693333rem;-->
        <!--line-height: .693333rem;-->
        <!--font-weight: 700;-->
    <!--}-->
    <!--.jifen a p.nub span:last-child{-->
        <!--font-size: .32rem;-->
        <!--line-height: .32rem;-->
    <!--}-->
    <!--.jifen a:not(:last-child){-->
        <!--border-right: 1px solid #ddd;-->
    <!--}-->
    <!--.jifen a p.word{-->
        <!--margin-top: .133333rem;-->
        <!--font-size: .32rem;-->
        <!--line-height: .373333rem;-->
        <!--font-weight: 500;-->
        <!--color: #666;-->
    <!--}-->
    <!--.you{-->
        <!--color: rgb(255, 95, 62);-->
    <!--}-->
    <!--.ji{-->
        <!--color: rgb(106, 194, 11);-->
    <!--}-->
    <!--.my-order{-->
        <!--margin-top: .27rem;-->
        <!--border-top: 1px solid #ddd;-->
        <!--border-bottom: 1px solid #ddd;-->
        <!--font-size: .45rem;-->
        <!--line-height: .45rem;-->
        <!--background: #fff;-->
    <!--}-->
    <!--.my-order a{-->
        <!--display: flex;-->
        <!--align-items: center;-->
        <!--padding-left: .666667rem;-->
    <!--}-->
    <!--.iconlist{-->
        <!--justify-content: space-between;-->
        <!--display: flex;-->
        <!--width: 100%;-->
        <!--padding: .333333rem .266667rem .333333rem 0;-->
        <!--font-size: .453333rem;-->
        <!--line-height: .453333rem;-->
        <!--color: #333;-->
    <!--}-->
    <!--.iconlist1{-->
        <!--border-bottom: 1px solid #ddd;-->
    <!--}-->
    <!--aside{-->
        <!--margin-left: -.266667rem;-->
        <!--margin-right: .266667rem;-->
    <!--}-->
    <!--aside img{-->
        <!--width: .48rem;-->
        <!--height: .48rem;-->
    <!--}-->


<!--</style>-->