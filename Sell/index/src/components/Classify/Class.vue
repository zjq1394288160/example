<template>
    <div>
        <header class="myinfo">
            <div class="my">
                <div class="jian"><a href="#/"> < </a></div>
                <h2>甜品饮料</h2>
            </div>
        </header>

    </div>

</template>

<script>
    export default {
        name:'class',
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
</style>