<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <template>
                <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                    <el-table-column
                        prop="name"
                        label="网站名称">
                    </el-table-column>
                    <el-table-column
                        prop="category"
                        label="分类">
                    </el-table-column>
                    <el-table-column
                        prop="url"
                        label="地址">
                    </el-table-column>
                    <el-table-column
                        prop="status"
                        label="状态">
                    </el-table-column>
                    <el-table-column
                        prop="content"
                        label="组件">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
            <div class="Pagination">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="20"
                  layout="total, prev, pager, next"
                  :total="count">
                </el-pagination>
            </div>
            <el-dialog title="修改网站信息" :visible.sync="dialogFormVisible">
                <el-form :model="selectTable">
                    <el-form-item label="网站名称" label-width="100px">
                        <el-input v-model="selectTable.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="分类" label-width="100px">
                        <el-select v-model="selectTable.category" placeholder="请选择分类">
                            <el-option label="教育" value="教育"></el-option>
                            <el-option label="政企" value="政企"></el-option>
                            <el-option label="IT" value="IT"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="url地址" label-width="100px">
                        <el-input v-model="selectTable.url" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="状态" label-width="100px">
                        <el-select v-model="selectTable.status" placeholder="请选择状态">
                            <el-option label="启用" value="1"></el-option>
                            <el-option label="禁用" value="0"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="组件" label-width="100px">
                        <el-input v-model="selectTable.content" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="updateWebsite">确 定</el-button>
                </div>
                </el-dialog>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {baseUrl, baseImgPath} from '@/config/env'
    import {getWebsiteList, updateWebsite, deleteResturant} from '@/api/getData'
    export default {
        data(){
            return {
                baseUrl,
                baseImgPath,
                city: {},
                offset: 0,
                limit: 20,
                count: 0,
                tableData: [{}],
                currentPage: 1,
                selectTable: {},
                dialogFormVisible: false,
                selectedCategory: [],
                address: {},
            }
        },
        created(){
            this.initData();
        },
    	components: {
    		headTop,
    	},
        methods: {
            async initData(){
                try{
                    this.getWebsiteList();
                }catch(err){
                    console.log('获取数据失败', err);
                }
            },
            async getWebsiteList(){
                const websites = await getWebsiteList({offset: this.offset, limit: this.limit});
                this.tableData = [];
                websites.forEach(item => {
                    const tableData = {};
                    tableData.name = item.name;
                    tableData.category = item.category;
                    tableData.content = item.content;
                    tableData.id = item.id;
                    tableData.status = item.status+"";
                    tableData.url = item.url;
                    this.tableData.push(tableData);
                })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1)*this.limit;
                this.getWebsiteList()
            },
            handleEdit(index, row) {
                this.selectTable = row;
                this.dialogFormVisible = true;                
            },
            async updateWebsite(){
                try{
                    const res = await updateWebsite(this.selectTable);
                    if (res.data.status == 1) {
                        this.$message({
                            type: 'success',
                            message: '修改成功'
                        });
                        this.tableData.splice(index, 1);
                    }else{
                        throw new Error(res.message)
                    }
                }catch(err){
                    this.$message({
                        type: 'error',
                        message: err.message
                    });
                    console.log('修改失败')
                }
            },
            async handleDelete(index, row) {
                try{
                    const res = await deleteResturant(row.id);
                    if (res.status == 1) {
                        this.$message({
                            type: 'success',
                            message: '删除店铺成功'
                        });
                        this.tableData.splice(index, 1);
                    }else{
                        throw new Error(res.message)
                    }
                }catch(err){
                    this.$message({
                        type: 'error',
                        message: err.message
                    });
                    console.log('删除店铺失败')
                }
            },
        },
    }
</script>

<style lang="less">
	@import '../style/mixin';
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
    .table_container{
        padding: 20px;
    }
    .Pagination{
        display: flex;
        justify-content: flex-start;
        margin-top: 8px;
    }
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
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
    .avatar {
        width: 120px;
        height: 120px;
        display: block;
    }
</style>
