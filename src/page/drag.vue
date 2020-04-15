<template>
	<div class="fillcontain">
		<head-top></head-top>
		<el-row :gutter="10">
			<el-col :span="6">
				<h3>组件列表</h3>
				<draggable class="list-group wrapper" :list="list1" group="people" @change="log">
					<div class="list-group-item item" v-for="(element, index) in list1" :key="element.name">
						{{ element.name }} {{ index }}
					</div>
				</draggable>
			</el-col>

			<el-col :span="12">
				<h3>展示区</h3>
				<draggable class="list-group wrapper" :list="list2" group="people" @change="log">
					<div class="list-group-item item" v-for="(element, index) in list2" :key="element.name">
						{{ element.name }} {{ index }}
					</div>
				</draggable>
			</el-col>

			<el-col :span="6">
				<h3>编辑区</h3>
				<p class="item">sdddddddddddddddddddddd</p>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import draggable from "vuedraggable";
	import headTop from "../components/headTop";
	export default {
		name: "two-lists",
		display: "Two Lists",
		order: 1,
		components: {
			draggable,
			headTop
		},
		data() {
			return {
				list1: [
					{ name: "John", id: 1 },
					{ name: "Joao", id: 2 },
					{ name: "Jean", id: 3 },
					{ name: "Gerard", id: 4 }
				],
				list2: [
					{ name: "Juan", id: 5 },
					{ name: "Edgard", id: 6 },
					{ name: "Johnson", id: 7 }
				]
			};
		},
		methods: {
			log: function(evt) {
				console.log(evt);
			}
		}
	};
</script>
<style scoped>
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
</style>