
# About

此项目是 vue + element-ui 构建的后台管理系统，所有的数据都是从服务器实时获取的真实数据，具有真实的注册、登陆、管理数据、权限验证等功能。


# 说明

>  如果对您对此项目有兴趣，可以点 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  开发环境 nodejs 8.x以上

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

>  传送门：[项目地址](https://github.com/yuedun/vue2-manage)，该项目自带api提供数据，便于学习开发，可自行组装数据开发接口，顺带学习nodejs。



## 技术栈

vue2 + vuex + vue-router + webpack + ES6/7 + less + element-ui


## 项目运行


```
git clone https://github.com/yuedun/vue2-manage

cd vue2-manage  

npm install 或 yarn(推荐)

npm run dev (访问本地后台系统)


访问: http://localhost:8002

```


# 效果演示

#### (可在后台管理系统添加商铺，食品等数据，并在前端地址查看效果)

[查看效果请戳这里](http://vue.hopefly.top/)


## 部分截图

<img src="https://github.com/bailicangdu/vue2-manage/blob/master/screenshots/manage_home.png"/>

<img src="https://github.com/bailicangdu/vue2-manage/blob/master/screenshots/manage_shop.png"/>

## 错误记录
```
 ERROR  Failed to compile with 6 errors                                      6:13:29 PM
These dependencies were not found:

* net in ./~/express/lib/request.js
* fs in ./~/express/lib/view.js, ./~/etag/index.js and 3 others

To install them, you can run: npm install --save net fs

```
原因：前端js中引入了后端express

## License

[GPL](https://github.com/bailicangdu/vue2-manage/blob/master/COPYING)
