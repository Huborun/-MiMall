<template>
  <div>
    <GoodsHeader />
    <ItemMessage
      :itemLists="['Xiaomi MIX FOLD折叠屏手机', 'Xiaomi MIX 4']"
      id="5"
    />
    <img src="../../../public/imgs/MIXFOLD1.png" />
    <img src="../../../public/imgs/MIXFOLD2.png" />
    <video autoplay loop muted>
      <source
        src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/mixfold/s4_v.mp4"
        type="video/mp4"
      />
    </video>
    <img src="../../../public/imgs/MIXFOLD3.png" />
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