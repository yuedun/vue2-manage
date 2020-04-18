<template>
	<div class="section-nine">
		<div class="cooperation-box width-visual">
			<h2 class="common_title">学术合作<i></i></h2>
			<ul class="clearfix">
				<li class="col_3"><img src="../assets/VIPKID_files/logo01_d376abad.png" alt="HMH出版集团"></li>
				<li class="col_3"><img src="../assets/VIPKID_files/logo02_f23b178d.png" alt="牛津大学出版社"></li>
				<li class="col_3"><img src="../assets/VIPKID_files/logo03_52e3d050.png" alt="美国国家地理学习"></li>
				<li class="col_3"><img src="../assets/VIPKID_files/logo04_f27f1ba9.png" alt="SSAT中国">
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["pcomponent"],
		data() {
			return {
				component: this.pcomponent
			};
		},
		created() {
			console.log("子组件接收父组件值：", this.component);
		},
		methods: {}
	};
</script>
<style>
*[contenteditable]:hover {
	background-color: #f6f7ff;
}
</style>