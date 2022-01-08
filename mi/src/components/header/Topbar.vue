<template>
  <div>
    <div class="site-topbar">
      <div class="container">
        <div class="topbar-navi">
          <a href="/">小米商城</a><span class="sep">|</span>
          <a href="javascript:;">MIUI</a><span class="sep">|</span>
          <a href="javascript:;">loT</a><span class="sep">|</span>
          <a href="javascript:;">云服务</a><span class="sep">|</span>
          <a href="javascript:;">天星数科</a><span class="sep">|</span>
          <a href="javascript:;">有品</a><span class="sep">|</span>
          <a href="javascript:;">小爱开发平台</a><span class="sep">|</span>
          <a href="javascript:;">企业团购</a><span class="sep">|</span>
          <a href="javascript:;">资质证照</a><span class="sep">|</span>
          <a href="javascript:;">协议规则</a><span class="sep">|</span>
          <a href="javascript:;">下载app</a><span class="sep">|</span>
          <a href="javascript:;">智能生活</a><span class="sep">|</span>
          <a href="javascript:;">Select Location</a>
        </div>
        <div
          class="topbar-cart"
          @mouseleave="showCartFalse"
          @mouseenter="showCartTrue"
        >
          <a
            href="/#/cart"
            :class="{ 'cart-mini': true, 'cart-mini2': hasCart }"
          >
            <i
              class="iconfont icon-gouwuchekong"
              v-if="$store.getters.cartAmount == 0"
            ></i>
            <i
              class="iconfont icon-gouwucheman"
              v-if="$store.getters.cartAmount != 0"
            ></i>
            <span id="cart" @click="goToCart">购物车</span>
            <span :class="{ 'cart-mini-num': true, 'cart-mini-num2': hasCart }"
              >({{ $store.getters.cartAmount }})</span
            >
          </a>
          <div v-if="$store.getters.cartTotalPrice == 0" class="cart-list">
            <p>购物车中还没有商品，赶紧选购吧!</p>
          </div>
          <div v-if="$store.getters.cartTotalPrice != 0" class="cart-list-full">
            <div class="cart-container-all" v-show="showCart">
              <div class="placeholder"></div>
              <div id="overflowContainer">
                <div
                  class="cart-container"
                  v-for="(cart, index) in cartList"
                  :key="index"
                >
                  <div class="cart-item-img"><img :src="cart.cartimage" /></div>
                  <div class="cart-item-name">
                    {{ cart.itemname }} {{ cart.memory }} <br />{{ cart.color }}
                  </div>
                  <div class="cart-item-price">{{ cart.price }}元</div>
                  <div class="multiply">x</div>
                  <div class="cart-item-amount">{{ cart.amount }}</div>
                </div>
              </div>
              <div class="cart-list-amount">
                <span id="cart-amount1"
                  >共 {{ $store.getters.cartAmount }} 件商品</span
                >
                <span id="cart-amount2"
                  >{{ $store.getters.cartTotalPrice }}
                  <span id="yuan">元</span></span
                >
                <div id="goConfirm" @click="goToCart">去购物车结算</div>
              </div>
            </div>
          </div>
        </div>
        <div class="topbar-info" v-if="!login">
          <a href="/#/login">登录</a><span class="sep">|</span>
          <a href="javascript:;">注册</a><span class="sep">|</span>
          <a href="javascript:;">消息通知</a>
        </div>
        <div class="topbar-login" v-if="login">
          <UserCenter />
          <span class="sep">|</span>
          <span class="user-message">消息通知</span>
          <span class="sep">|</span>
          <span class="user-order" @click="goToOrder">我的订单</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserCenter from "../common/UserCenter";
export default {
  data() {
    return {
      login: false,
      userName: "",
      hasCart: false,
      cartList: [],
      showCart: false,
    };
  },
  components: {
    UserCenter,
  },
  methods: {
    goToOrder(){
      this.$router.push("/order/total/1")
    },
    quit() {
      //退出时删除cookie
      this.$cookie.delete("userId");
    },
    showCartFalse() {
      this.showCart = false;
    },
    showCartTrue() {
      this.showCart = true;
      this.changeOverflow();
    },
    goToCart() {
      this.$router.push("/cart");
    },
    changeOverflow() {
      if (this.$store.state.userCart.length > 5) {
        document.getElementById("overflowContainer").style.height = 450 + "px";
      }
    },
  },
  mounted() {
    //获取登入用户信息
    setTimeout(() => {
      if (this.$cookie.get("userId")) {
        this.login = true;
        this.userName = this.$store.state.userName;
        this.cartList = this.$store.state.userCart;
      }
    }, 2000);
    //设置购物车背景颜色
    setTimeout(() => {
      if (this.$store.getters.cartTotalPrice > 0) {
        this.hasCart = true;
      }
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
* {
  font-size: 12px;
}

.site-topbar {
  position: relative;
  height: 40px;
  color: #b0b0b0;
  background: #333;

  .container {
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
    height: 40px;

    .topbar-navi {
      float: left;
      line-height: 40px;

      a:hover {
        color: #ffffff;
      }
    }

    .topbar-cart {
      position: relative;
      float: right;
      width: 120px;
      height: 100%;
      margin-left: 15px;

      .cart-list {
        z-index: 21;
        position: absolute;
        right: 0;
        width: 316px;
        height: 0px;
        background-color: #fff;
        box-shadow: 0 2px 10px rgb(0 0 0 / 15%);

        font-size: 12px;
        color: #424242;
        text-align: center;
        transition-duration: 0.5s;
        p {
          position: absolute;
          top: 0%;
          left: 20%;
          opacity: 0;
        }
      }

      .cart-list-full {
        z-index: 21;
        position: absolute;
        right: 0;
        transition-duration: 0.5s;
        width: 316px;
        background-color: #fff;
        box-shadow: 2px 2px 5px #888888;

        .placeholder {
          width: 100%;
          height: 20px;
        }

        #overflowContainer {
          overflow-x: hidden;
          .cart-container {
            position: relative;
            height: 80px;
            width: 276px;
            margin: 0 auto;

            .cart-item-img {
              cursor: pointer;
              position: absolute;
              left: 0px;
              top: 14px;
              img {
                width: 60px;
                height: 60px;
              }
            }
            .cart-item-name .cart-item-price .cart-item-amount {
              font-size: 12px;
              font-family: "Helvetica Neue";
              color: #424242;
            }

            .cart-item-name {
              cursor: pointer;
              position: absolute;
              left: 100px;
              top: 18px;
              width: 95px;
              height: 40px;
              color: #424242;
              &:hover {
                color: #ff6700;
              }
            }
            .multiply {
              position: absolute;
              left: 265px;
              top: 33px;
              font-size: 12px;
              color: #424242;
            }

            .cart-item-price {
              position: absolute;
              left: 220px;
              top: 33px;
              color: #424242;
            }

            .cart-item-amount {
              color: #424242;
              position: absolute;
              left: 275px;
              top: 33px;
            }
          }
        }

        .cart-container:nth-child(n + 3) {
          border-top: 1px solid #e0e0e0;
        }

        .cart-list-amount {
          background-color: #fafafa;
          width: 316px;
          height: 74px;
          position: relative;

          #cart-amount1 {
            position: absolute;
            top: 15px;
            left: 20px;
            font-size: 12px;
            color: #757575;
          }

          #cart-amount2 {
            position: absolute;
            top: 30px;
            left: 20px;
            font-size: 24px;
            color: #ff6700;
          }

          #goConfirm {
            cursor: pointer;
            position: absolute;
            top: 15px;
            right: 15px;
            width: 132px;
            height: 40px;
            background-color: #ff6700;
            color: #f5f5f5;
            font-size: 14px;
            font-family: "Helvetica Neue";
            text-align: center;
            line-height: 40px;
          }
        }
      }

      .cart-mini {
        height: 100%;
        text-decoration: none;
        position: relative;
        display: block;
        z-index: 100;
        line-height: 40px;
        text-align: center;
        background: #424242;

        .iconfont {
          margin-right: 5px;
          font-size: 16px;
        }

        .cart-mini-num {
          margin-left: 8px;
          line-height: 40px;
          text-align: center;
          color: #b0b0b0;
        }

        .cart-mini-num2 {
          color: white;
        }
      }

      .cart-mini2 {
        background-color: #ff6700;
        color: white;
      }

      &:hover {
        .cart-mini {
          color: #ff6700;
          background-color: #fff;
        }

        .cart-mini-num {
          color: #ff6700;
        }

        .cart-list {
          height: 100px;
          transition-duration: 0.5s;

          p {
            opacity: 1;
            top: 45%;
          }
        }
      }
    }

    .topbar-info {
      position: relative;
      float: right;
      line-height: 40px;

      a:hover {
        color: #ffffff;
      }
    }

    .topbar-login {
      width: 265px;
      position: relative;
      float: right;
      line-height: 40px;
      cursor: pointer;

      .user-order {
        text-align: center;
        display: inline-block;
        width: 60px;

        &:hover {
          color: #fff;
        }
      }

      .user-message {
        text-align: center;
        display: inline-block;
        width: 60px;
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
a {
  background-color: rgba(0, 0, 0, 0);
  text-decoration: none;
  color: #b0b0b0;
  line-height: 40px;
  display: inline-block;
}
.sep {
  line-height: 40px;
  font-family: sans-serif;
  margin: 0 6.5px;
  color: #424242;
}
</style>