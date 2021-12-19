//作用：根据传入的用户Id和要删除的购物车下标，删除购物车中的某一项
export default function deleteCartItem(axios, userId, index,state) {
    let url = `http://localhost:3000/user?userId=${userId}`;
    axios.get(url).then((response) => {
        let oldCartList = response.data[0].cartList;
        let oldCartGoods = response.data[0].cartGoods;
        let oldOrderList = response.data[0].orderList;
        oldCartList.splice(index, 1);
        oldCartGoods.splice(index, 1);
        oldOrderList.splice(index, 1);

        //更新Vuex
        state.cartList = state.cartList.splice(index, 1);
        state.cartGoods = state.cartGoods.splice(index, 1);
        state.orderList = state.orderList.splice(index, 1);
        
        //这里注意：json-server不支持对上面url的patch
        let url2 = `http://localhost:3000/user/${userId}`
        axios.patch(url2, {
            cartList: oldCartList,
            cartGoods: oldCartGoods,
            orderList: oldOrderList
        })
    });
}