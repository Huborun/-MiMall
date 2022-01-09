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
  },

};
</script>

<style lang="scss" scoped>
</style>