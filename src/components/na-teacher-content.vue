<template>
	<div class="na-teacher-content" title="na-teacher-content">
		<div class="why-choose-na-teacher width-visual">
			<h2 class="common_title">我们为什么只选用北美优质外教？<i></i></h2>
			<ul class="why-list clearfix">
				<li class="col_3">
					<div class="why-content"><img src="//s.vipkidstatic.com/fe-static/parent/panda/web/teachers/img/kouyinchunzheng_24b9e428.png" alt="发音纯正">
						<h4>发音纯正</h4>
						<p>抓住语言学习黄金期，纯正英语<br>输入让孩子说得更地道</p>
					</div>
				</li>
				<li class="col_3">
					<div class="why-content"><img src="//s.vipkidstatic.com/fe-static/parent/panda/web/teachers/img/beimeiwenhua_f5464863.png" alt="多元文化">
						<h4>多元文化</h4>
						<p>英语知识融入人文场景，北美<br>外教带来国际视野</p>
					</div>
				</li>
				<li class="col_3">
					<div class="why-content"><img src="//s.vipkidstatic.com/fe-static/parent/panda/web/teachers/img/jiaoyujiegui_09aab822.png" alt="教育接轨">
						<h4>教育接轨</h4>
						<p>先进教育理念结合优质教<br>学，体现北美教育精髓</p>
					</div>
				</li>
				<li class="col_3">
					<div class="why-content"><img src="//s.vipkidstatic.com/fe-static/parent/panda/web/teachers/img/quanweirenzheng_937c4ce5.png" alt="权威合作">
						<h4>权威合作</h4>
						<p>权威机构合作严控教师资质，<br>VIPKID严格筛选</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="register-input">
			<div class="common_register_audition" id="freeClassTeachersBtn">免费领取试听体验</div>
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