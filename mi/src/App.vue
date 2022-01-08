<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {setAtt} from "./mixin/setAtt.js"
export default {
  name: "App",
  components: {},
  mixins:[setAtt],
  data() {
    return {};
  },
  mounted() {
    if (this.$cookie.get("userId")) {
      //如果确实有userId
      //则设置Vuex
       this.setMsg(this.axios, this.$store, this.$cookie.get("userId"));
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
