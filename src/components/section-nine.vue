<template>
	<div class="section-nine" title="section-nine">
		<div class="cooperation-box width-visual">
			<h2 class="common_title">{{component.title_1}}<i></i></h2>
			<ul class="clearfix">
				<li class="col_3" v-for="item in component.elements" :key="item.title_1"><img :src="item.img" :alt="item.title_1"></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import edit from "@/common/edit";
	import { baseImgPath } from "@/config/env";
	export default {
		props: ["pcomponent"],
		data() {
			return {
				baseImgPath,
				component: this.pcomponent,
				dialogVisible: false,
				rawhtml: "",
				currentProp: ""
			};
		},
		created() {
			console.log(this.$vnode.key + "子组件接收父组件值：", this.component);			
		},
		methods: {
			...edit()
		}
	};
</script>
<style lang="less">
.mydialog {
	opacity: 70%;
}
</style>