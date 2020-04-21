<template>
	<div class="section-seven" title="section-seven">
		<div class="con-box width-visual">
			<h2 class="common_title" @click="edit('title_1')">{{component.title_1}}<i></i></h2>
			<img class="map-bg" src="../assets/YUEDUN_files/promise_be75ce5d.png">
			<div class="person-img"><img class="img" src="../assets/YUEDUN_files/liutao_20b7dae2.png" alt="刘涛">
			</div>
			<ul class="clearfix color-main">
				<li class="col_6 left-con"></li>
				<li class="col_6 right-con"><img class="mark-con" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABgCAMAAADYWPdNAAAAmVBMVEUAAAD/yBj/xhf/yBf/xxf/5jj/xxb/xxb/xxb/xhf/yhv/1R7/xxf/yBf/xxb/yBb/xxf/xxb/xxf/xxf/0iX/xxf/xxb/xhb/xxb/xxf/xxb/yBf/xxf/yBf/yRn/yhr/0Rn/xxb/xxb/yBb/xxj/yBj/yBj/xxb/xxb/xxb/yRb/xxf/xhb/xhf/xxf/xxf/yBf/yxr/xhb0h+/EAAAAMnRSTlMAH6aGugT68+/qGQjIWX9P4NyceA332NKhe3FqYzYzIhStlIxUSD7lwrdDLMyxqL5hJ7hZXSwAAAJ3SURBVGje7ZbbctpAEEQRRlcE4iYkMBhsxcZcgp35/49LUi4qRurRtvY1e55b1audnZ7pGdhXzz1bsvSJEyZVKJJZmlxEUkY4XIXyh+nQwmSbyl8+zcofE/li3NkkKeWLeGFQegO5kXsdXR5DufHSrtxE8g/wCkwHvBGc297XUe547fF8hvKd95b6HeSepc+aDGdSY6RebSB15uyFpVLnoLyCF2kSJpTLUyxNHpDSvwriyricQgEEv5rKxUAwb0Sj5QIZNCv4IQqFb0yXQCDNuPJ/isradGO5aExqcVWKTrRvDzFYFxhXK2lhuW1NsYPoBNV36avoTEettfHTFpPZXSbuIv1yN4YHMNNNyh17oMo3PWX9qm8D1FiY2Bic+1gUynrSnAPBHM058yyYqBmbqfoWjWTahTXH4UgwK7OLP1VckmbITLR/MbNWWgBc9tzeZR9hFw/MvFgQeF+gXmjkoXmJQxksaOwJR6iIsDIBWE3ZE/bVJrac/0sYTnD+HwXwTrm88aM2gQGAr0zPTOP6OMcDnGEY8ScsuP+mq3rEgw9XhqLkT7gRALk1x+iEfIxPOJct7kxIiGPGNmgCvAGdBXDibNBa99GjSxP59qVZ8w125Vx2AthhbUFXkRq5haLN4YkoxtJkhqUekOY9jj5fmhOQXkibC+prfiyVpA3KTQ9LH+BAo1igVugwMDL795x2aOSzfaL1FW0K75ci6xCGaDMFCwMbU5WiPQAtmWiPHfbU2L4717A76WkTAxm7qmwUbQC2bNJm3CF0gTQcNJmTnV2AbxNkg+lDGw7P2TgbZ+NsnI2zcTbOxtk4G2fjbJyNs3E2/7PNb5ffIRjZXgSoAAAAAElFTkSuQmCC">
					<div class="promise-con">
						<dl class="clearfix">
							<dt class="fl"><img class="fwcn w100" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAACAVBMVEUAAAA0NDQ1NTVCQkIzMzM2NjZPT08zMzM7Ozv/ZSL/ZCIzMzNBQUH/xqs1NDQzMzM0NDRAQEDq6ur+z7n/z7ozMzMzMzM2NjY0NDQ9PT0zMzP/ZCIzMzMzMzP/ZSMzMzM0NDQ0NDQ0NDQ0NDT/cSr/ZCMzMzP/ZCIzMzP/ZSL/zrozMzM0NDT/ZSM0NDT/ZSL/ZiM0NDQ0NDT/ZSP/ZSM1NTU1NTU3Nzf/1bw6Ojr/ZzD/zrnGVif/zrozMzP/ZSL/ZCL/ZSIzMzP/z7o0NDT/z7k0NDT/aCf/0LozMzP/ZiP/0Lr/0Lo0NDT/0Ls1NTX/ZST/z702Njb/07r/ZiX/aCX/aCT/ZyP/u5z/dTv/ZCP/z7n/z7r/ZCM0NDT/z7r/zrn/ZSL/ybD/z7kzMzP/ZSLeXib/zrn/z7nTWij/zrv/z7r/0Ln/ZyQ0NDT/ZiX/z7r/1L8zMzP/zrn/ZCL6+vr/ayv77+r/aSj+0Lz/Zib69vT94NP/zLf/vaD/tpj+kmT78ez8283908H/x67+wKX+tJX/m3D/iVb/f0j/eUD/cjb/bjH76eH84dX+1sX/ybL8ybL+upz/sI7/q4b/qIL/pn/9oXn/nXT/lWn/j2D749j82cr/s5L8qof/mGv/l2piPy/8YyL6+Pf86eD/hVD/dDhrQS+VSyvPWCblXiT3Oz3xAAAAcnRSTlMAyjX50C9X9A3w4b4IA/zejgQB/vjx6hwYEPj36LWpl35qY0YP+u7b1dDMxXp3cXFjYFhUSDkoIxUVCvHv4tnSxrOwpp6ck4yEgn1nUU5BQDw6NDMtKCMc8+/q49nTzsPCu7ivpaSTko9/eG9mXFM3MCS37UftAAAEdUlEQVRo3u2Z91vTQBjHiwW6iwJCy5IpiAqyFHHvvffeeyfVAjKUKTIEFBT3Xn+l73vXSvukkeRyKT489/2huTd57z7NmzdvkjuLkJCQkJCQkJDQdCi1MMEm6VRWWb7bKNfnkphUlmTwfIHLphS7IXChxKzNhsAJMEJupt5e/s3Qbe4cI2DMq0yGK5QB/ZYZAUsgln6J0C9JgAV4ZoAbavLWOLKdK3+EwbV5zmzHmryaBlPBnkpHIKRfnxC8d23YdlR62MDJVimGrMmR3kcWBCb1+ZrFsqQkYseCI0xgylWSI5wPOgNR2r492nYeMgdcTLgD7zuCwc5Hk7hHncFgx/sBQi42JdTrcOyPwftErY0U25hG7eBHtNaZkVy1OPLL+1SPh9oI+cFbaj988+w12rUmgDF/n3yhmLeyLI8haJRyB5tkubUP7GP3uIMPImeIhhUwILjOE3IL7mghdht6HN3NG7wY84iGOU2mGh2FnxbkUn0Dl970fZzB52DUbhLnTjlKg4Ph1ji49Mmr6vmCS2HUNwgekqPVRAIfjvV3Wb7KF4y18jGeMHBU1IVpLsvp9aaAv8pTgeUdDAVEvU5jme4AcIc6uB1cnsL2gtGSaY30zINRewD8TB3ci3c6bE9yBS/B0wFwkzq4H1zGYbuCa6iLs2HYkX+BX2DpHtYD1qZLeMoP1UPd2k8iDSrnCz5cQh4SLWpgfEg0d2NrE0cwaksA1B5U4b7CoxOkuZszuLgUxx7pVLnAoP5hbK5K5QlGHXJg+ozE4vY0Y/HoJu2b/N8y95bg8G0xSkcjXuB20i73cAajbgWQ3KPgPsD9Y6SdfsCUF/pKJDQ+j+a+I29Br0g7bSeXlz1lKVmMjObxqLxqxn291LjB5fVWWTyRjPoQeR9FcK9YzAJj0UY9GQ7Vq9fEfEmtDZBY5oQaVZONqKfk3unqI6EfC3PN/Uy9c5wkN6RYzwBpvaPcTR6zv48Pn6IfLx9IWvW3Ue7WOHyYN6wM/FVfF72PdsRnRuDn5xB3opXWjZ3xmor49BuxA6FacuJA/OZAvJdLnVvOU+7Z+nhPvqReT4fLu9UzDbM+d8+UK76WmAqINZlasI3PdBNyKTlkWWc6WBnq/2tmT4AFmAt4+f5ZaloN/arVDu73GwNXeSVG2YoMgVMkZrmMgO0Su8qMgOtwGS9Bv05Dvxx2MF3vvGjRrzm4wGwEPA8OLWIA+zFSmsBu9dwqYgAvg36rI2y9o2N/m5sBvEtTVmM8Z8c8UgFH1jNw6ZCa/l6GO1aKYCwKGbh2XFreM6Wbez64FViUuo2R9jOA8zUupm9Dv0zl/04hAdOvOlyDz9fguBwdF9pjXagshjX8pRjoHLsW1wIJyT5FvJhOuMqGHau1Oeei7/wCd0QUNuKuRN330h6XJOmoOvaFEkFvrEryQVL4i2bb0LYt1UfNrEiQJH2BsrskfrJVW7QrtcLGi7teZ5x823J4YHNnMTzM6hblJuZ4vd6sDDao11XgswgJCQkJCQkJCU2j/gADYKV+f5/7LQAAAABJRU5ErkJggg==" alt="服务承诺"></dt>
							<dd class="fl">
								<h5 class="font20 bold500">服务承诺</h5>
								<p class="font14 color-lgray">付费后，每位学员都会与VIPKID签订一份课程服务协议，我们向学员保障服务水平</p>
							</dd>
						</dl>
						<dl class="clearfix">
							<dt class="fl"><img class="szcn w100" src="../assets/YUEDUN_files/icon03_0f850faf.png" alt="师资承诺"></dt>
							<dd class="fl">
								<h5 class="font20 bold500">师资承诺</h5>
								<p class="font14 color-lgray">VIPKID一贯坚持“纯北美外教”的教学理念，我们保证外教的优质教学水平</p>
							</dd>
						</dl>
					</div>
					<div class="register">
						<div class="obtain-btn margin-auto js-online-service" id="onLineZxBtn">在线咨询</div>
					</div>
				</li>
			</ul>
		</div>
		<el-dialog title="提示" :visible.sync="dialogVisible" width="20%" custom-class="mydialog">
			<el-input type="textarea" v-model="rawhtml" size="small" width="150px;"></el-input>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="editOK">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
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
			console.log("section-seven子组件接收父组件值：", this.component);
		},
		methods: {
			edit(prop) {
				this.dialogVisible = true;
				this.currentProp = prop;
				this.rawhtml = this.component[prop];
			},
			editOK() {
				this.component[this.currentProp] = this.rawhtml;
				this.dialogVisible = false;
			}
		}
	};
</script>
<style>
.mydialog {
	opacity: 70%;
}
</style>