<template>
  <div>
    <div class="recommend">
      <div class="recommendTop">
        <div class="separator">
          <span></span>
        </div>
        <p v-if="hasLogin">买购物车中商品的人还买了</p>
        <p v-else>为您推荐</p>
        <div class="separator">
          <span></span>
        </div>
      </div>
      <div class="itemsContainer">
        <div class="container" v-if="items.length > 0">
          <div class="items" v-for="(item, index) in items" :key="index">
            <div class="item">
              <img :src="item.src" />
              <p class="name">{{ item.name }}</p>
              <p class="price">{{ item.price }}元</p>
              <p class="like">{{ item.like }}</p>
              <div
                class="addToCart"
                v-if="!hasLogin"
                @click="$router.push('/login')"
              >
                登录后加购
              </div>
              <div
                class="addToCart"
                v-else-if="item.showid && hasLogin"
                @click="add(item.showid, index)"
              >
                加入购物车
              </div>
              <div class="addToCart disable" v-else>加入购物车</div>
              <div class="addSuccess" v-if="item.showid">成功加入购物车</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addCart } from "../../mixin/addCart";
import { setAtt } from "../../mixin/setAtt";
// import getIndex from "../../js/getIndex";
export default {
  data() {
    return {
      items: [],
      hasLogin: false,
    };
  },
  mixins: [addCart, setAtt],
  methods: {
    async add(showId, index) {
      let data = this.items[index];
      //用户必然已登录
      //根据name查询itemid
      let url = `${this.CURL}phones?name=${this.items[index].name}`;
      let res = await this.axios.get(url);
      let itemId = res.data.msg[0].itemid;
      let result = await this.addCart(
        this.$cookie.get("userId"),
        itemId,
        data.name,
        data.memory,
        data.color,
        data.price
      );
      if (result == true) {
        //成功就显示提示
        let success = document.getElementsByClassName("item")[index];
        success.childNodes[5].style.display = "block";
        setTimeout(() => {
          success.childNodes[5].style.display = "none";
        }, 3000);

        //更新vuex
        this.setUserChosen(this.axios, this.$store, this.$cookie.get("userId"));
        this.setUserCart(this.axios, this.$store, this.$cookie.get("userId"));

        //如果在购物车中，就刷新页面
        if (this.$route.path == "/cart") {
          location.reload();
        }
      }
    },
  },
  mounted() {
    if (this.$cookie.get("userId")) {
      this.hasLogin = true;
    } else {
      this.hasLogin = false;
    }
    let url = `${this.CURL}ad/recommend`;
    this.axios.get(url).then((response) => {
      let data = response.data.msg;
      this.items = data;
    });
  },
};
</script>

<style lang="scss" scoped>
.recommend {
  width: 1226px;
  position: absolute;
  top: 0px;

  .recommendTop {
    width: 1226px;
    height: 93px;
    line-height: 93px;
    display: flex;
    justify-content: space-between;

    .separator {
      width: 360px;
      height: 93px;

      position: relative;

      span {
        position: absolute;
        top: 50%;
        background-color: #e0e0e0;
        width: 100%;
        height: 1px;
      }
    }

    p {
      width: 482px;
      height: 93px;
      line-height: 93px;
      text-align: center;
      margin: 0 auto;
      font-size: 30px;
      color: #757575;
      font-family: Helvetica;
    }
  }

  .itemsContainer {
    width: 1226px;
    height: 665px;
    margin-top: 10px;

    .container {
      width: 1240px;
      height: 614px;
      margin: 0 auto;
      background-color: #f5f5f5;

      .items {
        .item {
          cursor: pointer;
          position: relative;
          width: 234px;
          height: 300px;
          background-color: #fff;
          float: left;
          margin-right: 14px;

          &:hover {
            .addToCart {
              display: block;
            }
          }

          img {
            margin: 40px 47px 20px 47px;
            width: 140px;
            height: 140px;
          }

          .name {
            display: inline-block;
            width: 214px;
            height: 18px;
            margin-bottom: 10px;
            font-size: 14px;
            font-family: "Helvetica Neue";
            color: #333;
            text-align: center;
            line-height: 18px;
          }

          .price {
            width: 234px;
            height: 21px;
            text-align: center;
            line-height: 21px;
            margin-bottom: 10px;
            font-size: 14px;
            font-family: "Helvetica Neue";
            color: #ff6700;
          }

          .like {
            width: 234px;
            height: 21px;
            text-align: center;
            line-height: 21px;
            color: #757575;
            font-size: 14px;
            font-family: "Helvetica Neue";
          }

          .addToCart {
            cursor: pointer;
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translate(-50%);
            width: 122px;
            height: 30px;
            border: 1px solid #ff6700;
            background-color: #fff;
            text-align: center;
            line-height: 30px;
            font-size: 12px;
            color: #ff6700;
            display: none;

            &:hover {
              background-color: #f25807;
              color: #fff;
            }
          }

          .disable {
            cursor: not-allowed;
          }

          .addSuccess {
            width: 234px;
            height: 38px;
            background-color: #83c44e;
            color: #fff;
            font-size: 14px;
            font-family: "Helvetica Neue";
            position: absolute;
            top: 0px;
            text-align: center;
            line-height: 38px;

            display: none;
          }
        }
      }

      .items:nth-child(n + 6) {
        .item {
          margin-top: 15px;
        }
      }
    }
  }
}
</style>    