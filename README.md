## db.json设计：
### user：用户
id：第几个用户
userId：用户ID
cartList：用户购物车列表（数组）
orderList：用户订单列表（数组）
### phoneListsSmall：商品信息——手机，小型大小
ItemId：商品ID
JumpId：有则可以查看具体信息，没有就不能查看
cartImage：如果有JumpId，就有cartImage，表示购物车中的图标
cartName：如果有JumpId，就有cartName，表示购物车中的商品信息
price：如果有JumpId，就有price，表示购物车中此商品价格
### phoneListsMiddle：商品信息——手机，中型大小
JumpId：有则可以查看具体信息，没有就不能查看
### slides：轮播图
### adOnIndex：首页轮播图下面的广告栏目一
JumpId：有则可以查看具体信息，没有就不能查看

### phonesOnIndex：首页广告栏目二————手机
sketch：商品描述
oldprice：原价
### SmartWearOnIndex：首页广告栏目二————智能穿戴
注：ItemId=0表示第一栏的广告有两个
category：类别（热门/穿戴）
sketch：商品描述
oldprice：原价
### itemShow：所有能跳转的手机
JumpId：查看具体信息
sketch：商品描述
ItemId：这些手机在phoneListsSmall中的id
