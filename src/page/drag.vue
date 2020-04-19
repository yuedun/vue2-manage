<template>
	<div class="fillcontain">
		<head-top></head-top>
		<el-row :gutter="10">
			<el-col :span="4" class="col-left">
				<draggable class="list-group wrapper" :list="allComponent" group="components" @change="log">
					<div class="list-group-item item" v-for="(element) in allComponent" :key="element.name">
						{{ element.name }} {{ element.category }}-{{element.sort}}
					</div>
				</draggable>
			</el-col>

			<el-col :span="20" class="col-right">
				<div class="tools">
					<el-button type="success" @click="getData">保存</el-button>
				</div>
				<draggable class="list-group wrapper" :list="selectedComponent" group="components" @change="log">
					<component v-for="element in selectedComponent" :key="element.name" v-bind:is="element.name" v-bind:pcomponent="element"></component>
					<div v-show="!selectedComponent.length" class="empty-info">
						从左侧拖入组件进行表单设计
					</div>
				</draggable>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import draggable from "vuedraggable";
	import headTop from "../components/headTop";
	import {
		componentList,
		getComponent,
		getWebsiteComponents,
		updateWebsiteComponents
	} from "@/api/getData";
	import headerBox from "../components/header-box";
	import scrollBanner from "../components/scroll-banner";
	import sectionTwo from "../components/section-two";
	import sectionThree from "../components/section-three";
	import sectionFour from "../components/section-four";
	import sectionFive from "../components/section-five";
	import sectionSix from "../components/section-six";
	import sectionSeven from "../components/section-seven";
	import sectionEight from "../components/section-eight";
	import sectionNine from "../components/section-nine";
	import sectionTen from "../components/section-ten";
	import sectionFooter from "../components/section-footer";
	export default {
		components: {
			draggable,
			headTop,
			sectionTwo,
			scrollBanner,
			headerBox,
			sectionThree,
			sectionFour,
			sectionFive,
			sectionSix,
			sectionSeven,
			sectionEight,
			sectionNine,
			sectionTen,
			sectionFooter
		},
		data() {
			return {
				currentId: 0,
				limit: 30,
				components: {},
				allComponent: [],
				selectedComponent: []
			};
		},
		created() {
			console.log("query:", this.$route.query);
			this.currentId = this.$route.query.id;
			this.initData(this.$route.query.id);
		},
		methods: {
			async log(evt) {
				if (evt["revemoed"]) {
					await this.getComponent(evt.removed.element._id);
				}
			},
			async initData(id) {
				try {
					await this.getComponentList();
					if (id) {
						await this.getWebsiteComponents(id);
					}
				} catch (err) {
					console.log("获取数据失败", err);
				}
			},
			async getComponentList() {
				try {
					const res = await componentList({
						offset: this.offset,
						limit: this.limit
					});
					this.allComponent = [];
					res.data.data.result.forEach(item => {
						this.allComponent.push(item);
					});
				} catch (error) {
					this.$message({
						type: "error",
						message: error.response.data.message
					});
				}
			},
			async getWebsiteComponents(id) {
				try {
					const res = await getWebsiteComponents(id);
					this.selectedComponent = res.data.data || [];
				} catch (error) {
					this.$message({
						type: "error",
						message: error.response.data.message
					});
				}
			},
			async getComponent(id) {
				try {
					const res = await getComponent(id);
					this.component = res.data.data;
				} catch (error) {
					this.$message({
						type: "error",
						message: error.response.data.message
					});
				}
			},
			async getData() {
				try {
					const res = await updateWebsiteComponents({
						id: this.currentId,
						data: this.selectedComponent
					});
					if (res.status == 200) {
						this.$message({
							type: "success",
							message: "修改成功"
						});
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
			}
		}
	};
</script>
<style scoped>
@import "../assets/YUEDUN_files/base.css";
@import "../assets/YUEDUN_files/home.css";
.wrapper {
	display: flex;
	justify-content: center;
	width: 100%;
	display: inline-block;
}
.item {
	height: 50px;
	background-color: #42b983;
	color: #ffffff;
	cursor: move;
	margin-bottom: 5px;
}
.col-left {
	border-right: 1px solid #42b983;
}
.col-right {
	overflow: auto;
	height: 1080px;
}
.tools {
	background-color: #dcdfe6;
}
</style>