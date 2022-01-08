<template>
  <div>
    <GoodsHeader />
    <ItemMessage
      :itemLists="['Redmi K40', 'Redmi K30', 'K40 Pro 系列']"
      id="3"
    />
    <div class="container">
      <img class="imgSpreadOver" src="../../../public/imgs/K40.png" />
      <img
        class="imgSpreadOver"
        src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redmik40/seciton2-1.jpg"
      />
      <div class="img3">
        <img class="imgSpreadOver" src="../../../public/imgs/K40_2.png" />
        <div class="img4">
          <img
            class="imgHarf"
            src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redmik40/seciton3-2-mc.jpg"
          />
          <img
            class="imgHarf"
            src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redmik40/seciton3-3.jpg"
          />
        </div>
      </div>
      <div class="video">
        <video
          autoplay
          loop
          muted="true"
          src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redmik40/seciton4-1.mp4"
        ></video>
      </div>
      <img
        class="imgSpreadOver"
        src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redmik40/seciton8-1.jpg"
      />
    </div>
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
.container {
  .img3 {
    height: 1613px;
    background-color: #000;

    .img4 {
      width: 1160px;
      margin: 0 auto;
    }
  }
  .video {
    video {
      width: 99.1vw;
    }
  }
}
.imgSpreadOver {
  width: 99.1vw;
}

.imgHarf {
  width: 1160px;
}
</style>