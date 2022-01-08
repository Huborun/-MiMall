<template>
  <div>
    <div class="header">
      <div class="container">
        <div class="icon">
          <img src="../../../public/imgs/mi-logo.png" />
        </div>
        <div class="confirm">确认订单</div>
        <div class="rightSide">
          <div class="userContainer">
            <UserCenter />
          </div>
          <p>|</p>
          <a href="/#/order/total/1">我的订单</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserCenter from "../common/UserCenter";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    UserCenter,
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 99.1vw;
  height: 100px;
  background-color: #fff;

  border-bottom: 2px solid #ff6700;

  .container {
    width: 1226px;
    height: 100px;
    margin: 0 auto;
    line-height: 100px;

    .icon {
      width: 93px;
      height: 100px;
      float: left;
      position: relative;

      img {
        position: absolute;
        bottom: 25%;
        width: 48px;
        height: 48px;
      }
    }

    .confirm {
      float: left;

      font-size: 28px;
      font-family: "Helvetica Neue";
      font-weight: 400;
    }

    .rightSide {
      float: right;

      width: 200px;
      height: 100px;

      .userContainer{
        float: left;
      }

      p {
        margin-left: 10px;
        margin-right: 10px;
        float: left;
        font-size: 12px;
        color:#b0b0b0;
      }

      a {
        float: left;
        text-decoration: none;
        font-size: 12px;
        color:#757575;
        &:hover {
          color:#ff6700;
        }
      }
    }
  }
}
</style>