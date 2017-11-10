<template>
    <div>
        <form action="" class="search-goods">
            <a href="#/"> < </a>
            <input type="text" placeholder="请输入商品名称">
        </form>
        <section>
            <div class="find">
                <span>历史搜索</span>
                <span class="find-delete">✕</span>
            </div>
            <section class="paopao">
                <span>泡泡香香鸡</span>
            </section>
        </section>
        <section>
            <div class="find">
                <span>热门搜索</span>
            </div>
            <section class="paopao">
                <span>重庆小火锅</span>
                <span>小龙虾</span>
                <span>石锅拌饭</span>
                <span>烙饼</span>
                <span>烤鱼</span>
            </section>
        </section>
        <section>

        </section>
    </div>
</template>

<script>
    export default {
        name:'search',
    }
</script>

<style>
    .search-goods{
        display: flex;
        padding: .29rem;
        position: relative;
        z-index: 101;
        background: #fff;
    }
    .search-goods a{
        font-size: 0.6rem;
        color: #333;
        font-family:'宋体';
        font-weight:700;
        display:inline-block;
        width:.9rem;
        line-height:.9rem;
    }
    .search-goods input{
        color: #666;
        font-size:.4rem;
        padding:.17rem .4rem;
        background: #f8f8f8;
        border-radius: .53rem;
        flex-grow: 1;
    }
    .find{
        font-weight:700;
        font-size:.43rem;
        padding:.2rem .3rem;
        background: #fff;
        display: flex;
        align-items:center;
        justify-content:space-between;
    }
    .find-delete{
        display: block;
        width: .45rem;
        height: .45rem;
        text-align: center;
        line-height: .45rem;
        background-color: #EC5330;
        color: #fff;
        border-radius: 50%;
        font-size: .4rem;
    }
    .paopao{
        padding:.33rem .33rem;
        background: #fff;
    }
    .paopao span{
        display: inline-block;
        border-radius: .1rem;
        padding: .2rem .2rem;
        font-size: .4rem;
        margin-right: .4rem;
        margin-top: .4rem;
        color: #666;
        background-color: #f7f7f7;
    }


</style>