<template>
	<div class="banner-con">
		<img class="banner" src="../assets/YUEDUN_files/banner_bc7bbf4a.png">
		<div class="width-visual content">
			<h1>北美好外教 让孩子爱学敢说</h1>
			<p>VIPKID目前注册在册的北美外教人数超过70,000名</p>
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