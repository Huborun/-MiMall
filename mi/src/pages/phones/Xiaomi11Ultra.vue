<template>
  <div>
    <GoodsHeader />
    <ItemMessage :itemLists="['Xiaomi 11 Ultra', 'Xiaomi 11']" id="2" />
    <img src="../../../public/imgs/11Ultra1.png" />
    <img src="../../../public/imgs/11Ultra2.png" />
    <video autoplay loop muted>
      <source
        src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/mi11ultra/section3-1.mp4"
        type="video/mp4"
      />
    </video>
    <img src="../../../public/imgs/11Ultra3.png" />
  </div>
</template>

<script>
import GoodsHeader from "../../components/goodscompoent/GoodsHeader.vue";
import ItemMessage from "../../components/common/ItemMessage.vue";
export default {
  data() {
    return {};
  },
  components: {
    GoodsHeader,
    ItemMessage,
  },
  methods: {},
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