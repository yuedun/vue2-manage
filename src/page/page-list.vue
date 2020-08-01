<template>
	<div class="fillcontain">
		<head-top></head-top>
		<div class="table_container">
			<el-form :inline="true" :model="searchForm" class="demo-form-inline">
				<el-form-item label="页面名">
					<el-input v-model="searchForm.name" placeholder="页面名"></el-input>
				</el-form-item>
				<el-form-item label="url">
					<el-input v-model="searchForm.url" placeholder="url"></el-input>
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
					<el-table-column prop="name" label="title">
					</el-table-column>
					<el-table-column prop="url" label="url">
					</el-table-column>
					<el-table-column prop="keywords" label="keywords">
					</el-table-column>
					<el-table-column prop="description" label="description">
					</el-table-column>
					<el-table-column prop="status" label="状态">
						<template slot-scope="scope">
							<span v-if="scope.row.status=== 0"><i class="el-icon-error"></i></span>
							<span v-if="scope.row.status=== 1"><i class="el-icon-success"></i></span>
						</template>
					</el-table-column>
					<el-table-column prop="components" label="组件">
						<template slot-scope="scope">
							<el-link icon="el-icon-view" @click="viewComponents(scope.row._id, scope.row.url)">查看</el-link>
						</template>
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button size="small" @click="handleCopyDialog(scope.$index, scope.row)">克隆</el-button>
							<el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row._id)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</template>
			<div class="Pagination">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="20" layout="total, prev, pager, next" :total="count">
				</el-pagination>
			</div>
			<el-dialog title="新增页面信息" :visible.sync="addDialogFormVisible">
				<el-form :model="addPageForm" :rules="formRules" ref="addPageForm" label-width="110px" class="form food_form">
					<el-form-item label="title" prop="name">
						<el-input v-model="addPageForm.name"></el-input>
					</el-form-item>
					<el-form-item label="url" prop="url">
						<el-input v-model="addPageForm.url"></el-input>
					</el-form-item>
					<el-form-item label="keywords" prop="keywords">
						<el-input v-model="addPageForm.keywords"></el-input>
					</el-form-item>
					<el-form-item label="description" prop="description">
						<el-input v-model="addPageForm.description"></el-input>
					</el-form-item>
					<el-form-item label="components" label-width="100px">
						<el-input type="textarea" v-model="addPageForm.components"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="addDialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="addPage">确 定</el-button>
				</div>
			</el-dialog>
			<el-dialog title="修改页面信息" :visible.sync="updateDialogFormVisible">
				<el-form :model="selectTable">
					<el-form-item label="title" label-width="100px">
						<el-input v-model="selectTable.name" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="url" label-width="100px">
						<el-input v-model="selectTable.url" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="keywords" label-width="100px">
						<el-input v-model="selectTable.keywords"></el-input>
					</el-form-item>
					<el-form-item label="description" label-width="100px">
						<el-input v-model="selectTable.description"></el-input>
					</el-form-item>
					<el-form-item label="components" label-width="100px">
						<JsonView :json="JsonData" @changeData="changeData"></JsonView>
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
					<el-button type="primary" @click="updatePage">确 定</el-button>
				</div>
			</el-dialog>
			<el-dialog title="查看组件" :visible.sync="componentsDialogVisible" width="30%">
				<ul>
					<li v-for="(value, name) in components" :key="name">{{value.name}}</li>
				</ul>
			</el-dialog>
			<el-dialog title="复制页面" :visible.sync="copyDialogVisible" width="20%">
				<el-input v-model="copyUrl" placeholder="页面url"></el-input>
				<div slot="footer" class="dialog-footer">
					<el-button @click="copyDialogVisible = false">取 消</el-button>
					<el-button type="primary" @click="handleCopy">确 定</el-button>
				</div>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	import headTop from "../components/headTop";
	import { baseUrl, baseImgPath } from "@/config/env";
	import {
		getPageList,
		updatePage,
		deletePage,
		addPage,
		componentList,
		copyPage,
	} from "@/api/getData";
	import JsonView from "@/common/JsonView";
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
				componentsDialogVisible: false,
				copyDialogVisible: false,
				addPageForm: {
					name: "",
					category: "",
					url: "",
					keywords: "",
					description: "",
					components: "",
				},
				searchForm: {
					name: "",
					url: "",
				},
				formRules: {
					name: [
						{
							required: true,
							message: "请输入页面名称",
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
				copyUrl: "",
				filterMethod(query, item) {
					return item.pinyin.indexOf(query) > -1;
				},
				websiteID: "",
				JsonData: {},
			};
		},
		created() {
			this.websiteID = this.$route.query.id;
			this.initData();
		},
		components: {
			headTop,
			JsonView,
		},
		methods: {
			async initData() {
				try {
					this.getPageList();
				} catch (err) {
					console.log("获取数据失败", err);
				}
			},
			async getPageList() {
				try {
					const res = await getPageList({
						websiteID: this.websiteID,
						offset: this.offset,
						limit: this.limit,
						name: this.searchForm.name,
						url: this.searchForm.url,
					});
					this.count = res.data.data.count;
					this.tableData = [];
					res.data.data.result.forEach((item) => {
						this.tableData.push(item);
					});
				} catch (error) {
					this.$message({
						type: "error",
						message: error.message,
					});
				}
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				this.currentPage = val;
				this.offset = (val - 1) * this.limit;
				this.getPageList();
			},
			handleNew(index, row) {
				this.addDialogFormVisible = true;
			},
			async handleEdit(index, row) {
				console.log(row);
				this.selectTable = row;
				// this.selectTable.components = JSON.stringify(row.components);
				this.JsonData = row.components;
				this.updateDialogFormVisible = true;
			},
			handleCopyDialog(index, row) {
				this.copyDialogVisible = true;
				this.selectTable = row;
			},
			async handleCopy() {
				await copyPage(this.selectTable._id, this.copyUrl);
				this.copyDialogVisible = false;
			},
			async addPage() {
				try {
					const result = await addPage(this.websiteID, this.addPageForm);
					if (result.status == 200) {
						this.$message({
							type: "success",
							message: "添加成功",
						});
						this.addDialogFormVisible = false;
						this.getPageList();
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
				this.getPageList();
			},
			async updatePage() {
				console.log(JSON.stringify(this.JsonData));
				try {
					let updateObj = {
						_id: this.selectTable._id,
						name: this.selectTable.name,
						keywords: this.selectTable.keywords,
						description: this.selectTable.description,
						url: this.selectTable.url,
						components: this.JsonData,
						status: this.selectTable.status
					};
					const res = await updatePage(updateObj);
					if (res.status == 200) {
						this.$message({
							type: "success",
							message: "修改成功"
						});
						this.updateDialogFormVisible = false;
						this.getPageList();
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
			async handleDelete(index, id) {
				try {
					const res = await deletePage(id);
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
			viewComponents(id, url) {
				this.$router.push({ path: "/drag", query: { id, url } });
			},
			changeData(d) {
				this.JsonData = d;
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
