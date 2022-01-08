<template>
  <div class="rightSide">
    <div class="topText">
      <span>我的订单</span>
      <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
    </div>
    <div class="selectColumn">
      <div class="selectColumnLeft">
        <span>全部有效订单</span>
        <span>|</span>
        <span>待支付</span>
        <span>|</span>
        <span>待收货</span>
        <span>|</span>
        <span>订单回收站</span>
      </div>
      <div class="selectColumnRight">
        <div class="input">
          <input type="text" placeholder="输入商品名称、订单号" />
        </div>
        <div class="searchIcon">
          <i class="iconfont icon-chaxun"></i>
        </div>
      </div>
    </div>
    <div class="orders" v-if="orderIds.length > 0">
      <div v-for="(item, index) in orderIds" :key="index">
        <SingleOrder :orderid="item" />
      </div>
    </div>
    <div class="emptyOrder" v-else-if="orderIds.length == 0">
      当前没有交易订单。
    </div>
    <div class="selectNumber" v-if="orderIds.length > 0">
      <div class="numberContainer">
        <div class="toPrevious">
          <i class="iconfont icon-zuo" @click="gotoPrevious"></i>
        </div>
        <div class="numbers">
          <div class="number" v-for="(i, index) in indexes" :key="index">
            <div v-if="i == id" class="currentIndex">
              {{ i }}
            </div>
            <div class="otherIndex" @click="goToThisIndex(i)">
              {{ i }}
            </div>
          </div>
        </div>
        <div class="toNext">
          <i class="iconfont icon-xiangyoujiantou" @click="gotoNext"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { handle } from "../../mixin/handleStr";
import SingleOrder from "./SingleOrder";
export default {
  data() {
    return {
      orderIds: [],
      indexes: [],
      id: this.$route.params.id,
    };
  },
  methods: {
    gotoPrevious() {
      console.log(this.id);
      if (Number(this.id) == 1) {
        //第一个，什么都不做
      } else {
        //去前一个
        this.$router.push({
          path: `/order/total/${Number(this.id) - 1}`,
        });
        location.reload();
      }
    },
    gotoNext() {
      if (Number(this.id) == this.indexes.length) {
        //最后一个了，什么都不做
      } else {
        //去后一个
        this.$router.push({
          path: `/order/total/${Number(this.id) + 1}`,
        });
        location.reload();
      }
    },
    goToThisIndex(i) {
      this.$router.push({
        path: `/order/total/${i}`,
      });
      window.location.reload();
    },
  },
  components: { SingleOrder },
  mixins: [handle],
  mounted() {
    setTimeout(async () => {
      let id = this.$route.params.id - 1;
      if (this.$cookie.get("userId")) {
        let result = await this.axios.get(
          `${this.CURL}users/order?userid=${this.$cookie.get("userId")}`
        );
        let array = this.getOrderId(result.data.msg);
        if (id * 10 > array.length) {
          //没有这样的订单了
          this.$router.push("/404");
        } else {
          this.orderIds = array.slice(id * 10, id * 10 + 10);

          //设置索引
          let indexMax = Math.ceil(array.length / 10);
          for (let i = 1; i <= indexMax; i++) {
            this.indexes.push(i);
          }
        }
      }
    }, 100);
  },
};
</script>

<style lang="scss" scoped>
.rightSide {
  float: left;
  margin-left: 15px;
  margin-top: 5px;
  margin-bottom: 60px;
  width: 978px;
  background-color: #fff;
  .topText {
    width: 882px;
    height: 68px;
    margin: 0 auto;
    margin-top: 40px;
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

  .selectColumn {
    width: 882px;
    height: 56px;
    margin-left: 48px;

    .selectColumnLeft {
      width: 415px;
      height: 56px;
      line-height: 56px;
      float: left;

      span:nth-child(2n-1) {
        font-size: 16px;
        color: #757575;
        font-family: "Helvetica Neue";
      }

      span:nth-child(1) {
        color: #ff6700;
      }

      span:nth-child(2n) {
        margin-left: 20px;
        margin-right: 20px;
        color: #e0e0e0;
        font-size: 16px;
      }
    }

    .selectColumnRight {
      width: 270px;
      height: 56px;
      float: right;

      .input {
        float: left;
        width: 189px;
        height: 40px;
        padding-left: 15px;
        padding-right: 15px;
        border: 1px solid #e0e0e0;
        border-right: none;

        input {
          outline: none;
          border: none;
          line-height: 40px;
          font-size: 12px;
        }
      }

      .searchIcon {
        float: left;
        width: 28px;
        height: 38px;
        padding: 1px 6px 1px 6px;
        border: 1px solid #e0e0e0;
        position: relative;
        .iconfont {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 20px;
        }
      }
    }
  }

  .emptyOrder {
    margin: 50px auto;
    width: 882px;
    height: 27px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 80px;

    text-align: center;
    line-height: 27px;
    font-size: 18px;
    color: #b0b0b0;
    font-family: "Helvetica Neue";
  }

  .selectNumber {
    width: 882px;
    height: 30px;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
    position: relative;
    margin-top: 30px;
    margin-bottom: 40px;
    .numberContainer {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .toPrevious {
        cursor: pointer;
        width: 48px;
        height: 30px;
        float: left;
        position: relative;

        .iconfont {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 24px;
          color: #b0b0b0;
        }
      }

      .numbers {
        float: left;

        .number {
          float: left;
          line-height: 30px;
          width: 48px;
          height: 30px;
          font-size: 18px;
          font-family: "Helvetica Neue";
          color: #fff;
          background-color: #757575;
          margin-right: 10px;

          .currentIndex {
            background-color: #ff6700;
          }

          .otherIndex {
            cursor: pointer;
          }
        }
      }

      .toNext {
        cursor: pointer;
        width: 48px;
        height: 30px;
        float: left;
        position: relative;
        .iconfont {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 24px;
          color: #b0b0b0;
        }
      }
    }
  }
}
</style>