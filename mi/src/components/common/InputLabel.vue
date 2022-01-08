<template>
  <div>
    <div class="theLabelContainer" :class="{ active: active }">
      <input
        id="inputText"
        type="text"
        @focus="changeWhenFocus"
        @blur="changeWhenBlur"
        v-model="inputText"
      />
      <label
        :class="{ activeLabel: activeLabel, disableLabel: disableLabel }"
        >{{ defaultStr_ }}</label
      >
      <label
        v-if="placeholder != null && showPlaceholder && inputText.length == 0"
      >
        {{ placeholder }}
      </label>
      <div
        class="warn"
        :class="{ showWarn: showWarning0 || showWarning1 || showWarning2 }"
      >
        <p v-if="showWarning0 == true">
          {{ warning0 }}
        </p>
        <p v-if="showWarning1 == true">
          {{ warning1 }}
        </p>
        <p v-if="showWarning2 == true">
          {{ warning2 }}
        </p>
        <span id="triangle"></span>
      </div>
      <div :class="{ error: true, showError: showError }">
        <i class="iconfont icon-quxiao"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { handle } from "../../mixin/handleStr";
export default {
  data() {
    return {
      //warning0：未输入时显示的警告
      //warning1：输入错误情况1时显示的警告
      //warning2：输入错误情况2时显示的警告
      defaultStr_: this.name,
      active: false,
      activeLabel: false,
      showWarning0: false,
      showWarning1: false,
      showWarning2: false,
      //showError：红色错误icon是否显示
      showError: false,
      disableLabel: false,
      inputText: "",
      showPlaceholder: false,
      //temp：判断是第几次输入了
    };
  },
  mixins: [handle],
  methods: {
    changeWhenFocus() {
      this.active = true;
      this.activeLabel = true;
      this.disableLabel = false;

      if (this.placeholder && this.inputText == "") {
        this.showPlaceholder = true;
      }
    },
    changeWhenBlur() {
      this.showPlaceholder = false;
      this.active = false;
      if (this.inputText == "") {
        //空字符串，则不显示错误
        this.showError = false;
        this.disableLabel = false;
        this.activeLabel = false;

        //不显示所有错误
        this.showWarning0 = false;
        this.showWarning1 = false;
        this.showWarning2 = false;

        this.$parent.notReady();
      } else {
        this.disableLabel = true;
        //判断当前组件是“姓名”还是“手机号”
        if (this.name == "姓名") {
          //是姓名
          let result = this.isStrAName(this.inputText);
          if (result == 1) {
            //符合要求的姓名
            this.showWarning0 = false;
            this.showWarning1 = false;
            this.showWarning2 = false;
            this.showError = false;
            //给父组件发送输入
            this.$emit("getInput", this.inputText, this.name);
            this.$parent.ready();
          } else if (result == 2) {
            //长度不合格
            //显示错误2
            this.showError = true;
            this.showWarning0 = false;
            this.showWarning1 = false;
            this.showWarning2 = true;
            this.$parent.notReady();
          } else if (result == 3) {
            //不包含中文也不包含英文
            //显示错误1
            this.showError = true;
            this.showWarning0 = false;
            this.showWarning1 = true;
            this.showWarning2 = false;
            this.$parent.notReady();
          }
        } else if (this.name == "手机号") {
          //判断输入是否是手机号
          let result = this.isPhone(this.inputText);
          if (result == 1) {
            //符合规则
            //传递给父组件
            this.showWarning0 = false;
            this.showWarning1 = false;
            this.$emit("getInput", this.inputText, this.name);
            this.$parent.ready();
          } else {
            //不符合规则
            this.showWarning1 = true;
            this.$parent.notReady();
          }
        } else if (this.name == "详细地址") {
          if (this.inputText.length < 5 || this.inputText.length > 32) {
            //不符合规则
            this.showWarning1 = true;
            this.$parent.notReady();
          } else {
            //符合规则
            this.showWarning1 = false;
            this.$emit("getInput", this.inputText, this.name);
            this.$parent.ready();
          }
        } else {
          //给父组件发送输入
          this.$emit("getInput", this.inputText, this.name);
          this.$parent.ready();
        }
      }
    },
    showWarnings() {
      if (this.name == "姓名") {
        if (this.inputText == "") {
          this.showWarning0 = true;
        }
      } else if (this.name == "手机号") {
        if (this.inputText == "") {
          this.showWarning0 = true;
        }
      } else if (this.name == "详细地址") {
        if (this.inputText == "") {
          this.showWarning0 = true;
        }
      }
    },
  },
  props: {
    //warning0：未输入时显示的警告
    //warning1：输入错误情况1时显示的警告
    //warning2：输入错误情况2时显示的警告
    warning0: String,
    warning1: String,
    warning2: String,
    name: String,
    width: Number,
    height: Number,
    index: Number,
    placeholder: String,
    beforefixing: String,
  },
  mounted() {
    document.getElementsByClassName("theLabelContainer")[
      this.index
    ].style.height = this.height + "px";
    document.getElementsByClassName("theLabelContainer")[
      this.index
    ].style.width = this.width + "px";

    setTimeout(() => {
      if (this.beforefixing) {
        this.inputText = this.beforefixing;
        this.disableLabel = true;
      }
    }, 400);
  },
};
</script>

<style lang="scss" scoped>
.theLabelContainer {
  padding: 10px 16px 10px 16px;
  border: 1px solid #e0e0e0;
  position: relative;

  &:hover {
    border: 1px solid #d7d7d7;
  }

  input {
    position: absolute;
    top: 2px;
    width: 90%;
    height: 35px;
    border: none;
    outline: none;
  }

  label {
    position: absolute;
    top: 10px;
    left: 16px;
    font-size: 14px;
    color: #b0b0b0;
    font-family: "Helvetica Neue";
    transition-duration: 0.3s;
  }
}

.active {
  border: 1px solid #ff6700 !important;
}

.activeLabel {
  font-size: 10px !important;
  color: #ff6700 !important;
  top: -8px !important;
  left: 10px !important;
  background-color: #fff !important;
  padding-left: 5px;
  padding-right: 5px;
}

.disableLabel {
  display: none !important;
}

.showWarn {
  position: absolute;
  font-size: 10px;
  font-family: "Helvetica Neue";
  background-color: #e53935;
  height: 30px;
  line-height: 30px;
  color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  top: -25px;
  left: 10px;

  box-shadow: 2px 0px 5px #999;

  #triangle {
    position: absolute;
    width: 0px;
    height: 0px;
    border-top: 8px solid #e53935;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    left: 15px;
    top: 30px;
  }
}

.error {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 13px;
  color: red;
  display: none;
}

.showError {
  display: block;
}
</style>