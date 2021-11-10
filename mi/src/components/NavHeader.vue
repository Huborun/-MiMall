<template>
  <div>
    <div class="header">
      <div class="site-topbar">
        <div class="container">
          <div class="topbar-navi">
            <a href="/">小米商城</a><span class="sep">|</span>
            <a href="javascript:;">MIUI</a><span class="sep">|</span>
            <a href="javascript:;">loT</a><span class="sep">|</span>
            <a href="javascript:;">云服务</a><span class="sep">|</span>
            <a href="javascript:;">天星数科</a><span class="sep">|</span>
            <a href="javascript:;">有品</a><span class="sep">|</span>
            <a href="javascript:;">小爱开发平台</a><span class="sep">|</span>
            <a href="javascript:;">企业团购</a><span class="sep">|</span>
            <a href="javascript:;">资质证照</a><span class="sep">|</span>
            <a href="javascript:;">协议规则</a><span class="sep">|</span>
            <a href="javascript:;">下载app</a><span class="sep">|</span>
            <a href="javascript:;">智能生活</a><span class="sep">|</span>
            <a href="javascript:;">Select Location</a>
          </div>
          <div class="topbar-cart">
            <a href="javascript:;" class="cart-mini">
              <i class="iconfont icon-gouwuchekong"></i>购物车
              <span class="cart-mini-num">（0）</span>
            </a>
            <div class="cart-item"><p>购物车中还没有商品，赶紧选购吧!</p></div>
          </div>
          <div class="topbar-info">
            <a href="/#/login">登录</a><span class="sep">|</span>
            <a href="javascript:;">注册</a><span class="sep">|</span>
            <a href="javascript:;">消息通知</a>
          </div>
        </div>
      </div>
      <div class="site-header">
        <div class="container">
          <div class="header-logo">
            <a href="/" class="milogo"
              ><img src="../../public/imgs/mi-logo.png"
            /></a>
          </div>
          <div class="header-navi">
            <ul class="nav-list">
              <li class="nav-category">
                <a></a>
              </li>
              <li class="nav-item">
                <a href="javascript:;" class="link">
                  <span class="text">Xiaomi手机</span>
                  <div class="phonelist_header">
                    <div class="phonelist_headerCenter">
                      <ul>
                        <li
                          class="product"
                          v-for="(item, index) in phoneList"
                          :key="index"
                        >
                          <a
                            v-if="item.JumpId"
                            :href="'/#/product/' + item.id"
                            target="_blank"
                          >
                            <div class="pro-img">
                              <img :src="item.src" :alt="item.name" />
                            </div>
                            <div class="pro-name">{{ item.name }}</div>
                            <div class="pro-price">
                              {{ item.price }}
                            </div>
                          </a>
                          <a v-else href="javascript:;">
                            <div class="pro-img">
                              <img :src="item.src" :alt="item.name" />
                            </div>
                            <div class="pro-name">{{ item.name }}</div>
                            <div class="pro-price">
                              {{ item.price }}
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a href="javascript:;" class="link"
                  ><span class="text">Redmi红米</span></a
                >
              </li>
              <li class="nav-item">
                <a href="javascript:;" class="link"
                  ><span class="text">电视</span></a
                >
              </li>
              <li class="nav-item">
                <a href="javascript:;" class="link"
                  ><span class="text">笔记本</span></a
                >
              </li>
              <li class="nav-item">
                <a href="javascript:;" class="link"
                  ><span class="text">平板</span></a
                >
              </li>
              <li class="nav-item">
                <a href="javascript:;" class="link"
                  ><span class="text">家电</span></a
                >
              </li>
              <li class="nav-item">
                <a href="javascript:;" class="link"
                  ><span class="text">路由器</span></a
                >
              </li>
              <li class="nav-item">
                <a href="javascript:;" class="link"
                  ><span class="text">服务</span></a
                >
              </li>
              <li class="nav-item">
                <a href="javascript:;" class="link"
                  ><span class="text">社区</span></a
                >
              </li>
            </ul>
          </div>
          <div class="header-search">
            <form action="" class="search-form clearfix">
              <input
                @focus="changeSearch"
                @blur="disChangeSearch"
                id="input"
                type="text"
                placeholder="小米11"
              />
              <div class="search" id="search">
                <i class="iconfont icon-chaxun"></i>
              </div>
            </form>
            <div class="searchRecommend" id="searchRecommend">
              <div class="recommendedItem">全部商品</div>
              <div class="recommendedItem">手机</div>
              <div class="recommendedItem">螺丝刀</div>
              <div class="recommendedItem">黑鲨4S</div>
              <div class="recommendedItem">空调</div>
              <div class="recommendedItem">耳机</div>
              <div class="recommendedItem">净水器</div>
              <div class="recommendedItem">红米</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-header",
  data() {
    return {
      phoneList: [],
    };
  },
  methods: {
    changeSearch() {
      let search = document.getElementById("search");
      search.style.borderColor = "red";
      let searchRecommend = document.getElementById("searchRecommend");
      searchRecommend.style.opacity = 1;
    },
    disChangeSearch() {
      let search = document.getElementById("search");
      search.style.borderColor = "#d7d7d7";
      let searchRecommend = document.getElementById("searchRecommend");
      searchRecommend.style.opacity = 0;
    },
  },
  mounted() {
    this.axios({
      method: "get",
      url: "http://localhost:3000/phoneListsMiddle",
    }).then((res) => {
      this.phoneList = res.data.slice(0, 6);
    });
  },
};
</script>

<style lang="scss" scoped>
@import url(../../public/MyFont/iconfont.css);
* {
  font-size: 12px;
}

.header {
  color: #333;

  .site-topbar {
    position: relative;
    z-index: 30;
    height: 40px;
    color: #b0b0b0;
    background: #333;

    .container {
      width: 1226px;
      margin-right: auto;
      margin-left: auto;
      height: 40px;

      .topbar-navi {
        float: left;
        line-height: 40px;

        a:hover {
          color: #ffffff;
        }
      }

      .topbar-cart {
        position: relative;
        float: right;
        width: 120px;
        height: 100%;
        margin-left: 15px;

        .cart-mini {
          height: 100%;
          text-decoration: none;
          position: relative;
          display: block;
          line-height: 40px;
          text-align: center;
          background: #424242;

          .iconfont {
            margin-right: 5px;
            font-size: 16px;
          }

          .cart-mini-num {
            line-height: 40px;
            text-align: center;
            color: #b0b0b0;
          }
        }

        &:hover {
          .cart-mini {
            color: #ff6700;
            background-color: #fff;
          }

          .cart-mini-num {
            color: #ff6700;
          }

          .cart-item {
            opacity: 1;
            height: 100px;
            p {
              opacity: 1;
            }
            transition-duration: 0.5s;
          }
        }

        .cart-item {
          position: absolute;
          right: 0;
          width: 316px;
          height: 0px;
          background-color: #fff;
          box-shadow: 0 2px 10px rgb(0 0 0 / 15%);

          font-size: 12px;
          color: #424242;
          text-align: center;
          line-height: 100px;

          opacity: 0;
          p {
            opacity: 0;
          }
        }
      }

      .topbar-info {
        position: relative;
        float: right;
        line-height: 40px;

        a:hover {
          color: #ffffff;
        }
      }
    }
  }

  .site-header {
    z-index: 20;
    height: 100px;
    position: relative;

    .container {
      width: 1226px;
      margin-right: auto;
      margin-left: auto;
      height: 40px;

      .header-logo {
        float: left;
        width: 62px;
        margin-top: 22px;

        .milogo {
          background-color: rgba(0, 0, 0, 0);
          color: #757575;
          text-decoration: none;
          text-align: left;
          position: relative;
          display: block;
          width: 56px;
          height: 56px;
          overflow: hidden;
        }
      }

      .header-navi {
        float: left;
        width: 850px;

        .nav-list {
          z-index: 10;
          float: left;
          width: 1100px;
          height: 88px;
          margin: 0;
          padding: 12px 0 0 30px;
          list-style-type: none;
          font-size: 16px;

          .nav-category {
            position: relative;
            float: left;
            width: 127px;
            padding-right: 15px;
          }

          .nav-item {
            list-style-type: none;
            font-size: 16px;
            float: left;

            .link {
              list-style-type: none;
              font-size: 16px;
              background-color: rgba(0, 0, 0, 0);
              text-decoration: none;
              display: block;
              padding: 26px 10px 0px;
              color: #333;
              transition: color 0.2s;

              &:hover {
                .phonelist_header {
                  opacity: 1;
                  height: 220px;
                }
              }

              .text {
                list-style-type: none;
                font-size: 16px;
                color: #333;

                &:hover {
                  color: #ff6700;
                }
              }

              .phonelist_header {
                position: absolute;
                top: 100px;
                left: 0;
                height: 0;
                width: 100vw;
                opacity: 0;
                overflow: hidden;
                border-top: 1px solid #e5e5e5;
                box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                z-index: 10;
                transition: all 0.5s;
                background-color: #ffffff;

                .phonelist_headerCenter {
                  width: 1226px;
                  margin: 0 auto;

                  .product {
                    position: relative;
                    float: left;
                    width: 16.6%;
                    height: 220px;
                    font-size: 12px;
                    line-height: 12px;
                    text-align: center;

                    a {
                      display: inline-block;
                      line-height: 18px;
                    }
                    img {
                      width: auto;
                      height: 111px;
                      margin-top: 26px;
                    }
                    .pro-img {
                      height: 137px;
                    }
                    .pro-name {
                      font-weight: bold;
                      margin-top: 19px;
                      margin-bottom: 8px;
                      color: #333333;
                    }
                    .pro-price {
                      color: #ff6600;
                    }

                    &:before {
                      content: " ";
                      position: absolute;
                      top: 28px;
                      right: 0;
                      border-left: 1px solid #d7d7d7;
                      height: 100px;
                      width: 1px;
                    }
                    &:last-child:before {
                      display: none;
                    }
                  }
                }
              }
            }
          }
        }
      }

      .header-search {
        float: right;
        width: 296px;
        margin-top: 25px;

        &:hover {
          .search-form {
            .search {
              border-right: 1px solid #808080;
              border-top: 1px solid #808080;
              border-bottom: 1px solid #808080;
            }
          }
        }

        .search-form {
          position: relative;
          width: 296px;
          height: 50px;
          z-index: 20;
          display: flex;
          align-items: center;

          .search {
            width: 51px;
            height: 100%;
            position: relative;
            border-right: 1px solid #d7d7d7;
            border-top: 1px solid #d7d7d7;
            border-bottom: 1px solid #d7d7d7;
            i {
              display: block;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-size: 18px;
            }

            &:hover {
              background-color: #ff6700;
              cursor: pointer;

              i {
                color: #fff;
              }
            }
          }

          input {
            border: none;
            box-sizing: border-box;
            border: 1px solid #e0e0e0;
            width: 245px;
            height: 52px;
            padding-left: 14px;
            font-size: 16px;
            outline: none;
          }
          &:hover {
            input {
              border: 1px solid #808080;
            }
          }
          input:focus {
            border: 1px #ff6700 solid;
            &.search {
              border-right: 1px solid red;
              border-top: 1px solid #d7d7d7;
              border-bottom: 1px solid #d7d7d7;
            }
          }
        }

        .searchRecommend {
          opacity: 0;
          width: 242px;
          height: 236px;
          border: 1px solid #ff6700;
          background-color: #fff;

          .recommendedItem {
            width: 243px;
            height: 29.6px;
            font-size: 12px;
            color: #333;
            font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
              Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
            position: relative;
            left: 15px;
            top: 7px;
          }
        }
      }
    }
  }
}
.clearfix:after,
.clearfix:before {
  content: " ";
  display: table;
}
a {
  background-color: rgba(0, 0, 0, 0);
  text-decoration: none;
  color: #b0b0b0;
  line-height: 40px;
  display: inline-block;
}

.sep {
  line-height: 40px;
  font-family: sans-serif;
  margin: 0 6.5px;
  color: #424242;
}
</style>