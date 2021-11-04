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
              <em class="iconfont-cart"></em>
              购物车
              <span class="cart-mini-num J_cartNum">（0）</span>
            </a>
          </div>
          <div class="topbar-info">
            <a href="javascript:;">登录</a><span class="sep">|</span>
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
                            v-bind:href="'/#/product/' + item.id"
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
                  ><span class="text">智能硬件</span></a
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
              <input type="text" placeholder="小米11" />
              <a href="javascript:;"></a>
            </form>
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
  mounted() {
    this.axios({
      method: "get",
      url: "http://localhost:3000/phones",
    }).then((res) => {
      console.log(res.data);
      this.phoneList = res.data;
    });
  },
};
</script>

<style lang="scss" scoped>
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
        margin-left: 15px;

        .cart-mini {
          text-decoration: none;
          position: relative;
          z-index: 32;
          display: block;
          line-height: 40px;
          text-align: center;
          background: #424242;

          .iconfont-cart {
            text-align: center;
            color: #b0b0b0;
            margin-right: 4px;
            line-height: 20px;
            vertical-align: -4px;
          }

          .iconfont-cart:before {
            content: url("../../public/imgs/购物车.png");
          }

          .cart-mini-num {
            line-height: 40px;
            text-align: center;
            color: #b0b0b0;
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
              padding: 26px 10px 38px;
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
                top: 112px;
                left: 0;
                height: 0;
                width: 100vw;
                opacity: 0;
                overflow: hidden;
                border-top: 1px solid #e5e5e5;
                box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                z-index: 10;
                transition: all 0.5s;

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
                      border-left: 1px solid #d7d7d7 ;
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

        .search-form {
          position: relative;
          width: 296px;
          height: 50px;
          z-index: 20;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;

          input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 245px;
            height: 50px;
            padding-left: 14px;
            font-size: 16px;
          }

          a {
            background: url(../../public/imgs/查询.png) no-repeat;
            margin-left: 17px;
            height: 18px;
            width: 18px;
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
#search {
  background: url(../../public/imgs/查询.png) no-repeat;
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