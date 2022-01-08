<template>
  <div>
    <div class="orderContainer">
      <div class="orderMsg">
        <p>等待付款</p>
        <div class="productMsg">
          <span>{{ time }}</span>
          <span>|</span>
          <span>{{ userName }}</span>
          <span>|</span>
          <span
            >订单号：<span id="goToDetail" @click="goToDetails">{{ orderid_ }}</span></span
          >
          <span>|</span>
          <span>在线支付</span>
        </div>
        <div class="total">
          <span> 应付金额： </span>
          <span>{{ totalPrice }} </span>
          <span>元</span>
        </div>
      </div>
      <div class="currentOrder">
        <div class="products">
          <div
            class="singleProduct"
            v-for="(item, index) in orderList"
            :key="index"
          >
            <img :src="item.cartimage" />
            <p>
              <span>{{ item.itemname }} </span><span>{{ item.memory }} </span
              ><span>{{ item.color }}</span>
            </p>
            <p>
              <span>{{ item.price }}元</span><span> x </span
              ><span>{{ item.amount }}</span>
            </p>
          </div>
        </div>
        <div class="rightSide">
          <p>立即付款</p>
          <p>订单详情</p>
          <p>联系客服</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { handle } from "../../mixin/handleStr";
export default {
  data() {
    return {
      orderList: [],
      time: "",
      userName: "",
      orderid_: this.orderid,
      totalPrice: 0,
      detailUrl: "",
      index: -1,
    };
  },
  mixins: [handle],
  methods: {
    goToDetails() {
      this.$router.push(this.detailUrl);
      window.location.reload();
    },
  },
  props: {
    orderid: Number,
  },
  async mounted() {
    //根据传入的orderid获取Vuex中的值
    setTimeout(() => {
      let index = -1;
      this.$store.state.userOrder.forEach((item, currentIndex) => {
        if (item.orderid == this.orderid) {
          index = currentIndex;
        }
      });
      this.index = index;
      this.detailUrl = `/order/detail/${this.orderid}?index=${this.index}`;
      let result = this.$store.state.userOrder[index];
      this.userName = result.username;
      this.time = result.time;
      this.totalPrice = result.total.toFixed(2);
      this.orderList = result.products;
    }, 200);
  },
};
</script>

<style lang="scss" scoped>
.orderContainer {
  margin-top: 15px;
  .orderMsg {
    border-top: 1px solid #ff6700;
    border-left: 1px solid #ff6700;
    border-right: 1px solid #ff6700;
    border-bottom: 2px solid #feccac;
    height: 108px;
    width: 880px;
    margin: 0 auto;
    background-color: #fffaf7;

    p {
      width: 820px;
      height: 27px;
      padding: 25px 30px 1px 30px;
      font-size: 18px;
      font-family: "Helvetica Neue";
      color: #ff6700;
    }

    .productMsg {
      width: 560px;
      height: 44px;
      float: left;
      margin-left: 28px;
      margin-top: 10px;

      #goToDetail{
        cursor: pointer;
        transition-duration: 0.2s;

        &:hover {
          color:#ff6700;
        }
      }
      span {
        font-size: 14px;
        font-family: "Helvetica Neue";
        color: #757575;
      }

      span:nth-child(2n) {
        margin-left: 5px;
        margin-right: 5px;
        color: #e5e0e0;
      }

      a {
        text-decoration: none;
        color: #757575;
        font-size: 14px;
        font-family: "Helvetica Neue";
      }
    }

    .total {
      width: 240px;
      height: 30px;
      float: right;
      span:nth-child(1) {
        font-size: 14px;
        font-family: "Helvetica Neue";
        color: #757575;
      }

      span:nth-child(2) {
        font-size: 28px;
        color: #333;
        margin-left: 5px;
        font-family: "Helvetica Neue";
      }

      span:nth-child(3) {
        font-size: 14px;
        font-family: "Helvetica Neue";
        color: #757575;
      }
    }
  }
  .currentOrder {
    width: 880px;
    margin: 0 auto;
    overflow: hidden;
    background-color: #fff;

    border-left: 1px solid #ff6700;
    border-bottom: 1px solid #ff6700;
    border-right: 1px solid #ff6700;
    .products {
      float: left;
      width: 420px;
      padding-top: 10px;
      padding-bottom: 10px;
      margin-left: 20px;

      .singleProduct {
        width: 420px;
        height: 44px;
        position: relative;
        padding-top: 18px;
        padding-bottom: 18px;

        img {
          position: absolute;
          width: 80px;
          height: 80px;
          top: 0px;
          left: 10px;
        }

        p:nth-child(2) {
          height: 22px;
          line-height: 22px;
          margin-left: 115px;
          span {
            font-size: 14px;
            font-family: "Helvetica Neue";
            color: #333;
          }
        }

        p:nth-child(3) {
          height: 22px;
          line-height: 22px;
          margin-left: 115px;
          span {
            font-size: 14px;
            font-family: "Helvetica Neue";
            color: #333;
          }
        }
      }

      .singleProduct:last-child {
        margin-bottom: 25px;
      }

      .singleProduct:first-child {
        margin-top: 10px;
      }
    }
    .rightSide {
      float: right;
      width: 280px;
      height: 140px;
      padding-top: 20px;
      padding-left: 30px;
      padding-right: 30px;

      p:nth-child(1) {
        width: 118px;
        height: 28px;
        border: 1px solid #ff6700;
        text-align: center;
        line-height: 28px;
        font-size: 12px;
        font-family: "Helvetica Neue";
        color: #fff;
        margin-left: 150px;
        margin-top: 5px;
        background-color: #ff6700;
      }

      p:nth-child(n + 2) {
        margin-top: 10px;
        width: 118px;
        height: 28px;
        border: 1px solid #b0b0b0;
        text-align: center;
        line-height: 28px;
        font-size: 12px;
        color: #757575;
        margin-left: 150px;
      }
    }
  }
}
</style>