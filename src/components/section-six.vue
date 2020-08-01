<template>
	<div class="section-six text-center" :title="page_title">
		<h2 class="common_title" @click="edit('title_1')">{{component.title_1}}<i></i></h2>
		<ul class="width-visual clearfix color-main">
			<li class="col_4">
				<div class="hover-con"><img class="icon-img" src="../assets/YUEDUN_files/icon01_189746f0.png" alt="AI赋能">
					<p class="font20 bold500">AI赋能</p>
					<p class="detail font14">通过大数据和人工智能建立个性化学习路径</p>
				</div>
			</li>
			<li class="col_4">
				<div class="hover-con"><img class="icon-img" src="../assets/YUEDUN_files/icon02_10ad16e8.png" alt="星云系统">
					<p class="font20 bold500">星云系统</p>
					<p class="detail font14">高可靠，低延时网络系统，覆盖全球35个国家，在16国55城建立中心传输节点</p>
				</div>
			</li>
			<li class="col_4">
				<div class="hover-con"><img class="icon-img" src="../assets/YUEDUN_files/icon03_414628a2.png" alt="安全保护体系">
					<p class="font20 bold500">安全保护体系</p>
					<p class="detail font14 color-lgray">保障数据安全，运营安全，VIPKID是通过ISO信息安全管理体系认证的在线教育企业</p>
				</div>
			</li>
		</ul>
		<div class="register">
			<a href="#/advantage?#ai">
				<div class="obtain-btn margin-auto" id="lookDetailBtn">查看详情</div>
			</a>
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