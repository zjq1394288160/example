<template>
  <div class="bgcimg">
    <div class="box">
      <h1>同城外卖，更方便的APP平台</h1>
      <div class="infocenter">
          <el-button type="primary" size="large" @click="dialogFormVisible = true">登录店铺</el-button>
          <router-link :to="{name:'register'}">
            <el-button type="primary" size="large">自助开店</el-button>
          </router-link>
      </div>
    </div>

    <el-dialog title="登录店铺管理系统" :visible.sync="dialogFormVisible">
    <div class="form">
      <h2 class="enter">登录</h2>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="手机号" prop="account">
          <el-input v-model.number="ruleForm.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"  :plain="true">立即登录</el-button>
          <router-link :to="{name:'register'}">
            <el-button>注册</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
    </el-dialog>
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
            return{
                ruleForm:{
                    account:'',
                    pass:'',
                },
                rules:{
                    account:[
                        {validator:validateAcount,trigger:'change'}
                    ],
                    pass:[
                        {validator:validatePass,trigger:'change'}
                    ],
                },
                dialogFormVisible:false,
            }
        },
        methods:{
            submitForm(){
                this.$refs.ruleForm.validate((valid)=>{
                    if(valid){
                        fetch('/api/login',{
                            method:'POST',
                            headers:{'Content-Type':'application/json'},
                            body:JSON.stringify(this.ruleForm)
                        })
                            .then(res=>res.json())
                            .then(data=>{
                                if(data.code==2){
                                    if(data.active===true){
                                        location.href='#/store?uid='+data.data.id;
                                    }else {
                                        location.href='#/step?uid='+data.data.id;
                                    }
                                }else {
                                    this.$message({
                                        message:'登录失败，无此账号',
                                        showClose:true,
                                    });
                                }
                            })
                    }else {
                        console.log(valid);
                    }
                })
            },
        },
    }

</script>


<style scoped>
  .bgcimg{
    width:100%;
    height:600px;
    background:url("../assets/index_bg_65bf4da.jpg") no-repeat ;
  }
  .form{
    width:300px;
    margin:0 auto;
    padding:20px 20px 10px 0;
    background: #fff;
  }
  .enter{
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 25px;
    margin-left:20px;
  }
  .infocenter{
    padding-top: 240px;
    text-align: center;
  }
  .box{
    width:100%;
    height:100%;
  }
  .box h1{
    color: #fff;
    text-align: center;
    padding-top:50px;
    font-family:Arial;
  }
</style>
