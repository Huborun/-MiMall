<template>
  <div>
    <div class="container">
      <CheckHeader />
      <CheckBody />
      <HintAddress />
      <NavFooter />
    </div>
  </div>
</template>

<script>
import NavFooter from "../components/NavFooter";
import CheckHeader from "../components/order/CheckHeader";
import CheckBody from "../components/order/CheckBody";
import HintAddress from "../components/order/HintAddress";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    NavFooter,
    CheckHeader,
    CheckBody,
    HintAddress,
  },
  mounted() {
    setTimeout(() => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, 300);
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
</style>