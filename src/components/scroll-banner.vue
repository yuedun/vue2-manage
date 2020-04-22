<template>
	<div class="home-container" title="home-container">
		<div class="home-banner-container">
			<div id="focus-banner">
				<ul class="banner-list" id="focus-banner-list">
					<li class="bannerbox2 hidebanner" id="focus-banner-listone" style="z-index: 6;">
						<div class="focus-banner-text text2 width-visual"><img class="text-txt2" src="../assets/YUEDUN_files/new-liutao-1115_ad249834.png" alt="VIPKID在线青少儿英语"></div>
					</li>
					<li class="bannerbox3 hidebanner" style="z-index: 5;"><img class="banner-img" src="../assets/YUEDUN_files/banner3_1_6d3a3b3e.jpg">
						<div class="focus-banner-text text3 width-visual"><img class="img" src="../assets/YUEDUN_files/text3_87af9482.png" alt="7万名北美好外教让孩子爱学敢说"></div>
					</li>
					<li class="bannerbox3-1 hidebanner" style="z-index: 4;"><img class="banner-img" src="../assets/YUEDUN_files/banner3_650b121a.jpg">
						<div class="focus-banner-text text3-1 width-visual"><img class="img" src="../assets/YUEDUN_files/text3_1_a228e6f7.png" alt="在线青少儿英语全项进阶课程"></div>
					</li>
					<li class="bannerbox6 hidebanner" style="z-index: 3;"><img class="banner-img" src="../assets/YUEDUN_files/banner6_f2e0cc55.jpg">
						<div class="focus-banner-text text6 width-visual"><img class="img" src="../assets/YUEDUN_files/text6_5ff7607d.png" alt="在线学英语随时随地便捷高效"></div>
					</li>
					<li class="bannerbox4 hidebanner" style="z-index: 2;"><img class="banner-img" src="../assets/YUEDUN_files/banner-4_b3ddc79e.png"></li>
					<li class="bannerbox8 hidebanner showbannerAnimation" style="z-index: 1;"><img class="banner-img" src="../assets/YUEDUN_files/banner8_0e37261f.png">
						<div class="focus-banner-text text8 width-visual"><img class="img" src="../assets/YUEDUN_files/text8_6548ac46.png" alt="21世纪英语演讲大会"></div>
					</li>
				</ul>
				<ul class="focus-bubble" id="focus-bubble">
					<li class=""><span></span></li>
					<li class=""><span></span></li>
					<li class=""><span></span></li>
					<li class=""><span></span></li>
					<li class=""><span></span></li>
					<li class="current"><span></span></li>
				</ul>
			</div>
			<div class="register-box" id="jsRegisterBox">
				<div class="container width-visual">
					<div class="register-con" style="color: rgb(0, 0, 0);">
						<div class="title">免费领取<br>价值<span class="price">288元</span><br><span class="name">试听体验</span>
						</div>
						<div class="register-tel"><img class="tel" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAMAAABkKdmIAAAANlBMVEUAAADLy8vJycnNzc2goKCYmJiXl5eXl5eYmJiZmZmYmJiqqqqYmJiXl5eXl5fKysrJycmXl5cRP6uzAAAAEHRSTlMAf8wzG+f2x6ZrTQnttrNl4LK9gAAAAIxJREFUSMftlksOgCAMRFHbgtTf3P+yuqdgSBPjgrds8jLAgk7wsUaBicTVNg40OMwMcNZgoplh5UTkUCUjGlOB1hWFGFMgNACqw3MqobYyXyXLUIYylKF8pfj/MZsfKZSYE/UotOFhow4lYSfakToUBj1RYIfiOJj/+gKtP7JCHEvcUxXeC0l/7XFxA0HBMNBy1SRTAAAAAElFTkSuQmCC"><input class="registeredRightIpt" type="text" placeholder="请输入您的手机号" maxlength="11">
							<div class="error-tips"><img class="arrwoDown" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAQCAMAAAAyEe/dAAAAM1BMVEUAAAD/yBf/xxb/xxf/xxb/xxf/xxb/3yD/xxj/xhf/xxf/xxb/xxr/xhz/xhb/xhn/xhbQ6G/hAAAAEHRSTlMAIH/tzZxkCEn337YyEotIs2RkdwAAAF1JREFUGNN1z0kOgDAQA0Fnm+zA/18LQgThMKlrHywjHEsB0a+aj4BxenMGl6THHTerNYtH/beKoZe5lY5Xy9xyw4dwFJDA71n0/J4Zx+9ZGjFBYen9bKM2MyK0dwKWxA8Y422kxwAAAABJRU5ErkJggg=="><span>请输入正确的手机号</span>
							</div>
						</div>
						<div class="registered-auditions" id="jsRegisterBtn">立即领取</div>
					</div>
				</div>
			</div>
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
<style>
.mydialog {
	opacity: 70%;
}
</style>