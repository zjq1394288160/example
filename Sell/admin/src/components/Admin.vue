<template>
    <div>
        <header class="shophead">
            <div>
                <a href="javascript:;">商户中心</a>
                <div>
                    <span>如开店过程遇到问题，可以拨打客服电话：021-80203777</span>
                </div>
            </div>
        </header>
        <el-row>
            <el-col :span="5">
                <el-menu default-active="this.$route.name" class="height">
                    <router-link :to="{name:'store',query:this.$route.query}">
                        <el-menu-item index="store"><i class="el-icon-menu"></i>我的商铺</el-menu-item>
                    </router-link>
                    <router-link :to="{name:'order',query:this.$route.query}">
                        <el-menu-item index="order"><i class="el-icon-setting"></i>我的订单</el-menu-item>
                    </router-link>
                    <el-menu-item index="my"><i class="el-icon-document"></i>个人中心</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="18">
                <slot></slot>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name:'admin',

    }

</script>

<style>
    .shophead{
        height: 60px;
        line-height: 60px;
        background-color: rgb(32, 160, 255);
        color: #fff;
    }
    .shophead>div{
        width:1000px;
        margin:0 auto;
    }
    .shophead>div>a{
        font-size: 20px;
        font-weight: 700;
        color: #fff;
        text-decoration: none;
    }
    .shophead>div>div{
        float: right;
    }

</style>