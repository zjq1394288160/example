<template>
    <div>
        <div class="box">
            <div class="formbox">
                <div class="form">
                    <h2 class="enter">申请入驻</h2>
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="手机号" prop="account">
                            <el-input v-model.number="ruleForm.account"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="pass">
                            <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="checkPass">
                            <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')"  :plain="true">注册</el-button>
                            <router-link :to="{name:'login'}">
                                <el-button>已有账号,登录</el-button>
                            </router-link>

                        </el-form-item>
                    </el-form>
                </div>
            </div>

        </div>


    </div>
</template>

<script>
    export default {
        data(){
            var validateAcount=(rule,value,callback)=>{
                let reg=/^\d{11}$/;
                if(reg.test(value)){
                    callback();
                }else {
                    callback(new Error('手机号码格式错误'))
                }
            }
            var validatePass=(rule,value,callback)=>{
                if(value.length<6){
                    callback(new Error('密码长度过短'));
                }else {
                    callback();
                }
            }
            var validatePass2=(rule,value,callback)=>{
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            }
            return{
                ruleForm:{
                    account:'',
                    pass:'',
                    checkPass:'',
                },
                rules:{
                    account:[
                        {validator:validateAcount,trigger:'change'}
                    ],
                    pass:[
                        {validator:validatePass,trigger:'change'}
                    ],
                    checkPass:[
                        {validator:validatePass2,trigger:'change'}
                    ]
                }
            }
        },
        methods:{
            submitForm(){
                this.$refs.ruleForm.validate((valid)=>{
                    if(valid){
                        fetch('/api/register',{
                            method:'POST',
                            headers:{'Content-Type':'application/json'},
                            body:JSON.stringify({account:this.ruleForm.account,pass:this.ruleForm.pass})
                        })
                            .then(res=>res.json())
                            .then(data=>{
                                if(data.code==2){
                                    this.$message({
                                        message:'注册成功',
                                        showClose:true,
                                    })
                                    location.href='#/login';
                                }else {
                                    this.$message({
                                        message:'注册失败',
                                        showClose:true,
                                    });
                                }
                            })
                    }else {
                        console.log(valid);
                    }
                })
            },
            open:function () {
                this.$message('这是一条消息提示');
            }
        },
    }

</script>

<style scoped>
    html{
        background-color: rgba(0,0,0,.84);
    }
    .box{
        height:600px;
        background:url("../assets/header-bg.jpg") no-repeat ;
    }
    .formbox{
        width:100%;
        height:100%;
        overflow: hidden;
    }
    .form{
        width:300px;
        margin:0 auto;
        margin-top:200px;
        padding:20px 20px 10px 0;
        background: #fff;
    }
    .enter{
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 25px;
        margin-left:20px;
    }
</style>