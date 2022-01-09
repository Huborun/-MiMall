<template>
  <div class="root">
    <div class="rotation">
      <RotationChart />
      <CategoryList />
    </div>
    <ImportantProduct />
    <div class="ads">
      <div class="oneBig">
        <a :href="'/#/product/' + bigAdId[0]">
          <img :src="adSrc[0]" />
        </a>
      </div>
      <OtherProduct :url="srcList[0]" name="手机" :order="0" />
      <OtherProduct :url="srcList[1]" name="智能穿戴" :order="0" />
      <OtherProduct :url="srcList[2]" name="家电" :order="2" />
      <OtherProduct :url="srcList[3]" name="生活电器" :order="4" />
      <div class="oneBig">
        <a :href="'/#/product/' + bigAdId[1]">
          <img :src="adSrc[1]" />
        </a>
      </div>
      <OtherProduct :url="srcList[4]" name="厨房电器" :order="8" />
      <OtherProduct :url="srcList[5]" name="智能家居" :order="12" />
      <OtherProduct :url="srcList[6]" name="运动出行" :order="16" />
      <div class="oneBig">
        <a :href="'/#/product/' + bigAdId[2]">
          <img :src="adSrc[2]" />
        </a>
      </div>
      <OtherProduct :url="srcList[7]" name="日用百货" :order="20" />
      <Videos />
      <RightSidebar :cartAmount="$store.getters.cartAmount" />
    </div>
  </div>
</template>
<script>
import RotationChart from "../components/homepage/RotationChart.vue";
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
      adSrc: [],
      bigAdId: [],
      srcList: [
        `${this.CURL}ad/phones`,
        `${this.CURL}ad/smartwear`,
        `${this.CURL}ad/lifeappliance`,
        `${this.CURL}ad/household`,
        `${this.CURL}ad/kitchen`,
        `${this.CURL}ad/smarthome`,
        `${this.CURL}ad/sports`,
        `${this.CURL}ad/daily`
      ],
    };
  },
  mounted() {
    let adSrc = [];
    let bigAdId = [];
    // 1张大型手机图片
    this.axios({
      method: "get",
      url: `${this.CURL}/ad/adwide`,
    }).then((res) => {
      setTimeout(async () => {
        res.data.msg.forEach((item) => {
          adSrc.push(item.src);
          bigAdId.push(item.showid);
        });
        this.adSrc = adSrc;
        this.bigAdId = bigAdId;
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