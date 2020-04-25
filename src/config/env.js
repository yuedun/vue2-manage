/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 * 
 */
let baseUrl = ''; 
let routerMode = 'history';
let baseImgPath;

if (process.env.NODE_ENV == 'development') {
	baseUrl = '';
    baseImgPath = '/static/img/';
}else{
	baseUrl = '//vue.hopefly.top';
    baseImgPath = '//vue.hopefly.top/img/';
}

export {
	baseUrl,
	routerMode,
	baseImgPath
}