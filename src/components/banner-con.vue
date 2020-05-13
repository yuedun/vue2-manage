<template>
	<div class="banner-con" title="banner-con">
		<img class="banner" :src="component.background_img">
		<div class="width-visual content">
			<h1>{{component.title_1}}</h1>
			<h3>{{component.description}}</h3>
		</div>
	</div>
</template>

<script>
	import edit from "@/common/edit";
	export default {
		props: ["pcomponent"],
		data() {
			return {
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