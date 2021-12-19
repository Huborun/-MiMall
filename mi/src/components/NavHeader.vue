<template>
  <div>
    <Topbar />
    <HeaderProduct />
  </div>
</template>
<script>
import Topbar from "./header/Topbar";
import HeaderProduct from "./header/HeaderProduct";
export default {
  name: "nav-header",
  data() {
    return {};
  },
  methods: {},
  components: {
    Topbar,
    HeaderProduct,
  },
};
</script>

<style lang="scss" scoped>
</style>