<template>
    <admin>
        <div class="height">
            <el-tabs type="border-card">
                <el-tab-pane label="订单管理" name="first">
                    <el-table
                            :data="tabledate"
                            style="width: 100%">
                        <el-table-column type="expand">
                            <template scope="props">
                                <el-form label-position="left" inline class="demo-table-expand">
                                    <el-form-item label="商品名称">
                                        <span>{{ props.row.name }}</span>
                                    </el-form-item>
                                    <el-form-item label="所属店铺">
                                        <span>{{ props.row.name }}</span>
                                    </el-form-item>
                                    <el-form-item label="商品 ID">
                                        <span>{{ props.row.id }}</span>
                                    </el-form-item>
                                    <el-form-item label="店铺 ID">
                                        <span>{{ props.row.sid }}</span>
                                    </el-form-item>
                                    <el-form-item label="商品分类">
                                        <span>{{ props.row.address_id }}</span>
                                    </el-form-item>
                                    <el-form-item label="店铺地址">
                                        <span>{{ props.row.address }}</span>
                                    </el-form-item>
                                    <el-form-item label="接单时间">
                                        <span>{{ props.row.ctime }}</span>
                                    </el-form-item>
                                </el-form>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="商品 ID"
                                prop="id">
                        </el-table-column>
                        <el-table-column
                                label="商品名称"
                                prop="name">
                        </el-table-column>
                        <el-table-column
                                label="描述"
                                prop="desc">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template scope="scope">
                                <el-button
                                        size="small"
                                        @click="finish(scope.$index, scope.row,1)" :disabled="scope.row.state==1">已完成</el-button>
                                <el-button
                                        size="small"
                                        type="danger"
                                        @click="finish(scope.$index, scope.row,2)" :disabled="scope.row.state==2">接单</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
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
                tabledate: [],
//                    id: '12987122',
//                    name: '好滋好味鸡蛋仔',
//                    category: '江浙小吃、小吃零食',
//                    desc: '荷兰优质淡奶，奶香浓而不腻',
//                    address: '上海市普陀区真北路',
//                    shop: '王小虎夫妻店',
//                    shopId: '10333'

            }
        },
        mounted(){
            fetch('/api/show_order?uid='+this.uid)
                .then(res=>res.json())
                .then(r=> this.tabledate=r)
        },
        methods:{
            finish:function (index,row,state) {
                fetch('/api/finish_order',{
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({id:row.id,state:state})
                })
                    .then(res=>res.json())
                    .then(r=>{

                    })
            },
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
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>