<template>
  <div>
    <GoodsHeader />
    <OrderBody />
  </div>
</template>

<script>
import GoodsHeader from "../components/goodscompoent/GoodsHeader";
import OrderBody from "../components/order/OrderBody.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    GoodsHeader,
    OrderBody,
  },
  mounted() {
    // console.log(window.location.href)
    // setTimeout(async () => {
    //   if (this.$cookie.get("userId")) {
    //     let result = await this.axios.get(
    //       `${this.CURL}users/order?userid=${this.$cookie.get("userId")}`
    //     );
    //     console.log(result.data.msg.length)
    //   }
    // }, 100);
    // let isTrue = false;
    // if (isTrue) {
    //   this.$router.push("/order/empty");
    // } else {
    //   this.$router.push("/order/total/2");
    // }
  },
  //  beforeRouteEnter(to, from, next) {
  //   // 在渲染该组件的对应路由被 confirm 前调用
  //   // 不！能！获取组件实例 `this`
  //   // 因为当守卫执行前，组件实例还没被创建
  //   fetch(`http://localhost:6789/mimall/user`)
  //   console.log(to.path)
  //   console.log(from.path)
  //   next()
  // },
};
</script>

<style lang="scss" scoped>
</style>