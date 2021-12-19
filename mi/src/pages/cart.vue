<template>
  <div>
    <div class="header">
      <div class="container">
        <div class="image" @click="goToHome">
          <img src="../../public/imgs/mi-logo.png" />
        </div>
        <div class="text1">我的购物车</div>
        <div class="text2" v-if="hasLogin">
          <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
        </div>
        <div class="userMsg" v-if="hasLogin">
          <userCenter />
          <span>|</span>
          <span>我的订单</span>
        </div>
        <div class="login" v-if="!hasLogin">
          <a href="/#/login">登录</a>
          <span>|</span>
          <a href="javascript:;">注册</a>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="notLogin" v-if="!hasLogin">
        <NotLoginCart />
      </div>
      <div class="login" v-else>
        <LoginCart />
      </div>
      <div class="cartBottom">
        <CartBottom />
      </div>
      <div class="recommendContainer">
        <RecommendItems />
      </div>
    </div>
    <div class="bottom">
      <NavFooter />
    </div>
  </div>
</template>

<script>
import userCenter from "../components/common/userCenter.vue";
import RecommendItems from "../components/common/RecommendItems";
import NavFooter from "../components/NavFooter";
import NotLoginCart from "../components/cart/NotLoginCart";
import LoginCart from "../components/cart/LoginCart";
import CartBottom from "../components/cart/CartBottom.vue";
export default {
  data() {
    return {
      hasLogin: false,
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/index");
    },
  },
  components: {
    userCenter,
    RecommendItems,
    NavFooter,
    NotLoginCart,
    LoginCart,
    CartBottom,
  },
  mounted() {
    document.documentElement.scrollTop = 0;
    if (this.$cookie.get("userId")) {
      this.hasLogin = true;
    } else {
      this.hasLogin = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 102px;
  border-bottom: 2px solid #ff6700;
  background-color: #fff;

  .container {
    width: 1226px;
    height: 102px;
    margin: 0 auto;
    position: relative;

    .image {
      cursor: pointer;
      margin-top: 26px;
      float: left;
      width: 48px;
      height: 48px;
      margin-right: 45px;

      img {
        width: 48px;
        height: 48px;
      }
    }

    .text1 {
      margin-top: 26px;
      float: left;
      width: 140px;
      height: 48px;
      line-height: 48px;
      font-size: 28px;
      font-family: "Helvetica Neue";
      color: #424242;
      margin-right: 13px;
    }

    .text2 {
      margin-top: 26px;
      height: 48px;
      float: left;
      font-size: 12px;
      font-family: "Helvetica Neue";
      color: #757575;

      p {
        margin-top: 22px;
      }
    }

    .userMsg {
      margin-top: 26px;
      float: right;
      width: 200px;
      height: 40px;

      span:nth-child(2) {
        margin-left: 10px;
        font-size: 12px;
        color: #b0b0b0;
      }

      span:nth-child(3) {
        cursor: pointer;
        margin-left: 10px;
        font-size: 12px;
        color: #757575;

        &:hover {
          color: #ff6700;
        }
      }
    }

    .login {
      a {
        text-decoration: none;
        font-size: 12px;
        font-family: "Helvetica Neue";
        color: #757575;
      }
      margin-top: 40px;
      width: 72px;
      height: 40px;
      float: right;
    }
    span {
      margin-left: 5px;
      margin-right: 5px;
      font-size: 12px;
      color: #b0b0b0;
    }
  }
}

.body {
  // height: 1000px;
  background-color: #f5f5f5;

  .cartBottom {
    width: 1226px;
    height: 50px;
    background-color: #fff;
    margin: 25px auto;
  }

  .recommendContainer {
    margin: 0 auto;
    margin-top: 40px;
    position: relative;
    height: 850px;
    width: 1226px;
  }
}
</style>