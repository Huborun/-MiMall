<template>
  <div>
    <div class="container">
      <div class="continue">
        <a href="/#/index">继续购物</a>
        <span class="sep">|</span>
      </div>
      <div class="chosen">
        共
        <p>{{ $store.getters.cartTotalItems }}</p>
        件商品，已选择
        <p>2</p>
        件
      </div>
      <div class="goToSettlement">去结算</div>
      <div class="total">
        合计：
        <p>{{ $store.getters.cartTotalAmount }}</p>
        元
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  //   position: relative;
  width: 1226px;
  height: 50px;
  .continue {
    float: left;
    width: 120px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    position: relative;

    a {
      text-decoration: none;
      font-size: 14px;
      color: #757575;
      transition: color 0.3s;

      &:hover {
        color: #ff6700;
      }
    }

    span {
      position: absolute;
      right: 0;
      font-size: 14px;
      color: #eeeeee;
    }
  }

  .chosen {
    float: left;
    width: 200px;
    height: 50px;
    line-height: 50px;
    text-align: center;

    font-size: 14px;
    font-family: "Helvetica Neue";
    color: #757575;

    p {
      display: inline-block;
      font-size: 14px;
      font-family: "Helvetica Neue";
      color: #ff6700;
    }
  }

  .goToSettlement {
    cursor: pointer;
    float: right;
    width: 202px;
    height: 50px;
    background-color: #ff6700;
    color: #ffffff;
    font-size: 18px;
    font-family: "Helvetica";
    text-align: center;
    line-height: 50px;

    &:hover {
      background-color: #f25807;
    }
  }
  .total {
    float: right;
    height: 50px;
    line-height: 50px;
    margin-right: 50px;
    color:#ff6700;
    font-size: 14px;
    font-family: "Helvetica Neue";

    p{
        display: inline-block;
        font-size: 30px;
    }
  }
}
</style>