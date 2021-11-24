<template>
  <div class="root">
    <div class="home-hero">
      <div class="item-list">
        <ul id="item-ul">
          <li class="item-li item-li-1">
            <a href="javascript:;">手机</a>
            <i class="iconfont icon-jiantouyou"></i>
            <div class="show-list">
              <div
                class="phone-items"
                v-for="(item, index) in miList"
                :key="index"
              >
                <a v-if="item.JumpId" v-bind:href="'/#/product/' + item.JumpId">
                  <img :src="item.src" />
                  <div class="phone-text">{{ item.name }}</div>
                </a>
                <a v-else href="javascript:;">
                  <img :src="item.src" />
                  <div class="phone-text">{{ item.name }}</div>
                </a>
              </div>
            </div>
          </li>
          <li class="item-li">
            <a href="javascript:;">电视</a
            ><i class="iconfont icon-jiantouyou"></i>
          </li>
          <li class="item-li">
            <a href="javascript:;">笔记本 平板</a
            ><i class="iconfont icon-jiantouyou"></i>
          </li>
          <li class="item-li">
            <a href="javascript:;">家电</a
            ><i class="iconfont icon-jiantouyou"></i>
          </li>
          <li class="item-li">
            <a href="javascript:;">出行 穿戴</a
            ><i class="iconfont icon-jiantouyou"></i>
          </li>
          <li class="item-li">
            <a href="javascript:;">智能 路由器</a
            ><i class="iconfont icon-jiantouyou"></i>
          </li>
          <li class="item-li">
            <a href="javascript:;">电源 配件</a
            ><i class="iconfont icon-jiantouyou"></i>
          </li>
          <li class="item-li">
            <a href="javascript:;">健康 儿童</a
            ><i class="iconfont icon-jiantouyou"></i>
          </li>
          <li class="item-li">
            <a href="javascript:;">耳机 音箱</a
            ><i class="iconfont icon-jiantouyou"></i>
          </li>
          <li class="item-li">
            <a href="javascript:;">生活 箱包</a
            ><i class="iconfont icon-jiantouyou"></i>
          </li>
        </ul>
      </div>
      <div class="swiper-items">
        <swiper :options="swiperOption" v-if="itemList.length">
          <swiper-slide v-for="(item, index) in itemList" :key="index">
            <a v-if="item.JumpId" v-bind:href="'/#/product/' + item.id"
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
          <a v-if="ad.JumpId" :href="'/#/product/' + ad.JumpId"
            ><img :src="ad.src"
          /></a>
          <a v-else href="javascript:;"><img :src="ad.src" /></a>
        </li>
      </ul>
    </div>
    <div class="phones">
      <div class="big-adv">
        <a :href="'/#/product/' + adList2[0].JumpId"
          ><img :src="adList2[0].src" />
        </a>
      </div>
      <div class="mobile-phone-header">
        <span class="phone-text-left">手机</span>
        <span class="phone-text-right"
          >查看更多<i class="iconfont icon-you"></i
        ></span>
      </div>
      <div class="mobile-phone-body">
        <div class="mobile-big">
          <a :href="'/#/product/' + bigMobilePhone[0].JumpId"
            ><img v-lazy="bigMobilePhone[0].src"
          /></a>
        </div>
        <div class="mobile-middle">
          <ul v-for="(phone, index) in middleMobilePhones" :key="index">
            <li v-if="phone.JumpId">
              <a :href="'/#/product/' + phone.JumpId">
                <img v-lazy="phone.src" />
                <div class="phone-name">{{ phone.name }}</div>
                <div class="phone-sketch">{{ phone.sketch }}</div>
                <div v-if="!phone.oldprice" class="phone-price">
                  {{ phone.price }}
                </div>
                <div v-else class="phone-price">
                  {{ phone.price }}
                  <span class="phone-oldPirce">{{ phone.oldprice }}</span>
                </div>
              </a>
            </li>
            <li v-else>
              <a href="javascript:;">
                <img v-lazy="phone.src" />
                <div class="phone-name">{{ phone.name }}</div>
                <div class="phone-sketch">{{ phone.sketch }}</div>
                <div v-if="!phone.oldprice" class="phone-price">
                  {{ phone.price }}
                </div>
                <div v-else class="phone-price">
                  {{ phone.price }}
                  <span class="phone-oldPirce">{{ phone.oldprice }}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "index",
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
      miList: [""],
      adList1: [""],
      adList2: [""],
      bigMobilePhone: [""],
      middleMobilePhones: [""],
    };
  },
  mounted() {
    this.axios({
      method: "get",
      url: "http://localhost:3000/slides",
    }).then((res) => {
      this.itemList = res.data;
    });
    //24张手机图片
    this.axios({
      method: "get",
      url: "http://localhost:3000/phoneListsSmall",
    }).then((res) => {
      this.miList = res.data;
    });
    //3张中型手机图片
    this.axios({
      method: "get",
      url: "http://localhost:3000/adOnIndex",
    }).then((res) => {
      this.adList1 = res.data.slice(0, 3);
      this.adList2 = res.data.slice(3, 4);
    });
    //手机页面
    this.axios({
      method: "get",
      url: "http://localhost:3000/phonesOnIndex",
    }).then((res) => {
      this.bigMobilePhone = res.data.slice(0, 1);
      this.middleMobilePhones = res.data.slice(1);
    });
  },
};
</script>

<style lang="scss" scoped>
@import url(../../public/MyFontSolid/iconfont.css);
.root {
  .home-hero {
    width: 1226px;
    height: 460px;
    margin: 0 auto;
    position: relative;

    .item-list {
      width: 234px;
      height: 460px;
      z-index: 10;
      position: absolute;
      background-color: #55585a7a;

      &:hover {
        .show-list {
          opacity: 1;
        }
      }

      #item-ul {
        width: 234px;
        height: 420px;
        padding-top: 20px;
        padding-bottom: 20px;
        position: relative;

        .item-li {
          width: 234px;
          height: 42px;
          position: relative;
          a {
            padding-left: 30px;
            text-decoration: none;
            color: #ffffff;
            font-size: 14px;
            line-height: 42px;
          }

          &:hover {
            background-color: #ff6700;
            cursor: pointer;
          }

          .icon-jiantouyou {
            position: absolute;
            right: 20px;
            top: 10px;
            color: #fff;
          }
        }

        .item-li-1 {
          width: 234px;
          height: 42px;

          &:hover {
            background-color: #ff6700;
            cursor: pointer;
            .show-list {
              display: block;
            }
          }

          .icon-jiantouyou {
            position: absolute;
            right: 20px;
            top: 10px;
            color: #fff;
          }

          .show-list {
            display: none;
            width: 992px;
            height: 458px;
            position: absolute;
            left: 234px;
            top: -20px;
            border: 1px #e0e0e0 solid;
            background-color: #fff;
            box-shadow: 3px 3px 5px #999;

            a {
              display: block;
            }

            .phone-items {
              float: left;
              // display: none;
              width: 225px;
              height: 40px;
              padding: 18px 11px;

              img {
                // padding-left: 15px;
                float: left;
              }

              .phone-text {
                padding-left: 60px;
                line-height: 40px;
                font-size: 13.5px;
                font-family: Helvetica Neue;
                color: #333333;
                &:hover {
                  color: #ff6700;
                }
              }
            }
          }
        }
      }
    }
    .swiper-items {
      position: absolute;
      width: 1226px;
      height: 460px;
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
  }
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
  .phones {
    width: 100%;
    background-color: #f5f5f5;
    height: 900px;
    position: relative;
    .big-adv {
      width: 1226px;
      height: 120px;
      margin: 0 auto;
      img {
        margin-top: 40px;
        width: 1226px;
        height: 120px;
      }
    }

    .mobile-phone-header {
      position: absolute;
      top: 200px;
      width: 1226px;
      height: 57.6px;
      left: 50%;
      transform: translate(-50%);
      font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
        Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
      font-weight: lighter;
      .phone-text-left {
        position: absolute;
        font-size: 22px;
        color: #333;
      }

      .phone-text-right {
        position: absolute;
        right: 35px;

        i {
          margin-left: 10px;
        }
        .icon-you {
          position: absolute;
          bottom: 0px;
          left: 63px;
          font-size: 25px;
          color: #424242;
        }

        &:hover {
          cursor: pointer;
          color: #ff6700;
          transition: 0.4s;
          .icon-you {
            color: #ff6700;
            transition: 0.4s;
          }
        }
      }
    }

    .mobile-phone-body {
      height: 614px;
      width: 1226px;
      cursor: pointer;
      position: absolute;
      top: 240px;
      left: 50%;
      transform: translate(-50%);

      .mobile-big {
        float: left;
        width: 234px;
        height: 614px;

        img {
          width: 100%;
          height: 100%;
        }

        &:hover {
          position: relative;
          top: -3px;
          box-shadow: 5px 5px 5px #e8e8e8;
          transition-duration: 0.5s;
        }
      }

      .mobile-middle {
        float: left;
        width: 992px;
        height: 614px;

        a{
          text-decoration: none;
        }

        li {
          float: left;
          width: 234px;
          height: 260px;
          padding-top: 20px;
          padding-bottom: 20px;
          margin-left: 14px;
          margin-bottom: 15px;
          background-color: #fff;
          text-align: center;

          img {
            width: 160px;
            height: 160px;
          }

          .phone-name {
            width: 214px;
            height: 20.8px;
            font-size: 14px;
            margin: 20px 10px 2px 10px;
            font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
              Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
            color: #333333;
          }

          .phone-sketch {
            font-size: 12px;
            margin: 0 10px 10px 10px;
            color: #b0b0b0;
          }

          .phone-price {
            font-size: 14px;
            color: #ff6700;
            font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
              Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;

            .phone-oldPirce {
              margin-left: 5px;
              color: #b0b0b0;
              text-decoration: line-through;
              font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
                Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
            }
          }

          &:hover {
            position: relative;
            top: -3px;
            box-shadow: 5px 5px 5px #e8e8e8;
            transition-duration: 0.5s;
          }
        }
      }
    }
  }
}
</style>