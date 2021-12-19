<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
    <button @click="go">点击发送</button>
  </div>
</template>
<script>
import NavHeader from "../components/NavHeader";
import NavFooter from "../components/NavFooter";
export default {
  name: "nav-home",
  components: {
    NavHeader,
    NavFooter,
  },
  mounted() {},
  methods: {
    go() {
      this.axios.patch("http://localhost:3000/user/1", {
        userId: 1,
        userName: "张三",
        userPwd: "abcdabcd",
        cartList: [1, 2, 3, 4],
      });
    },
  },
};
</script>