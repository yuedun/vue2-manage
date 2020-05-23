<template>
	<div class="section-ten" title="section-ten">
		<h2 class="common_title" @click="edit('title_1')">{{component.title_1}}<i></i></h2>
		<div class="reward-big-box width-visual">
			<div class="reward-box" id="rewardBox">
				<div id="show" rel="autoPlay" style="width: 1064px;">
					<div class="img" style="width: 1064px;">
						<div class="box clearfix" style="">
							<div class="con" style="width: 266px;" v-for="(item, index) in component.elements" :key="index">
								<div class="img-content"><img :src="item.img" alt="">
									<p>{{item.title_1}}<br>{{item.title_2}}</p>
								</div>
							</div>
						</div>
					</div>
					<div class="arrowBtn"><s class="prev"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAAPFBMVEUAAAD4VBX4VBX4VBX4VBX4VBX4VBX4VBX4VBX4VBX4VBX4VBX4VBX4VBX4VBX4VBX4VBX4VBX4VBX4VBXUt8t8AAAAE3RSTlMA9PA1PyKX/Obc2K+GgWlMMRMF2GaxgQAAAHpJREFUWMPt2EkKwCAQBVFjopnHvv9dk50hO6EbOlB1gAeiG38gIqJ36VQnj0kkK5ttlKfNwJTZwJRsYDbJwOwwMTExMTHrTOkblcb1CimKdkvYRb3BBDU5vslFfZ6U74eKioqKivpTNXn/mpcRwf/cUYYZ/xMSEVFlN0XAMTXlyjfNAAAAAElFTkSuQmCC"></s><s class="next"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAAPFBMVEUAAAD5VRb5VBX6Vxj7VRj4VRb8Vxj5VRX4VBX4VRb5VRX5VRb5Vhf5VRb6VRb4Vxf/VRr/Wxr/ZjP4VBUiiPj+AAAAE3RSTlMA9PA1P5gk/Obc2K+GgWlMHhMFCzxlZwAAAHxJREFUWMPt2EsKgCAURuG0tPfz7n+vBREGTRrcCxbnLOAD0Yl/QUREb1ujvhlEulLZnOTIK6u9GKhBDNToLNQKFRUVFRX1rm5j61SqJamDaOeXohH1ZhPU5PgWF5X3Q8XExMTE/LeZPry5f82vESH/ueMcZj4xIRERPdsBqekxMaD+sooAAAAASUVORK5CYII="></s>
					</div>
				</div>
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