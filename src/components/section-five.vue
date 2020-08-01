<template>
	<div class="section-five text-center" :title="page_title">
		<video id="jsVideoBoxCon" src="https://image.vipkid.com.cn/market/file/1539516532744-waijiaodahui_bg.mp4" poster="https://ww1.yunjiexi.club/2019/12/20/5eflU.jpg" autoplay="autoplay" preload="preload" loop="loop" muted="">
		</video>
		<div class="video-bg" id="jsVideoBgPoster">
			<img src="https://ww1.yunjiexi.club/2019/12/20/5eflU.jpg">
		</div>
		<div class="main-con">
			<h2 class="common_title" @click="edit('title_1')">{{component.title_1}}<i></i></h2>
			<ul class="clearfix font48 width-visual">
				<li class="col_3">
					<div class="font52 num">70,000<span class="font22">名</span></div>
					<p class="font16">北美优质外教</p>
				</li>
				<li class="col_3">
					<div class="font52 num">100<span class="font22">%</span></div>
					<p class="font16">纯北美优质外教</p>
				</li>
				<li class="col_3">
					<div class="font52 num">5<span class="font22">%</span></div>
					<p class="font16">筛选通过率不高于5%</p>
				</li>
				<li class="col_3">
					<div class="font52 num">100<span class="font22">%</span></div>
					<p class="font16">背景调查机构合作</p>
				</li>
			</ul>
			<div class="register clearfix">
				<div class="play-btn" id="teacherDahuiBtn" data-video="https://video.vipkid.com.cn/1565570124505-vipkid-teacher.mp4"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAD9JREFUCNd9zbENACAIRFEqXZvRGIURGICA+YXYecULCYGTlwVbwSAgoaAVDAISClrB7lSzDfC5nX8BPm3yyQEJuiNId8sQ3gAAAABJRU5ErkJggg==">播放视频
				</div><a href="#/teachers">
					<div class="know-btn" id="homeToTeachersBtn">了解北美外教</div>
				</a>
			</div>
		</div>
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