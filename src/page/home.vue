<template>
    <div>
        <head-top></head-top>
		<section class="data_section">
			<header class="section_title">项目介绍</header>
			<div>
				<p>这是一个网站内容可视化编辑器，可基于现有网站模板快速构建出自己的网站。</p>
				<p>编辑结果见：<el-link type="primary" href="http://nest.hopefly.top/ceshi" icon="el-icon-view">nest.hopefly.top</el-link></p>
				<p>elementUI：<el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/icon">https://element.eleme.cn/#/zh-CN/component/icon</el-link> </p>
			</div>
		</section>
    </div>
</template>

<script>
	import headTop from '../components/headTop'
    export default {
    	data(){
    		return {
    			
    		}
    	},
    	components: {
    		headTop,
    	},
    	mounted(){
    		
    	},
        computed: {
        },
    	methods: {
    		
    	}
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.data_section{
		padding: 20px;
		margin-bottom: 40px;
		.section_title{
			text-align: center;
			font-size: 30px;
			margin-bottom: 10px;
		}
		.data_list{
			text-align: center;
			font-size: 14px;
			color: #666;
            border-radius: 6px;
            background: #E5E9F2;
            .data_num{
                color: #333;
                font-size: 26px;

            }
            .head{
                border-radius: 6px;
                font-size: 22px;
                padding: 4px 0;
                color: #fff;
                display: inline-block;
            }
        }
        .today_head{
            background: #FF9800;
        }
        .all_head{
            background: #20A0FF;
        }
	}
    .wan{
        .sc(16px, #333)
    }
</style>
