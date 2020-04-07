
# About

此项目是 vue + element-ui 构建的后台管理系统，是一个标准的线上项目架构。


# 说明

>  如果对您对此项目有兴趣，可以点 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  开发环境 nodejs 8.x以上

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

>  传送门：[项目地址](https://github.com/yuedun/vue2-manage)，该项目自带api提供数据，便于学习开发，可自行组装数据开发接口，顺带学习nodejs。



## 技术栈

vue-v2.6.11 + vuex-v3.1.3 + vue-router-v3.1.6 + webpack-v4.42.1 + ES6/7 + less + element-ui-v2.13.0 + babel-v7.9.0
https://cn.vuejs.org/v2/guide/syntax.html
https://element.eleme.cn/#/zh-CN/component/layout

## 项目运行


```
git clone https://github.com/yuedun/vue2-manage

cd vue2-manage  

npm install 或 yarn(推荐)

npm run dev (访问本地后台系统)


访问: http://localhost:8002

```

# 线上部署
NGINX代理配置
```
location ^~ /api/ {
    add_header 'Access-Control-Allow-Origin' '*';
    proxy_pass http://localhost:8900/;
}
```

# 效果演示

#### (可在后台管理系统添加商铺，食品等数据，并在前端地址查看效果)

[查看效果请戳这里](http://vue.hopefly.top/)


## 部分截图

<img src="https://github.com/yuedun/vue2-manage/blob/master/screenshots/manage_home.png"/>

<img src="https://github.com/yuedun/vue2-manage/blob/master/screenshots/manage_shop.png"/>

## License

[GPL](https://github.com/yuedun/vue2-manage/blob/master/COPYING)
