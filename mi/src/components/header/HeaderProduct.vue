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
            <TopAds category="Xiaomi手机" />
            <TopAds category="Redmi 红米" />
            <TopAds category="电视" />
            <TopAds category="笔记本" />
            <TopAds category="平板" />
            <TopAds category="Xiaomi手机" />
            <TopAds category="路由器" />
            <TopAds category="服务" />
            <TopAds category="社区" />
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
import TopAds from "./TopAds";
export default {
  data() {
    return {};
  },
  components: {
    TopAds,
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
  mounted() {},
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

        img {
          width: 48px;
          height: 48px;
        }
      }
    }

    .header-navi {
      float: left;
      margin-left: 140px;
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

a {
  text-decoration: none;
}
</style>