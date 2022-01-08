<template>
  <div>
    <div class="container" v-show="show">
      <p id="tip">选择省/市/区/县</p>
      <i class="iconfont icon-xiangxia"></i>
      <div class="chose">
        <div class="header">
          <div class="condition1" v-if="chosenProvince == ''">
            选择省份/自治区
          </div>
          <div
            class="condition2"
            v-if="chosenProvince != '' && chosenCity == ''"
          >
            <span>{{ chosenProvince }}</span>
            <span>选择城市/地区</span>
          </div>
          <div
            class="condition3"
            v-if="chosenProvince != '' && chosenCity != ''"
          >
            <span>{{ chosenProvince }}</span>
            <span>{{ chosenCity }}</span>
            <span>选择区县</span>
          </div>
        </div>
        <div class="body">
          <div class="condition1_1" v-if="chosenProvince == ''">
            <span
              v-for="(item, index) in province"
              :key="index"
              @click="setProvince(item)"
              >{{ item }}</span
            >
          </div>
          <div
            class="condition2_1"
            v-if="chosenProvince != '' && chosenCity == ''"
          >
            <span
              v-for="(item, index) in city"
              :key="index"
              @click="setCity(item)"
            >
              {{ item }}
            </span>
          </div>
          <div
            class="condition3_1"
            v-if="chosenProvince != '' && chosenCity != ''"
          >
            <span
              v-for="(item, index) in county"
              :key="index"
              @click="setCounty(item)"
            >
              {{ item }}
            </span>
          </div>
        </div>
        <div class="bottom">
          <p>搜索地址快速定位 ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { handle } from "../../mixin/handleStr";
export default {
  data() {
    return {
      province: [],
      chosenProvince: "",
      city: [],
      chosenCity: "",
      county: [],
      chosenCounty: "",
      show: true,
    };
  },
  mixins: [handle],
  methods: {
    async searchCity() {
      let url = `${this.CURL}area/city?province=${this.chosenProvince}`;
      let data = await this.axios.get(url);
      let result = this.getDifferentArr(data.data.msg, "city");
      this.city = result;
    },
    async searchCounty() {
      let url = `${this.CURL}area/county?city=${this.chosenCity}`;
      let data = await this.axios.get(url);
      let result = this.getDifferentArr(data.data.msg, "county");
      this.county = result;
    },
    setProvince(item) {
      this.chosenProvince = item;
      this.searchCity();
    },
    setCity(item) {
      this.chosenCity = item;
      this.searchCounty();
    },
    setCounty(item) {
      this.chosenCounty = item;
      //设置div框显示的内容
      this.$emit(
        "getAddress",
        this.chosenProvince,
        this.chosenCity,
        this.chosenCounty
      );
      //使得此页面不显示
      this.show = false;
      //传递给父组件
      this.$emit("getInput",`${this.chosenProvince} ${this.chosenCity} ${this.chosenCounty}`,this.name)
    },
  },
  async mounted() {
    let url = `${this.CURL}area/province`;
    let data = await this.axios.get(url);
    let provinceArr = this.getDifferentArr(data.data.msg, "province");
    this.province = provinceArr;
  },
  props:{
    name:String
  }
};
</script>

<style lang="scss" scoped>
.container {
  cursor: text;
  width: 622px;
  height: 42px;
  line-height: 40px;
  border: 1px solid #e0e0e0;
  position: relative;

  &:hover {
    border: 1px solid #d7d7d7;
  }
  #tip {
    margin-left: 10px;
    float: left;
    font-size: 14px;
    font-family: "Helvetica Ne";
    color: #b0b0b0;
  }

  .iconfont {
    float: right;
    font-size: 16px;
    margin-right: 10px;
    color: #b0b0b0;
  }

  .chose {
    position: absolute;
    left: -2px;
    top: -2px;
    width: 625px;
    padding-top: 15px;
    border: 1px solid #ff6700;
    z-index: 200;
    background-color: #fff;
    .header {
      width: 580px;
      height: 43px;
      margin-left: 20px;

      .condition1 {
        font-size: 14px;
        font-family: "Helvetica Neue";
        color: #757575;
        cursor: pointer;
      }

      .condition2 {
        font-size: 14px;
        font-family: "Helvetica Neue";
        span:nth-child(1) {
          color: #ff6700;
          margin-right: 10px;
        }
        span:nth-child(2) {
          color: #757575;
        }
      }

      .condition3 {
        font-size: 14px;
        font-family: "Helvetica Neue";
        span:nth-child(1) {
          color: #ff6700;
          margin-right: 10px;
        }
        span:nth-child(2) {
          color: #ff6700;
          margin-right: 10px;
        }
        span:nth-child(3) {
          color: #757575;
        }
      }
    }

    .body {
      margin-left: 20px;
      position: relative;

      .condition1_1 {
        position: relative;
        left: 3px;
        top: -5px;
        width: 580px;
        height: 105px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-top: 2px solid #f0f0f0;
        border-bottom: 2px solid #f0f0f0;
        span {
          font-size: 14px;
          font-family: "Helvetica Neue";
          color: #333333;
          margin-right: 10px;
          cursor: pointer;

          &:hover {
            color: #ff6700;
          }
        }
      }

      .condition2_1 {
        position: relative;
        left: 3px;
        top: -5px;
        width: 580px;
        height: 36px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-top: 2px solid #f0f0f0;
        border-bottom: 2px solid #f0f0f0;

        span {
          font-size: 14px;
          font-family: "Helvetica Neue";
          color: #333333;
          margin-right: 10px;
          cursor: pointer;

          &:hover {
            color: #ff6700;
          }
        }
      }

      .condition3_1 {
        position: relative;
        left: 3px;
        top: -5px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-top: 2px solid #f0f0f0;
        border-bottom: 2px solid #f0f0f0;
        line-height: 36px;

        span {
          display: inline-block;
          height: 30px;
          font-size: 14px;
          font-family: "Helvetica Neue";
          color: #333333;
          margin-right: 10px;
          cursor: pointer;

          &:hover {
            color: #ff6700;
          }
        }
      }
    }

    .bottom {
      width: 580px;
      height: 60px;

      p {
        font-size: 14px;
        font-family: "Helvetica Neue";
        color: #b0b0b0;
        margin-top: 5px;
        margin-left: 20px;

        &:hover {
          color: #ff6700;
        }
      }
    }
  }
}
</style>