<template>
  <div class="root">
    <div class="swiper-items">
      <swiper :options="swiperOption" v-if="itemList.length">
        <swiper-slide v-for="(item, index) in itemList" :key="index">
          <a v-if="item.showid" v-bind:href="'/#/product/' + item.showid"
            ><img v-bind:src="item.src"
          /></a>
          <a v-else href="javascript:;"> <img v-bind:src="item.src" /></a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      itemList: [""],
    };
  },
  mounted() {
    //轮播图
    this.axios({
      method: "get",
      url: `${this.CURL}/ad/slides`,
    }).then((res) => {
      this.itemList = res.data.msg;
    });
  },
};
</script>

<style lang="scss" scoped>
.swiper-items {
  width: 1226px;
  height: 460px;
  position: absolute;
  left: 0;
  .swiper-button-prev {
    color: #333;
    left: 240px;
  }

  .swiper-button-next {
    color: #333;
  }
  .swiper-pagination {
    left: 550px;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>