## 组件拆分
### 公共组件
* 商铺小图标列表CategoryList——绝对定位，靠着父元素最左边
### 主页的组件
* 轮播图组件RotationChart——绝对定位，靠着父元素最左边
* 重要广告位组件ImportantProduct——居中，margin-top、margin-bottom位15px
## 部分实现方式
### 登录并获取用户信息
通过Vue-cookies插件实现传递用户id，并向模拟后台请求用户相关信息。
## css实现难点
### 难点一：登录界面用户名和密码输入界面根据用户输入改变样式
实现方式：https://juejin.cn/post/7028858784445366280/
