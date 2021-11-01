import Mock from 'mockjs'
Mock.mock('/user/login',{
  "status": 0,
  "data": {
    "id|10001-11000": 0,
    "username": "@cname",
    "address":"@city(true)",
    "email": "admin@51purse.com",
    "phone": null,
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000,
    "picture":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d4f74880f129ffd51c92951dff7eab85.jpg?thumb=1&w=1533&h=575&f=webp&q=90",
  }
});