<template>
  <div id="itemListContainer" @mouseleave="changeDisplay2">
    <div class="itemList">
      <ul id="itemUl">
        <li class="itemLi" @mouseenter="changeDisplay(0)">
          <span class="hrefLi">手机</span>
          <i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="itemLi" @mouseenter="changeDisplay(1)">
          <span class="hrefLi">电视</span
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="itemLi" @mouseenter="changeDisplay(2)">
          <span class="hrefLi">笔记本 平板</span
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="itemLi" @mouseenter="changeDisplay(3)">
          <span class="hrefLi">家电</span
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="itemLi" @mouseenter="changeDisplay(4)">
          <span class="hrefLi">出行 穿戴</span
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="itemLi" @mouseenter="changeDisplay(5)">
          <span class="hrefLi">智能 路由器</span
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="itemLi" @mouseenter="changeDisplay(6)">
          <span class="hrefLi">健康 儿童</span
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="itemLi" @mouseenter="changeDisplay(7)">
          <span class="hrefLi">耳机 音箱</span
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="itemLi" @mouseenter="changeDisplay(8)">
          <span class="hrefLi">生活 箱包</span
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
      </ul>
    </div>
    <div class="itemRight" v-if="currentIndex != -1">
      <div class="showList" v-show="currentIndex == 0">
        <SingleAd category="手机" />
      </div>
      <div class="showList" v-show="currentIndex == 1">
        <SingleAd category="电视" />
      </div>
      <div class="showList" v-show="currentIndex == 2">
        <SingleAd category="笔记本 平板" />
      </div>
      <div class="showList" v-show="currentIndex == 3">
        <SingleAd category="家电" />
      </div>
      <div class="showList" v-show="currentIndex == 4">
        <SingleAd category="出行 穿戴" />
      </div>
      <div class="showList" v-show="currentIndex == 5">
        <SingleAd category="智能 路由器" />
      </div>
      <div class="showList" v-show="currentIndex == 6">
        <SingleAd category="电源 配件" />
      </div>
      <div class="showList" v-show="currentIndex == 7">
        <SingleAd category="健康 儿童" />
      </div>
      <div class="showList" v-show="currentIndex == 8">
        <SingleAd category="耳机 音箱" />
      </div>
      <div class="showList" v-show="currentIndex == 9">
        <SingleAd category="生活 箱包" />
      </div>
    </div>
  </div>
</template>

<script>
//CategoryList2：给非首页准备的
import SingleAd from "../header/SingleAd";
export default {
  data() {
    return {
      currentIndex: -1,
    };
  },
  methods: {
    changeDisplay(index) {
      this.currentIndex = index;
    },
    changeDisplay2() {
      //离开容器
      this.currentIndex = -1;
    },
  },
  components: {
    SingleAd,
  },
  mounted() {},
  watch: {
    currentIndex(newVal) {
      if (newVal == -1) {
        //移出去了
      } else {
        for (let i = 0; i < 9; i++) {
          document.getElementsByClassName("itemLi")[
            i
          ].style.backgroundColor = "#fff";
          document.getElementsByClassName("hrefLi")[i].style.color = "#333";
        }
        document.getElementsByClassName("itemLi")[
          newVal
        ].style.backgroundColor = "#ff6700";
        document.getElementsByClassName("hrefLi")[newVal].style.color = "#fff";
        // console.log(document.getElementsByClassName("hrefLi")[newVal].style.Color)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#itemListContainer {

  height: 460px;
  .itemList {
    width: 234px;
    height: 460px;
    z-index: 10;
    position: absolute;
    left: -10px;
    background-color: #fff;
    border: 1px solid #ff6700;

    &:hover {
      .showList {
        opacity: 1;
      }
    }

    #itemUl {
      width: 234px;
      height: 420px;
      padding-top: 20px;
      padding-bottom: 20px;
      position: relative;

      .itemLi {
        width: 234px;
        height: 47px;
        position: relative;
        cursor: pointer;
        .hrefLi {
          padding-left: 30px;
          text-decoration: none;
          font-size: 14px;
          line-height: 47px;
          font-family: "Helvetica Neue";
          color:#333;
        }
        .icon-jiantouyou {
          position: absolute;
          right: 20px;
          top: 12px;
          color: #e0e0e0;
        }
      }
    }
  }

  .itemRight {
    position: absolute;
    left: 226px;
    height: 460px;
    z-index: 20;
    box-shadow: 0 3px 6px rgb(0 0 0 / 10%);
  }
}
</style>