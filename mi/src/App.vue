<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import setMsg from "./js/setMsg";
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    if (this.$cookie.get("userId")) {
      //如果确实有userId
      //则设置Vuex
      var url = `http://localhost:3000/user?userId=${this.$cookie.get(
        "userId"
      )}`;
      this.axios({
        method: "get",
        url,
      }).then((response) => {
        setMsg(this.axios, this.$store, response.data[0]);
      });
    }
  },
  beforeDestroy() {
    // this.$store.dispatch("clear");
    // this.$cookie.delete("userId");
  },
};
</script>

<style>
@import url(../public/MyFont/iconfont.css);
@import url(../public/MyFontColor/iconfont.css);
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

img {
  vertical-align: top;
  border: none;
}
</style>
