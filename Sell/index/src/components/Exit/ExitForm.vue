<template>
    <div>
        <div class="app-login">
            <div class="login-main">
                <div class="login-title">
                    <h1>你点我送外卖</h1>
                    <!--<p>登陆有惊喜</p>-->
                    <div class="mess-pass">
                        <a href="javascript:;" :class="{'mess-word':showda===1}" v-on:click="show(1)">短信验证</a>
                        <a href="javascript:;" :class="{'mess-word':showda===2}" v-on:click="show(2)">密码验证</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="mess" v-show="showda===1">
            <form action="">
                <section class="exit-form">
                    <input type="tel" v-model="Form.account" @keyup="check" placeholder="手机号" maxlength="11" required>
                    <button disabled :class="{check:!disable}" ref="checkcode">获取验证码</button>
                </section>
                <section class="exit-form">
                    <input type="tel" v-model="Form.check" placeholder="验证码" maxlength="8">
                </section>
                <section class="exit-form">
                    温馨提示：未注册美食美客帐号的手机号，登录时将自动注册，且代表您已同意 <a href="">《用户服务协议》</a>
                </section>
                <button type="button" class="login-exit" @click.prevent="submit">登录</button>
                <div class="exit-about">
                    <a href="">关于我们</a>
                </div>
            </form>
        </div>

        <div class="pass" v-show="showda===2">
            <form action="">
                <section class="exit-form">
                    <input type="tel" placeholder="手机/邮箱/用户名" maxlength="11">
                </section>
                <section class="exit-form">
                    <input type="text" placeholder="密码" autocomplete="on">
                    <div class="change">
                        <div class="changeword"></div>
                        ···
                    </div>
                </section>
                <button type="button" class="login-exit">登录</button>
                <div class="exit-about">
                    <a href="">关于我们</a>
                </div>
            </form>
        </div>

    </div>

</template>

<script>
    export default {
        name:'exitform',
        data(){
            return{
                showda:1,
                disable:true,
                Form:{
                    account:'',
                    check:'',
                }
            }
        },
        methods:{
            show:function (showda) {
                return  this.showda=showda;
            },
            submit:function () {
                fetch('/api/get_c_user_login',{
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(this.Form),
                }).then(res=>res.json())
                    .then(r=>{
                        if(r.code===2){
                            localStorage.user=r.data;
                            location.href='#/me'
                        }else {

                        }
                    })
            },
            check:function () {
                if(this.Form.account.length==11){
                    this.disable=false;
                    this.$refs.checkcode.setAttribute('disabled','null')
                }else {
                    this.disable=true;
                    this.$refs.checkcode.setAttribute('disabled','disabled')
                }
            },
        }
    }
</script>

<style>
    html,body{
        background-color:#fff;
    }
    .check{
        color:#EECE13;
    }
    .app-login{
        height: auto;
        padding-top: 30px;
    }
    .login-main{
        width: 300px;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-pack: center;
        justify-content: center;
        margin: 0 auto;
    }
    .login-title{
        text-align: center;
    }
    .login-title h1{
        font-size:0.6rem;
        color: #EECE13;
        line-height: 2rem;
    }
    .mess-pass{
        margin-top:40px;
    }
    .mess-pass a{
        font-size: 0.4rem;
        padding-bottom: 4px;
        cursor: pointer;
        color: #333;
    }
    .mess-pass a.mess-word{
        color: #EECE13;
        border-bottom: 2px solid #EECE13;
    }
    .mess-pass a:first-child{
        margin-right: 20px;
    }

    input,button{
        outline: none;
        border: none;
        font-size: inherit;
        font-family: inherit;
    }
    .exit-form{
        position: relative;
        margin-top: 0.4rem;
        height: 1.4rem;
        font-size: 0.38rem;
        background: #fff;
        padding:0 0.8rem;
        color: #999;
    }
    .exit-form input{
        width: 100%;
        height: 100%;
        left: 0;
        padding-left:0.2rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        -webkit-appearance: none;
        font-size:0.38rem;
        color: #333;
    }
    .exit-form button{
        display: inline-block;
        position: absolute;
        top: 50%;
        right: 1.2rem;
        transform: translateY(-50%);
        background: transparent;
    }
    .login-exit{
        display: block;
        text-align: center;
        padding: .293333rem 0;
        margin: .4rem auto;
        color: #fff;
        border-radius: .08rem;
        font-size: .453333rem;
        font-weight: 800;
        background-color: #EECE13;
        width: 84%;
        outline: none;
        border: none;
    }
    .exit-about{
        font-size:0.34rem;

        text-align: center;
    }
    .exit-about a{
        color: #999;
    }
    .change{
        position: absolute;
        top: 50%;
        right: 1.2rem;
        transform: translateY(-50%);
        width:0.86rem;
        height:0.42rem;
        border:1px solid #ddd;
        border-radius: 30%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size:0.6rem;
        font-weight:400;
    }
    .changeword{
        position: absolute;
        top: -1px;
        left: -1px;
        width: 0.42rem;
        height: 0.42rem;
        border: 1px solid #ddd;
        border-radius: 50%;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
        display: flex;
        justify-content:flex-end;
    }
</style>