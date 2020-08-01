<template>
	<div class="home-container" :title="page_title">
		<div class="home-banner-container">
			<div id="focus-banner">
				<ul class="banner-list" id="focus-banner-list">
					<li class="bannerbox6 hidebanner showbannerAnimation" style="z-index: 1;" v-for="item in component.elements" :key="item.title_1">
						<img class="banner-img" :src="item.img">
					</li>
				</ul>
				<ul class="focus-bubble" id="focus-bubble">
					<li class="current" v-for="item in component.elements" :key="item.title_1"><span></span></li>
				</ul>
			</div>
			<!-- <div class="register-box" id="jsRegisterBox">
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
			</div> -->
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