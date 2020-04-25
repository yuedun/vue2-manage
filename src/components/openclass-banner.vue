<template>
	<div class="openclass-banner" title="openclass-banner">
		<img class="img" src="../assets/YUEDUN_files/class-banner_9452a787.png" alt="丰富多彩的公开课">
		<div class="openclass-title width-visual">
			<h1>丰富多彩的公开课<br>让孩子拓展视野、快乐学习</h1>
			<h3>为孩子打开五彩缤纷的主题英语世界</h3>
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