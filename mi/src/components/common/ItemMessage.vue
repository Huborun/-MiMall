<template>
  <div>
    <div id="ItemMessage" class="ItemMessage">
      <div class="messageContainer">
        <div class="itemListsContainer" v-if=" itemLists && itemLists.length != 0">
          <div class="items" v-for="(item, index) in itemLists" :key="index">
            <p>
              {{ item }}
              <span class="separator2" v-if="index + 1 < itemLists.length"
                >|</span
              >
            </p>
          </div>
        </div>
        <div class="otherMsgContainer">
          <span class="text">概述页</span>
          <span class="separator">|</span>
          <span class="text">参数页</span>
          <span class="separator">|</span>
          <span class="text">F码通道</span>
          <span class="separator">|</span>
          <span class="text">咨询客服</span>
          <span class="separator">|</span>
          <span class="text">用户评价</span>
          <span id="buy" @click="goToBuy">立即购买</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id_: this.id,
    };
  },
  methods: {
    goToBuy() {
      this.$router.push(`/purchase/${this.id_}`);
    },
  },
  props: ["itemLists", "id"],
  mounted() {
    window.onscroll = function () {
      let top = document.documentElement.scrollTop;
      if (top < 120) {
        let show = document.getElementById("ItemMessage");
        if (show) {
          show.className = "ItemMessage";
        }
      } else {
        let show = document.getElementById("ItemMessage");
        if (show) {
          show.className = "ItemMessage2";
        }
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.ItemMessage {
  width: 99vw;
  height: 63px;
  z-index: 120;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;

  .messageContainer {
    margin: 0 auto;
    width: 1226px;
    height: 63px;
    position: relative;

    .itemListsContainer {
      height: 100%;
      width: 500px;
      line-height: 63px;
      .items:nth-child(1) {
        float: left;
        padding-right: 10px;
        height: 60px;
        font-size: 18px;
        color: #424242;
        font-family: "Helvetica Neue";
        position: relative;
      }

      .items:nth-child(n + 2) {
        display: block;
        padding-right: 10px;
        padding-left: 10px;
        float: left;
        font-size: 12px;
        height: 14px;
        font-weight: 400;
        font-family: "Helvetica Neue";
        position: relative;

        cursor: pointer;
        &:hover {
          color: #ff6700;
        }
      }
    }

    .separator2 {
      position: absolute;
      right: 0px;
      color: #616161;
      font-size: 12px;
      font-family: "Helvetica Neue";
    }

    .otherMsgContainer {
      position: absolute;
      right: 0;
      top: 20px;
      width: 490px;
      height: 100%;

      .text {
        cursor: pointer;
        padding-right: 10px;
        padding-left: 10px;
        font-size: 14px;
        color: #616161;
        font-family: "Helvetica Neue";
        z-index: 120;
        &:hover {
          color: #ff6700;
        }
      }

      .separator {
        font-size: 14px;
        color: #e0e0e0;
      }

      #buy {
        cursor: pointer;
        position: absolute;
        top: -2px;
        right: 10px;
        display: inline-block;
        width: 120px;
        height: 30px;
        background-color: #ff6700;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        color: #fff;

        &:hover {
          background-color: #f25807;
        }
      }
    }
  }
}
.ItemMessage2 {
  position: fixed;
  z-index: 120;
  top: 0px;
  left: 50%;
  transform: translate(-50%);
  width: 99vw;
  height: 63px;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;

  .messageContainer {
    margin: 0 auto;
    width: 1226px;
    height: 63px;
    position: relative;

    .itemListsContainer {
      height: 100%;
      width: 500px;
      line-height: 63px;
      .items:nth-child(1) {
        float: left;
        padding-right: 10px;
        height: 60px;
        font-size: 18px;
        color: #424242;
        font-family: "Helvetica Neue";
        position: relative;
      }

      .items:nth-child(n + 2) {
        display: block;
        padding-right: 10px;
        padding-left: 10px;
        float: left;
        font-size: 12px;
        height: 14px;
        font-weight: 400;
        font-family: "Helvetica Neue";
        position: relative;

        cursor: pointer;
        &:hover {
          color: #ff6700;
        }
      }
    }

    .separator2 {
      position: absolute;
      right: 0px;
      color: #616161;
      font-size: 12px;
      font-family: "Helvetica Neue";
    }

    .otherMsgContainer {
      position: absolute;
      right: 0;
      top: 20px;
      width: 490px;
      height: 100%;

      .text {
        cursor: pointer;
        padding-right: 10px;
        padding-left: 10px;
        font-size: 14px;
        color: #616161;
        font-family: "Helvetica Neue";
        z-index: 120;
        &:hover {
          color: #ff6700;
        }
      }

      .separator {
        font-size: 14px;
        color: #e0e0e0;
      }

      #buy {
        cursor: pointer;
        position: absolute;
        top: -2px;
        right: 10px;
        display: inline-block;
        width: 120px;
        height: 30px;
        background-color: #ff6700;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        color: #fff;

        &:hover {
          background-color: #f25807;
        }
      }
    }
  }
}
</style>