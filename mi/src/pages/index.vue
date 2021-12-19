<template>
  <div class="root">
    <div class="rotation">
      <RotationChart />
      <CategoryList />
    </div>
    <ImportantProduct />
    <div class="ads">
      <div class="oneBig">
        <a :href="'/#/product/' + bigAdId">
          <img :src="adSrc" />
        </a>
      </div>
      <OtherProduct
        url="http://localhost:3000/phonesOnIndex"
        name="手机"
        :category="productList[0]"
        :order="0"
        :morethanone="false"
      />
      <OtherProduct
        url="http://localhost:3000/SmartWearOnIndex"
        name="智能穿戴"
        :category="productList[1]"
        :order="0"
        :morethanone="true"
      />
      <OtherProduct
        url="http://localhost:3000/LifeApplianceOnIndex"
        name="家电"
        :category="productList[2]"
        :order="2"
        :morethanone="true"
      />
      <Videos />
      <RightSidebar :cartAmount = $store.state.cartList.length />
    </div>
  </div>
</template>
<script>
import RotationChart from "../components/homepage/RotationChart.vue";
import "swiper/css/swiper.css";
import CategoryList from "../components/common/CategoryList.vue";
import ImportantProduct from "../components/homepage/ImportantProduct.vue";
import OtherProduct from "../components/homepage/OtherProduct.vue";
import Videos from "../components/homepage/Videos.vue";
import RightSidebar from "../components/homepage/RightSidebar.vue";

export default {
  name: "index",
  components: {
    RotationChart,
    CategoryList,
    ImportantProduct,
    OtherProduct,
    Videos,
    RightSidebar,
  },
  data() {
    return {
      adSrc: "",
      bigAdId: 0,
      productList: [["手机"], ["穿戴", "热门"], ["电视影音", "热门"]],
    };
  },
  mounted() {
    // 1张大型手机图片
    this.axios({
      method: "get",
      url: "http://localhost:3000/adOnIndex",
    }).then((res) => {
      setTimeout(() => {
        this.adSrc = res.data.slice(3, 4)[0].src;
        this.bigAdId = res.data.slice(3, 4)[0].JumpId;
      }, 200);
    });
  },
};
</script>

<style lang="scss" scoped>
.root {
  .rotation {
    position: relative;
    width: 1226px;
    height: 460px;
    margin: 0px auto;
  }

  .ads {
    width: 100%;
    background-color: #f5f5f5;

    .oneBig {
      cursor: pointer;
      margin: 0px auto;
      width: 1226px;
      height: 120px;
      img {
        margin-top: 25px;
        width: 1226px;
        height: 120px;
      }
    }
  }
}
</style>