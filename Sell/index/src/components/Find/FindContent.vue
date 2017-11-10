<template>
    <div>
        <section class="findlist">
            <div class="ji-header">
                <span class="ji-line jilineleft"></span>
                美食推荐
                <span class="ji-line jilineright"></span>
            </div>
            <p class="activity-sub-title">你的口味，我都懂得</p>
            <div class="activity-body">
                <a href="" class="discover-food">
                    <img src="./../../assets/img/2940e98f25eb7bd071b655ea3f1dbjpeg.jpeg" alt="">
                    <div>
                        <p>酸辣土豆粉</p>
                        <div>
                            <span>¥6</span>
                            <del>¥5</del>
                        </div>
                    </div>
                </a>
                <a href="" class="discover-food">
                    <img src="./../../assets/img/2940e98f25eb7bd071b655ea3f1dbjpeg.jpeg" alt="">
                    <div>
                        <p>酸辣土豆粉</p>
                        <div>
                            <span>¥6</span>
                            <del>¥5</del>
                        </div>
                    </div>
                </a>
                <a href="" class="discover-food">
                    <img src="./../../assets/img/2940e98f25eb7bd071b655ea3f1dbjpeg.jpeg" alt="">
                    <div>
                        <p>酸辣土豆粉</p>
                        <div>
                            <span>¥6</span>
                            <del>¥5</del>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    </div>
</template>

<script>

    export default {
        name:'findcontent',
    }
</script>

<style>
    .findlist{
        margin-bottom:0.28rem;
        background: #fff;
        border-top:1px solid #eee;
        border-bottom:1px solid #eee;
    }
    .ji-header{
        padding-top:0.52rem;
        text-align: center;
        font-size:0.48rem;
        color: #333;
        font-weight:700;
    }
    .ji-line{
        display: inline-block;
        margin: .213333rem .093333rem .173333rem;
        border: 1px solid #333;
        width: .4rem;
        height: 0;
        position: relative;
    }
    .jilineleft:after{
        right: -.06rem;
    }
    .jilineright:after{
        left: -.06rem;
    }
    .ji-line:after{
        position: absolute;
        top: -.066667rem;
        content: "";
        background: #333;
        height: .13rem;
        width: .13rem;
        border-radius: 50%;
    }
    .activity-sub-title{
        font-size: .3rem;
        color: #999;
        text-align: center;
        padding-bottom: .2rem;
    }
    .activity-body{
        padding: .32rem .32rem .4rem .4rem;
        white-space: nowrap;
    }
    .discover-food{
        overflow: hidden;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        width: 2.9rem;
    }
    .discover-food:last-child{
        margin-right: 0;
    }
    .discover-food img{
        width:3rem;
        height:3rem;
        margin-bottom:.2rem;
    }
    .discover-food div p{
        font-size: .35rem;
        color: #333;
        margin-bottom: .13rem;
    }
    .discover-food div div{
        height: .64rem;
        line-height: .64rem;
    }
    .discover-food div div span{
        font-size: .346667rem;
        height: .48rem;
        line-height: .48rem;
        color: #ff5339;
        margin-right: .093333rem;
        max-width: 1.333333rem;
        display: inline-block;
        vertical-align: middle;
    }
    .discover-food div div del{
        font-size: .293333rem;
        color: #aaa;
        max-width: 1.066667rem;
        display: inline-block;
        vertical-align: middle;
    }

</style>