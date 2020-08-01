<template>
	<div class="section-nine" :title="page_title">
		<div class="cooperation-box width-visual">
			<h2 class="common_title" @click="edit('title_1')">{{component.title_1}}<i></i></h2>
			<ul class="clearfix">
				<li class="col_3" v-for="item in component.elements" :key="item.title_1"><img :src="item.img" :alt="item.title_1"></li>
			</ul>
		</div>
		<el-dialog title="编辑文本" :visible.sync="dialogVisible" width="20%" custom-class="mydialog">
			<el-input type="textarea" v-model="rawhtml" size="small" width="150px;"></el-input>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="editOK">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import { Mixins } from "@/common/mixins";
	import { baseImgPath } from "@/config/env";
	export default {
		mixins: [Mixins],
		props: ["pcomponent"],
		data() {
			return {
				baseImgPath,
				component: this.pcomponent,
				dialogVisible: false,
				rawhtml: "",
				currentProp: "",
				page_title: this.$vnode.key,
			};
		},
		created() {
			console.log(this.$vnode.key + "子组件接收父组件值：", this.component);
		},
		methods: {},
	};
</script>
<style lang="less">
.mydialog {
	opacity: 70%;
}
</style>