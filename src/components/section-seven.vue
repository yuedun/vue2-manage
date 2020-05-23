<template>
	<div class="section-seven" title="section-seven">
		<div class="con-box width-visual">
			<h2 class="common_title" @click="edit('title_1')">{{component.title_1}}<i></i></h2>
			<img class="map-bg" src="../assets/YUEDUN_files/promise_be75ce5d.png">
			<div class="person-img"><img class="img" src="https://ww1.yunjiexi.club/2020/02/05/11NCj.jpg" alt="">
			</div>
			<ul class="clearfix color-main">
				<li class="col_6 left-con"></li>
				<li class="col_6 right-con"><img class="mark-con" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABgCAMAAADYWPdNAAAAmVBMVEUAAAD/yBj/xhf/yBf/xxf/5jj/xxb/xxb/xxb/xhf/yhv/1R7/xxf/yBf/xxb/yBb/xxf/xxb/xxf/xxf/0iX/xxf/xxb/xhb/xxb/xxf/xxb/yBf/xxf/yBf/yRn/yhr/0Rn/xxb/xxb/yBb/xxj/yBj/yBj/xxb/xxb/xxb/yRb/xxf/xhb/xhf/xxf/xxf/yBf/yxr/xhb0h+/EAAAAMnRSTlMAH6aGugT68+/qGQjIWX9P4NyceA332NKhe3FqYzYzIhStlIxUSD7lwrdDLMyxqL5hJ7hZXSwAAAJ3SURBVGje7ZbbctpAEEQRRlcE4iYkMBhsxcZcgp35/49LUi4qRurRtvY1e55b1audnZ7pGdhXzz1bsvSJEyZVKJJZmlxEUkY4XIXyh+nQwmSbyl8+zcofE/li3NkkKeWLeGFQegO5kXsdXR5DufHSrtxE8g/wCkwHvBGc297XUe547fF8hvKd95b6HeSepc+aDGdSY6RebSB15uyFpVLnoLyCF2kSJpTLUyxNHpDSvwriyricQgEEv5rKxUAwb0Sj5QIZNCv4IQqFb0yXQCDNuPJ/isradGO5aExqcVWKTrRvDzFYFxhXK2lhuW1NsYPoBNV36avoTEettfHTFpPZXSbuIv1yN4YHMNNNyh17oMo3PWX9qm8D1FiY2Bic+1gUynrSnAPBHM058yyYqBmbqfoWjWTahTXH4UgwK7OLP1VckmbITLR/MbNWWgBc9tzeZR9hFw/MvFgQeF+gXmjkoXmJQxksaOwJR6iIsDIBWE3ZE/bVJrac/0sYTnD+HwXwTrm88aM2gQGAr0zPTOP6OMcDnGEY8ScsuP+mq3rEgw9XhqLkT7gRALk1x+iEfIxPOJct7kxIiGPGNmgCvAGdBXDibNBa99GjSxP59qVZ8w125Vx2AthhbUFXkRq5haLN4YkoxtJkhqUekOY9jj5fmhOQXkibC+prfiyVpA3KTQ9LH+BAo1igVugwMDL795x2aOSzfaL1FW0K75ci6xCGaDMFCwMbU5WiPQAtmWiPHfbU2L4717A76WkTAxm7qmwUbQC2bNJm3CF0gTQcNJmTnV2AbxNkg+lDGw7P2TgbZ+NsnI2zcTbOxtk4G2fjbJyNs3E2/7PNb5ffIRjZXgSoAAAAAElFTkSuQmCC">
					<div class="promise-con">
						<dl class="clearfix" v-for="(item, index) in component.elements" :key="item.title_1">
							<dt class="fl"><img class="fwcn w100" :src="item.icon" :alt="item.title_1"></dt>
							<dd class="fl">
								<h5 class="font20 bold500" @click="edit('elements', index, 'title_1')">{{item.title_1}}</h5>
								<p class="font14 color-lgray" @click="edit('elements', index, 'description')">{{item.description}}</p>
							</dd>
						</dl>
					</div>
					<div class="register">
						<div class="obtain-btn margin-auto js-online-service" id="onLineZxBtn">在线咨询</div>
					</div>
				</li>
			</ul>
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
				currentProp: ""
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