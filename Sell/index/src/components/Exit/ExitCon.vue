<template>
    <div class="login_main">
        <form action="">
            <section class="mess">
                <input type="text" placeholder="手机号" class="enabled" required v-model="form.tel

" @keyup="check">
                <button :class="{check:!disable}" disabled ref="checkcode">获取验证码</button>
            </section>
            <section class="mess">
                <input type="text" placeholder="验证码" class="enabled" required v-model="form.code">
            </section>
            <section class="tips">
                温馨提示：未注册吃了么帐号的手机号，登录时将自动注册，且代表您已同意
                <a href="javascript:;">《用户服务协议》</a>
            </section>
            <button @click.prevent="login">登录</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'lg',
        data(){
            return{
                form:{
                    tel:'',
                    code:''
                },
                disable:true,
            }
        },
        methods:{
            login(){
                if(!this.disable){
                    fetch('/api/check_account',{
                        method:'POST',
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify(this.form)
                    })
                        .then(res=>res.json())
                        .then(data=>{
                            if(data.code==2){
                                localStorage.user_id=data.id

                                ;
                                if(this.$route.query.direct){
                                    location.href = '#/'+this.$route.query.direct+'?sid='+this.$route.query.sid;
                                }else{
                                    location.href='#/me';
                                }

                            }else{
                                alert(data.message);
                            }
                        })
                }
            },
            check(){
                if(this.form.tel

                        .length==11){
                    this.disable=false;
                    this.$refs.checkcode.setAttribute('disabled','null')
                }else{
                    this.disable=true;
                    this.$refs.checkcode.setAttribute('disabled','disabled')
                }
            }
        }
    }
</script>