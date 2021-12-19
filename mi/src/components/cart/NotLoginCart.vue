<template>
  <div id="container">
    <div class="image">
      <img src="../../../public/imgs/NotLogin.png" />
    </div>
    <div class="text">
      <p>您的购物车还是空的！</p>
      <p>登录后将显示您之前加入的商品</p>
      <div class="buttons">
        <div class="button1" @click="goLogin">立即登录</div>
        <div class="button2" @click="goIndex">马上去购物</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
    goIndex() {
      this.$router.push("/index");
    },
  },
};
</script>

<style lang="scss" scoped>
#container {
  width: 1226px;
  height: 273px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 95px;

  .image {
    float: left;
    width: 558px;
    height: 273px;
    img {
      margin-left: 95px;
      width: 450px;
      height: 280px;
    }
  }

  .text {
    float: left;
    height: 350px;
    width: 400px;
    padding-top: 75px;
    p:nth-child(1) {
      font-size: 36px;
      color: #b0b0b0;
      font-weight: 700;
      font-family: "Helvetica Neue";
    }
    p:nth-child(2) {
      margin-top: 5px;
      font-size: 20px;
      color: #b0b0b0;
      font-family: "Helvetica Neue";
    }

    .buttons {
      margin-top: 25px;
      text-align: center;
      line-height: 50px;
      font-size: 14px;

      .button1 {
        cursor: pointer;
        float: left;
        width: 172px;
        height: 50px;
        color: #fff;
        background-color: #ff6700;
        &:hover {
          background-color: #f25807;
        }
      }

      .button2 {
        cursor: pointer;
        margin-left: 10px;
        float: left;
        width: 172px;
        height: 50px;
        color: #ff6700;
        border: 1px solid #ff6700;
      }
    }
  }
}
</style>