<template>
    <admin>
        <div class="height">
            <!--<el-dialog-->
                    <!--title="提示"-->
                    <!--:visible.sync="dialogVisible"-->
                    <!--size="tiny">-->
                <!--<el-form>-->
                    <!--<el-form-item label="分类名称">-->
                        <!--<el-input v-model="name"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-form>-->
                <!--<span slot="footer" class="dialog-footer">-->
                    <!--<el-button @click="dialogVisible">取 消</el-button>-->
                    <!--<el-button type="primary" @click="addcate">确 定</el-button>-->
                <!--</span>-->
            <!--</el-dialog>-->

            <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible2"
                    size="tiny">
                <el-form :model="form2" ref="form2" label-width="80px">
                    <el-form-item label="商品名称" prop="name">
                        <el-input v-model="form2.name"></el-input>
                    </el-form-item>
                    <el-form-item label="商品信息" prop="info">
                        <el-input v-model="form2.info"></el-input>
                    </el-form-item>
                    <el-form-item label="价格" prop="price">
                        <el-input v-model="form2.price"></el-input>
                    </el-form-item>
                    <el-form-item label="图片" >
                        <el-input v-model="form2.pic"></el-input>
                    </el-form-item>
                    <!--<el-form-item>-->
                        <!--<el-button type="primary" @click="submit1">立即更新</el-button>-->
                        <!--<el-button>取消</el-button>-->
                    <!--</el-form-item>-->
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="">取 消</el-button>
                    <el-button type="primary" @click="">确 定</el-button>
                </span>
            </el-dialog>

            <el-tabs type="border-card">
                <el-tab-pane label="店铺信息">
                    <el-form :model="form1" ref="form1" label-width="80px">
                        <el-form-item label="店铺名称" prop="name">
                            <el-input v-model="form1.name"></el-input>
                        </el-form-item>
                        <el-form-item label="起送价" prop="qi">
                            <el-input v-model="form1.qi"></el-input>
                        </el-form-item>
                        <el-form-item label="配送费" prop="pei">
                            <el-input v-model="form1.pei"></el-input>
                        </el-form-item>
                        <el-form-item label="配送方式">
                            <el-input v-model="form1.express"></el-input>
                        </el-form-item>
                        <el-form-item label="公告">
                            <el-input v-model="form1.notice"></el-input>
                        </el-form-item>
                        <el-form-item label="活动信息1">
                            <el-input v-model="form1.activies1"></el-input>
                        </el-form-item>
                        <el-form-item label="活动信息2">
                            <el-input v-model="form1.activies2"></el-input>
                        </el-form-item>
                        <div class="baopiao">
                            <el-checkbox-group v-model="form1.bao">
                                <el-checkbox>保</el-checkbox>
                            </el-checkbox-group>
                            <el-checkbox-group v-model="form1.piao">
                                <el-checkbox>票</el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <el-form-item>
                            <el-button type="primary" @click="submit1">立即更新</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="商品管理">
                    <el-tabs  editable @edit="handleTabsEdit" v-model="value">
                        <el-tab-pane v-for="(v,i) in cates" :key="v.id" :label="v.name" :name="v.name">
                            <el-table
                                    :data="filter(v.id)"
                                    stripe
                                    style="width: 100%">
                                <el-table-column prop="id" label="编号" width="180">
                                </el-table-column>
                                <el-table-column prop="name" label="商品名" width="180">
                                </el-table-column>
                                <el-table-column prop="info" label="商品信息" width="180">
                                </el-table-column>
                                <el-table-column prop="price" label="价格">
                                </el-table-column>
                                <el-table-column prop="pic" label="图片">
                                </el-table-column>
                                <el-table-column label="操作">
                                    <template scope="scope">
                                        <el-button size="small" @click="dialogVisible2 = true">编辑</el-button>
                                        <el-button size="small" type="danger" @click="deletegoods">删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
            </el-tabs>
        </div>
    </admin>
</template>

<script>
    import Admin from './Admin.vue';
    export default {
        data(){
            return {
                uid:this.$route.query.uid,
                form1: {
                    name: '',
                    qi: '',
                    pei: '',
                    express: '',
                    notice:'',
                    activies1:'',
                    activies2:'',
                },
                form2:{
                    name:'',
                    info:'',
                    price:'',
                    pic:'',
                },
                cates:[],
                goods:[],
                dialogVisible:false,
                dialogVisible2:false,
                name:'',
                value:'',
            }
        },
        methods:{
            addcate:function () {
                this.dialogVisible=false;
                let obj={
                    id:100,
                    sid:this.form1.id,
                    name:this.name,
                }
                this.cates.push(obj);
            },
            handleTabsEdit:function (targetName , action) {
                if(action==='add'){
                    this.dialogVisible=true;
                    this.$prompt('请输入名字', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                    }).then(({ value }) => {
                        fetch('/api/add_cates',{
                        method:'POST',
                        headers:{'Content-Type':'application/json'},
                        body:JSON.stringify({name:value,sid:this.form1.id})
                    })
                        this.$message({
                            type: 'info',
                            message: '添加成功'
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '取消输入'
                        });
                    });
//                    fetch('/api/add_cates',{
//                        method:'POST',
//                        headers:{'Content-Type':'application/json'},
//                        body:JSON.stringify({name:name,sid:sid})
//                    })
                }
                if(action === 'remove'){
                    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        let name=this.value;
                        console.log(name);
                        fetch('/api/delete_cates',{
                            method:'POST',
                            headers:{'Content-Type':'application/json'},
                            body:JSON.stringify({name:name})
                        })
                            .then(res=>res.json())
                            .then(data=>{
                                if(data.code===2){
                                    this.cates=this.cates.filter((v,i)=>{
                                        if(v.name===targetName){
                                            if(targetName===this.value){
                                                let de=this.cates[i+1] || this.cates[i-1];
                                                if(de){
                                                    this.value=de.name;
                                                }
                                            }
                                        }
                                        return v.name!==targetName
                                    })
                                }
                            })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                    });
                };
            },
            filter:function (cid) {
                  return this.goods.filter(v=>v.cid==cid);
            },
            submit1:function () {
                this.form1.uid=this.uid;
                fetch('/api/update_store',{
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(this.form1),
                })
                    .then(res=>res.json())
                    .then(data=>{
                        if(data.code==2){
                            this.$message({
                                message:'更新成功',
                                duration:'2000',
                                showClose: true,
                            })
                        }
                    })
            },
            deletegoods:function () {
                fetch('/api/delete_goods')
                    .then(res=>res.json())
                    .then(data=>{
                        if(data.code==2){
                            this.$message({
                                message:'删除成功',
                                duration:'2000',
                                showClose: true,
                            })
                        }else{
                            this.$message({
                                message:'删除失败',
                                duration:'2000',
                                showClose: true,
                            })
                        }
                    })
            },
            updategoods:function () {
                fetch('/api/updata_goods',{
                    methods:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(this.form2),
                })

            }
        },
        mounted:function () {
            fetch('/api/show_store_info?uid='+this.uid)
                .then(res=>res.json())
                .then(data=>{
                    this.form1=data;
                    fetch('/api/get_cates?sid='+data.id)
                        .then(res=>res.json())
                        .then(d=>{
                            this.cates=d;
                            this.value=d[0].name;
                        })
                    fetch('/api/get_goods?sid='+data.id)
                        .then(res=>res.json())
                        .then(d=>this.goods=d)
                })
        },
        components:{
            'admin':Admin,
        }
    }
</script>

<style>
    .height{
        height:calc(100vh - 60px);
    }
    .baopiao{
        margin-left:80px;
    }
</style>