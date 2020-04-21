<template>
	<div class="footer" title="footer">
		<div class="footer-info clearfix width-visual">
			<ul class="authentication fl">
				<li>
					<a href="http://www.itrust.org.cn/Home/Index/wx_certifi/wm/1805016993"><img src="../assets/YUEDUN_files/renzheng_d14867a5.png"></a>
				</li>
				<li>
					<a href="http://www.315online.com.cn/member/315150028.html"><img src="../assets/YUEDUN_files/jiaoyi_df96bb77.png"></a>
				</li>
				<li>
					<a href="javascript:;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAA8CAMAAADWtUEnAAAAn1BMVEUAAABjY2NiYmKPj49iYmJjY2NjY2OEhIRmZmaPj4+EhISEhISMjIyLi4tiYmKXl5daWlq/v7+tra1vb2+hoaGTk5N4eHiDg4OoqKhkZGSurq51dXWOjo5ycnKVlZV8fHxpaWlmZmaenp6Hh4eKiopsbGy7u7u4uLiZmZmAgIC1tbWNjY2wsLClpaWbm5uQkJBeXl6qqqq9vb2ysrJ0dHR+049DAAAADnRSTlMA6Pz2zbJYQCHslpLo57g5nF0AAAVXSURBVGjezdqLcqIwFIDh7v1+QoAQbuEOiohW7fs/254TpKzbrQstHflnl06pnfkmkBTQO+rHN7Zmr83kMGfv3336fNf15QPDlgakPn7VPsGWCoR3JPzAlguEj3j+sSUD4fPdr2UDP92JZQPf3bFlA98vHQgzAYt8yUARe6VYLnD/YBhWtNhDHFqGYaho1DmYmxKGPLcGbL+Gx3YFeOdmAu6VgQX/nSSlRcXctHQJYDWPNIpbcM7iB8XPRXMAI8egnP/PYptfZAPW8mKNtdylLwHuibhU3N9h9ixACQYVszHASDwWaaDF3ZAPSQBvtfIUF3osZwDuLUNXs1HAlLYZbSHVwAxNlwlUzQes7w2dHLVQZyukxdwFKl1l9A13ANxNV4u7gyMPEXiysfa1QGEZvW8U0KJMLq1zkG40MMq6BIC35QSsqurIcSNeBczB6MrZOOCRX+ZJviVgLLtiAMldBFI2f+U6SJNXd5+zkcA9To3jUWAub3ELVlYQcMu7fADLdnjohJjPQ8p7KVAkva+YcrEQ6tM/3RxLoDwNVEGXoj0IFHwofSGwgcE3AWhVVaJn6g66CKjsPlIjsFRqvXK5fQqUeuEhlve9r2FTgPWGV1msjlU5AJFUraiKP3RAwFmS29yq9i89Bx3jHDRTrwedXcU5b+ACmAPVPAKTrU+TJDzGLwJG1qMvnH7BmjY4mY+ZugK0tkeHgJ5/lE+A0fjpQb6JwCTYr/gpjn0iDkDfpvwe6B/rbpkpN1z9DQzKWlz/4+Y9+vZsGjCjo7tqaOWQJ87z585BmffroIqejmBqGA/hlSs/uBi/ScDAZXmQQlfeaujGgeAkuz0nRS/aFECx0zMLdUgTNHhuFIv7YfxuddNUGxhI9q9yY/Dd7q5OGZT6x3SpL3w3AwowqOSJITb67sOb3hcX/x4lZ/A1N75xj/t5+oyvuPmThfLpGAbGY/ntH32I82riiX7Pw+Crl/Bspl9PyqfjF7NRwKQAqolzwGz8H5VAlVZXqr/J8JUZ6FRIL0yBEgoguwIcRM7fvmDs0631DkjlMNzGduA4TDjOA5LtrhigdQ8r1z1UrtsA1logI6CSk4dW5xow8oyuYpgfVBmNBUKYrA6HzfZQANhxtNYJ+LMkUYckscwkQY+J1I158Pf0qyHz/c3J94tngFhjdHkRTeq+RLBxQI+O4RagqYEuADyQBSYRVfalOMqOcmQuZABAL04OALWgC+8AkAxp+fwIDtMiloMPBBsJLO2thE2RS1nE6XblQXy+b2MuVtFGosR0dlGeR2sCdvt9AZ65CcAHwl4D7vtVz7j8AzL2EIcSTrHpNG2qct+DjEw70CU+6HKZwg7R8fpiBMvGDsBWAMy5BmSW0Tcs0NOAPrjKJhQCUx1N1oyAlk2H0C40sD6PoIkjuKVRQ2CRA7jeVWD+NzBn04BWCy5UjgYmKxNboTCr9Qi2AZAWganpx0DRCFIaGGToh6vA6P7SJ9k0oL1mInKqJNdAFzAzBWWCBgYt4MbVIwhODD62rWgbEZAOuWyuACl14avZNCA+34udeNs0tgb6MbZNaQChRCC0DsAhgJ2k1TL/ewQfgiZo80BdBeaXvolAK2nBc0to9xq4ibBNCrQ+nxj9vASZ0a0yjpxp/Q1kmU5cAWLeVN8ApDzoU/QP6xxp2r8ggYu8fsCsdNxD9Ppx/uYLfSPH6h8gLPWdpqh7fi8W/FbYvpaCTch/ozcTBZup0wreoHd3P+cCVi28QZ/uvs/ky7iEN+jzbB+q2PjwBn2c7WMph8qC+Xv3da4P9pjbt/B9JB/1/dvrTj+3zWHeho9G/QZTWGlK+Psg4AAAAABJRU5ErkJggg=="></a>
				</li>
				<li>
					<a href="/inforcertification"><img src="data:image/png;base64,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"></a>
				</li>
			</ul>
			<div class="copyright fl color-main">
				<p class="copy">
					<span>© VIPKID 京ICP证 150842号</span>
					<span>
						<img class="icon" src="../assets/YUEDUN_files/1539606525093-policeEmblem.png">京公网安备 11010102001980号</span><span>北京大米科技有限公司</span><span>违法和不良信息举报电话：95753</span></p>
				<p class="permit">
					<a href="/businesslicenseone">
						<span>出版物经营许可证(京零)字第海170127号</span></a>
					<span>广播电视节目制作经营许可证(京)字第08921号</span>
					<a href="/businesslicensetwo">
						<span class="yingye">营业执照</span></a>
					<span>举报邮箱 VKreport@vipkid.com.cn</span></p>
			</div>
			<div class="copyright-ipad fl color-main">
				<p class="copy">
					<span>© VIPKID 京ICP证 150842号</span>
					<span>
						<img class="icon" src="../assets/YUEDUN_files/1539606525093-policeEmblem.png">京公网安备 11010102001980号</span><span>北京大米科技有限公司</span></p>
				<p class="chuban">
					<a href="/businesslicenseone">
						<span>出版物经营许可证(京零)字第海170127号</span></a>
					<span>广播电视节目制作经营许可证(京)字第08921号</span>
					<a class="yangyelian" href="/businesslicensetwo">
						<span class="yingye">营业执照</span></a>
				</p>
				<p class="permit">
					<span>违法和不良信息举报电话 95753</span><span>举报邮箱 VKreport@vipkid.com.cn</span></p>
			</div>
			<div class="country fr">
				<div class="china">中国<img class="china-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAD1BMVEUoKCiXl5c0NDSIiIhtbW0CrxlgAAAAS0lEQVQY02OgM2BSQOEqG6FIGgorIEsKChohSwoKAqURksKGCGkmIFsZIQ1iMsGlISyoNIwBl3YE0mBREQgXJAmShnBVnBhg9IABAI56CF//sUWqAAAAAElFTkSuQmCC">
				</div>
				<div class="national-ul">
					<ul>
						<li>
							<a class="clearfix" href="https://www.vipkid.com/?vk_fromcode=US">
								<span class="fl">United States</span></a>
						</li>
						<li>
							<a class="clearfix" href="https://kr.vipkid.com/?vk_fromcode=KR">
								<span class="fl">한국</span></a>
						</li>
						<li>
							<a class="clearfix" href="https://vipkid.com.cn/?vk_fromcode=CN">
								<span class="fl">中国</span></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["pcomponent"],
		data() {
			return {
				component: this.pcomponent,
				visible: false
			};
		},
		created() {
			console.log("section-footer子组件接收父组件值：", this.component);
		},
		methods: {
			getData() {
				this.visible = false;
				console.log(this.component);
			}
		}
	};
</script>
<style>
*[contenteditable]:hover {
	background-color: #f6f7ff;
}
</style>