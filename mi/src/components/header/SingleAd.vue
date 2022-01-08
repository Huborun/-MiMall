<template>
  <div class="SingleAd">
    <div class="row1">
      <div
        class="singleItem"
        v-for="(item, index) in column1"
        :key="index"
        @click="goToProduct(1, index)"
      >
        <img :src="item.src" />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <div class="row2" v-if="column2.length > 0">
      <div
        class="singleItem"
        v-for="(item, index) in column2"
        :key="index"
        @click="goToProduct(2, index)"
      >
        <img :src="item.src" />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <div class="row3" v-if="column3.length > 0">
      <div
        class="singleItem"
        v-for="(item, index) in column3"
        :key="index"
        @click="goToProduct(3, index)"
      >
        <img :src="item.src" />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <div class="row4" v-if="column4.length > 0">
      <div
        class="singleItem"
        v-for="(item, index) in column4"
        :key="index"
        @click="goToProduct(4, index)"
      >
        <img :src="item.src" />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      column1: [],
      column2: [],
      column3: [],
      column4: [],
    };
  },
  methods: {
    goToProduct(columnIndex, index) {
      if (columnIndex == 1) {
        if (this.column1[index].showid != 0) {
          this.$router.push(`/product/${this.column1[index].showid}`);
        }
      } else if (columnIndex == 2) {
        if (this.column2[index].showid != 0) {
          this.$router.push(`/product/${this.column1[index].showid}`);
        }
      } else if (columnIndex == 3) {
        if (this.column3[index].showid != 0) {
          this.$router.push(`/product/${this.column1[index].showid}`);
        }
      } else {
        if (this.column4[index].showid != 0) {
          this.$router.push(`/product/${this.column1[index].showid}`);
        }
      }
    },
  },
  props: {
    category: String,
  },
  async mounted() {
    let url = `${this.CURL}ad/left?category=${this.category}`;
    let result = await this.axios.get(url);
    result = result.data.msg;
    //判断result的长度
    if (result.length <= 6) {
      this.column1 = result;
    } else if (result.length <= 12) {
      this.column1 = result.slice(0, 6);
      this.column2 = result.slice(6, 12);
    } else if (result.length <= 18) {
      this.column1 = result.slice(0, 6);
      this.column2 = result.slice(6, 12);
      this.column3 = result.slice(12, 18);
    } else {
      this.column1 = result.slice(0, 6);
      this.column2 = result.slice(6, 12);
      this.column3 = result.slice(12, 18);
      this.column4 = result.slice(18);
    }
  },
};
</script>

<style lang="scss" scoped>

.SingleAd{
   display:flex;
     flex-wrap: nowrap;
     flex-direction:row;
}
.row1,.row2,.row3,.row4 {
  // position: absolute;
  width: 250px;
  height: 460px;
  background-color: #fff;
}

// .row2{
//   left: 250px;
// }

// .row3{
//   left: 500px;
// }

// .row4{
//   left: 750px;
// }

.singleItem {
  width: 250px;
  height: 76px;
  position: relative;
  cursor: pointer;
  img {
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translate(0, -50%);
    width: 40px;
    height: 40px;
  }

  p {
    position: absolute;
    top: 50%;
    left: 80px;
    transform: translate(0, -50%);
    color: #333;
    font-family: "Helvetica Neue";
    font-size: 14px;

    &:hover {
      color: #ff6700;
    }
  }
}
</style>