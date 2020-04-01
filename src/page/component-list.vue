<template>
	<div class="fillcontain">
		<head-top></head-top>
		<div class="table_container">
			<el-form :inline="true" :model="searchForm" class="demo-form-inline">
				<el-form-item label="组件名">
					<el-input v-model="searchForm.name" placeholder="组件名"></el-input>
				</el-form-item>
				<el-form-item label="分类">
					<el-select v-model="searchForm.category" placeholder="分类">
						<el-option label="" value=""></el-option>
						<el-option label="IT" value="IT"></el-option>
						<el-option label="教育" value="教育"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="success" @click="handleNew">新增</el-button>
				</el-form-item>
			</el-form>
			<template>
				<el-table :data="tableData" stripe style="width: 100%">
					<el-table-column prop="name" label="组件名">
					</el-table-column>
					<el-table-column prop="category" label="分类">
					</el-table-column>
					<el-table-column prop="status" label="状态">
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
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="20" layout="total, prev, pager, next" :total="count">
				</el-pagination>
			</div>
			<el-dialog title="新增组件信息" :visible.sync="addDialogFormVisible">
				<el-form :model="foodForm">
					<el-form-item label="组件名" label-width="100px">
						<el-input v-model="foodForm.name" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="分类" label-width="100px">
						<el-select v-model="foodForm.category" placeholder="请选择分类">
							<el-option label="教育" value="教育"></el-option>
							<el-option label="政企" value="政企"></el-option>
							<el-option label="IT" value="IT"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="状态" label-width="100px">
						<el-select v-model="foodForm.status" placeholder="请选择状态">
							<el-option label="启用" value="1"></el-option>
							<el-option label="禁用" value="0"></el-option>
						</el-select>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="addDialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="addComponent">确 定</el-button>
				</div>
			</el-dialog>
			<el-dialog title="修改组件信息" :visible.sync="updateDialogFormVisible">
				<el-form :model="selectTable" :rules="foodrules" ref="selectTable" label-width="110px" class="form food_form">
					<el-form-item label="组件名称" prop="name">
						<el-input v-model="selectTable.name"></el-input>
					</el-form-item>
					<el-form-item label="组件分类">
						<el-select v-model="selectTable.category" placeholder="请选择">
							<el-option v-for="item in attributes" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="updateDialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="updateComponent">确 定</el-button>
				</div>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	import headTop from "../components/headTop";
	import { baseUrl, baseImgPath } from "@/config/env";
	import {
		getComponentList,
		updateComponent,
		deleteComponent,
		addComponent
	} from "@/api/getData";
	export default {
		data() {
			return {
				baseUrl,
				baseImgPath,
				offset: 0,
				limit: 10,
				count: 0,
				tableData: [],
				currentPage: 1,
				selectTable: {},
				addDialogFormVisible: false,
				updateDialogFormVisible: false,
				selectedCategory: [],
				searchForm: {
					name: "",
					category: ""
				},
				foodForm: {
					name: "",
					category: ""
				},
				foodrules: {
					name: [
						{
							required: true,
							message: "请输入组件名称",
							trigger: "blur"
						}
					]
				},
				attributes: [
					{
						value: "IT",
						label: "IT"
					},
					{
						value: "教育",
						label: "教育"
					}
				]
			};
		},
		created() {
			this.initData();
		},
		components: {
			headTop
		},
		methods: {
			async initData() {
				try {
					this.getComponentList();
				} catch (err) {
					console.log("获取数据失败", err);
				}
			},
			async getComponentList() {
				const res = await getComponentList({
					offset: this.offset,
					limit: this.limit,
					name: this.searchForm.name,
					category: this.searchForm.category
				});
				this.count = res.data.data.count;
				this.tableData = [];//清空数据，否则分页会累积
				res.data.data.result.forEach(item => {
					const tableData = {};
					tableData.name = item.name;
					tableData.category = item.category;
					tableData.id = item.id;
					tableData.status = item.status + "";
					this.tableData.push(tableData);
				});
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				this.currentPage = val;
				this.offset = (val - 1) * this.limit;
				this.getComponentList();
			},
			handleEdit(index, row) {
				this.selectTable = row;
				this.updateDialogFormVisible = true;
			},
			// 查询
			onSubmit() {
				this.getComponentList();
			},
			handleNew(index, row) {
				this.addDialogFormVisible = true;
			},
			async addComponent() {
				try {
					this.foodForm.status = Number(this.foodForm.status);
					const result = await addComponent(this.foodForm);
					if (result.data.status == 1) {
						this.$message({
							type: "success",
							message: "添加成功"
						});
						this.addDialogFormVisible = false;
						this.getComponentList();
					} else {
						this.$message({
							type: "error",
							message: result.message
						});
					}
				} catch (err) {
					console.log(err);
				}
			},
			async updateComponent() {
				try {
					const res = await updateComponent(this.selectTable);
					if (res.status == 200) {
						this.$message({
							type: "success",
							message: "修改成功"
						});
						this.dialogFormVisible = false;
						this.getComponentList();
					} else {
						throw new Error(res.message);
					}
				} catch (err) {
					this.$message({
						type: "error",
						message: err.message
					});
					console.log("修改失败");
				}
			},
			async handleDelete(index, row) {
				try {
					const res = await deleteComponent(row.id);
					if (res.status == 200) {
						this.$message({
							type: "success",
							message: "删除成功"
						});
						this.tableData.splice(index, 1);
					} else {
						throw new Error(res.message);
					}
				} catch (err) {
					this.$message({
						type: "error",
						message: err.message
					});
					console.log("删除失败");
				}
			}
		}
	};
</script>

<style lang="less">
@import "../style/mixin";
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
.table_container {
	padding: 20px;
}
.Pagination {
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
