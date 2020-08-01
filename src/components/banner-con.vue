<template>
	<div class="banner-con" :title="page_title">
		<img class="banner" :src="component.background_img">
		<div class="width-visual content">
			<h1>{{component.title_1}}</h1>
			<h3>{{component.description}}</h3>
		</div>
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
				page_title:this.$vnode.key
			};
		},
		created() {
			console.log(this.$vnode.key + "子组件接收父组件值：", this.component);
		},
		methods: {
	
		}
	};
</script>
<style lang="less">
.mydialog {
	opacity: 70%;
}
</style>