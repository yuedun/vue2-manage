<template>
	<div class="fillcontain">
		<head-top></head-top>
		<div class="table_container">
			<el-form :inline="true" :model="searchForm" class="demo-form-inline">
				<el-form-item label="网站名">
					<el-input v-model="searchForm.name" placeholder="网站名"></el-input>
				</el-form-item>
				<el-form-item label="分类">
					<el-select v-model="searchForm.category" placeholder="分类">
						<el-option label="" value=""></el-option>
						<el-option label="IT" value="IT"></el-option>
						<el-option label="教育" value="edu"></el-option>
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
					<el-table-column prop="name" label="网站名称">
					</el-table-column>
					<el-table-column prop="category" label="分类">
					</el-table-column>
					<el-table-column prop="icon" label="icon">
						<template slot-scope="scope">
							<img :src="scope.row.icon" min-width="70" height="70" />
						</template>
					</el-table-column>
					<el-table-column prop="keywords" label="keywords">
					</el-table-column>
					<el-table-column prop="description" label="description">
					</el-table-column>
					<el-table-column prop="status" label="状态">
						<template slot-scope="scope">
							<span v-if="scope.row.status=== 0"><i class="el-icon-error"></i></span>
							<span v-if="scope.row.status=== 1"><i class="el-icon-success success-color"></i></span>
		　　　　　　　　</template>
					</el-table-column>
					<el-table-column prop="components" label="页面">
						<template slot-scope="scope">
							<el-link icon="el-icon-view" @click="viewPages(scope.row._id)">查看</el-link>
						</template>
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
			<el-dialog title="新增网站信息" :visible.sync="addDialogFormVisible">
				<el-form :model="addWebsiteForm" :rules="formRules" ref="addWebsiteForm" label-width="110px" class="form food_form">
					<el-form-item label="网站名称" prop="name">
						<el-input v-model="addWebsiteForm.name"></el-input>
					</el-form-item>
					<el-form-item label="标签icon" prop="icon">
						<el-input v-model="addWebsiteForm.icon"></el-input>
					</el-form-item>
					<el-form-item label="keywords" prop="keywords">
						<el-input v-model="addWebsiteForm.keywords"></el-input>
					</el-form-item>
					<el-form-item label="description" prop="description">
						<el-input v-model="addWebsiteForm.description"></el-input>
					</el-form-item>
					<el-form-item label="网站分类">
						<el-select v-model="addWebsiteForm.category" placeholder="请选择">
							<el-option v-for="item in attributes" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="addDialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="addWebsite">确 定</el-button>
				</div>
			</el-dialog>
			<el-dialog title="修改网站信息" :visible.sync="updateDialogFormVisible">
				<el-form :model="selectTable">
					<el-form-item label="网站名称" label-width="100px">
						<el-input v-model="selectTable.name" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="标签icon" label-width="100px">
						<el-input v-model="selectTable.icon"></el-input>
					</el-form-item>
					<el-form-item label="keywords" label-width="100px">
						<el-input v-model="selectTable.keywords"></el-input>
					</el-form-item>
					<el-form-item label="description" label-width="100px">
						<el-input v-model="selectTable.description"></el-input>
					</el-form-item>
					<el-form-item label="分类" label-width="100px">
						<el-select v-model="selectTable.category" placeholder="请选择分类">
							<el-option v-for="item in attributes" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="状态" label-width="100px">
						<el-select v-model="selectTable.status" placeholder="请选择状态">
							<el-option label="启用" value="1"></el-option>
							<el-option label="禁用" value="0"></el-option>
						</el-select>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="updateDialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="updateWebsite">确 定</el-button>
				</div>
			</el-dialog>
			<el-dialog title="查看图片" :visible.sync="iconDialogVisible" width="20%">
				<img :src="icon" alt="" srcset="">
			</el-dialog>
			<el-dialog title="查看组件" :visible.sync="componentsDialogVisible" width="30%">
				<ul>
					<li v-for="(value, name) in components" :key="name">{{value.name}}</li>
				</ul>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	import headTop from "../components/headTop";
	import { baseUrl, baseImgPath } from "@/config/env";
	import {
		getWebsiteList,
		updateWebsite,
		deleteWebsite,
		addWebsite,
		componentList,
		copyPage,
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
				iconDialogVisible: false,
				componentsDialogVisible: false,
				copyDialogVisible: false,
				addWebsiteForm: {
					name: "",
					category: "",
					url: "",
					icon: "",
					keywords: "",
					description: "",
					components: "",
				},
				searchForm: {
					name: "",
					category: "",
				},
				formRules: {
					name: [
						{
							required: true,
							message: "请输入网站名称",
							trigger: "blur",
						},
					],
				},
				attributes: [
					{
						value: "edu",
						label: "教育",
					},
					{
						value: "IT",
						label: "IT",
					},
					{
						value: "gov",
						label: "政企",
					},
				],
				icon: "",
				components: [],
				allComponents: [],
				copyUrl: "",
				filterMethod(query, item) {
					return item.pinyin.indexOf(query) > -1;
				},
			};
		},
		created() {
			this.initData();
		},
		components: {
			headTop,
		},
		methods: {
			async initData() {
				try {
					this.getWebsiteList();
				} catch (err) {
					console.log("获取数据失败", err);
				}
			},
			async getWebsiteList() {
				try {
					const res = await getWebsiteList({
						offset: this.offset,
						limit: this.limit,
						name: this.searchForm.name,
						category: this.searchForm.category,
					});
					this.count = res.data.data.count;
					this.tableData = [];
					res.data.data.result.forEach((item) => {
						this.tableData.push(item);
					});
				} catch (error) {
					this.$message({
						type: "error",
						message: error.response.data.message,
					});
				}
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				this.currentPage = val;
				this.offset = (val - 1) * this.limit;
				this.getWebsiteList();
			},
			handleNew(index, row) {
				this.getAllComponents();
				this.addDialogFormVisible = true;
			},
			async handleEdit(index, row) {
				await this.getAllComponents();
				console.log(this.allComponents);

				this.selectTable = row;
				this.updateDialogFormVisible = true;
			},
			async getAllComponents() {
				let that = this;
				try {
					const res = await componentList();
					if (res.status == 200) {
						var componentArray = [];
						res.data.data.result.forEach((item, index) => {
							componentArray.push({
								label: item.name,
								key: index,
							});
						});
						that.allComponents = componentArray;
					} else {
						that.allComponents = [];
					}
				} catch (err) {
					console.log(err);
					that.allComponents = [];
				}
			},
			async addWebsite() {
				try {
					const result = await addWebsite(this.addWebsiteForm);
					if (result.status == 200) {
						this.$message({
							type: "success",
							message: "添加成功",
						});
						this.addDialogFormVisible = false;
						this.getWebsiteList();
					} else {
						this.$message({
							type: "error",
							message: result.message,
						});
					}
				} catch (err) {
					console.log(err);
				}
			},
			//查询
			onSubmit() {
				this.getWebsiteList();
			},
			async updateWebsite() {
				try {
					const res = await updateWebsite(this.selectTable);
					if (res.status == 200) {
						this.$message({
							type: "success",
							message: "修改成功",
						});
						this.updateDialogFormVisible = false;
						this.getWebsiteList();
					} else {
						throw new Error(res.message);
					}
				} catch (err) {
					this.$message({
						type: "error",
						message: err.message,
					});
					console.log("修改失败");
				}
			},
			async handleDelete(index, row) {
				try {
					const res = await deleteWebsite(row.id);
					if (res.status == 200) {
						this.$message({
							type: "success",
							message: "删除成功",
						});
						this.tableData.splice(index, 1);
					} else {
						throw new Error(res.message);
					}
				} catch (err) {
					this.$message({
						type: "error",
						message: err.message,
					});
					console.log("删除失败");
				}
			},
			viewPages(id) {
				this.$router.push({ path: "/pageList", query: { id } });
			},
		},
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
