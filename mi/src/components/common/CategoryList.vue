<template>
  <div>
    <div class="item-list">
      <ul id="item-ul">
        <li class="item-li item-li-1">
          <a href="javascript:;">手机</a>
          <i class="iconfont icon-jiantouyou"></i>
          <div class="show-list">
            <div
              class="phone-items"
              v-for="(item, index) in miList"
              :key="index"
            >
              <a v-if="item.JumpId" v-bind:href="'/#/product/' + item.JumpId">
                <img :src="item.src" />
                <div class="phone-text">{{ item.name }}</div>
              </a>
              <a v-else href="javascript:;">
                <img :src="item.src" />
                <div class="phone-text">{{ item.name }}</div>
              </a>
            </div>
          </div>
        </li>
        <li class="item-li">
          <a href="javascript:;">电视</a
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="item-li">
          <a href="javascript:;">笔记本 平板</a
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="item-li">
          <a href="javascript:;">家电</a
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="item-li">
          <a href="javascript:;">出行 穿戴</a
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="item-li">
          <a href="javascript:;">智能 路由器</a
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="item-li">
          <a href="javascript:;">电源 配件</a
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="item-li">
          <a href="javascript:;">健康 儿童</a
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="item-li">
          <a href="javascript:;">耳机 音箱</a
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="item-li">
          <a href="javascript:;">生活 箱包</a
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        miList: [""],
    };
  },
  methods: {},
  mounted() {
    //24张手机图片
    this.axios({
      method: "get",
      url: "http://localhost:3000/phoneListsSmall",
    }).then((res) => {
      this.miList = res.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.item-list {
  width: 234px;
  height: 460px;
  z-index: 10;
  position: absolute;
  left:0;
  background-color: #5a57557a;

  &:hover {
    .show-list {
      opacity: 1;
    }
  }

  #item-ul {
    width: 234px;
    height: 420px;
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;

    .item-li {
      width: 234px;
      height: 42px;
      position: relative;
      a {
        padding-left: 30px;
        text-decoration: none;
        color: #ffffff;
        font-size: 14px;
        line-height: 42px;
        font-family: "Helvetica Neue";
      }

      &:hover {
        background-color: #ff6700;
        cursor: pointer;
      }

      .icon-jiantouyou {
        position: absolute;
        right: 20px;
        top: 10px;
        color: #fff;
      }
    }

    .item-li-1 {
      width: 234px;
      height: 42px;

      &:hover {
        background-color: #ff6700;
        cursor: pointer;
        .show-list {
          display: block;
        }
      }

      .icon-jiantouyou {
        position: absolute;
        right: 20px;
        top: 10px;
        color: #fff;
      }

      .show-list {
        display: none;
        width: 992px;
        height: 458px;
        position: absolute;
        left: 234px;
        top: -20px;
        border: 1px #e0e0e0 solid;
        background-color: #fff;
        box-shadow: 3px 3px 5px #999;

        a {
          display: block;
        }

        .phone-items {
          float: left;
          width: 225px;
          height: 40px;
          padding: 18px 11px;

          img {
            float: left;
          }

          .phone-text {
            padding-left: 60px;
            line-height: 40px;
            font-size: 13.5px;
            font-family: Helvetica Neue;
            color: #333333;
            &:hover {
              color: #ff6700;
            }
          }
        }
      }
    }
  }
}
</style>