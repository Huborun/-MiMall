<template>
  <div>
    <div class="container">
      <div class="reduce" @click="reduce">-</div>
      <div class="amount">
        <input type="text" v-model.lazy.number="amount" id="amount" />
      </div>
      <div class="add" @click="add">+</div>
      <div
        v-if="amount > 1 && maxAmounts > 2 && amount < maxAmounts"
        class="surplus"
      >
        <p v-if="maxAmounts - amount > 10">还可买10件以上</p>
        <p v-else>还可买{{ maxAmounts - amount }}件</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: this.initial,
      maxAmounts: this.max,
      index_: this.index,
    };
  },
  methods: {
    updateFather() {
      this.$emit("updateAmount", this.amount);
    },
    add() {
      if (this.amount < this.max) {
        this.amount++;
      } else {
        this.message2();
      }
    },
    reduce() {
      if (this.amount > 1) {
        this.amount--;
      } else {
        this.message1();
      }
    },
    message1() {
      this.$alert("修改数量不能小于0", {
        confirmButtonText: "确定",
      });
    },
    message2() {
      this.$alert("商品加入购物车数量超过限购数", {
        confirmButtonText: "确定",
      });
    },
    message3() {
      this.$alert("输入的数量只能是数字！", {
        confirmButtonText: "确定",
      });
    },
    message4() {
      this.$alert("只能输入大于0的整数！", {
        confirmButtonText: "确定",
      });
    },
  },
  props: {
    initial: Number,
    max: Number,
    index: Number,
  },
  mounted() {
  },
  watch: {
    amount(newAmount, oldAmount) {
      //设置flag，如果设置成功就向服务器发送
      let flag = true;

      //判断是不是数字
      if (typeof this.amount == "number") {
        //是数字，则判断是不是整数
        if (newAmount % 1 != 0) {
          this.message4();
          this.amount = oldAmount;
          flag = false;
        } else {
          //数字不能大于最大值
          if (newAmount > this.maxAmounts) {
            this.message2();
            this.amount = oldAmount;
            flag = false;
          } else if (newAmount < 1) {
            //也不能小于1
            this.message1();
            this.amount = oldAmount;
            flag = false;
          }
        }
      } else {
        //不是数字
        this.message3();
        this.amount = oldAmount;
        flag = false;
      }
      if (flag) {
        let url = `http://localhost:3000/user?userId=${this.$cookie.get(
          "userId"
        )}`;
        this.axios.get(url).then((response) => {
          let res = response.data[0].cartGoods;
          res[this.index_] = newAmount;
          let url2 = `http://localhost:3000/user/${this.$cookie.get("userId")}`;
          this.axios.patch(url2, {
            cartGoods: res,
          });
        });
        this.updateFather();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 150px;
  height: 41px;
  border: 1px solid #e0e0e0;

  text-align: center;
  line-height: 40px;
  position: relative;

  .reduce {
    cursor: pointer;
    float: left;
    width: 38px;
    height: 41px;
    color: #757575;
    font-size: 20px;

    &:hover {
      background-color: #e0e0e0;
    }
  }

  .amount {
    float: left;
    width: 74px;
    height: 41px;
    font-size: 16px;
    font-family: "Helvetica Neue";

    #amount {
      text-align: center;
      width: 74px;
      height: 20px;
      border: none;
      outline: none;
    }
    #amount:focus {
      outline: none;
    }
  }

  .add {
    cursor: pointer;
    float: left;
    width: 38px;
    height: 41px;
    color: #757575;
    font-size: 20px;

    &:hover {
      background-color: #e0e0e0;
    }
  }

  .surplus {
    width: 148px;
    height: 18px;
    position: absolute;
    top: 45px;

    line-height: 18px;
    font-size: 12px;
    color: #b0b0b0;
  }
}
</style>
