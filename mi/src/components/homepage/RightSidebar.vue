<template>
  <div>
    <div class="right">
      <div class="other">
        <div class="item item1">
          <div class="container1">
            <p><i class="iconfont icon-shouji"></i></p>
            <p class="text">手机APP</p>
          </div>
          <div class="leftImage">
            <div class="image">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/78c30d4f259ed43ab20e810a522a6249.png"
              />
            </div>
            <span>扫码领取新人百元礼包</span>
          </div>
        </div>
        <div class="item item2">
          <div class="container1">
            <p><i class="iconfont icon-geren"></i></p>
            <p class="text">个人中心</p>
          </div>
        </div>
        <div class="item item3">
          <div class="container1">
            <p><i class="iconfont icon-editor2"></i></p>
            <p class="text">售后服务</p>
          </div>
        </div>
        <div class="item item4">
          <div class="container1">
            <p><i class="iconfont icon-24gl-headset"></i></p>
            <p class="text">人工客服</p>
          </div>
        </div>
        <div class="item item5">
          <div class="container1" @click="goToCart">
            <p><i class="iconfont icon-gouwuchekong"></i></p>
            <p class="text">购物车</p>
            <div id="cartAmount" v-if="cartAmount > 0">{{ cartAmount }}</div>
          </div>
        </div>
      </div>
      <div class="toTop">
        <div class="item item6">
          <div class="container1">
            <a href="javascript:scroll(0,0)">
              <p><i class="iconfont icon-dingbu"></i></p>
              <p class="text">回顶部</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    cartAmount: Number,
  },
  methods: {
    goToCart() {
      this.$router.push("/cart");
    },
  },
  mounted() {
    if (this.$route.path == "/index") {
      window.onscroll = function () {
        let top = document.documentElement.scrollTop;
        if (top < 1000) {
          let toTop = document.getElementsByClassName("toTop")[0];
          if (toTop && toTop.style) {
            toTop.style.display = "none";
            let right = document.getElementsByClassName("right")[0];
            right.style.top = "490px";
          }
        } else {
          let toTop = document.getElementsByClassName("toTop")[0];
          if (toTop && toTop.style) {
            toTop.style.display = "block";
            let right = document.getElementsByClassName("right")[0];
            right.style.top = "374px";
          }
        }
      };
    }
  },
};
</script>

<style lang="scss" scoped>
.right {
  z-index: 110;
  position: fixed;
  right: 0;
  top: 490px;
  width: 84px;
  height: 561px;
  text-align: center;
  .other {
    width: 100%;
    position: absolute;
    top: 0;
    background-color: #fff;
  }

  .toTop {
    display: none;
    width: 100%;
    position: absolute;
    bottom: -13px;
    background-color: #fff;
  }
}
.item {
  width: 100%;
  height: 92px;
  border-bottom: 1px solid #f5f5f5;
  position: relative;
  .container1 {
    cursor: pointer;
    text-align: center;
    padding-top: 20px;
    .text {
      margin-top: 5px;
      font-size: 14px;
      font-family: Helvetica;
      text-align: center;
    }
  }
}

.item1 {
  .text {
    font-size: 14px;
    color: #757575;
  }

  .iconfont {
    font-size: 30px;
    color: #999999;
  }
  &:hover {
    .text {
      color: #ff6700;
    }
    .iconfont {
      color: #ff6700;
    }
  }

  .leftImage {
    display: none;
    position: absolute;
    top: 0;
    right: 100px;
    width: 130px;
    height: 192px;
    background-color: #fff;

    .image {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 20px;
      left: 15px;
      img {
        width: 100px;
        height: 100px;
      }
    }

    span {
      display: inline-block;
      width: 80px;
      position: absolute;
      top: 130px;
      left: 25px;
      font-size: 14px;
      color: #757575;
    }
  }

  &:hover {
    .leftImage {
      display: block;
    }
  }
}
.item2 {
  .text {
    font-size: 14px;
    color: #757575;
  }

  .iconfont {
    font-size: 30px;
    color: #999999;
  }
  &:hover {
    .text {
      color: #ff6700;
    }
    .iconfont {
      color: #ff6700;
    }
  }
}
.item3 {
  .text {
    font-size: 14px;
    color: #757575;
  }

  .iconfont {
    font-size: 30px;
    color: #999999;
  }
  &:hover {
    .text {
      color: #ff6700;
    }
    .iconfont {
      color: #ff6700;
    }
  }
}
.item4 {
  .text {
    font-size: 14px;
    color: #757575;
  }

  .iconfont {
    font-size: 30px;
    color: #999999;
  }
  &:hover {
    .text {
      color: #ff6700;
    }
    .iconfont {
      color: #ff6700;
    }
  }
}
.item5 {
  position: relative;
  .text {
    font-size: 14px;
    color: #757575;
  }

  .iconfont {
    font-size: 30px;
    color: #999999;
  }

  #cartAmount {
    position: absolute;
    left: 50px;
    top: 20px;
    width: 18px;
    height: 15px;
    background-color: #ff6700;
    border-radius: 50% / 50%;

    font-size: 12px;
    color: #fff;
  }

  &:hover {
    .text {
      color: #ff6700;
    }
    .iconfont {
      color: #ff6700;
    }
  }
}
.item6 {
  .text {
    font-size: 14px;
    color: #757575;
  }

  .iconfont {
    font-size: 30px;
    color: #999999;
  }
  &:hover {
    .text {
      color: #ff6700;
    }
    .iconfont {
      color: #ff6700;
    }
  }
}

a {
  text-decoration: none;
}
</style>
