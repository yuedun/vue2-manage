const axios = require('axios');

//登陆
export const login = data => axios.post('/api/user/login', data);

//退出
export const signout = () => axios.get('/api/user/logout');
//获取用户信息
export const getAdminInfo = data => axios.get('/api/user/info/' + data);
//网站列表
export const getWebsiteList = data => axios.get('/api/website/', { params: data });
//修改网站
export const updateWebsite = data => {
	return axios.put('/api/website/update', data);
}
//添加网站
export const addWebsite = data => {
	return axios.post('/api/website/create', data);
}
//删除网站
export const deleteWebsite = data => {
	return axios.delete('/api/website/delete/' + data);
}
//页面列表
export const getPageList = data => axios.get('/api/page/list', { params: data });

//修改页面
export const updatePage = data => {
	return axios.put('/api/page/update', data);
}
//添加页面
export const addPage = data => {
	return axios.post('/api/page/create', data);
}
//删除页面
export const deletePage = data => {
	return axios.delete('/api/page/delete/' + data);
}
//获取单个页面的组件
export const getPageComponents = data => {
	return axios.get('/api/page/getPageComponents/' + data);
}
//修改单个页面的组件
export const updatePageComponents = data => {
	return axios.put('/api/page/updatePageComponents/' + data.id, data.data);
}
//复制网页，每个页面就是一个页面，一个页面可以由多个页面组成
export const copyPage = (id, newUrl) => {
	return axios.get('/api/page/copyPage/' + id + '/' + newUrl);
}
//组件列表
export const componentList = data => axios.get('/api/component/', { params: data });

//修改组件
export const updateComponent = data => {
	return axios.put('/api/component/update', data);
}
//添加组件
export const addComponent = data => {
	return axios.post('/api/component/create', data);
}
//删除组件
export const deleteComponent = data => {
	return axios.delete('/api/component/delete/' + data);
}
//获取组件
export const getComponent = data => {
	return axios.get('/api/component/getComponent/' + data);
}
