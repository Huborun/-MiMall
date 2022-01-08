<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="text1">
          <span> 订单详情 </span>
          <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
        </div>
        <div class="text2">
          <span>订单号：{{ orderid }}</span>
          <div class="button3">立即付款</div>
          <div class="button2">取消订单</div>
          <div class="button1">联系客服</div>
        </div>
      </div>
      <div class="body">
        <div class="progressMsg">
          <div class="text3">等待付款</div>
          <div class="progressBar">
            <div class="progress actived">下单</div>
            <div class="progress">付款</div>
            <div class="progress">配货</div>
            <div class="progress">出库</div>
            <div class="progress">交易成功</div>
          </div>
          <div class="time">{{ time }}</div>
        </div>
        <div class="orderItem">
          <div
            class="singleOrder"
            v-for="(item, index) in products"
            :key="index"
          >
            <img :src="item.cartimage" />
            <div class="otherMsg">
              <span
                >{{ item.itemname }} {{ item.memory }} {{ item.color }}</span
              >
              <span>{{ item.price }}元 x {{ item.amount }}</span>
            </div>
          </div>
        </div>
        <div class="addressMsg">
          <div class="addressHeader">
            <div>收货信息</div>
            <div>修改</div>
          </div>
          <div class="addressBody">
            <span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span>
            <span>{{ receivername }}</span>
            <span>联系电话</span>
            <span>{{ phone }}</span>
            <span>收货地址</span>
            <span>{{ address }}</span>
          </div>
        </div>
        <div class="payMethod">
          <div class="payMethodHeader">支付方式</div>
          <div class="payMethodBody">
            <span>支付方式： </span>
            <span>在线支付</span>
          </div>
        </div>
        <div class="invoice">
          <div class="invoiceHeader">发票信息</div>
          <div class="invoiceBody">
            <div class="addressBody">
              <span>发票类型</span>
              <span>电子普通发票</span>
              <span>发票内容</span>
              <span>购买商品明细</span>
              <span>发票抬头</span>
              <span>个人</span>
            </div>
          </div>
        </div>
        <div class="totalPrice">
          <div class="priceContainer">
            <span>商品总价</span>
            <span>{{ totalPrice }}元</span>
            <span>运费</span>
            <span>0元</span>
            <span>应付金额</span>
            <span>{{ totalPrice }} </span>
            <span>元</span>
          </div>
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
      id: this.$route.params.id,
      orderid: 0,
      time: "",
      receivername: "",
      phone: "",
      address: "",
      products: [],
      totalPrice: 0,
      index: this.$route.query.index,
    };
  },
  mixins: [handle],
  methods: {},
  async mounted() {
    setTimeout(() => {
      let result = this.$store.state.userOrder[this.index];
      this.time = result.time.slice(5);
      this.address = result.region + result.address;
      this.receivername = result.receivername;
      this.phone = result.phone;
      this.products = result.products;
      this.totalPrice = result.total.toFixed(2);
      this.orderid = result.orderid;
      document.documentElement.scrollTop = 0;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.container {
  float: left;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 35px;
  width: 882px;
  padding: 36px 48px 36px 48px;
  background-color: #fff;

  .header {
    .text1 {
      width: 882px;
      height: 68px;
      line-height: 68px;

      span:nth-child(1) {
        font-size: 30px;
        font-family: "Helvetica Neue";
        color: #757575;
      }

      span:nth-child(2) {
        margin-left: 10px;
        font-size: 12px;
        font-family: "Helvetica Neue";
        color: #757575;
      }
    }

    .text2 {
      width: 882px;
      height: 58px;
      border-bottom: 1px solid #e0e0e0;
      line-height: 58px;
      span {
        font-size: 18px;
        font-family: "Helvetica Neue";
        color: #333;
      }

      div {
        cursor: pointer;
        float: right;
        width: 120px;
        height: 30px;
        margin-left: 12px;
        border: 1px solid #b0b0b0;
        font-family: "Helvetica Neue";
        font-size: 12px;
        color: #757575;
        text-align: center;
        line-height: 30px;
        transition-duration: 0.5s;

        &:hover {
          background-color: #757575;
          color: #fff;
        }
      }

      .button3 {
        background-color: #ff6700;
        color: #fff;
        border: none;

        &:hover {
          background-color: #f25807;
        }
      }
    }
  }

  .body {
    .progressMsg {
      .text3 {
        margin-top: 22px;
        width: 882px;
        height: 27px;
        text-align: left;
        font-size: 18px;
        color: #ff6700;
        margin-bottom: 25px;
      }

      .progressBar {
        width: 882px;
        background-color: #eeeeee;
        overflow: auto;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;

        .progress {
          float: left;
          width: 176px;
          height: 20px;
          color: #333;
          text-align: center;
          line-height: 20px;
          font-size: 12px;
          font-family: "Helvetica Neue";
        }

        .progress:nth-child(1) {
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }
        .actived {
          background-color: #83c44e;
          color: #fff;
        }
      }

      .time {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 176px;
        height: 20px;
        font-size: 12px;
        font-family: "Helvetica Neue";
        color: #757575;
        text-align: center;
        line-height: 20px;
      }
    }

    .orderItem {
      .singleOrder {
        width: 882px;
        height: 86px;
        border-bottom: 1px solid #e0e0e0;

        img {
          margin-top: 3px;
          margin-left: 5px;
          float: left;
          height: 80px;
          width: 80px;
        }

        .otherMsg {
          margin-left: 20px;
          float: left;
          width: 760px;
          height: 86px;
          line-height: 86px;
          cursor: pointer;

          span {
            display: inline-block;
            width: 350px;
            color: #333;
            font-size: 14px;
            font-family: "Helvetica Neue";
          }

          span:nth-child(1) {
            &:hover {
              color: #ff6700;
            }
          }
        }
      }

      .singleOrder:last-child {
        border-bottom: 2px solid #e0e0e0;
      }
    }

    .addressMsg {
      border-bottom: 1px solid #e0e0e0;
      .addressHeader {
        margin-top: 30px;
        width: 882px;
        height: 40px;
        margin-bottom: 10px;
        div:nth-child(1) {
          font-size: 18px;
          font-family: "Helvetica Neue";
          color: #333;
          float: left;
        }
        div:nth-child(2) {
          cursor: pointer;
          float: right;
          width: 120px;
          height: 30px;
          font-size: 12px;
          font-family: "Helvetica Neue";
          color: #757575;
          border: 1px solid #b0b0b0;
          text-align: center;
          line-height: 30px;
          transition-duration: 0.3s;

          &:hover {
            background-color: #757575;
            color: #fff;
          }
        }
      }
    }

    .payMethod {
      width: 882px;
      height: 140px;
      border-bottom: 1px solid #e0e0e0;
      .payMethodHeader {
        margin-top: 40px;
        width: 882px;
        height: 27px;
        font-family: "Helvetica Neue";
        font-size: 18px;
        color: #333;
      }

      .payMethodBody {
        margin-top: 20px;
        span:nth-child(1) {
          color: #757575;
          font-size: 14px;
          font-weight: 700;
          font-family: "Helvetica Neue";
        }

        span:nth-child(2) {
          color: #757575;
          font-size: 14px;
          font-family: "Helvetica Neue";
        }
      }
    }

    .invoice {
      width: 882px;
      height: 142px;
      border-bottom: 1px solid #e0e0e0;
      .invoiceHeader {
        font-size: 18px;
        font-family: "Helvetica Neue";
        color: #333;

        margin-top: 40px;
        margin-bottom: 20px;
      }
    }

    .totalPrice {
      width: 882px;
      height: 122px;
      margin-top: 30px;

      .priceContainer {
        width: 370px;
        height: 122px;
        float: right;

        span:nth-child(2n-1) {
          text-align: right;
          display: inline-block;
          width: 200px;
          height: 31px;
          line-height: 31px;
          color: #757575;
          font-size: 14px;
          font-family: "Helvetica Neue";
        }

        span:nth-child(2n) {
          text-align: right;
          display: inline-block;
          width: 150px;
          height: 31px;
          line-height: 31px;
          margin-left: 15px;
          font-size: 14px;
          font-family: "Helvetica Neue";
          color: #ff6700;
        }

        span:nth-child(5) {
          margin-top: 20px;
        }

        span:nth-child(6) {
          text-align: left;
          font-size: 30px;
          margin-right: -25px;
        }

        span:nth-child(2n-1):after {
          content: ":";
        }

        span:nth-child(2n):after {
          content: "\A";
          white-space: pre;
        }

        span:nth-child(6):after {
          content: "";
        }

        span:nth-child(7):after {
          content: "";
        }

        span:nth-child(7) {
          width: 25px;
          color: #ff6700;
        }
      }
    }
  }
}

.addressBody {
  line-height: 27px;
  margin-bottom: 20px;
  span:nth-child(2n-1) {
    color: #757575;
    font-size: 14px;
    font-family: "Helvetica Neue";
    font-weight: 700;
  }

  span:nth-child(2n) {
    margin-left: 15px;
    font-size: 14px;
    font-family: "Helvetica Neue";
    color: #757575;
  }

  span:nth-child(2n-1):after {
    content: ":";
  }

  span:nth-child(2n):after {
    content: "\A";
    white-space: pre;
  }
}
</style>