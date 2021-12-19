<template>
  <div>
    <AllCategory/>
  </div>
</template>

<script>
import AllCategory from "../common/AllCategory";
export default {
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    AllCategory,
  },
};
</script>

<style lang="scss" scoped>
.all{
    position:absolute;
    top:100px;
}
.categoryContainer {
  z-index: 100;
  position: absolute;
  width: 232px;
  height: 500px;
  top: 80px;
  left: 400px;
  span {
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-family: "Helvetica Neue";
    position: absolute;
    top: -5px;
    left: 120px;
  }

  .categoryList {
    position: absolute;
    top: 50px;
    left: 0px;

    ::v-deep .item-list {
      background-color: #fff;
      border: 1px solid #ff6700;
      #item-ul {
        .item-li {
          a {
            color: #424242;
          }
          .icon-jiantouyou {
            color: #e0e0e0;
          }
        }
      }
    }
  }
}
</style>