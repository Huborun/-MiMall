<template>
  <div>
    <GoodsHeader />
    <ItemMessage :itemLists="['Xiaomi MIX 4', 'Xiaomi MIX FOLD']" id="4" />
    <img src="../../../public/imgs/MIX4_1.png" />
    <video autoplay loop muted>
      <source
        src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/mix4/video_show.mp4"
        type="video/mp4"
      />
    </video>
    <img src="../../../public/imgs/MIX4_2.png" />
    <img src="../../../public/imgs/MIX4_3.png" />
  </div>
</template>

<script>
import GoodsHeader from "../../components/goodscompoent/GoodsHeader.vue";
import ItemMessage from "../../components/common/ItemMessage.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    GoodsHeader,
    ItemMessage,
  },
  mounted() {
    setTimeout(() => {
      document.documentElement.scrollTop = 150;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 99vw;
}

video {
  width: 99vw;
}
</style>