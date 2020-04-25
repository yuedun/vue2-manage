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
						<el-option label="教育" value="edu"></el-option>
						<el-option label="政企" value="gov"></el-option>
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
					<el-table-column prop="sort" label="排序号">
					</el-table-column>
					<el-table-column prop="name" label="组件名">
					</el-table-column>
					<el-table-column prop="category" label="分类">
					</el-table-column>
					<el-table-column prop="title_1" label="标题一">
					</el-table-column>
					<el-table-column prop="title_2" label="标题二">
					</el-table-column>
					<el-table-column prop="title_3" label="标题三">
					</el-table-column>
					<el-table-column prop="description" label="描述">
					</el-table-column>
					<el-table-column prop="background_img" label="背景图">
						<template slot-scope="scope">
							<el-link icon="el-icon-view" @click="viewData(scope.row.background_img, 'image')" v-show="scope.row.background_img">查看</el-link>
						</template>
					</el-table-column>
					<el-table-column prop="big_img" label="展示大图">
						<template slot-scope="scope">
							<el-link icon="el-icon-view" @click="viewData(scope.row.big_img, 'image')" v-show="scope.row.big_img">查看</el-link>
						</template>
					</el-table-column>
					<el-table-column prop="elements" label="元素">
						<template slot-scope="scope">
							<el-link icon="el-icon-view" @click="viewData(scope.row.elements)" v-show="scope.row.elements&&scope.row.elements.length">查看</el-link>
						</template>
					</el-table-column>
					<el-table-column prop="links" label="链接组">
						<template slot-scope="scope">
							<el-link icon="el-icon-view" @click="viewData(scope.row.links)" v-show="scope.row.links&&scope.row.links.length">查看</el-link>
						</template>
					</el-table-column>
					<el-table-column prop="extras" label="扩展数据">
						<template slot-scope="scope">
							<el-link icon="el-icon-view" @click="viewData(scope.row.extras)" v-show="scope.row.extras&&scope.row.extras.length">查看</el-link>
						</template>
					</el-table-column>
					<el-table-column prop="status" label="状态">
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row._id)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</template>
			<div class="Pagination">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="limit" layout="total, prev, pager, next" :total="count">
				</el-pagination>
			</div>
			<el-dialog title="新增组件信息" :visible.sync="addDialogFormVisible">
				<el-form :model="addForm">
					<el-form-item label="组件名" label-width="100px">
						<el-input v-model="addForm.name" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="分类" label-width="100px">
						<el-select v-model="addForm.category" placeholder="请选择分类">
							<el-option v-for="item in attributes" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="标题一" label-width="100px">
						<el-input v-model="addForm.title_1" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="标题二" label-width="100px">
						<el-input v-model="addForm.title_2" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="标题三" label-width="100px">
						<el-input v-model="addForm.title_3" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="描述" label-width="100px">
						<el-input v-model="addForm.description" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="背景图" label-width="100px">
						<el-input v-model="addForm.background_img" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="展示图" label-width="100px">
						<el-input v-model="addForm.big_img" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="元素" label-width="100px">
						<el-input v-model="addForm.elements" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="链接" label-width="100px">
						<el-input v-model="addForm.links" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="扩展数据" label-width="100px">
						<el-input v-model="addForm.extras" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="状态" label-width="100px">
						<el-select v-model="addForm.status" placeholder="请选择状态">
							<el-option label="启用" value="1"></el-option>
							<el-option label="禁用" value="0"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="排序号" label-width="100px">
						<el-input v-model="addForm.sort" type="number"></el-input>
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
					<el-form-item label="标题一" label-width="100px">
						<el-input v-model="selectTable.title_1" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="标题二" label-width="100px">
						<el-input v-model="selectTable.title_2" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="标题三" label-width="100px">
						<el-input v-model="selectTable.title_3" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="描述" label-width="100px">
						<el-input v-model="selectTable.description" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="背景图" label-width="100px">
						<el-input v-model="selectTable.background_img" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="展示图" label-width="100px">
						<el-input v-model="selectTable.big_img" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="元素" label-width="100px">
						<el-input type="textarea" v-model="selectTable.elements" autocomplete="off" rows="8"></el-input>
					</el-form-item>
					<el-form-item label="链接" label-width="100px">
						<el-input type="textarea" v-model="selectTable.links" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="扩展数据" label-width="100px">
						<el-input type="textarea" v-model="selectTable.extras" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="状态" label-width="100px">
						<el-select v-model="selectTable.status" placeholder="请选择状态">
							<el-option label="启用" value="1"></el-option>
							<el-option label="禁用" value="0"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="排序号" label-width="100px">
						<el-input v-model="selectTable.sort" type="number"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="updateDialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="updateComponent">确 定</el-button>
				</div>
			</el-dialog>
			<el-dialog title="查看图片" :visible.sync="iconDialogVisible" width="30%">
				<img :src="icon">
			</el-dialog>
			<el-dialog title="查看数据" :visible.sync="dataDialogVisible" width="30%">
				<p>{{rowData}}</p>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	import headTop from "../components/headTop";
	import { baseUrl, baseImgPath } from "@/config/env";
	import {
		componentList,
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
				limit: 15,
				count: 0,
				tableData: [],
				currentPage: 1,
				selectTable: {},
				addDialogFormVisible: false,
				updateDialogFormVisible: false,
				iconDialogVisible: false,
				dataDialogVisible: false,
				selectedCategory: [],
				searchForm: {
					name: "",
					category: ""
				},
				addForm: {
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
						label: "教育",
						value: "edu"
					},
					{
						label: "政企",
						value: "gov"
					}
				],
				icon: "",
				rowData: null
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
					await this.getComponentList();
				} catch (err) {
					console.log("获取数据失败", err);
				}
			},
			async getComponentList() {
				try {
					const res = await componentList({
						offset: this.offset,
						limit: this.limit,
						name: this.searchForm.name,
						category: this.searchForm.category
					});
					this.count = res.data.data.count;
					this.tableData = []; //清空数据，否则分页会累积
					res.data.data.result.forEach(item => {
						this.tableData.push(item);
					});
				} catch (error) {
					console.log(error);

					this.$message({
						type: "error",
						message: error.response.data.message
					});
				}
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
				this.selectTable.elements = JSON.stringify(row.elements);
				this.selectTable.links = JSON.stringify(row.links);
				this.selectTable.extras = JSON.stringify(row.extras);
				this.updateDialogFormVisible = true;
			},
			viewData(data, type) {
				if (type == "image") {
					this.icon = data;
					this.iconDialogVisible = true;
				} else {
					this.rowData = data;
					this.dataDialogVisible = true;
				}
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
					this.addForm.status = Number(this.addForm.status);
					this.addForm.sort = Number(this.addForm.sort);
					this.addForm.elements = JSON.parse(this.addForm.elements);
					this.addForm.links = JSON.parse(this.addForm.links);
					this.addForm.extras = JSON.parse(this.addForm.extras);
					const result = await addComponent(this.addForm);
					if (result.status == 200) {
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
				let that = this;
				try {
					let updateObj = {
						_id: that.selectTable._id,
						name: that.selectTable.name,
						category: that.selectTable.category,
						status: that.selectTable.status,
						title_1: that.selectTable.title_1,
						title_2: that.selectTable.title_2,
						title_3: that.selectTable.title_3,
						description: that.selectTable.description,
						background_img: that.selectTable.background_img,
						big_img: that.selectTable.big_img,
						elements: [],
						links: [],
						extras: [],
						sort: Number(that.selectTable.sort)
					};

					let eles = JSON.parse(that.selectTable.elements);
					updateObj.elements = eles;
					let links = JSON.parse(that.selectTable.links);
					updateObj.links = links;
					updateObj.extras = JSON.parse(that.selectTable.extras);
					const res = await updateComponent(updateObj);
					if (res.status == 200) {
						that.$message({
							type: "success",
							message: "修改成功"
						});
						that.updateDialogFormVisible = false;
						that.getComponentList();
					} else {
						throw new Error(res.message);
					}
				} catch (err) {
					that.$message({
						type: "error",
						message: err.message
					});
					console.log("修改失败");
				}
			},
			async handleDelete(index, id) {
				try {
					const res = await deleteComponent(id);
					if (res.status == 200) {
						this.$message({
							type: "success",
							message: "删除成功"
						});
						this.getComponentList();
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
