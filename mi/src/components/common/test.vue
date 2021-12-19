<template>
  <div>
    <div
      class="father"
      @mouseenter="showTrue"
      @mouseleave="showFalse"
    >
      <div class="son" v-if="show">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showTrue(e) {
      this.show = true;
      console.log(e)
    },
    showFalse(e) {
      this.show = false;
      console.log(e)
    },
  },
};
</script>

<style lang="scss" scoped>
.father {
  width: 200px;
  height: 100px;
  position: relative;
  background-color: #bfa;
}

.son{
  width: 200px;
  height: 400px;
  position:absolute;
  top:100px;
  background-color: #bbb;
}

</style>