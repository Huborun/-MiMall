<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    //开始时，清空所有cookie，防止冲突
    this.$cookie.delete("userId");
  },
  beforeDestroy() {
    this.$store.dispatch("clear");
    this.$cookie.delete("userId");
  },
};
</script>

<style>
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
