<template>
	<div class="fillcontain">
		<head-top></head-top>
		<el-row :gutter="10">
			<el-col :span="6" class="col-left">
				<h3>组件列表</h3>
				<draggable class="list-group wrapper" :list="allComponent" group="people" @change="log">
					<div class="list-group-item item" v-for="(element, index) in allComponent" :key="element.name">
						{{ element.name }} {{ element.category }}-{{index}}
					</div>
				</draggable>
			</el-col>

			<el-col :span="18">
				<h3>展示区</h3>
				<draggable class="list-group wrapper" :list="selectedComponent" group="people" @change="log">
					<component v-for="element in selectedComponent" :key="element.name" v-bind:is="element.name" ></component>
				</draggable>
				<div v-show="!selectedComponent.length" class="empty-info">
					从左侧拖入组件进行表单设计
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import draggable from "vuedraggable";
	import headTop from "../components/headTop";
	import { componentList } from "@/api/getData";
	import sectionTwo from "../components/section-two";
	import scrollBanner from "../components/scroll-banner";
	export default {
		components: {
			draggable,
			headTop,
			sectionTwo,
			scrollBanner,
		},
		data() {
			return {
				offset: 0,
				limit: 10,
				allComponent: [],
				selectedComponent: []
			};
		},
		created() {
			this.initData();
		},
		methods: {
			log: function(evt) {
				console.log(evt);
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
					this.allComponent = []; //清空数据，否则分页会累积
					res.data.data.result.forEach(item => {
						this.allComponent.push(item);
					});

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
.col-left{
	border-right: 1px solid #42b983;
}
</style>