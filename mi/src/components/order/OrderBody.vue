<template>
  <div>
    <div class="container">
      <div id="OrderBodyTop">
        <a href="/index">首页</a>&nbsp;
        <span v-if="belongsTo == 'total'">/&nbsp;&nbsp;交易订单</span>
        <span v-else>/&nbsp;&nbsp;订单详情</span>
      </div>
      <div class="leftSide">
        <div class="modularName">订单中心</div>
        <p :class="{ hightLight: belongsTo == 'total' }">我的订单</p>
        <p>评价晒单</p>
        <p>话费充值订单</p>
        <p>以旧换新订单</p>
        <div class="modularName">个人中心</div>
        <p>我的个人中心</p>
        <p>消息通知</p>
        <p>购买资格</p>
        <p>现金账户</p>
        <p>小米礼品卡</p>
        <p>现金券</p>
        <p>喜欢的商品</p>
        <p>优惠券</p>
        <p>收货地址</p>
        <p>红包</p>
        <div class="modularName">售后服务</div>
        <p>服务记录</p>
        <p>申请服务</p>
        <p>领取快递报销</p>
        <div class="modularName">账户管理</div>
        <p>个人信息</p>
        <p>修改密码</p>
        <p>注销服务</p>
      </div>
      <!-- 存放右栏 -->
      <router-view></router-view>
      <!-- <OrderShowTotal /> -->
    </div>
  </div>
</template>

<script>
// import OrderShowTotal from "./OrderShowTotal";
export default {
  data() {
    return {
      belongsTo: "",
    };
  },
  methods: {},
  components: {
    // OrderShowTotal,
  },
  mounted() {
    if (window.location.href.indexOf("detail") != -1) {
      //是detail
      this.belongsTo = "detail";
    } else {
      this.belongsTo = "total";
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 99vw;
  background-color: #f5f5f5;
  overflow: hidden;

  #OrderBodyTop {
    width: 1226px;
    height: 40px;
    margin: 0 auto;
    line-height: 40px;
    a {
      text-decoration: none;
      font-size: 12px;
      color: #757575;
      font-family: "Helvetica Neue";
    }

    span {
      font-size: 12px;
      color: #757575;
      font-family: "Helvetica Neue";
    }
  }

  .leftSide {
    float: left;
    margin-top: 5px;
    margin-left: 399px;
    width: 234px;
    height: 910px;
    background-color: #fff;
    padding-top: 36px;
    padding-bottom: 36px;
    margin-bottom: 40px;

    .modularName {
      width: 138px;
      height: 52px;
      line-height: 52px;
      margin: 0 auto;
      margin-top: 10px;
      color: #333;
      font-size: 16px;
      font-family: "Helvetica Neue";
    }

    p {
      cursor: pointer;
      width: 138px;
      height: 33px;
      line-height: 33px;
      color: #757575;
      font-size: 14px;
      font-family: "Helvetica Neue";
      margin: 0 auto;

      &:hover {
        color: #333;
      }
    }

    .hightLight {
      color: #ff6700;
    }
  }
}
</style>