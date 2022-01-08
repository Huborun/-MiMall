<template>
  <div>
    <div class="orderSuccessHeader">
      <div class="container">
        <div class="leftSide">
          <img src="../../public/imgs/mi-logo.png" />
          <p>支付订单</p>
        </div>
        <div class="rightSide">
          <div class="userContainer">
            <UserCenter />
          </div>
          <p>|</p>
          <a href="/#/order/total/1">我的订单</a>
        </div>
      </div>
    </div>
    <div class="orderSuccessBody">
      <div class="tips">
        <div class="bodyTop">
          <div class="iconContainer">
            <div class="icon">
              <i class="iconfont icon-right-1"></i>
            </div>
          </div>
          <div class="messageContainer">
            <div class="row1">
              <p>订单提交成功！去付款咯～</p>
              <p>
                应付总额：<span>{{ total }}元</span>
              </p>
            </div>
            <div class="row2">
              <p>请在<span> 0 小时 14 分</span>内完成支付, 超时后将取消订单</p>
              <p @click="changeDetails">
                订单详情 <i class="iconfont icon-xiangxia"></i>
              </p>
            </div>
            <div class="row3" v-if="!showDetails">
              <p>收货信息：{{ address }}</p>
            </div>
          </div>
        </div>
        <transition name="plus-icon">
          <div class="bodyBottom" v-if="showDetails">
            <div class="details">
              <div class="orderId">
                <p>订单号：</p>
                <p>{{ orderid }}</p>
              </div>
              <div class="address">
                <p>收货信息：</p>
                <p>{{ address }}</p>
              </div>
              <div class="itemMessage">
                <p class="itemname">商品名称：</p>
                <div class="itemContainer">
                  <p
                    class="orderList"
                    v-for="(item, index) in orderList"
                    :key="index"
                  >
                    {{ item }}
                  </p>
                </div>
              </div>
              <div class="other">
                <p>发票信息：</p>
                <p>电子普通发票 个人</p>
              </div>
            </div>
            <!-- </div> -->
          </div>
        </transition>
        <div class="placeholder"></div>
      </div>
      <div class="pay">
        <div class="payHeader">
          <p>选择以下支付方式付款</p>
        </div>
        <div class="payBody">
          <div class="plateform">
            <p>支付平台</p>
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b6b02396368c9314528c0bbd85a2e06.png"
            />
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a4f743d0bdb5c048ad9803914a4ea83.jpg"
            />
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg"
            />
          </div>
          <div class="bank">
            <p>银行借记卡及信用卡</p>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_zsyh.png" />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_gsyh.png" />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_jsyh.png" />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_jtyh.png" />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_nyyh.png" />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_zgyh.png" />
            </div>
            <div class="image">
              <img
                src="https://s01.mifile.cn/i/banklogo/payOnline_youzheng.png"
              />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_gfyh.png" />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_pufa.png" />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_gdyh.png" />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_xyyh.png" />
            </div>
            <div class="more" v-if="!showMoreBank" @click="changeShowMoreBank">
              <p>查看更多</p>
            </div>
            <div class="image" v-if="showMoreBank">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_msyh.png" />
            </div>
            <div class="image" v-if="showMoreBank">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_shyh.png" />
            </div>
            <div class="image" v-if="showMoreBank">
              <img
                src="https://s01.mifile.cn/i/banklogo/payOnline_bjnsyh.png"
              />
            </div>
            <div class="image" v-if="showMoreBank">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_nbyh.png" />
            </div>
            <div class="image" v-if="showMoreBank">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_hzyh.png" />
            </div>
            <div class="image" v-if="showMoreBank">
              <img
                src="https://s01.mifile.cn/i/banklogo/payOnline_shnsyh.png"
              />
            </div>
            <div class="image" v-if="showMoreBank">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_fcyh.png" />
            </div>
            <div class="more" v-if="showMoreBank" @click="changeShowMoreBank">
              <p>收起更多</p>
            </div>
          </div>
          <div class="quick">
            <div class="quickHeader">
              <p>快捷支付</p>
              <p>（支持以下各银行信用卡以及部分银行借记卡）</p>
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_zsyh.png" />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_jtyh.png" />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_jsyh.png" />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_gsyh.png" />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_zxyh.png" />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_gdyh.png" />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_zgyh.png" />
            </div>
            <div class="image">
              <img
                src="https://s01.mifile.cn/i/banklogo/payOnline_shncsyyh.png"
              />
            </div>
            <div class="image">
              <img
                src="https://s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png"
              />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_xyyh.png" />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_nyyh.png" />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_payh.png" />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_hyyh.png" />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_gfyh.png" />
            </div>
            <div class="image">
              <img src="https://s01.mifile.cn/i/banklogo/payOnline_bjyh.png" />
            </div>
          </div>
          <div class="placeholder"></div>
        </div>
      </div>
      <div class="payBottom">
        <div class="payBottomContainer">
          <p>分期付款</p>
          <div class="image">
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c924147efb783abb94fde84a07a5e89b.jpg"
            />
          </div>
          <div class="image">
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b97500cce80cfb46d4ff6d8d1015db03.png"
            />
          </div>
          <div class="image">
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/21f373c603cb1284c1bcb7acaf2cb96d.jpg"
            />
          </div>
        </div>
      </div>
    </div>

    <NavFooter />
  </div>
</template>

<script>
import NavFooter from "../components/NavFooter";
import UserCenter from "../components/common/UserCenter";
export default {
  data() {
    return {
      orderList: [],
      total: 0,
      address: "",
      orderid: -1,
      showDetails: false,
      showMoreBank: false,
    };
  },
  methods: {
    changeDetails() {
      this.showDetails = !this.showDetails;
    },
    changeShowMoreBank() {
      this.showMoreBank = !this.showMoreBank;
    },
  },
  components: { NavFooter, UserCenter },
  async mounted() {
    document.documentElement.scrollTop = 0;

    this.orderid = this.$route.params["orderid"];

    //根据orderid获取此次订单项目
    let result = await this.axios.get(
      `${this.CURL}users/order?orderid=${this.orderid}`
    );
    result = result.data.msg;

    //设置orderid
    this.orderid = result[0].orderid;

    //设置购买项目合集
    let array = [];
    result.forEach((item) => {
      let str = `${item.itemname} ${item.memory} ${item.color}`;
      array.push(str);
    });
    this.orderList = array;
    //获取总金额
    let money = result.reduce((total, current) => {
      return (total += current.price * current.amount);
    }, 0);
    this.total = money;

    let addressid = result[0].addressid;
    let result2 = await this.axios.get(
      `${this.CURL}users/address?id=${addressid}`
    );
    result2 = result2.data.msg[0];
    let userphone = result2.phone.slice(0, 3) + "****" + result2.phone.slice(7);
    let address = `${result2.username} ${userphone} ${result2.region} ${result2.address}`;
    this.address = address;
  },
};
</script>

<style lang="scss" scoped>
.orderSuccessHeader {
  width: 100vw;
  height: 102px;
  background-color: #fff;
  border-bottom: 3px solid #ff6700;

  .container {
    width: 1226px;
    height: 102px;
    margin: 0 auto;
    position: relative;
    .leftSide {
      width: 205px;
      height: 48px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      line-height: 48px;

      img {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 40px;
      }

      p {
        float: left;
        font-size: 28px;
        font-family: "Helvetica Neue";
        color: #424242;
      }
    }

    .rightSide {
      width: 190px;
      height: 102px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      line-height: 102px;

      .userContainer {
        float: left;
      }

      p {
        float: left;
        color: #b0b0b0;
        margin-left: 10px;
      }

      a {
        text-decoration: none;
        float: left;
        font-size: 12px;
        font-family: "Helvetica Neue";
        color: #757575;
        margin-left: 10px;

        &:hover {
          color: #ff6700;
        }
      }
    }
  }
}

.orderSuccessBody {
  width: 100vw;
  background-color: #f5f5f5;
  overflow: hidden;

  .tips {
    margin: 40px auto;
    width: 1226px;
    background-color: #fff;

    .bodyTop {
      width: 1226px;
      height: 140px;
      padding-top: 10px;
      padding-bottom: 10px;
      .iconContainer {
        float: left;
        width: 180px;
        height: 160px;
        position: relative;
        .icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 84px;
          height: 84px;
          .iconfont {
            font-size: 90px;
            color: #83c44e;
          }
        }
      }

      .messageContainer {
        float: left;
        right: 0;
        width: 995px;
        .row1 {
          margin-top: 45px;
          width: 995px;
          overflow: hidden;
          p:nth-child(1) {
            float: left;
            font-size: 24px;
            color: #424242;
            font-family: "Helvetica Neue";
          }

          p:nth-child(2) {
            float: right;
            font-size: 14px;
            color: #616161;
            font-family: "Helvetica Neue";

            span {
              font-size: 24px;
              color: #ff6700;
              font-family: "Helvetica Neue";
            }
          }
        }

        .row2 {
          margin-top: 13px;
          width: 995px;
          overflow: hidden;
          p:nth-child(1) {
            float: left;
            font-size: 14px;
            color: #757575;
            font-family: "Helvetica Neue";

            span {
              font-size: 14px;
              color: #ff6700;
              font-family: "Helvetica Neue";
            }
          }

          p:nth-child(2) {
            cursor: pointer;
            float: right;
            font-size: 14px;
            color: #757575;
            font-family: "Helvetica Neue";

            &:hover {
              color: #ff6700;
            }

            i {
              font-size: 10px;
              color: #757575;
            }
          }
        }

        .row3 {
          margin-top: 13px;
          font-size: 14px;
          font-family: "Helvetica Neue";
          color: #616161;
        }
      }
    }

    .bodyBottom {
      width: 1226px;

      .details {
        width: 995px;
        margin-left: 180px;
        border-top: 1px solid #e0e0e0;

        .orderId {
          margin-top: 20px;
          width: 995px;
          height: 24px;
          margin-bottom: 8px;

          p:nth-child(1) {
            float: left;
            width: 85px;
            height: 24px;
            line-height: 24px;
            color: #333;
            font-size: 14px;
            font-family: "Helvetica Neue";
            text-align: left;
          }

          p:nth-child(2) {
            float: left;
            height: 24px;
            line-height: 24px;
            font-size: 14px;
            font-family: "Helvetica Neue";
            color: #ff6700;
          }
        }

        .address {
          margin-top: 8px;
          width: 995px;
          height: 24px;

          p:nth-child(1) {
            float: left;
            width: 85px;
            height: 24px;
            line-height: 24px;
            color: #333;
            font-size: 14px;
            font-family: "Helvetica Neue";
          }

          p:nth-child(2) {
            float: left;
            height: 24px;
            line-height: 24px;
            font-size: 14px;
            font-family: "Helvetica Neue";
            color: #333;
          }
        }

        .itemMessage {
          width: 995px;
          .itemname {
            float: left;
            width: 85px;
            height: 24px;
            line-height: 24px;
            color: #333;
            font-size: 14px;
            font-family: "Helvetica Neue";
            text-align: left;
          }
          .itemContainer {
            margin-left: 85px;
            width: 800px;
            line-height: 24px;
            .orderList {
              margin-top: 3px;
              color: #333;
              font-family: "Helvetica Neue";
              text-align: left;
              font-size: 14px;
              font-family: "Helvetica Neue";
              color: #333;
            }
          }
        }

        .other {
          overflow: hidden;
          margin-top: 10px;
          p:nth-child(1) {
            float: left;
            width: 85px;
            height: 24px;
            line-height: 24px;
            color: #333;
            font-size: 14px;
            font-family: "Helvetica Neue";
            text-align: left;
          }

          p:nth-child(2) {
            float: left;
            height: 24px;
            line-height: 24px;
            font-size: 14px;
            font-family: "Helvetica Neue";
            color: #333;
          }
        }
      }
    }

    .placeholder {
      width: 1226px;
      height: 40px;
    }
  }

  .pay {
    width: 1226px;
    margin: 10px auto;
    background-color: #fff;
    .payHeader {
      width: 1130px;
      margin: 20px auto;
      padding-bottom: 20px;
      padding-top: 20px;
      border-bottom: 1px solid #e0e0e0;
      height: 27px;
      font-size: 18px;
      font-family: "Helvetica Neue";
      color: #424242;
      background-color: #fff;
    }

    .payBody {
      .plateform {
        width: 1144px;
        height: 115px;
        margin: 25px auto;
        p {
          padding-bottom: 10px;
          font-weight: 700;
          font-size: 16px;
          font-family: "Helvetica Neue";
          color: #616161;
        }

        img {
          display: inline-block;
          cursor: pointer;
          width: 176px;
          height: 60px;
          border: 1px solid #e0e0e0;
          margin-right: 12px;

          &:hover {
            border: 1px solid #ff6700;
          }
        }
      }

      .bank {
        width: 1144px;
        margin: 0 auto;
        overflow: hidden;

        p {
          padding-bottom: 10px;
          font-weight: 700;
          font-size: 16px;
          font-family: "Helvetica Neue";
          color: #616161;
          margin-bottom: 10px;
        }

        .image {
          float: left;
          margin-bottom: 15px;
          margin-right: 12px;
          border: 1px solid #e0e0e0;
          cursor: pointer;
          &:hover {
            border: 1px solid #ff6700;
          }
          img {
            width: 176px;
            height: 60px;
          }
        }

        .more {
          cursor: pointer;
          float: left;
          margin-bottom: 15px;
          margin-right: 12px;
          width: 176px;
          height: 60px;
          border: 1px solid #e0e0e0;
          text-align: center;
          line-height: 60px;

          &:hover {
            border: 1px solid #ff6700;
          }

          p {
            font-size: 14px;
            font-family: "Helvetica Neue";
            color: #424242;
            font-weight: 400;
          }
        }
      }

      .quick {
        overflow: hidden;
        width: 1144px;
        margin: 0 auto;
        .quickHeader {
          width: 1130px;
          height: 24px;
          overflow: hidden;
          margin: 25px auto;
          line-height: 24px;

          p:nth-child(1) {
            font-size: 16px;
            font-family: "Helvetica Neue";
            color: #424242;
            margin-right: 10px;
            font-weight: 700;
            float: left;
          }

          p:nth-child(2) {
            float: left;
            font-size: 12px;
            font-family: "Helvetica Neue";
            color: #b0b0b0;
          }
        }

        .image {
          float: left;
          margin-bottom: 15px;
          margin-right: 12px;
          border: 1px solid #e0e0e0;
          cursor: pointer;
          &:hover {
            border: 1px solid #ff6700;
          }
          img {
            width: 176px;
            height: 60px;
          }
        }
      }

      .placeholder {
        width: 1226px;
        height: 60px;
        margin: 0 auto;
      }
    }
  }

  .payBottom {
    margin: 30px auto;
    width: 1226px;
    height: 174px;
    background-color: #fff;
    overflow: hidden;
    margin-bottom: 50px;

    .payBottomContainer {
      width: 1130px;
      margin: 0 auto;
      p {
        margin-top: 30px;
        font-size: 16px;
        font-family: "Helvetica Neue";
        color: #424242;
        font-weight: 700;
        margin-bottom: 20px;
      }

      .image {
        float: left;
        margin-bottom: 15px;
        margin-right: 12px;
        width: 176px;
        height: 60px;
        border: 1px solid #e0e0e0;
        cursor: pointer;
        &:hover {
          border: 1px solid #ff6700;
        }
        img {
          width: 176px;
          height: 60px;
        }
      }
    }
  }
}

.plus-icon-enter-active {
  transition: opacity 0.5s;
}
.plus-icon-enter {
  opacity: 0;
}
.plus-icon-leave-active {
  transition: opacity 0.5s;
}
.plus-icon-leave-to {
  opacity: 0;
}
</style>