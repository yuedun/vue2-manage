<template>
	<div class="section-three" title="section-three">
		<div class="container-box width-visual text-center">
			<h1 class="common_title" @click="edit('title_1')">{{component.title_1}}<i></i></h1><img class="map-bg" src="../assets/YUEDUN_files/map_1a3738c2.png">
			<ul class="clearfix">
				<li class="col_3" v-for="(item, index) in component.elements" :key="item.title_1">
					<div class="con-box">
						<div class="con">
							<div class="font52 num" @click="edit('elements', index, 'title_1')">{{item.title_1}}<span class="font22" @click.stop="edit('elements', index, 'title_2')">{{item.title_2}}</span></div>
							<p class="color-gray font16" @click="edit('elements', index, 'title_3')">{{item.title_3}}</p>
						</div>
						<div class="hover-box">
							<div class="icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAsVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3mHKcAAAAOnRSTlMApXXmS0MLybYzzG5P+d7DUgTQciUZ9LFY6OLSrYp9aEgr8Oy8m10H2NPNqZODOqFUQBT8MHhgH7mkIWxGEgAAAs5JREFUWMPt1tlyokAUgOGjshkUF4ioIIgKbqCJUZPp93+wmV6kEwmbcjEX/BeWRZWfcJoN6urqqktyplNHqo67LNG/lhepGq45QaxJ83lyrTKOker6Sa5FoY8/jQ/6rfUEuXaniLb3ALw9ok3dx8hBzNke3eLZMTkoz101RDPPfOvZZBu166AcF9w4pQ0/ais3MihBjjdJLkluxmW51QF+7bAqQ/a3CS6D3PZzuM4Q0XrvwDqdxf7VVVX32hfPJ2C99xBt2MnghN2NE8lFJ0T2pot+1N3YkUAuQPFG7oQUbi4jmjwnC736Zt2pq2Bw94NE/A9fBLIyGspMI+shvPBDoqWNxPm+PxPNkldfvd2m9YF4TnLoPJ1ttdiiGfSXo1U0bp+AN/g8jKOvBb1fGOy0sBBNBx69RS3i08oll/B8kHIdieQ+4cYnLv2HCfBkPj5SE99hICMsNsk3PkgZeMYQcZKBjSywwUDOoaHx8wLhZBmQc2T6v5OyUBQU8Kj4/DJIuwhoY47Vgl/jp0A+GGdFBEzrzSoHWm/QpmA6uS0Obt8AOJhF5oOM42BmYREwBCgCljixa7AY+CoG+sxv2KZpN/yZHoivj4PreSgvUKKFHM7Xj4DLEUpttOSgNMMbOnlgfgz02Dval1QQXO6U48zRVbXpzI7KbnkHfrYQS8kHR6ZO14DFVkk3Rxz0UZyQAarkwXiClE7koaviAXbxvh06Ws4uikX2ED+Iz3jZJYA5fq+FjJTkDHU+Qz6zd/wSgZcGw1mgdEQ5HSVy8Phrn46yB5l5jW661m14QLPIM0jDnxHkJAmhPEpiIzkUpO/TZrUkKJIhBpeZvzcVxdz7s0sgGnevJdMbGEIlqXwMRiXgBB9s5ON5+1V4n2zXXPw28jxHT2jrBlcBdvDrFb5+8BRr8P8Bt4ZhHKoDWVWBQtWgh3gaVJGziD0R6urqCvYXaqIP99zc2gkAAAAASUVORK5CYII=" alt="优质教师"></div>
						</div>
					</div>
				</li>
			</ul>
			<div class="tips color-lgray font12">以上数据为内部统计数据</div><a href="/signup">
				<a :href="component.links[0].url">
					<div class="obtain-btn margin-auto" id="freeClickSignup">{{component.links[0].title}}</div>
				</a>
			</a>
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
			console.log("section-three子组件接收父组件值：", this.component);
		},
		methods: {
			edit(prop, index, prop2) {
				this.dialogVisible = true;
				this.currentProp = {
					prop,
					index,
					prop2
				};
				if (arguments.length == 3) {
					this.rawhtml = this.component[prop][index][prop2];
				} else {
					this.rawhtml = this.component[prop];
				}
			},
			editOK() {
				if (this.currentProp.prop2) {
					this.component[this.currentProp.prop][this.currentProp.index][
						this.currentProp.prop2
					] = this.rawhtml;
				} else {
					this.component[this.currentProp.prop] = this.rawhtml;
				}
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