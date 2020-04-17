<template>
	<div class="fillcontain">
		<head-top></head-top>
		<el-row :gutter="10">
			<el-col :span="6" class="col-left">
				<h3>组件列表</h3>
				<draggable class="list-group wrapper" :list="allComponent" group="components" @change="log">
					<div class="list-group-item item" v-for="(element, index) in allComponent" :key="element.name">
						{{ element.name }} {{ element.category }}-{{index}}
					</div>
				</draggable>
			</el-col>

			<el-col :span="18">
				<h3>展示区</h3>
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
	import { componentList, getComponent } from "@/api/getData";
	import headerBox from "../components/header-box";
	import scrollBanner from "../components/scroll-banner";
	import sectionTwo from "../components/section-two";
	import sectionThree from "../components/section-three";
	export default {
		components: {
			draggable,
			headTop,
			sectionTwo,
			scrollBanner,
			headerBox,
			sectionThree,
		},
		data() {
			return {
				limit: 30,
				components: {},
				allComponent: [],
				selectedComponent: []
			};
		},
		created() {
			this.initData();
		},
		methods: {
			async log(evt) {
				if (evt["revemoed"]) {
					await this.getComponent(evt.removed.element._id);
				}
			},
			async initData() {
				try {
					this.getComponentList();
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
			}
		}
	};
</script>
<style scoped>
@import "../assets/VIPKID_files/base.css";
@import "../assets/VIPKID_files/home.css";
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
</style>