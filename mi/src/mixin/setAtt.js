export const setAtt = {
    methods: {
        async setMsg(axios, store, id) {
            //根据传入的userid，设置vuex
            store.dispatch("clear");
            store.dispatch("setuserid", id);
            let result1 = await axios.get(`http://localhost:6789/mimall/users/cart/${id}`)
            if (result1.data.msg.length > 0) {
                //用户购物车不为空
                let data1 = result1.data.msg;
                store.dispatch("setusername", data1[0].username);
                let cart = []
                let userchosen = []
                //存放用户购物车信息
                data1.forEach((item) => {
                    let obj = new Object();
                    obj.cartid = item.cartid;
                    obj.itemname = item.itemname;
                    obj.memory = item.memory;
                    obj.color = item.color;
                    obj.amount = item.amount;
                    obj.cartimage = item.cartimage;
                    obj.price = item.price;
                    obj.maxamounts = item.maxamounts;
                    obj.chosen = item.chosen;
                    cart.push(obj);

                    let obj2 = new Object();
                    if (item.chosen == 1) {
                        obj2.cartid = item.cartid;
                        obj2.chosen = item.chosen;
                        obj2.amount = item.amount;
                        obj2.cartimage = item.cartimage;
                        obj2.memory = item.memory;
                        obj2.price = item.price;
                        obj2.color = item.color;
                        obj2.itemname = item.itemname;
                        userchosen.push(obj2);
                    }
                })
                //提交用户购物车和购物车选择情况
                store.dispatch("setusercart", cart)
                store.dispatch("setuserchosen", userchosen)
            } else {
                //为空就要查user表了
                let result2 = await axios.get(`http://localhost:3000/users/${id}`)
                store.dispatch("setusername", result2.data.msg[0].username);
                store.dispatch("setusercart", [])
                store.dispatch("setuserchosen", [])
            }

            //根据id设置userOrder

            let url2 = `http://localhost:6789/mimall/users/order/all?id=${id}`
            let result3 = await axios.get(url2)
            result3 = result3.data.msg
            //array2：存放筛选过后的数组
            let array2 = this.getOrderId(result3)
            //array3，存放userOrder
            let array3 = new Array();
            let index = 0;
            // let obj = new Object();
            // obj.products = new Array()

            let tempArr = new Array();
            let obj2 = new Object();
            array3[index] = new Object();

            //此订单价格合计
            let total = 0;
            result3.forEach((item, currentIndex) => {
                //判断是不是最后一个
                if (index == array2.length - 1) {
                    //最后一个了
                    //存放独有属性
                    obj2 = new Object();
                    obj2.itemname = item.itemname;
                    obj2.memory = item.memory;
                    obj2.color = item.color;
                    obj2.amount = item.amount;
                    obj2.cartimage = item.cartimage;
                    obj2.price = item.price;
                    total += item.amount * item.price
                    tempArr.push(obj2);
                    if (currentIndex == result3.length - 1) {
                        array3[index].products = tempArr;
                        array3[index].total = total;
                    }
                } else {
                    //不是最后一个
                    if (item.orderid == array2[index]) {
                        //第index个订单
                        //存放到array3[index]中
                        //存放共有属性
                        array3[index].address = item.address;
                        array3[index].orderid = item.orderid;
                        array3[index].phone = item.phone.slice(0, 3) + "****" + item.phone.slice(7);
                        array3[index].receivername = item.receivername;
                        array3[index].region = item.region;
                        array3[index].remarks = item.remarks;
                        array3[index].time = this.transformTime(item.time);
                        array3[index].username = item.username;
                        total += item.amount * item.price

                        //存放独有属性
                        obj2 = new Object();
                        obj2.itemname = item.itemname;
                        obj2.memory = item.memory;
                        obj2.color = item.color;
                        obj2.amount = item.amount;
                        obj2.price = item.price;
                        obj2.cartimage = item.cartimage;
                        tempArr.push(obj2);
                    } else {
                        //第index+1个订单了
                        array3[index].products = tempArr;
                        array3[index].total = total;
                        index++;
                        total = 0;
                        array3[index] = new Object();
                        //存放到array2[index+1]中
                        tempArr = new Array();
                        array3[index].address = item.address;
                        array3[index].orderid = item.orderid;
                        array3[index].phone = item.phone.slice(0, 3) + "****" + item.phone.slice(7);
                        array3[index].receivername = item.receivername;
                        array3[index].region = item.region;
                        array3[index].remarks = item.remarks;
                        array3[index].time = this.transformTime(item.time);
                        array3[index].username = item.username;
                        total += item.amount * item.price

                        //存放独有属性
                        obj2 = new Object();
                        obj2.itemname = item.itemname;
                        obj2.memory = item.memory;
                        obj2.color = item.color;
                        obj2.amount = item.amount;
                        obj2.cartimage = item.cartimage;
                        obj2.price = item.price;
                        tempArr.push(obj2);
                    }
                }
            })
            store.dispatch("setuserorder", array3);
        },
        async setUserChosen(axios, store, id) {
            //作用：购物车选择修改后设置Vuex
            let result1 = await axios.get(`http://localhost:6789/mimall/users/cart/${id}`)
            if (result1.data.msg.length > 0) {
                // console.log(result1.data)
                //用户购物车不为空
                let userchosen = []
                let data1 = result1.data.msg;
                data1.forEach((item) => {
                    let obj2 = new Object();
                    if (item.chosen == 1) {
                        obj2.cartid = item.cartid;
                        obj2.chosen = item.chosen;
                        obj2.amount = item.amount;
                        obj2.cartimage = item.cartimage;
                        obj2.memory = item.memory;
                        obj2.price = item.price;
                        obj2.color = item.color;
                        obj2.itemname = item.itemname;
                        userchosen.push(obj2);
                    }
                })
                store.dispatch("setuserchosen", userchosen)
            }
        },
        async setUserCart(axios, store, id) {
            //作用：购物车数量更改后设置Vuex
            let result1 = await axios.get(`http://localhost:6789/mimall/users/cart/${id}`)
            if (result1.data.msg.length > 0) {
                // console.log(result1.data)
                //用户购物车不为空
                let data1 = result1.data.msg;
                let cart = []
                data1.forEach((item) => {
                    let obj = new Object();
                    obj.cartid = item.cartid;
                    obj.itemname = item.itemname;
                    obj.memory = item.memory;
                    obj.color = item.color;
                    obj.amount = item.amount;
                    obj.cartimage = item.cartimage;
                    obj.price = item.price;
                    obj.maxamounts = item.maxamounts;
                    obj.chosen = item.chosen;
                    cart.push(obj);
                })
                store.dispatch("setusercart", cart)
            }
        },
        getOrderId(array) {
            //从数组中获取不同的OrderId
            let array2 = new Array();
            array.forEach((item) => {
                if (array2.indexOf(item.orderid) == -1) {
                    array2.push(item.orderid)
                }
            })
            return array2
        },
        transformTime(str) {
            //将日期转换成需要的格式
            let time = str.split("T")
            let dateArray = time[0].split("-")
            time[1] = time[1].substring(0, 8)
            let timeArray = time[1].split(":")
            let year = dateArray[0]
            let month = dateArray[1]
            let day = dateArray[2]

            let hour = parseInt(timeArray[0])
            hour = (hour + 8) > 24 ? (hour - 16) : (hour + 8)
            if (hour < 10) {
                hour = "0" + hour
            }
            let minute = timeArray[1]

            let date = `${year}年${month}月${day}日 ${hour}:${minute}`
            return date
        },
    }
} 