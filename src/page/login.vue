<template>
	<div class="login_page fillcontain">
		<transition name="form-fade" mode="in-out">
			<section class="form_contianer" v-show="showLogin">
				<div class="manage_tip">
					<p>网站组装后台</p>
				</div>
				<el-form :model="loginForm" :rules="rules" ref="loginForm">
					<el-form-item prop="username">
						<el-input v-model="loginForm.username" placeholder="用户名"></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
					</el-form-item>
				</el-form>
			</section>
		</transition>
	</div>
</template>

<script>
	import { login, getAdminInfo } from "@/api/getData";
	import { mapActions, mapState } from "vuex";

	export default {
		data() {
			return {
				loginForm: {
					username: "",
					password: ""
				},
				rules: {
					username: [
						{ required: true, message: "请输入用户名", trigger: "blur" }
					],
					password: [
						{ required: true, message: "请输入密码", trigger: "blur" }
					]
				},
				showLogin: false
			};
		},
		mounted() {
			this.showLogin = true;
			if (!this.adminInfo._id) {
				this.getAdminData();
			}
		},
		computed: {
			...mapState(["adminInfo"])
		},
		methods: {
			...mapActions(["getAdminData"]),
			async submitForm(formName) {
				this.$refs[formName].validate(async valid => {
					if (valid) {
						try {
							const res = await login({
								userName: this.loginForm.username,
								password: this.loginForm.password
							});
							if (res.status == 200) {
								this.$message({
									type: "success",
									message: "登录成功"
								});
								document.cookie =
									"jwt=" +
									escape(res.data.token) +
									";expires=" +
									new Date(res.data.expire).toGMTString();
								this.$router.push("manage");
							} else {
								this.$message({
									type: "error",
									message: res.message
								});
							}
						} catch (error) {
							this.$message({
								type: "error",
								message: error.message
							});
						}
					} else {
						this.$notify.error({
							title: "错误",
							message: "请输入正确的用户名密码",
							offset: 100
						});
						return false;
					}
				});
			}
		},
		watch: {
			adminInfo: function(newValue) {
				if (newValue.id) {
					this.$message({
						type: "success",
						message: "检测到您之前登录过，将自动登录"
					});
					this.$router.push("manage");
				}
			}
		}
	};
</script>

<style lang="less" scoped>
@import "../style/mixin";
.login_page {
	background-color: #324057;
	background-image: url("http://hopefully-img.yuedun.wang/login-background.jpg?imageMogr2/quality/50");
}
.manage_tip {
	position: absolute;
	width: 100%;
	top: -100px;
	left: 0;
	p {
		font-size: 34px;
		color: #fff;
	}
}
.form_contianer {
	.wh(320px, 220px);
	.ctp(320px, 210px);
	padding: 25px;
	border-radius: 5px;
	text-align: center;
	background-color: #fff;
	.submit_btn {
		width: 100%;
		font-size: 16px;
	}
}
.tip {
	font-size: 12px;
	color: red;
}
.form-fade-enter-active,
.form-fade-leave-active {
	transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
	transform: translate3d(0, -50px, 0);
	opacity: 0;
}
</style>
