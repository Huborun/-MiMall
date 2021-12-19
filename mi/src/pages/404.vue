<template>
  <div>
    <div class="image">
      <img
        src="http://s1.mi.com/m/ghd/2016/x0718m03/static/img/404.3ec06ef.jpg"
      />
    </div>
    <div class="text1">咦~页面不见了~</div>
    <div class="toHomepage" @click="go">返回首页 mi.com</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    go(){
      this.$router.push("/")
    }
  },
};
</script>

<style lang="scss" scoped>
img {
  position: absolute;
  top: 20%;
  left: 40%;
  width: 400px;
  height: 400px;
}
.text1 {
  position: absolute;
  top: 65%;
  left: 42%;
  font-size: 45px;
  color:#000;
}
.toHomepage {
  cursor: pointer;
  position: absolute;
  top: 77%;
  left: 44%;
  font-size: 30px;
  color:#0b72a4;
}
</style>