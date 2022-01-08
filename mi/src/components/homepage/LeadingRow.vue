<template>
  <div>
    <div v-if="type == 'big'" class="big">
      <a v-if="showid" :href="'/#/product/' + showid">
        <img v-lazy="src" />
      </a>
      <a v-else href="javascript:;">
        <img v-lazy="src" />
      </a>
    </div>
    <div v-else class="middle">
      <a v-if="showid" :href="'/#/product/' + showid">
        <img v-lazy="src" />
      </a>
      <a v-else href="javascript:;">
        <img v-lazy="src" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  props: ["showid", "src", "type"],
};
</script>

<style lang="scss" scoped>
.big {
  width: 234px;
  height: 614px;
  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    position: relative;
    top: -3px;
    box-shadow: 5px 5px 5px #e8e8e8;
    transition-duration: 0.5s;
  }
}
.middle {
  margin-bottom: 13px;
  width: 234px;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    position: relative;
    top: -3px;
    box-shadow: 5px 5px 5px #e8e8e8;
    transition-duration: 0.5s;
  }
}
</style>