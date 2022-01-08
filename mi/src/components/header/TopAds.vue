<template>
  <div>
    <li class="nav-item">
      <a href="javascript:;" class="link">
        <span class="text">{{ category }}</span>
        <div
          v-if="category != '服务' && category != '社区'"
          class="phonelist_header"
        >
          <div class="phonelist_headerCenter">
            <ul>
              <li class="product" v-for="(item, index) in adList" :key="index">
                <a
                  v-if="item.showid"
                  :href="'/#/product/' + item.showid"
                  target="_blank"
                >
                  <div class="pro-img">
                    <img :src="item.src" :alt="item.name" />
                  </div>
                  <div class="pro-name">
                    <span class="name">{{ item.name }}</span>
                  </div>
                  <div class="pro-price">
                    <span class="price">{{ item.price }}元</span>
                  </div>
                </a>
                <a v-else href="javascript:;">
                  <div class="pro-img">
                    <img :src="item.src" :alt="item.name" />
                  </div>
                  <div class="pro-name">
                    <span class="name">{{ item.name }}</span>
                  </div>
                  <div class="pro-price">
                    <span class="price">{{ item.price }}元</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </a>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adList: [],
    };
  },
  methods: {},
  props: {
    category: String,
  },
  async mounted() {
    let url = `${this.CURL}ad/top?category=${this.category}`;
    let result = await this.axios.get(url);
    this.adList = result.data.msg;
  },
};
</script>

<style lang="scss" scoped>
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

a {
  text-decoration: none;
}

.name {
  font-size: 12px;
  color: #333333;
  font-family: "Helvetica Neue";
  font-weight: 400;
}

.price {
  font-size: 12px;
  color: #ff6700;
  font-family: "Helvetica Neue";
}
</style>