<template>
	<div class="strict-standard" :title="page_title">
		<div class="width-visual">
			<h2 class="common_title" @click="edit('title_1')">严格的外教筛选标准<i></i></h2>
			<p class="strict-desc" @click="edit('description')">筛选通过率不高于5%，所有老师必须兼备：来自北美，本科及以上学历、<br>1年及以上教学或教育辅导经验</p>
			<div class="employment-procedure">
				<ul class="employment-before clearfix">
					<li>
						<div class="employment-content"><img src="../assets/YUEDUN_files/shaixuanjianli_1636c0d4.png" alt="筛选简历"></div>
						<p class="desc">筛选简历</p>
					</li>
					<li class="arrow">
						<div class="employment-arrow"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAwCAMAAACMqWyjAAAAllBMVEUAAADm5ub////m5ubm5ubm5ubv7+/////m5ubm5ubs7Ozp6enm5ubm5ubm5ubm5ubo6Ojm5ubn5+fo6Ojm5ubm5ubm5ubm5ubm5ubn5+fm5ubn5+fo6Ojo6Ojr6+vl5eXl5eXm5ubm5ubm5ubo6Ojo6Ojo6Oju7u7m5ubm5ubm5ubm5ubl5eXm5ubm5ubm5ubt7e3l5eVbsZwQAAAAMXRSTlMA/AZ+9ekJAuJkHBbWxZ5wV1FDMvHdv6eLdVw7LCYM+eXMu7VKNyAR7dLNrZaQhWsO8fJUJwAAATdJREFUSMftlcuOgkAQRbt5yBsEBQEREAV0fN7//7nJmEDPapKxaulZdW9OKpWquuLD31i6HjllnPTV4C3INh0KGRFlCxszJrm2JWYiQSaYXLZGl60mmUN3PXOJFym5MMsxsTbwQ0l1bb8gQ68AAN+iqdwNkK2E0FIAMW3CdAP28vWMgT1tvmwY+jSlHY6UeQiAjTt/q+x9lRdK7LfiF+O7Kq1Yw3QswcHRR5PXLKpdBxx2LKrxJuEnPGf1YeIUaSyu5Ax59VhUwwXoKhZVfW+QxoKFssVa52lWHwChy6JyQyDoWVRaYaAtBQtxCuPOsztVBlwGFpV3lTgnPM2KTjAfFs/u+JC3kefQHNgOzTNv4KuEIId0oXaHHtJCQQ9pBT2kFfSQVtBDmk6uQppOazqCjVoTH/7BN4Z7JHVmipaBAAAAAElFTkSuQmCC">
						</div>
					</li>
					<li class="employment-top">
						<div class="employment-content"><img src="../assets/YUEDUN_files/jichumianshi_c09c6510.png" alt="基础面试"></div>
						<p class="desc">基础面试</p>
					</li>
					<li class="arrow">
						<div class="employment-arrow"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAwCAMAAACMqWyjAAAAk1BMVEUAAADx8fHm5ub////////m5ubp6enm5ubm5ubm5ubm5ubp6ens7Ozm5ubm5ubn5+fn5+fo6Ojm5ubm5ubm5ubm5ubm5ubm5ubn5+fm5ubm5ubn5+fv7+/l5eXm5ubm5ubm5ubm5ubn5+fm5ubo6Ojp6enl5eXm5ubm5ubm5ubn5+fn5+fo6Ojr6+vr6+vm5ubl5eVIdxSmAAAAMHRSTlMACfMEAc8f/OffrycVvIVdQDb37dbIxIx1a1E6D/m3op2USUUxLdqnf3liWE4aGXjw2kFEAAABJElEQVRIx+WVWW7CQBBE8TIe7xvGBm94ZU1I3f90ActKpPxOfUSiDlDqbun127xPPixel4c01Ghtex12ZLLaPo/ALqENl+yA7sFqMyMb+hftdFrYwClpu1ouEMy0ulhA9j6rzThssT0YrLq6l8hGHhEt4Ho8WE9oipp2uhdhNxphfichKtquUw6cec/p7kC/8Ai76HDuPMLOQD7R6ioB2dEIM2829D2PsKLBaeAR5gItj7Axgyzqf/qc/F5CxLRd5wBweYSVDlP/2vWP/jWPqP/QVdf/8bHCmyIh6P+6nO6lWnX9p4v+YzwTc/Q/CTyTc/S/ZqA4bC0TDI8VWFMSHpPEmkx9tBY/iVS7BvzGMRTPn2GJbjsiDxTl74/VbPmauXm7fAMaziNxHqc86wAAAABJRU5ErkJggg==">
						</div>
					</li>
					<li>
						<div class="employment-content"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAABDlBMVEUAAACqzP+awv+Qu/+wz/+Vv/9foP+Luf9ZnP9Lk/92rf+fxf9lo/96r/9/sv+DtP+lyf+Htv9Umf9yqv9qp/9uqf+Twv9Qlv9GkP+ixv+Luv+Ywv+myf+Ctf9Fk/+Tvv+exf+VwP+Ftv+IuP+Ou/9/s/+cxP92rf94rv+jyP95r/97sf+ixv90q/9vqf+Qvf99sv9IlP9yqv+IuP9en/97sP+exv+Dtf+Tv/+PvP9Olv98sf9bnf9Gkf+nyv+kyP+exf+Zwv+Juf9Vmv9Olv9Ikf+oy/+Uv/9Umv9sp/9Fj/9NlP9wq/9Jkv9Hkv9zq/9Cjv9Ikf9Rl/9xqv9lpP9foP9inv91rP9Nlv9Cjf8R9UabAAAAWXRSTlMAfn5+fn5+fn5+fn5+fn5+fn5+fn5+An5+fr29vb0avb29vb29vb29vb29vb29vb29Ib1Gl0VGrEaspKykpEasrKyspJeXvayXhvHPuGw1KfrhvJ6OZA6LSVllpEAAAAM0SURBVGje7dMJUxoxGMZxlaKgoNxCa63UC0tphWJPetoL8L7afv8v0ocIecnw7ozvEtluzX8yk2x2md/swZTL5XK5/qEKV6u96kyrkgp+7KPDourbH6b3RUE++Drw4PijeDFA/qgY1/F83KgYL2KYa0rKr8aRgGfzz18GytfjgfK/g+UPl4f7yvLLgmR8YflO8xkjln+bEeT48PCxWCaWwYipeD6mo2u99qQ85c0LGov/6fhJ8rNGPD8ryPF2+f2J8c0x+YSUTxjxfEKQ48PD53KJXEKFRY7n1TUYNCNjD/XXYp7y5AVZ4k+Ib02eP73Y70yCzxv1+ZMzrNvdAZ8XZIE/beZVrU4Q/Jk+bHdvm88age80MeezeQwsWh3wWUFj8t22udPuTpC/YKhW8xb5eaPsfBZjdM1fw52T8nYLHZ+cT2LoWWfuj+whWtMs5JN2Cxm/uJhcTI6ETQz5npy3nOMF/JLlHC/g02xL6SUMY33DLPBc/yc/Z5SeS2OMrvlruHNS3m6h4yNzEQw96/h9/jzNQj5iN8f746ORKAYd057XMXetkI/azfESfkYVnYkaYQODZuR5HmHyy1vO8eHhF3QzC+r3mOjYe00z/d4Pb7mw8aWFEoaedXTMRefNWciX7CblU0alVAmDZu99Wpu/l/J2Cxk/PZ2aTmHoWcft09rjOjFvOcc7/ob8Pcs5Pjz8O+rVcF8GvRnqx3WfB30a9FEn5J+pGo1GrVbb3t6uVCpPULW6u4keose91tfX7/faQM8fqcrl8oNeW2htbe0p2tlZWRmH1351l3ilI83DL5u6lKcO+jxwrVer4HehG7zWwQMHXwavdLSDfPDnPbxGT55w495h071DB66ie1e4mL8cefPgoY/yqM8j+MQjv/wxeHrx0LVPPOngSTc/POhiHrUVj6Drp7+peOg9f/jeN2DT09/q8cBJF/P1A/3sgVeMN69wpHB68yrj0SPFfwcvbK9Bfzn+q6ebJ9788NRXr3zwUv/A4IFDVz7p6Fpnv3uFEy/s+Jx0RI+e/+o9/3XQwcsr7P0iHnrfF/7piJd3dbw31Aum18O9NPpAFaZcLpfLFXB/AfUt32uvVRddAAAAAElFTkSuQmCC" alt="课程准备"></div>
						<p class="desc">课程准备</p>
					</li>
					<li class="arrow">
						<div class="employment-arrow"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAwCAMAAACMqWyjAAAAllBMVEUAAADm5ub////m5ubm5ubm5ubv7+/////m5ubm5ubs7Ozp6enm5ubm5ubm5ubm5ubo6Ojm5ubn5+fo6Ojm5ubm5ubm5ubm5ubm5ubn5+fm5ubn5+fo6Ojo6Ojr6+vl5eXl5eXm5ubm5ubm5ubo6Ojo6Ojo6Oju7u7m5ubm5ubm5ubm5ubl5eXm5ubm5ubm5ubt7e3l5eVbsZwQAAAAMXRSTlMA/AZ+9ekJAuJkHBbWxZ5wV1FDMvHdv6eLdVw7LCYM+eXMu7VKNyAR7dLNrZaQhWsO8fJUJwAAATdJREFUSMftlcuOgkAQRbt5yBsEBQEREAV0fN7//7nJmEDPapKxaulZdW9OKpWquuLD31i6HjllnPTV4C3INh0KGRFlCxszJrm2JWYiQSaYXLZGl60mmUN3PXOJFym5MMsxsTbwQ0l1bb8gQ68AAN+iqdwNkK2E0FIAMW3CdAP28vWMgT1tvmwY+jSlHY6UeQiAjTt/q+x9lRdK7LfiF+O7Kq1Yw3QswcHRR5PXLKpdBxx2LKrxJuEnPGf1YeIUaSyu5Ax59VhUwwXoKhZVfW+QxoKFssVa52lWHwChy6JyQyDoWVRaYaAtBQtxCuPOsztVBlwGFpV3lTgnPM2KTjAfFs/u+JC3kefQHNgOzTNv4KuEIId0oXaHHtJCQQ9pBT2kFfSQVtBDmk6uQppOazqCjVoTH/7BN4Z7JHVmipaBAAAAAElFTkSuQmCC">
						</div>
					</li>
					<li class="employment-top">
						<div class="employment-content"><img src="../assets/YUEDUN_files/monike-one_489dad47.png" alt="模拟课1面试"></div>
						<p class="desc">模拟课1面试</p>
					</li>
					<li class="arrow">
						<div class="employment-arrow"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAwCAMAAACMqWyjAAAAk1BMVEUAAADx8fHm5ub////////m5ubp6enm5ubm5ubm5ubm5ubp6ens7Ozm5ubm5ubn5+fn5+fo6Ojm5ubm5ubm5ubm5ubm5ubm5ubn5+fm5ubm5ubn5+fv7+/l5eXm5ubm5ubm5ubm5ubn5+fm5ubo6Ojp6enl5eXm5ubm5ubm5ubn5+fn5+fo6Ojr6+vr6+vm5ubl5eVIdxSmAAAAMHRSTlMACfMEAc8f/OffrycVvIVdQDb37dbIxIx1a1E6D/m3op2USUUxLdqnf3liWE4aGXjw2kFEAAABJElEQVRIx+WVWW7CQBBE8TIe7xvGBm94ZU1I3f90ActKpPxOfUSiDlDqbun127xPPixel4c01Ghtex12ZLLaPo/ALqENl+yA7sFqMyMb+hftdFrYwClpu1ouEMy0ulhA9j6rzThssT0YrLq6l8hGHhEt4Ho8WE9oipp2uhdhNxphfichKtquUw6cec/p7kC/8Ai76HDuPMLOQD7R6ioB2dEIM2829D2PsKLBaeAR5gItj7Axgyzqf/qc/F5CxLRd5wBweYSVDlP/2vWP/jWPqP/QVdf/8bHCmyIh6P+6nO6lWnX9p4v+YzwTc/Q/CTyTc/S/ZqA4bC0TDI8VWFMSHpPEmkx9tBY/iVS7BvzGMRTPn2GJbjsiDxTl74/VbPmauXm7fAMaziNxHqc86wAAAABJRU5ErkJggg==">
						</div>
					</li>
					<li>
						<div class="employment-content"><img src="../assets/YUEDUN_files/monike-two_be7692bc.png" alt="模拟课2面试"></div>
						<p class="desc">模拟课2面试</p>
					</li>
					<li class="arrow">
						<div class="employment-arrow"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAwCAMAAACMqWyjAAAAllBMVEUAAADm5ub////m5ubm5ubm5ubv7+/////m5ubm5ubs7Ozp6enm5ubm5ubm5ubm5ubo6Ojm5ubn5+fo6Ojm5ubm5ubm5ubm5ubm5ubn5+fm5ubn5+fo6Ojo6Ojr6+vl5eXl5eXm5ubm5ubm5ubo6Ojo6Ojo6Oju7u7m5ubm5ubm5ubm5ubl5eXm5ubm5ubm5ubt7e3l5eVbsZwQAAAAMXRSTlMA/AZ+9ekJAuJkHBbWxZ5wV1FDMvHdv6eLdVw7LCYM+eXMu7VKNyAR7dLNrZaQhWsO8fJUJwAAATdJREFUSMftlcuOgkAQRbt5yBsEBQEREAV0fN7//7nJmEDPapKxaulZdW9OKpWquuLD31i6HjllnPTV4C3INh0KGRFlCxszJrm2JWYiQSaYXLZGl60mmUN3PXOJFym5MMsxsTbwQ0l1bb8gQ68AAN+iqdwNkK2E0FIAMW3CdAP28vWMgT1tvmwY+jSlHY6UeQiAjTt/q+x9lRdK7LfiF+O7Kq1Yw3QswcHRR5PXLKpdBxx2LKrxJuEnPGf1YeIUaSyu5Ax59VhUwwXoKhZVfW+QxoKFssVa52lWHwChy6JyQyDoWVRaYaAtBQtxCuPOsztVBlwGFpV3lTgnPM2KTjAfFs/u+JC3kefQHNgOzTNv4KuEIId0oXaHHtJCQQ9pBT2kFfSQVtBDmk6uQppOazqCjVoTH/7BN4Z7JHVmipaBAAAAAElFTkSuQmCC">
						</div>
					</li>
					<li class="employment-top">
						<div class="employment-content"><img src="../assets/YUEDUN_files/beijingdiaocha_adf7aa8a.png" alt="背景调查"></div>
						<p class="desc">背景调查</p>
					</li>
					<li class="arrow">
						<div class="employment-arrow"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAwCAMAAACMqWyjAAAAk1BMVEUAAADx8fHm5ub////////m5ubp6enm5ubm5ubm5ubm5ubp6ens7Ozm5ubm5ubn5+fn5+fo6Ojm5ubm5ubm5ubm5ubm5ubm5ubn5+fm5ubm5ubn5+fv7+/l5eXm5ubm5ubm5ubm5ubn5+fm5ubo6Ojp6enl5eXm5ubm5ubm5ubn5+fn5+fo6Ojr6+vr6+vm5ubl5eVIdxSmAAAAMHRSTlMACfMEAc8f/OffrycVvIVdQDb37dbIxIx1a1E6D/m3op2USUUxLdqnf3liWE4aGXjw2kFEAAABJElEQVRIx+WVWW7CQBBE8TIe7xvGBm94ZU1I3f90ActKpPxOfUSiDlDqbun127xPPixel4c01Ghtex12ZLLaPo/ALqENl+yA7sFqMyMb+hftdFrYwClpu1ouEMy0ulhA9j6rzThssT0YrLq6l8hGHhEt4Ho8WE9oipp2uhdhNxphfichKtquUw6cec/p7kC/8Ai76HDuPMLOQD7R6ioB2dEIM2829D2PsKLBaeAR5gItj7Axgyzqf/qc/F5CxLRd5wBweYSVDlP/2vWP/jWPqP/QVdf/8bHCmyIh6P+6nO6lWnX9p4v+YzwTc/Q/CTyTc/S/ZqA4bC0TDI8VWFMSHpPEmkx9tBY/iVS7BvzGMRTPn2GJbjsiDxTl74/VbPmauXm7fAMaziNxHqc86wAAAABJRU5ErkJggg==">
						</div>
					</li>
					<li>
						<div class="employment-content"><img src="data:image/png;base64,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" alt="信息审核"></div>
						<p class="desc">信息审核</p>
					</li>
				</ul>
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