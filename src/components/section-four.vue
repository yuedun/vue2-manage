<template>
	<div class="section-four" :title="page_title">
		<h2 class="common_title" @click="edit('title_1')">{{component.title_1}}<i></i></h2>
		<ul class="width-visual clearfix font18">
			<li class="col_4" v-for="item in component.elements" :key="item.title_1">
				<div class="con">
					<a id="learnOne" href="javascript:void(0)">
						<img class="w100" :src="item.img" alt="item.title_1">
						<div class="text">
							<p>{{item.description}}</p>
							<img class="gray" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAUVBMVEUAAAD////k5OTe3t7e3t7d3d3e3t7e3t7e3t7e3t7e3t7e3t7e3t7j4+Pk5OTj4+Pm5ubt7e3d3d3d3d3d3d3e3t7e3t7f39/f39/g4ODd3d14Xis6AAAAGnRSTlMAAw7LxPPh1Lymn39UHxcSCgfatrSwlY6GKTCM+/UAAACDSURBVEjH7dVHDoQwDEBRQpmh9+r7HxSZNUX+a/8tehKKHCfyPA8VymzuCKxFJIkhlBTIkF+yt8s+VZkPdhknKicsl2CX3V9lAWTL5aiyjOw1P5UrltvT5yqT9/Z7d8hnFYb0V+nhQLfSAcAjR4ecXit6kenqoMuKrke6kPET4HmeqRNs6hnJFFxqGgAAAABJRU5ErkJggg=="><img class="arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAVFBMVEUAAAD/Yh//XV35VBX4VRX5VBX5VRX5VBb4VBX4VBb5VBX5VBX5VBb5VRb5VRX/Vhj/XBv/VRz/WyH/ZzP5VBX4VRX4Vhb6VBb5Vhf5Vxn/YCD4VBWJU+juAAAAG3RSTlMACwLz4dTNyMK8ta2jf1QfFxIPBdqclY6GKQgwtIA2AAAAhUlEQVRIx+3VRw7AIAwAQdJ77/H//xk55xSxZ+99JISMcZZlocI6KgcCWxFJRwglC8BRC5U5kEGusjiBzFSWk78cU5UVkENyy9Bf9resiZxVLs6/Lla5Yrm5l5pIvtuf3SG/NRjSo9LLgW6lA4BHjg45fVb0IdPVQZcVXY90IeMvwLIsry5W6xsPUg8CnQAAAABJRU5ErkJggg==">
						</div>
					</a>
				</div>
			</li>
		</ul>
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
	export default {
		mixins: [Mixins],
		props: ["pcomponent"],
		data() {
			return {
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