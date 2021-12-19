<template>
  <div>
    <div class="site-header">
      <div class="container">
        <div class="header-logo">
          <a href="/" class="milogo"
            ><img src="../../../public/imgs/mi-logo.png"
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
</template>

<script>
export default {
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
      searchRecommend.style.display = "block";
    },
    disChangeSearch() {
      let search = document.getElementById("search");
      search.style.borderColor = "#d7d7d7";
      let searchRecommend = document.getElementById("searchRecommend");
      searchRecommend.style.display = "none";
    },
  },
  mounted() {
    //获取手机相关图片
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
* {
  font-size: 12px;
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

        img{
          width: 48px;
          height: 48px;
        }
      }
    }

    .header-navi {
      float: left;
      margin-left:140px;
      width: 650px;

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
          height: 100%;

          .link {
            list-style-type: none;
            font-size: 16px;
            background-color: rgba(0, 0, 0, 0);
            text-decoration: none;
            display: block;
            padding: 2px 10px 0px;
            margin-top: 20px;
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
              width: 99vw;
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
      position: relative;

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
        position: absolute;
        
        display: none;
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

a{
  text-decoration: none;
}
</style>