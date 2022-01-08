<template>
  <div>
    <GoodsHeader />
    <ItemMessage :itemLists="['Redmi Note 11 Pro系列', 'Note 10 Pro']" id="1" />
    <img src="../../../public/imgs/Note11_1.png" />
    <img src="../../../public/imgs/Note11_2.png" />
    <img src="../../../public/imgs/Note11_3.png" />
    <video autoplay loop muted>
      <source
        src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redminote11pro4515/first.mp4"
        type="video/mp4"
      />
    </video>
    <img src="../../../public/imgs/Note11_4.png" />
    <img src="../../../public/imgs/Note11_5.png" />
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