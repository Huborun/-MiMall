<template>
  <div>
    <GoodsHeader />
    <ItemMessage :itemLists="itemLists" />
    <NotLoggedIn />
    <div
      class="container"
      v-if="name.length > 0 && checked.length > 0 && src.length > 0"
    >
      <div class="image">
        <img :src="src" />
      </div>
      <div class="other">
        <div class="name">{{ name }}</div>
        <div class="sketch">
          <span class="important">
            {{ promotion }}
          </span>
          <span class="parameter">
            {{ parameter }}
          </span>
          <div class="message1">小米自营</div>
          <div class="prices">
            <span class="newPrice">{{ prices[currentChoice1] }}元</span>
            <span
              v-if="prices[currentChoice1] != oldPrices[currentChoice1]"
              class="oldPrice"
              >{{ oldPrices[currentChoice1] }}元</span
            >
          </div>
          <div class="separator"></div>
        </div>
        <div class="address"></div>
        <div class="edition">
          <div class="textTips">选择版本</div>
          <div class="containerSmall">
            <div
              v-for="(Memory, index) in memories"
              :key="index"
              :class="{
                item: true,
                active: checked[index],
                temporaryActive: temporaryChosen[index],
              }"
              @click="changeColor(index)"
              @mouseenter="changeColor2(index)"
              @mouseleave="changeColor3(index)"
            >
              {{ Memory }}
            </div>
          </div>
        </div>
        <div class="edition">
          <div class="textTips">选择颜色</div>
          <div class="containerSmall">
            <div
              v-for="(color, index) in colors"
              :key="index"
              :class="{
                item: true,
                active: checked[memories.length + index],
                temporaryActive: temporaryChosen[memories.length + index],
              }"
              @click="changeColor(memories.length + index)"
              @mouseenter="changeColor2(memories.length + index)"
              @mouseleave="changeColor3(memories.length + index)"
            >
              {{ color }}
            </div>
          </div>
          <div class="separator2"></div>
        </div>
        <div class="order">
          <div class="phoneMessage">
            {{ name }} {{ memories[currentChoice1] }}
            {{ colors[currentChoice2] }}元
            <div
              class="phonePrice"
              v-if="prices[currentChoice1] != oldPrices[currentChoice1]"
            >
              {{ prices[currentChoice1] }}元
              <span>{{ oldPrices[currentChoice1] }}元</span>
            </div>
            <div class="phonePrice" v-else>
              {{ prices[currentChoice1] }}元
            </div>
          </div>
          <div class="totalPrice">总计：{{ prices[currentChoice1] }}元</div>
        </div>
        <div class="purchase">
          <div class="cart" @click="addToCart">加入购物车</div>
          <div class="like">
            <i class="iconfont icon-xihuan-xianxing"></i><span>喜欢</span>
          </div>
        </div>
        <div class="otherText">
          <i class="iconfont icon-duihao"></i><span>小米自营</span>
          <i class="iconfont icon-duihao"></i><span>小米发货</span>
          <i class="iconfont icon-duihao"></i><span>7天无理由退货</span>
          <i class="iconfont icon-duihao"></i><span>运费说明</span>
          <i class="iconfont icon-duihao"></i><span>企业信息</span>
          <br />
          <i class="iconfont icon-duihao"></i><span>售后服务政策</span>
          <i class="iconfont icon-duihao"></i><span>7天价格保护</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="text2">价格说明</div>
      <div class="bottomImage">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43e2954feb6d1b108438481f1d5b0bd3.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GoodsHeader from "../components/goodscompoent/GoodsHeader";
import ItemMessage from "../components/common/ItemMessage";
import NotLoggedIn from "../components/common/NotloggedIn";
import { addCart } from "../mixin/addCart";
export default {
  data() {
    return {
      name: "",
      memories: [],
      colors: [],
      memoryChosen: 0,
      colorChosen: 0,
      prices: [],
      oldPrices: [],
      checked: [],
      temporaryChosen: [],
      mromotion: "",
      parameter: "",
      itemLists: [],
      src: "",
      currentChoice1: 0,
      currentChoice2: 0,
      itemId: 0,
      showid: 0,
    };
  },
  mixins: [addCart],
  methods: {
    async addToCart() {
      if (this.$cookie.get("userId")) {
        let result = await this.addCart(
          this.$cookie.get("userId"),
          this.itemId,
          this.name,
          this.memories[this.currentChoice1],
          this.colors[this.currentChoice2],
          this.prices[this.currentChoice1]
        );
        if (result == true) {
          //加入成功
          //跳转到成功界面
          this.$router.push({
            name: "cartSuccess",
            params: {
              phoneMsg: `${this.name} ${this.memories[this.currentChoice1]} ${
                this.colors[this.currentChoice2]
              }`,
              itemId: this.itemId,
            },
            
          });
        }else{
          console.log("false")
        }
      } else {
        //未登陆就去登陆
        this.$router.push("/login");
      }
    },
    changeColor(index) {
      if (index < this.memories.length) {
        for (let i = 0; i < this.memories.length; i++) {
          this.$set(this.checked, i, false);
        }
      } else {
        for (
          let i = this.memories.length;
          i < this.memories.length + this.colors.length;
          i++
        ) {
          this.$set(this.checked, i, false);
        }
      }
      this.$set(this.checked, index, true);

      //当前选中的内存的价格
      if (index < this.memories.length) {
        this.currentChoice1 = index;
      } else {
        //当前选择的颜色
        this.currentChoice2 = index - this.memories.length;
      }
    },
    changeColor2(index) {
      this.$set(this.temporaryChosen, index, true);
    },
    changeColor3(index) {
      this.$set(this.temporaryChosen, index, false);
    },
  },
  components: {
    GoodsHeader,
    ItemMessage,
    NotLoggedIn,
  },
  mounted() {
    document.documentElement.scrollTop = 0;
  },
  beforeRouteEnter(to, from, next) {
    //截取地址，判断当前是第几个商品
    next((vm) => {
      let id = to.fullPath.substring(10, to.fullPath.length);
      vm.showid = id;
      //这里不能用CURL
      var url = `http://localhost:6789/mimall/phones/shopping/${id}`;
      vm.axios({
        methods: "get",
        url,
      }).then((response) => {
        // console.log(response.data.msg);
        let data = response.data.msg;

        //设置内存
        let memories = [];

        //设置颜色
        let colors = [];

        //设置Promotion
        let promotion = data[0].promotion;
        vm.promotion = promotion;

        //设置parameter
        let parameter = data[0].parameter;
        vm.parameter = parameter;

        //设置name
        let name = data[0].name;
        vm.name = name;

        //设置src
        let src = data[0].cartimage;
        vm.src = src;

        //设置价格和旧价格
        let prices = [];
        let oldPrices = [];

        data.forEach((item) => {
          //设置内存
          if (memories.indexOf(item.memory) == -1) {
            memories.push(item.memory);
            prices.push(item.price);
            oldPrices.push(item.oldprice);
          }

          //设置颜色
          if (colors.indexOf(item.color) == -1) {
            colors.push(item.color);
          }
        });

        vm.memories = memories;
        vm.colors = colors;
        vm.prices = prices;
        vm.oldPrices = oldPrices;

        //itemLists：上面那个跳转的东西
        vm.itemLists = data[0].relevantitems.split(",");
        vm.itemId = data[0].itemid;

        //设置checked
        let tempChecked = new Array(vm.colors.length + vm.memories.length);
        tempChecked.fill(false);
        tempChecked[0] = true;
        tempChecked[vm.memories.length] = true;
        vm.checked = tempChecked;

        //设置temporaryChosen
        tempChecked = new Array(vm.colors.length + vm.memories.length);
        tempChecked.fill(false);
        vm.temporaryChosen = tempChecked;
      });
    });
  },
};
</script>

<style lang="scss" scoped>
::v-deep .ItemMessage {
  .messageContainer {
    .otherMsgContainer {
      right: -130px;
      #buy {
        display: none;
      }
    }
  }
}
.container {
  width: 1226px;
  height: 1000px;
  margin: 0 auto;
  position: relative;
  .image {
    position: absolute;
    top: 32px;
    left: 0px;
    width: 560px;
    height: 560px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .other {
    position: absolute;
    right: 0px;
    width: 601px;
    height: 800px;

    .name {
      margin-top: 35px;
      width: 100%;
      height: 36px;
      color: #212121;
      font-size: 24px;
      font-family: "Helvetica Neue";
    }

    .sketch {
      line-height: 21px;
      font-size: 14px;
      font-family: "Helvetica Neue";
      .important {
        color: #ff4a00;
      }

      .parameter {
        color: #b0b0b0;
      }

      .message1 {
        margin-top: 15px;
        font-size: 14px;
        font-family: "Helvetica Neue";
        color: #ff6700;
      }

      .prices {
        margin-top: 10px;
        .newPrice {
          font-size: 18px;
          color: #ff6700;
          font-family: Helvetica;
        }
        .oldPrice {
          text-decoration: line-through;
          margin-left: 5px;
          font-size: 14px;
          color: #b0b0b0;
          font-family: Helvetica;
        }
      }

      .separator {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 600px;
        height: 1px;
        background-color: #e0e0e0;
      }
    }

    .edition {
      width: 600px;
      height: 165px;

      .textTips {
        font-size: 18px;
        color: #333;
        font-family: Helvetica;
        font-weight: 400;
        width: 600px;
        height: 27px;
      }

      .containerSmall {
        width: 600px;
        height: 108px;

        .item {
          cursor: pointer;
          margin-top: 10px;
          width: 282px;
          height: 42px;
          padding-right: 5px;
          padding-left: 5px;
          float: left;
          border: 1px solid #e0e0e0;
          text-align: center;
          line-height: 42px;

          color: #757575;
          font-size: 16px;
          font-family: Helvetica;
        }

        .item:nth-child(2n-1) {
          margin-right: 10px;
        }
      }
    }

    .order {
      width: 600px;
      height: 146px;
      margin-bottom: 40px;
      background-color: #f9f9fa;
      position: relative;

      .phoneMessage {
        position: absolute;
        top: 35px;
        left: 40px;
        width: 540px;
        height: 30px;

        font-size: 14px;
        font-family: Helvetica;
        color: #616161;

        .phonePrice {
          position: absolute;
          right: 0;
          top: 0px;

          span {
            text-decoration: line-through;
          }
        }
      }

      .totalPrice {
        position: absolute;
        top: 100px;
        width: 540px;
        height: 56px;
        font-family: Helvetica;
        top: 80px;
        left: 40px;
        font-size: 24px;
        color: #ff6700;
        text-align: left;
      }
    }

    .purchase {
      width: 600px;
      height: 54px;
      margin-bottom: 20px;
      .cart {
        float: left;
        cursor: pointer;
        width: 300px;
        height: 54px;
        background-color: #ff6700;
        font-size: 16px;
        font-family: Helvetica;
        color: #fff;
        text-align: center;
        line-height: 54px;

        &:hover {
          background-color: #f25807;
        }
      }
      .like {
        cursor: pointer;
        float: left;
        width: 142px;
        height: 54px;
        margin-left: 10px;
        background-color: #b0b0b0;
        font-size: 16px;
        font-family: Helvetica;
        color: #fff;
        text-align: center;
        line-height: 54px;

        .iconfont {
          font-size: 22px;
        }
        span {
          position: relative;
          top: -4px;
          left: 5px;
        }

        &:hover {
          background-color: #757575;
        }
      }
    }

    .otherText {
      width: 600px;
      height: 82px;

      font-size: 14px;
      font-family: Helvetica;
      color: #b0b0b0;
      text-align: left;
      line-height: 30px;

      span::after {
        content: "00";
        color: #fff;
        opacity: 0;
      }

      span {
        position: relative;
        top: -2px;
      }
      .iconfont {
        line-height: 30px;
        margin-right: 5px;
        font-size: 20px;
      }
    }
  }
}
.bottom {
  width: 99vw;
  height: 266px;
  padding-bottom: 50px;
  background-color: #f5f5f5;

  .text2 {
    text-align: left;
    margin: 0 auto;
    width: 1226px;
    height: 33px;
    padding-top: 22px;
    padding-bottom: 22px;

    font-size: 22px;
    font-family: Helvetica;
    color: #333;
  }

  .bottomImage {
    width: 1226px;
    height: 189px;
    margin: 0 auto;

    img {
      width: 1226px;
      height: 189px;
    }
  }
}
.active {
  border-color: #ff6700 !important;
  color: #ff6700 !important;
}
.temporaryActive {
  border-color: #ff6700 !important;
  color: #ff6700 !important;
}
</style>