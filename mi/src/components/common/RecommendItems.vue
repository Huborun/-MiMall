<template>
  <div>
    <div class="recommend">
      <div class="recommendTop">
        <div class="separator">
          <span></span>
        </div>
        <p v-if="hasLogin">买购物车中商品的人还买了</p>
        <p v-else>为您推荐</p>
        <div class="separator">
          <span></span>
        </div>
      </div>
      <div class="itemsContainer">
        <div class="container" v-if="items.length > 0">
          <div class="items" v-for="(item, index) in items" :key="index">
            <div class="item">
              <img :src="item.src" />
              <p class="name">{{ item.name }}</p>
              <p class="price">{{ item.price }}</p>
              <p class="like">{{ item.like }}</p>
              <div
                class="addToCart"
                v-if="item.ItemId"
                @click="add(item.ItemId, index)"
              >
                加入购物车
              </div>
              <div class="addToCart disable" v-else>加入购物车</div>
              <div class="addSuccess" v-if="item.ItemId">成功加入购物车</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getIndex from "../../js/getIndex";
export default {
  data() {
    return {
      items: [],
      hasLogin: false,
    };
  },
  methods: {
    async add(ItemId, index) {
      let res = getIndex(this.$store.state.cartList, ItemId);
      let url = `http://localhost:3000/phoneListsSmall?ItemId=${ItemId}`;
      let dataTmp = await this.axios.get(url);
      let data = dataTmp.data[0];
      //当前用户购物车中是否有此商品
      if (res < 0) {
        //没有此商品
        this.$store.state.cartList.push(data);
        this.$store.state.cartGoods.push(1);
        let url2 = `http://localhost:3000/user/${this.$cookie.get("userId")}`;
        let tmp = await this.axios.get(url2);
        let arrayTmp = tmp.data.cartList;
        let orderList = tmp.data.orderList;
        orderList.push(0)
        arrayTmp.push(data.ItemId);
        this.axios.patch(url2, {
          cartList: arrayTmp,
          cartGoods: this.$store.state.cartGoods,
          orderList: orderList
        });
      } else {
        //有此商品
        let arrayTmp = this.$store.state.cartGoods;
        arrayTmp[res]++;

        //更新Vuex
        this.$store.state.cartGoods[res]++;
        let url2 = `http://localhost:3000/user/${this.$cookie.get("userId")}`;
        this.axios.patch(url2, {
          cartGoods: arrayTmp,
        });
      }

      //显示提示
      let success = document.getElementsByClassName("item")[index];
      success.childNodes[5].style.display = "block";
      setTimeout(() => {
        success.childNodes[5].style.display = "none";
      }, 3000);
    },
  },
  mounted() {
    if (this.$cookie.get("userId")) {
      this.hasLogin = true;
    } else {
      this.hasLogin = false;
    }
    let url = `http://localhost:3000/recommendItems`;
    this.axios.get(url).then((response) => {
      let data = response.data;
      this.items = data;
    });
  },
};
</script>

<style lang="scss" scoped>
.recommend {
  width: 1226px;
  position: absolute;
  top:0px;

  .recommendTop {
    width: 1226px;
    height: 93px;
    line-height: 93px;
    display: flex;
    justify-content: space-between;

    .separator {
      width: 360px;
      height: 93px;

      position: relative;

      span {
        position: absolute;
        top: 50%;
        background-color: #e0e0e0;
        width: 100%;
        height: 1px;
      }
    }

    p {
      width: 482px;
      height: 93px;
      line-height: 93px;
      text-align: center;
      margin: 0 auto;
      font-size: 30px;
      color: #757575;
      font-family: Helvetica;
    }
  }

  .itemsContainer {
    width: 1226px;
    height: 665px;
    margin-top: 10px;

    .container {
      width: 1240px;
      height: 614px;
      margin: 0 auto;
      background-color: #f5f5f5;

      .items {
        .item {
          cursor: pointer;
          position: relative;
          width: 234px;
          height: 300px;
          background-color: #fff;
          float: left;
          margin-right: 14px;

          &:hover {
            .addToCart {
              display: block;
            }
          }

          img {
            margin: 40px 47px 20px 47px;
            width: 140px;
            height: 140px;
          }

          .name {
            display: inline-block;
            width: 214px;
            height: 18px;
            margin-bottom: 10px;
            font-size: 14px;
            font-family: "Helvetica Neue";
            color: #333;
            text-align: center;
            line-height: 18px;
          }

          .price {
            width: 234px;
            height: 21px;
            text-align: center;
            line-height: 21px;
            margin-bottom: 10px;
            font-size: 14px;
            font-family: "Helvetica Neue";
            color: #ff6700;
          }

          .like {
            width: 234px;
            height: 21px;
            text-align: center;
            line-height: 21px;
            color: #757575;
            font-size: 14px;
            font-family: "Helvetica Neue";
          }

          .addToCart {
            cursor: pointer;
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translate(-50%);
            width: 122px;
            height: 30px;
            border: 1px solid #ff6700;
            background-color: #fff;
            text-align: center;
            line-height: 30px;
            font-size: 12px;
            color: #ff6700;
            display: none;

            &:hover {
              background-color: #f25807;
              color: #fff;
            }
          }

          .disable {
            cursor: not-allowed;
          }

          .addSuccess {
            width: 234px;
            height: 38px;
            background-color: #83c44e;
            color: #fff;
            font-size: 14px;
            font-family: "Helvetica Neue";
            position: absolute;
            top: 0px;
            text-align: center;
            line-height: 38px;

            display: none;
          }
        }
      }

      .items:nth-child(n + 6) {
        .item {
          margin-top: 15px;
        }
      }
    }
  }
}
</style>    