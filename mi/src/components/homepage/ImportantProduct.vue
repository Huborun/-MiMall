<template>
  <div class="root">
    <div class="four-ad">
      <div class="channel">
        <div class="channel-item">
          <div class="channer-item-font">
            <i class="iconfont icon-shijian"></i>
          </div>
          <div class="channer-item-text">保障服务</div>
        </div>
        <div class="channel-item">
          <div class="channer-item-font">
            <i class="iconfont icon-gfjianzhuwu"></i>
          </div>
          <div class="channer-item-text">企业团购</div>
        </div>
        <div class="channel-item">
          <div class="channer-item-font">
            <i class="iconfont icon-fma"></i>
          </div>
          <div class="channer-item-text">F码通道</div>
        </div>
        <div class="channel-item">
          <div class="channer-item-font">
            <i class="iconfont icon-dianhuaqia"></i>
          </div>
          <div class="channer-item-text">米粉卡</div>
        </div>
        <div class="channel-item">
          <div class="channer-item-font">
            <i class="iconfont icon-yijiuhuanxin"></i>
          </div>
          <div class="channer-item-text">以旧换新</div>
        </div>
        <div class="channel-item">
          <div class="channer-item-font">
            <i class="iconfont icon-qixian1"></i>
          </div>
          <div class="channer-item-text">话费充值</div>
        </div>
      </div>
      <ul v-for="(ad, index) in adList1" :key="index">
        <li>
          <a v-if="ad.showid !=0" :href="'/#/product/' + ad.showid"
            ><img :src="ad.src"
          /></a>
          <a v-else href="javascript:;"><img :src="ad.src" /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adList1: [""],
    };
  },
  methods: {},
  mounted() {
    //3张中型手机图片
    this.axios({
      method: "get",
      url:`${this.CURL}/ad/adonhome`,
    }).then((res) => {
      this.adList1 = res.data.msg;
    });
  },
};
</script>

<style lang="scss" scoped>
.root{
  .four-ad {
  margin: 15px auto;
  width: 1226px;
  height: 171px;

  .channel {
    float: left;
    width: 234px;
    height: 170px;
    background-color: #575757;
    position: relative;

    .channel-item {
      float: left;
      width: 76px;
      height: 82px;
      position: relative;
      color: #d3d3d3;
      cursor: pointer;

      &:hover {
        color: #fff;
      }

      .channer-item-font {
        position: absolute;
        bottom: 47%;
        left: 35%;
      }

      .channer-item-text {
        position: absolute;
        bottom: 25%;
        left: 20%;
        font-size: 12px;
        font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
          "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
      }
      i {
        font-size: 24px;
      }
    }

    //消除前三个上面的条
    .channel-item:nth-child(n + 4)::before {
      position: absolute;
      top: -1px;
      left: 6px;
      content: "";
      width: 64px;
      height: 1px;
      background-color: #665e57;
    }

    .channel-item::after {
      position: absolute;
      top: 6px;
      left: 0px;
      content: "";
      width: 1px;
      height: 64px;
      background-color: #665e57;
    }
  }

  li {
    float: left;

    img {
      width: 316px;
      height: 170px;
      margin-left: 14.5px;
    }
  }
}
}

</style>