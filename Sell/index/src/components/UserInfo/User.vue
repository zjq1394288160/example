<template>
    <div>
        <header class="myinfo">
            <div class="my">
                <div class="jian"><a href="#/me"> < </a></div>
                <h2>确认订单</h2>
            </div>
        </header>
        <ul class="user-info1">
            <li class="main-3Idiu">
                <span>头像</span>
                <span class="user-input">
                    <input type="file">
                    <img src="" alt="">
                    <span> > </span>
                </span>
            </li>
            <li class="main-3Idiu">
                <span>用户名</span>
                <span class="user-input">
                    <span> 花样的   年华  一起 寻找 </span>
                </span>
            </li>
        </ul>
        <h2 class="user-title">账号绑定</h2>
        <ul class="user-info1">
            <li class="main-3Idiu">
                <span>手机</span>
                <span class="user-input">
                    <span>18404905852 > </span>
                </span>
            </li>
        </ul>
        <h2 class="user-title">安全设置</h2>
        <ul class="user-info1">
            <li class="main-3Idiu">
                <span>登录密码</span>
                <span class="user-input">
                    <span>未设置 > </span>
                </span>
            </li>
        </ul>
        <a href="#/exit">
            <button type="button" class="user-exit">退出登录</button>
        </a>

    </div>
</template>

<script>
    export default {
        name:'user',
    }

</script>

<style>
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
    .user-info1{
        background-color: #fff;
        width: 100%;
        font-size: .43rem;
        color: #333;
        margin-top: .4rem;
        font-weight: 700;
    }
    .user-info1 li:first-child{
        position: relative;
    }
    .user-info1 li{
        padding:.4rem .37rem ;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid #ddd;
    }
    .user-input{
        display: flex;
        align-items: center;
        -webkit-box-align: center;
    }
    .user-input input{
        display: block;
        position: absolute;
        opacity: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .user-input span{
        color: #999;
        font-size: .43rem;
        font-family:'宋体';
    }
    .user-title{
        margin: .346667rem 0 0 .4rem;
        color: #666;
        font-weight: 400;
        font-size:0.44rem;
    }
    .user-exit{
        display: block;
        text-align: center;
        padding: .293333rem 0;
        margin: .4rem auto;
        color: #fff;
        border-radius: .08rem;
        font-size: .453333rem;
        font-weight: 800;
        background-color: #EECE13;
        width: 90%;
        outline: none;
        border: none;
    }

</style>