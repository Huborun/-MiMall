export default function setMsg(axios, store, data) {
    console.log(data)
    //设置Vuex
    store.dispatch("clear");
    store.dispatch("setuserid", data.userId);
    store.dispatch("setusername", data.userName);
    store.dispatch("setcartgoods", data.cartGoods);
    //存放用户购物车信息
    var dispatchCartlist = [];
    var cartList = data.cartList;
    if (cartList.length == 0) {
        store.dispatch("setcartlist", []);
    } else {
        cartList.forEach(async (cart) => {
            var url = `http://localhost:3000/phoneListsSmall?ItemId=${cart}`;
            let res = await axios.get(url);
            dispatchCartlist.push(...res.data);
        });
    }

    var dispatchOrderlist = [];
    //存放用户订单信息
    var orderList = data.orderList;
    if (orderList.length == 0) {
        store.dispatch("setorderlist", []);
    } else {
        // var dispatchOrderlist = [];
        orderList.forEach(async (order) => {
            var url = `http://localhost:3000/phoneListsSmall?ItemId=${order}`;
            let res = await axios.get(url);
            dispatchOrderlist.push(...res.data);
        });
    }
    console.log(dispatchOrderlist)
    store.dispatch("setorderlist", dispatchOrderlist);
    store.dispatch("setcartlist", dispatchCartlist);
}