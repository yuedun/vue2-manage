<template>
	<div class="header-box" :title="page_title">
		<div class="header-info-pc header-box-fixed" id="headerInfoPc">
			<div class="header-info clearfix width-visual margin-auto">
				<div class="vipkid fl"><a href="#"><img src="../assets/YUEDUN_files/vipkidlogo_d4b868b3.png" alt="VIPKID在线青少儿英语"></a>
				</div>
				<ul class="banner clearfix fl">
					<li class="toggle sy active"><a href="#"><span>首页</span><i></i></a></li>
					<li class="toggle bmsz"><a href="#teachers"><span>北美师资</span><i></i></a></li>
					<li class="toggle classSystem kctx"><a href="#advantage"><span>课程体系</span><i></i></a>
						<div class="menu-box">
							<a class="kctxys" href="#advantage">课程体系优势</a>
							<a class="zxk" href="#mc">VIPKID MC主修课程</a>
						</div>
					</li>
					<li class="toggle gkk"><a href="#classlist"><span>公开课</span><i></i></a>
					</li>
					<li class="toggle xzzx"><a href="#download"><span>下载中心</span><i></i></a></li>
				</ul>
				<!-- <div class="login-apply fr">
					<div class="submit" id="loginHeaderBtn">登录</div>
					<div class="apply" id="registerHeaderBtn">注册</div>
				</div> -->
			</div>
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
				visible: false,
				page_title:this.$vnode.key
			};
		},
		created() {
			console.log("header-box子组件接收父组件值：", this.component);
		},
		methods: {
			getData() {
				this.visible = false;
				console.log(this.component);
			}
		}
	};
</script>