export const addCart = {
    methods: {
        async addCart(userid, itemId, name, memory, color, price) {
            let url = `${this.CURL}users/cart?itemname=${name}&memory=${memory
                }&color=${color}&userid=${userid}`;
            let res = await this.axios.get(url);
            if (res.data.msg.length > 0) {
                //购物车中已存在，则商品数量加一
                //先查询此中商品购买限额
                let url2 = `${this.CURL}phones?itemid=${itemId}`;
                let maxAmounts = await this.axios.get(url2);
                let max = maxAmounts.data.msg[0].maxamounts;
                if (max > res.data.msg[0].amount) {
                    //未到限额
                    let amount = res.data.msg[0].amount + 1;
                    this.axios({
                        method: "PUT",
                        url: `${this.CURL}users/cart`,
                        data: {
                            amount: amount,
                            itemname: name,
                            color: color,
                            userid: userid,
                            memory: memory
                        },
                    })
                    return true
                } else {
                    //不能添加
                    this.$alert("商品加入购物车数量超过限购数", {
                        confirmButtonText: "确定",
                    });
                    return false;
                }
            }else {
                //购物车中不存在此商品
                //需要新增
                this.axios({
                  method: "post",
                  url: `${this.CURL}users/cart`,
                  data: {
                    amount: 1,
                    itemname: name,
                    color: color,
                    userid: userid,
                    memory: memory,
                    price: price
                  },
                })
                return true
            }
        }
    }
}