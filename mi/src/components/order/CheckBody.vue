<template>
  <div>
    <div class="container">
      <div class="order">
        <div class="address">
          <p>收货地址</p>
          <div class="userAddressContainer">
            <div
              class="userAddress"
              v-for="(item, index) in userAddresses"
              :key="index"
              @mouseenter="showChangeText(index)"
              @mouseleave="showChangeText(index)"
              @click="changeDisplay(index)"
            >
              <div class="userAddressTop">
                <span>{{ item.username }}</span>
                <span v-if="item.remarks != ''">{{ item.remarks }}</span>
              </div>
              <div class="userAddressBody">
                <p>{{ item.phone }}</p>
                <p>{{ item.region }}</p>
                <p>{{ item.address }}</p>
              </div>
              <div class="change">
                <p @click="changeMsg(index)">修改</p>
              </div>
            </div>
            <div class="addAddress" @click="changeAddressInput">
              <div class="fontContainer">
                <i class="iconfont icon-jiahao-copy"></i>
                <p>添加新地址</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text1">
          <p>商品及优惠券</p>
        </div>
        <div class="commodity">
          <div
            class="singleItem"
            v-for="(item, index) in chosenItem"
            :key="index"
          >
            <img :src="item.cartimage" />
            <span>{{ item.itemname }}</span>
            <span>{{ item.memory }}</span>
            <span>{{ item.color }}</span>
            <span>{{ item.price }}元 x {{ item.amount }}</span>
            <span>{{ item.price * item.amount }}元</span>
          </div>
        </div>
        <div class="text2">
          <span>配送方式</span>
          <span>包邮</span>
        </div>
        <div class="text3">
          <span>发票</span>
          <span>电子普通发票</span>
          <span>个人</span>
          <span>商品明细</span>
          <span>修改&gt;</span>
        </div>
        <div class="price">
          <div>
            <span> 商品件数：</span
            ><span>{{ $store.getters.totalChosen }}件</span>
          </div>
          <div>
            <span>商品总价：</span
            ><span>{{ $store.getters.totalChosenPrice }}元</span>
          </div>
          <div><span>活动优惠：</span><span>-0元</span></div>
          <div><span>优惠劵抵扣：</span><span>-0元</span></div>
          <div><span>运费：</span><span>-0元</span></div>
          <div>
            <span>应付总额：</span
            ><span>{{ $store.getters.totalChosenPrice }}</span>
            <span>元</span>
          </div>
        </div>
        <div class="buy">
          <div v-if="chosenAddress != -1" class="userChosenAddress">
            <span>{{ userAddresses[chosenAddress].username }}</span>
            <span>{{
              userAddresses[chosenAddress].phone.slice(0, 3) +
              "****" +
              userAddresses[chosenAddress].phone.slice(7)
            }}</span>
            <br />
            <span>{{ userAddresses[chosenAddress].region }}</span>
            <span>{{ userAddresses[chosenAddress].address }}</span>
            <span @click="changeMsg(chosenAddress)">修改</span>
          </div>
          <div class="back" @click="backToCart">
            <p>返回购物车</p>
          </div>
          <div class="goToOrder">
            <p v-if="chosenAddress == -1" @click="showWarn">去结算</p>
            <p v-else @click="goToOrder">立即下单</p>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="showAddress">
        <AddressInput ref="addressSon" />
      </div>
    </transition>
  </div>
</template>

<script>
import AddressInput from "./AddressInput";
import { handle } from "../../mixin/handleStr";
import { setAtt } from "../../mixin/setAtt";
export default {
  data() {
    return {
      showAddress: false,
      userAddresses: [],
      chosenItem: [],
      showChange: 0,
      chosenAddress: -1,
    };
  },
  mixins: [handle, setAtt],
  methods: {
    showWarn() {
      this.$alert("请选择地址", {
        confirmButtonText: "确定",
      });
    },
    backToCart() {
      this.$router.push("/cart");
    },
    async goToOrder() {
      //查询用户address的id
      let userid = this.$cookie.get("userId");
      let result = await this.axios.get(`${this.CURL}users/order/max`);
      result = result.data.msg[0];
      let orderid = result["max(orderid)"] + 1;
      let addressid = this.userAddresses[this.chosenAddress].id;
      let receivername = this.userAddresses[this.chosenAddress].username;
      let time = this.getTime();
      let pay = 0;
      this.$store.state.userChosen.forEach((item) => {
        let itemname = item.itemname;
        let memory = item.memory;
        let color = item.color;
        let amount = item.amount;
        let price = item.price;
        this.axios({
          method: "post",
          url: `${this.CURL}users/order`,
          data: {
            userid,
            orderid,
            addressid,
            receivername,
            itemname,
            memory,
            color,
            amount,
            price,
            pay,
            time,
          },
        });

        //删除此条内容
        this.axios({
          method: "delete",
          url: `${this.CURL}users/cart`,
          data: {
            userid,
            itemname,
            memory,
            color,
          },
        });
      });
      this.$router.push({ name: "orderSuccess", params: { orderid: orderid } });

      //更新Vuex
      this.setMsg(this.axios, this.$store, this.$cookie.get("userId"));
    },
    changeDisplay(index) {
      //如果之前有被选中的
      if (this.chosenAddress != -1) {
        //把选中的颜色修改了
        let item =
          document.getElementsByClassName("userAddress")[this.chosenAddress];
        item.style.borderColor = "#b0b0b0";
        item = document.getElementsByClassName("userAddress")[index];
        item.style.borderColor = "#ff6700";
        this.chosenAddress = index;
      } else {
        let item = document.getElementsByClassName("userAddress")[index];
        item.style.borderColor = "#ff6700";
        this.chosenAddress = index;
      }

      //触发HintAddress的changeActive事件
      this.$bus.$emit("changeActive");
    },
    setAddressFirst() {
      this.chosenAddress = 0;
      let item = document.getElementsByClassName("userAddress")[0];
      item.style.borderColor = "#ff6700";
    },
    changeAddressInput() {
      this.showAddress = !this.showAddress;
    },
    showChangeText(index) {
      let text = document.getElementsByClassName("change")[index];
      if (this.showChange == 0) {
        text.style.opacity = 1;
        this.showChange = 1;
      } else {
        text.style.opacity = 0;
        this.showChange = 0;
      }
    },
    changeMsg(index) {
      this.showAddress = !this.showAddress;
      this.$nextTick(() => {
        this.$refs.addressSon.changeAddress(this.userAddresses[index].id);
      });
    },
  },
  components: {
    AddressInput,
  },
  mounted() {
    let url = `${this.CURL}users/address?userid=${this.$cookie.get("userId")}`;
    this.axios.get(url).then((response) => {
      this.userAddresses = response.data.msg;
      if (this.userAddresses.length > 0) {
        this.userAddresses.forEach((item) => {
          {
            let newPhone =
              item.phone.slice(0, 3) + "****" + item.phone.slice(7);
            item.phone = newPhone;
          }
        });
      }
    });

    //获取用户当前选择的商品信息
    setTimeout(() => {
      this.chosenItem = this.$store.state.userChosen;
    }, 300);

    //全局事件总线，接收HintAddress传来的信息
    this.$bus.$on("setFirstAddress", () => {
      this.setAddressFirst();
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 99vw;
  background-color: #f5f5f5;
  overflow: hidden;
  .order {
    width: 1226px;
    margin: 60px auto;
    background-color: #fff;

    .address {
      width: 1178px;
      margin: 0 auto;
      padding-top: 40px;
      p {
        font-size: 18px;
        color: #333;
        font-family: "Helvetica Neue";
      }

      .userAddressContainer {
        overflow: hidden;
        margin-top: 20px;
        .userAddress {
          float: left;
          margin-bottom: 30px;
          width: 270px;
          height: 180px;
          border: 1px solid #e0e0e0;
          margin-right: 20px;
          cursor: pointer;
          position: relative;

          &:hover {
            border: 1px solid #b0b0b0;
          }

          .userAddressTop {
            span:nth-child(1) {
              display: inline-block;
              margin-top: 18px;
              margin-left: 22px;
              color: #333;
              font-size: 18px;
              font-family: "Helvetica Neue";
            }

            span:nth-child(2) {
              position: absolute;
              right: 15px;
              top: 18px;
              display: inline-block;
              // margin-left: 135px;
              color: #b0b0b0;
              font-size: 14px;
              font-family: "Helvetica Neue";
            }
          }

          .userAddressBody {
            margin-top: 15px;
            margin-left: 20px;
            line-height: 22px;
            p {
              font-size: 14px;
              font-family: "Helvetica Neue";
              color: #757575;
            }
          }

          .change {
            opacity: 0;
            position: absolute;
            bottom: 15px;
            right: 20px;
            p {
              font-size: 14px;
              font-family: "Helvetica Neue";
              color: #ff6700;
            }
          }
        }
      }

      .addAddress {
        position: relative;
        margin-top: 0px;
        float: left;
        width: 270px;
        height: 180px;
        border: 1px solid #e0e0e0;
        margin-right: 25px;
        cursor: pointer;

        &:hover {
          border: 1px solid #b0b0b0;

          .fontContainer {
            .iconfont {
              color: #b0b0b0;
            }
          }
        }

        .fontContainer {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 59px;
          .iconfont {
            margin-left: 16px;
            font-size: 28px;
            color: #e0e0e0;
          }
          p {
            margin-top: 5px;
            font-size: 14px;
            font-family: "Helvetica Neue";
            color: #b0b0b0;
          }
        }
      }
    }

    .text1 {
      width: 1178px;
      height: 40px;
      margin: 0 auto;

      p {
        font-size: 18px;
        font-family: "Helvetica Neue";
        color: #333;
      }
    }

    .commodity {
      width: 1178px;
      margin: 0px auto;

      .singleItem {
        width: 1178px;
        height: 30px;
        padding-top: 15px;
        padding-bottom: 15px;
        position: relative;

        img {
          width: 30px;
          height: 30px;
        }

        span {
          font-size: 14px;
          font-family: "Helvetica Neue";
          color: #424242;
        }

        span:nth-child(n-3) {
          margin-left: 5px;
        }

        span:nth-child(5) {
          width: 150px;
          height: 14px;
          text-align: center;
          position: absolute;
          left: 690px;
        }

        span:nth-child(6) {
          text-align: right;
          position: absolute;
          right: 45px;
          width: 190px;
          height: 14px;
          display: inline-block;

          color: #ff6701;
        }
      }
    }

    .text2 {
      margin: 0 auto;
      width: 1178px;
      height: 46px;
      padding-top: 25px;
      padding-bottom: 25px;
      border-top: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      line-height: 46px;

      span:nth-child(1) {
        font-size: 18px;
        font-family: "Helvetica Neue";
        color: #333;
        margin-right: 75px;
      }

      span:nth-child(2) {
        font-size: 14px;
        font-family: "Helvetica Neue";
        color: #ff6700;
      }
    }

    .text3 {
      margin: 0 auto;
      width: 1178px;
      height: 46px;
      padding-top: 25px;
      padding-bottom: 25px;
      line-height: 46px;

      span:nth-child(1) {
        font-size: 18px;
        font-family: "Helvetica Neue";
        color: #333;
        margin-right: 110px;
      }

      span:nth-child(n + 2) {
        font-size: 14px;
        font-family: "Helvetica Neue";
        color: #ff6700;
        margin-right: 15px;
      }
    }

    .price {
      width: 1130px;
      height: 200px;
      padding-top: 20px;
      padding-bottom: 20px;
      margin: 0 auto;

      div:nth-child(-n + 5) {
        margin-left: 900px;
        width: 223px;
        height: 28px;

        span:nth-child(1) {
          text-align: right;
          display: inline-block;
          width: 126px;
          height: 28px;
          font-family: "Helvetica Neue";
          font-size: 14px;
          color: #757575;
        }

        span:nth-child(2) {
          text-align: right;
          width: 97px;
          height: 28px;
          display: inline-block;
          font-family: "Helvetica Neue";
          font-size: 14px;
          color: #ff6700;
        }
      }

      div:nth-child(6) {
        margin-top: 10px;
        margin-left: 900px;
        height: 35px;

        span:nth-child(1) {
          text-align: right;
          display: inline-block;
          width: 126px;
          height: 28px;
          font-family: "Helvetica Neue";
          font-size: 14px;
          color: #757575;
        }

        span:nth-child(2) {
          font-size: 30px;
          font-family: "Helvetica Neue";
          color: #ff6700;
        }

        span:nth-child(3) {
          font-family: "Helvetica Neue";
          font-size: 14px;
          color: #ff6700;
        }
      }
    }

    .buy {
      border-top: 1px solid #e0e0e0;
      width: 1130px;
      height: 40px;
      padding: 20px 48px 20px 48px;
      position: relative;

      .userChosenAddress {
        width: 400px;
        height: 40px;
        position: absolute;
        left: 50px;
        top: 50%;
        transform: translate(0, -50%);

        span {
          font-size: 14px;
          font-family: "Helvetica Neue";
          color: #424242;
        }

        span:nth-child(1) {
          display: inline-block;
          margin-right: 3px;
        }
        span:nth-child(4) {
          display: inline-block;
          margin-right: 5px;
        }

        span:nth-child(5) {
          display: inline-block;
          margin-right: 5px;
        }

        span:nth-child(6) {
          cursor: pointer;
          display: inline-block;
          color: #ff6700;
        }
      }
      .back {
        cursor: pointer;
        width: 160px;
        height: 40px;
        line-height: 40px;
        color: #b0b0b0;
        font-family: "Helvetica Neue";
        text-align: center;
        background-color: #fff;
        border: 1px solid #b0b0b0;
        position: absolute;
        right: 230px;
        font-size: 14px;
      }

      .goToOrder {
        cursor: pointer;
        width: 160px;
        height: 40px;
        line-height: 40px;
        color: #fff;
        font-family: "Helvetica Neue";
        text-align: center;
        background-color: #ff6700;
        position: absolute;
        right: 40px;
        font-size: 14px;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
  opacity: 0;
}
</style>