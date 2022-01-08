<template>
  <div>
    <div class="header">
      <div class="container">
        <div
          :class="{ checkbox: true, chose1: choseAll }"
          @click="changeChoseAll"
        >
          <i
            :class="{ iconfont: true, 'icon-duihao1': true, chose2: choseAll }"
          ></i>
        </div>
        <p>全选</p>
      </div>
      <div class="itemName">商品名称</div>
      <div class="price">单价</div>
      <div class="amount">数量</div>
      <div class="total">小计</div>
      <div class="operation">操作</div>
    </div>
    <div class="body">
      <div class="singleItem" v-for="(item, index) in cartItems" :key="index">
        <CartItem
          :item="item"
          :currentIndex="index"
          ref="child"
          @updateChosenList="updateChosenList"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  data() {
    return {
      cartItems: [],
      choseAll: false,
      chosenList: [],
    };
  },
  methods: {
    changeChoseAll() {
      this.choseAll = !this.choseAll;
      this.$refs.child.forEach((item, index) => {
        //只put第一次就行了
        if (index == 0) {
          item.changeChosenAllSon(this.choseAll);
        }
        item.changeItself(this.choseAll);
      });
    },
    async updateChosenList() {
      //当用户点击分散的选择框时，判断是否需要全选
      let url = `${this.CURL}users/cart/${this.$cookie.get("userId")}`;
      let result = await this.axios.get(url)
      //判断1的个数
      let amountOf0 = 0

      result.data.msg.forEach((item)=>{
        if(item.chosen == 0){
          amountOf0 = amountOf0+1
        }
      })

      //如果没有0，则全选
      if(amountOf0 == 0){
        this.choseAll = true;
      }else{
        this.choseAll = false;
      }
    },
  },
  async mounted() {
    //进入前提：已经登录
    setTimeout(() => {
      //需要延时绑定
      this.cartItems = this.$store.state.userCart;
    }, 300);

    //判断是否全选
    // if (!this.orderList.includes(0)) {
    //   this.choseAll = true;
    // }
  },
  components: {
    CartItem,
  },
  watch: {
    chosenList() {
      if (!this.chosenList.includes(0)) {
        // console.log("0",this.orderList)
        this.choseAll = true;
      } else {
        // console.log("1",this.orderList)
        this.choseAll = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  top: 40px;
  margin: 0 auto;
  width: 1226px;
  height: 70px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;

  font-size: 14px;
  color: #424242;
  font-family: "Helvetica Neue";

  .container {
    width: 110px;
    height: 70px;
    float: left;
    .checkbox {
      margin-top: 22px;
      margin-left: 25px;
      margin-right: 20px;
      float: left;
      width: 19px;
      height: 19px;
      border: 1px solid #e0e0e0;
      cursor: pointer;
      z-index: 100;

      &:hover {
        .iconfont {
          opacity: 1;
        }
      }

      .iconfont {
        opacity: 0;
        font-size: 18px;
        width: 19px;
        height: 19px;
      }
    }

    p {
      float: left;
      line-height: 70px;
    }
  }

  div:nth-child(n + 2) {
    line-height: 68px;
    float: left;
  }

  .itemName {
    width: 380px;
    height: 70px;
    margin-left: 110px;
    text-align: left;
  }

  .price {
    width: 158px;
    height: 70px;
    text-align: center;
  }

  .amount {
    text-align: center;
    width: 150px;
    height: 70px;
    margin-left: 10px;
  }

  .total {
    width: 125px;
    height: 70px;
    text-align: right;
  }

  .operation {
    width: 80px;
    height: 70px;
    margin-left: 75px;
    text-align: center;
  }
}
.body {
  margin-top: 39px;
}
.chose1 {
  background-color: #ff6700;
}
.chose2 {
  opacity: 1 !important;
  color: #fff !important;
}
</style>