<template>
    <div>
        <header class="myinfo">
            <div class="my">
                <div class="jian">
                    <router-link :to="{name:'address',query:$route.query}"> < </router-link>
                    <!--<a href="#/address"> < </a>-->
                </div>
                <h2>编辑地址</h2>
                <div class="delete" @click="del">
                    删除
                </div>
            </div>
        </header>
        <div class="addressform">
            <div class="content">
                <div class="cont">
                    <div class="cont1">联系人</div>
                    <div class="cont2">
                        <div class="con-input">
                            <input type="text" v-model="data.name">
                        </div>
                        <div class="con-input bottom">
                            <span :class="{checked:data.gender==1}" @click="setGender(1)">男士</span>
                            <span :class="{checked:data.gender==2}" @click="setGender(2)">女士</span>
                            <span :class="{checked:data.gender==3}" @click="setDender(3)">中士</span>
                        </div>
                    </div>
                </div>
                <div class="cont">
                    <div class="cont1">电话</div>
                    <div class="cont2">
                        <div class="con-input">
                            <input type="text" v-model="data.phone">
                        </div>
                    </div>
                </div>
                <div class="cont">
                    <div class="cont1">地址</div>
                    <div class="cont2">
                        <div class="con-input">
                            <input type="text" v-model="data.address">
                        </div>
                        <div class="con-input bottom">
                            <input type="text">
                        </div>
                    </div>
                </div>
                <div class="cont">
                    <div class="cont1">标签</div>
                    <div class="cont2">
                        <div class="con-input bottom">
                            <span @click="setLabel(1)" :class="{checked:data.label==1}">学校</span>
                            <span @click="setLabel(2)" :class="{checked:data.label==2}">公司</span>
                            <span @click="setLabel(3)" :class="{checked:data.label==3}">家</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button" @click="submit">
                <button class="form-button">确定</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                data:{},
                id:localStorage.address,
            }
        },
        methods:{
            del:function () {
                fetch('/api/delete_address?id='+this.id)
                    .then(res=>res.json())
                    .then(r=>this.data=r)
                location.href='#/address?sid='+this.$route.query
            },
            setGender:function (v) {
                this.data.gender=v;
            },
            setLabel:function (v) {
                this.data.label=v;
            },
            submit:function () {
                fetch('/api/update_address?id='+this.id,
                    {
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(this.data),
                })
                    .then(res=>res.json())
                    .then(r=>this.data=r);
                    location.href='#/address?sid='+this.$route.query.sid;
            }
        },
        mounted(){
            fetch('/api/show_address?id='+this.id)
                .then(res=>res.json())
                .then(r=>this.data=r[0]);

        },
    }
</script>
<style scoped>
    header.myinfo{
        height: 1.18rem;
    }
    .my{
        position: fixed;
        width: 100%;
        height: 1.18rem;
        color: #fff;
        background-image: linear-gradient(90deg,#EECE13,#B210FF );
    }
    .jian{
        width: 1.18rem;
        height: 1.18rem;
        text-align: center;
        font-size:0.6rem;
        line-height: 1.18rem;
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
    .delete{
        position: absolute;
        right:.2rem;
        top:0;
        font-size:.44rem;
        line-height:1.18rem;
        text-align: center;
        width:1.18rem;
        height:1.18rem;
    }
    .addressform{
        width: 100%;
        background-color: #f5f5f5;
    }
    .content{
        padding:.4rem;
        background: #fff;
    }
    .cont{
        border-bottom: 1px solid #eee;
        display: flex;
        font-size: .4rem;
    }
    .cont:first-child{
        border-top: .026rem solid #eee;
    }
    .cont1{
        flex-basis: 1.733333rem;
        padding: .426667rem 0 .373333rem;
        font-size: .4rem;
        line-height: .48rem;
        color: #333;
        font-weight: 700;
    }
    .con-input{
        padding: .37rem 0;
        border-top: 1px solid #eee;
    }
    .con-input input{
        outline: none;
        font-size: .4rem;
        line-height: .48rem;
        color: #666;
        border: none;
        flex: 1;
        padding-right: .4rem;
        padding-left: 0;
        -webkit-tap-highlight-color: transparent;
    }
    .bottom span{
        background: #fff;
        display: inline-block;
        border: 1px solid #ddd;
        border-radius: .11rem;
        font-size: .37rem;
        color: #666;
        line-height: .75rem;
        width: 1.8rem;
        margin-right: .27rem;
        text-align: center;
        -webkit-tap-highlight-color: transparent;
    }
    .bottom .checked {
        color: #EECE13;
        background: #eef7ff;
        border-color: rgba(35,149,255,.18);
    }
    .button{
        padding: .53rem .4rem;
        display: flex;
    }
    .form-button{
        background: #EECE13;
        text-align: center;
        border-radius: .053333rem;
        flex: 1;
        font-size: .48rem;
        line-height: .506667rem;
        color: #fff;
        padding: .333333rem 0;
        border: none;
        font-weight: 700;
    }
</style>