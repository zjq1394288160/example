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
        <div class="step">
            <el-steps :space="430" :active="active" center>
                <el-step title="步骤 1" description="填写商家信息"></el-step>
                <el-step title="步骤 2" description="上传证件"></el-step>
                <el-step title="步骤 3" description="等待审核"></el-step>
            </el-steps>
            <div class="button">
                <el-button type="primary" @click="prev" v-if="active!==1">上一步</el-button>
                <el-button type="primary" @click="next" v-if="active!==3">下一步</el-button>
            </div>
        </div>
        <div class="container">
            <!--基本信息填写-->
            <div class="info" v-if="active===1">
                <el-form label-width="100px" :rules="rules" :model="form1" ref="form1" v-show="active===1">
                    <el-form-item label="公司名称" props="name" inline>
                        <el-input  v-model="form1.name">公司名称
                        </el-input>
                    </el-form-item>
                    <el-form-item label="公司注册号" props="number" inline>
                        <el-input v-model="form1.number">公司注册号</el-input>
                    </el-form-item>
                </el-form>
            </div>
            <!--上传照片-->
            <div class="info" v-if="active===2">
                <el-form label-width="100px" :model="form2" ref="form2" v-show="active===2">
                    <el-form-item label="店铺名称" props="name" inline>
                        <el-input v-model="form2.name">店铺名称</el-input>
                    </el-form-item>
                    <el-form-item label="店铺图片" inline>
                        <el-input v-model="form2.pic">店铺图片</el-input>
                    </el-form-item>
                </el-form>
            </div>
            <!--等待审核-->
            <div class="info" v-if="active===3">
                <div class="startshop">
                    <el-button type="primary" @click="submit">开启店铺</el-button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data () {
            var validateNumber=(rules,value,callback)=>{
                let reg=/^\d{13}$/;
                if(reg.test()){
                    callback(new Error('格式有误'))
                }else {
                    callback();
                }
            }
            return {
                uid:this.$route.query.uid,
                active:1,
                form1:{
                    name:'',
                    number:''
                },
                form2:{
                    name:'',
                    pic:''
                },
                rules:{
                    name:[
                        { required: true, message: '请输入门店名称', trigger: 'change' },
                        { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'change' }
                    ],
                    number:[
                        { validator: validateNumber, trigger: 'change' }
                    ],
                }
            }
        },
        methods:{
            submit:function () {

                    this.form1.uid=this.uid;
                    this.form2.uid=this.uid;
                    fetch('/api/update_user',{
                        method:'POST',
                        headers:{'Content-Type':'application/json'},
                        body:JSON.stringify({name:this.form1.name,number:this.form1.number,uid:this.form1.uid}),
                    });
                    fetch('/api/add_store',{
                        method:'POST',
                        headers:{'Content-Type':'application/json'},
                        body:JSON.stringify(this.form2),
                    })
                    location.href='#/admin?uid='+this.uid;


            },
            next:function () {
                let n=this.active;
                this.active=n+1>3?3:n+1;
            },
            prev:function () {
                let n=this.active;
                this.active=n-1<1?1:n-1;
            },
        },
    }

</script>


<style scoped>
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

    .step{
        width:800px;
        margin:0 auto;
        padding:20px;
        text-align: center;
    }
    .button{
        padding-top:20px;
    }

    .container{
        width: 1000px;
        margin: 0 auto;
    }
    .info{
        padding: 32px 50px;
        height:350px;
        background-color: #fff;
    }
    .startshop{
        text-align: center;
    }
    /*上传样式*/
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>