<template>
    <div>
        <header class="myinfo">
            <div class="my">
                <div class="jian" @click="goorder"><a href="javascript:;"> < </a></div>
                <h2>选择地址</h2>
            </div>
        </header>
        <div class="address">
            <div class="addresscard" v-for="v in data" :key="v.id">
                <div class="left" @click="setDefault(v.id)">
                    <p class="left-title">
                        <span>{{v.name}}</span>
                        <span>{{v.phone}}</span>
                    </p>
                    <p class="left-bottom">{{v.address}}</p>
                </div>
                <div class="right" @click="go_add_change(v.id)">
                    编辑
                </div>
            </div>
        </div>
        <div class="addressadd" @click="goadd_address">
            <span>+</span>
            <div class="add-bot">新增收货地址</div>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                data:{},
                uid:localStorage.user,
            }
        },
        methods:{
            goadd_address:function () {
                location.href='#/addressadd?sid='+this.$route.query.sid;
            },
            go_add_change:function (i) {
                this.choose=i;
                localStorage.address=JSON.stringify(this.choose);
                location.href='#/addresschange?sid='+this.$route.query.sid;
            },
            goorder:function () {
                location.href='#/calculate?sid='+this.$route.query.sid;
            },
            setDefault:function (id) {
                fetch('/api/set_default?uid='+this.uid+'&id='+id)
                    .then(res=>res.json())
                    .then(r=>{
                        if(r.code==2){
                            location.href='#/calculate?sid='+this.$route.query.sid;
                        }
                    })
            }
        },
        mounted(){
            fetch('/api/get_address?uid='+localStorage.user)
                .then(res=>res.json())
                .then(r=>this.data=r);
        }
    }
</script>

<style scoped>
    header.myinfo{
        height: 1.173333rem;
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
        transform: translateX(-50%);
    }
    .address{
        position: absolute;
        width:100%;
        overflow-y: auto;
        background-color: #efeff4;
        padding-bottom: 1.39rem;
    }
    .addresscard{
        background-color: #fff;
        padding: .4rem;
        border-bottom: 1px solid #ddd;
        display: flex;
        min-height: 1.813333rem;
        font-size:0.42rem;
        justify-content: space-between;
    }
    .addressadd{
        position: fixed;
        height:1.4rem;
        display: flex;
        bottom:0;
        width:100%;
        color: #EECE13;
        border-top: .03rem solid #ddd;
        background: #fff;
        justify-content: center;
        align-items:center;
        font-size:0.42rem;

    }
    .addressadd span{
        width:0.54rem;
        height:0.54rem;
        margin-right:.1rem;
        border-radius: 50%;
        border:2px solid #EECE13;
        text-align: center;
        line-height:0.5rem;
    }
    .left{
        width:80%;
    }
    .left-title{

    }
</style>