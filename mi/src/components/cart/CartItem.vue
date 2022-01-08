<template>
  <div>
    <div class="container" v-if="total > 0 && !deleted">
      <div class="checkbox">
        <div :class="{ boxContainer: true, chose1: chosen }" @click="chose">
          <i
            :class="{ iconfont: true, 'icon-duihao1': true, chose2: chosen }"
          ></i>
        </div>
      </div>
      <div class="other">
        <div class="image">
          <img :src="item_.cartimage" />
        </div>
        <div class="name">
          <p>{{ item_.itemname }} {{ item_.memory }} {{ item_.color }}</p>
        </div>
        <div class="price">
          <p>{{ item_.price }}元</p>
        </div>
        <div v-if="item_.maxamounts > 0" class="amount">
          <CartAmount
            @updateAmount="updateAmount"
            :index="index"
            :initial="item_.amount"
            :max="item_.maxamounts"
            :msg="item_"
          />
        </div>
        <div class="total">
          <p>{{ item_.amount * item_.price }}元</p>
        </div>
        <div class="delete">
          <div class="circle" @click="deleteItem">
            <i class="iconfont icon-cuohao"></i>
            <div class="deleteText">
              <p>删除</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setAtt } from "../../mixin/setAtt";
import CartAmount from "./CartAmount";
export default {
  data() {
    return {
      index: -1,
      deleted: false,
      chosen: false,
      currentIndex_: this.currentIndex,
      allChecked: false,
      item_: this.item,
    };
  },
  components: {
    CartAmount,
  },
  mixins: [setAtt],
  methods: {
    //全部更新
    changeChosenAllSon(check) {
      let url = `${this.CURL}users/cart/chosenall`;
      this.axios({
        method: "PUT",
        url: url,
        data: {
          chosen: check,
          userid: this.$cookie.get("userId"),
        },
      });
    },
    changeItself(check) {
      this.chosen = check;
    },

    //单个更新
    chose() {
      this.chosen = !this.chosen;

      this.axios({
        method: "put",
        url: `${this.CURL}users/cart`,
        data: {
          chosen: this.chosen,
          userid: this.$cookie.get("userId"),
          itemname: this.item_.itemname,
          memory: this.item_.memory,
          color: this.item_.color,
        },
      });

      //触发父级更新orderList事件
      setTimeout(() => {
        this.$emit("updateChosenList");
      }, 50);
    },
    updateAmount(newAmount) {
      this.amount = newAmount;
    },
    deleteItem() {
      this.$confirm("确定删除吗？", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //确认：则删除此商品
          let url = `${this.CURL}users/cart`;
          this.axios({
            method: "delete",
            url: url,
            data: {
              itemname: this.item_.itemname,
              memory: this.item_.memory,
              color: this.item_.color,
              userid: this.$cookie.get("userId"),
            },
          });
          this.deleted = true;
          //更新vuex
          this.setUserChosen(this.axios, this.$store, this.$cookie.get("userId"));
          this.setUserCart(this.axios, this.$store, this.$cookie.get("userId"))
        })
        .catch(() => {
          //取消，则什么都不做
        });
    },
  },
  props: {
    item: Object,
    currentIndex: Number,
  },
  computed: {
    total() {
      return this.item_.amount * this.item_.price;
    },
  },
  watch: {
    chosen() {
      this.setUserChosen(this.axios, this.$store, this.$cookie.get("userId"));
    },
  },
  mounted() {
    if (this.item_.chosen == 0) {
      this.chosen = false;
    } else {
      this.chosen = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 1226px;
  height: 120px;
  margin: 0 auto;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
  position: relative;

  .checkbox {
    width: 110px;
    height: 86px;
    position: relative;

    .boxContainer {
      cursor: pointer;
      position: absolute;
      top: 48px;
      left: 25px;
      width: 18px;
      height: 18px;
      border: 1px solid #e0e0e0;
      // background-color: #bfa;

      .iconfont {
        font-size: 20px;
        opacity: 0;
        color: #757575;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  .other {
    position: absolute;
    right: 0;
    top: 0;
    width: 1116px;
    height: 120px;

    font-size: 18px;
    font-family: "Helvetica Neue";
    color: #424242;

    .image {
      float: left;
      width: 80px;
      height: 85px;
      margin-right: 30px;

      img {
        position: absolute;
        top: 50%;
        left: -1%;
        transform: translate(0, -50%);
        width: 80px;
        height: 80px;
      }
    }

    .name {
      float: left;
      width: 380px;
      height: 110px;

      line-height: 110px;
    }

    .price {
      float: left;
      width: 158px;
      height: 110px;
      line-height: 110px;
      text-align: center;

      font-size: 16px;
    }

    .amount {
      margin-left: 15px;
      float: left;
      width: 150px;
      height: 110px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .total {
      float: left;
      width: 201px;
      height: 120px;
      text-align: center;
      line-height: 108px;

      p {
        font-size: 16px;
        font-family: "Helvetica Neue";
        color: #ff6700;
      }
    }

    .delete {
      float: left;
      width: 60px;
      height: 100px;
      position: relative;

      .circle {
        cursor: pointer;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        width: 22px;
        height: 22px;
        background-color: #fff;
        transition: background-color 0.5s;

        .iconfont {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-size: 8px;
          color: #757575;
          font-weight: 700;
        }

        .deleteText {
          opacity: 0;
          width: 35px;
          height: 20px;
          border: 1px solid #333;
          text-align: center;
          line-height: 20px;
          position: absolute;
          transition: opacity 0.1s 0.5s;
          top: 80%;
          left: 80%;
          p {
            font-size: 8px;
          }
        }

        &:hover {
          // transition-duration:0.5s;
          background-color: red;

          .iconfont {
            color: #fff;
          }

          .deleteText {
            opacity: 1;
          }
        }
      }
    }
  }
}
.chose1 {
  background-color: #ff6700;
}
.chose2 {
  opacity: 1 !important;
  color: #fff !important;
}
</style>
<style lang="scss">
.el-message-box {
  width: 480px !important;
  height: 270px !important;
  padding: 0;

  .el-message-box__header {
    height: 43px;
    padding: 0;

    .el-message-box__title {
      display: none;
    }
  }

  .el-message-box__content {
    width: 440px;
    height: 110px;
    padding: 30px 20px 20px 20px;
    position: relative;

    .el-message-box__container {
      width: 420px;
      height: 39px;
      position: absolute;
      top: 50%;

      .el-icon-warning {
        display: none;
      }

      .el-message-box__message {
        transform: translate(0, -50%);
        width: 420px;
        height: 24px;
        text-align: center;
        p {
          font-size: 26px;
          font-family: "Helvetica Neue";
          color: #333;
        }
      }
    }
  }
  .el-message-box__btns {
    width: 480px;
    height: 80px;
    background-color: #f5f5f5;
    position: relative;
    padding: 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;

    .el-button--small {
      width: 160px;
      height: 40px;
      margin-left: 15px;
      background-color: #b0b0b0;
      color: #f2f2f2;
      font-size: 14px;
      font-family: "Helvetica Neue";

      &:hover {
        background-color: #757575;
        color: #fff;
      }
    }
    .el-button--primary {
      width: 160px;
      height: 40px;
      background-color: #ff6700;
      border: none;
      margin-left: 0;

      font-size: 14px;
      font-family: "Helvetica Neue";
      color: #fff;

      &:hover {
        background-color: #f25807;
      }
    }
  }
}
</style>
