<template>
  <div>
    <div class="side">
      <img
        src="https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.4994397e.jpg"
      />
    </div>
    <div class="center">
      <div class="center-header">
        <div class="Xiaomi">
          <i class="iconfont icon-icon-xiaomiguishu"></i>
          <span>小米账号</span>
        </div>
        <div class="other-word">
          <span>用户协议</span>
          <span>隐私政策</span>
          <span>帮助中心</span>
          <span class="line">|</span>
          <span class="language">中文(简体)</span>
        </div>
      </div>
      <div class="center-login">
        <div
          :class="{
            login: true,
            login1: click1 + click2 == 1,
            login2: click1 + click2 > 1,
          }"
        >
          <div class="login-header"><span>登录</span> <span>注册</span></div>
          <div
            :class="{
              login_name: true,
              input_wrong: wrongInput,
              input_wrong_blur: wrongInputBlur,
              input_true: trueInput,
              input_true_blur: trueInputBlur,
            }"
          >
            <input
              type="text"
              v-model="user_name"
              @focus="changeWhenFocus"
              @blur="changeWhenBlur"
            />
            <!-- <label :class="{ click: LabelIsTure1, not_click: !LabelIsTure1 }"
              >邮箱/手机号码/小米ID</label
            > -->
            <label
              :class="{
                label_default: true,
                label_wrong: wrongInputLabel,
                label_wrong_blur: wrongInputLabelBlur,
                label_true: trueInputLabel,
                label_true_blur: trueInputLabelBlur,
              }"
              >邮箱/手机号码/小米ID</label
            >
          </div>
          <div class="hint1" v-if="user_name == '' && click1 != 0">
            请输入账号
          </div>
          <div
            :class="{
              login_password: true,
              input_wrong: wrongInput2,
              input_wrong_blur: wrongInputBlur2,
              input_true: trueInput2,
              input_true_blur: trueInputBlur2,
            }"
          >
            <input
              :type="passwordOrText"
              v-model="user_password"
              @focus="changeWhenFocus2"
              @blur="changeWhenBlur2"
            />
            <label
              :class="{
                label_default: true,
                label_wrong: wrongInputLabel2,
                label_wrong_blur: wrongInputLabelBlur2,
                label_true: trueInputLabel2,
                label_true_blur: trueInputLabelBlur2,
              }"
              >密码</label
            >
            <div class="changeVisible">
              <i
                :class="{
                  iconfont: true,
                  'icon-biyanjing': !isVisible,
                  'icon-zhengyan': isVisible,
                }"
                @click="changeVisible"
              ></i>
            </div>
          </div>
          <div
            class="hint2"
            v-if="(user_password == '' && click2 != 0) || userInfo.length == 0"
          >
            <span v-if="user_password == '' && click2 != 0"
              >请输入登录密码</span
            >
            <span v-if="userInfo.length == 0 ">用户名或密码不正确 </span>
          </div>
          <div :class="{ notification: true, notification_display: display }">
            <i class="iconfont icon-gantanhao"></i>请您同意用户条款
          </div>
          <div class="confirm">
            <input
              type="checkbox"
              id="confirmButton"
              :checked="checked"
              @click="changeChecked"
            />
            已阅读并同意小米帐号
            <p>用户协议</p>
            和
            <p>隐私政策</p>
          </div>
          <div
            :class="{
              'confirm-login': true,
              'confirm-login-go': user_password != '' && user_name != '',
            }"
          >
            <input
              type="button"
              value="登录"
              :class="{
                'button-active': user_password != '' && user_name != '',
              }"
              @click="login"
            />
          </div>
          <div class="forget">
            <span>忘记密码?</span><span>手机号登录</span>
          </div>
          <div class="other-methods">其他方式登陆</div>
          <div class="icons">
            <i class="iconfont icon-zhifubao"></i>
            <i class="iconfont icon-weixin"></i>
            <i class="iconfont icon-QQ1"></i>
            <i class="iconfont icon-weibo"></i>
          </div>
        </div>
      </div>
      <div class="bottom">
        小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号
      </div>
    </div>
  </div>
</template>

<script>
import {setAtt} from "../mixin/setAtt.js"
export default {
  data() {
    return {
      //输入不正确时用户名Label和Input框的样式（获取焦点时）
      wrongInputLabel: false,
      wrongInput: false,
      //输入不正确时用户名Label和Input框的样式（失去焦点时）
      wrongInputLabelBlur: false,
      wrongInputBlur: false,
      //输入正确时用户名Label和Input框的样式（获取焦点时）
      trueInputLabel: false,
      trueInput: false,
      //输入正确时用户名Label和Input框的样式（失去焦点时）
      trueInputLabelBlur: false,
      trueInputBlur: false,
      //输入不正确时密码Label和Input框的样式（获取焦点时）
      wrongInputLabel2: false,
      wrongInput2: false,
      //输入不正确时密码Label和Input框的样式（失去焦点时）
      wrongInputLabelBlur2: false,
      wrongInputBlur2: false,
      //输入正确时密码Label和Input框的样式（获取焦点时）
      trueInputLabel2: false,
      trueInput2: false,
      //输入正确时密码Label和Input框的样式（失去焦点时）
      trueInputLabelBlur2: false,
      trueInputBlur2: false,
      user_name: "",
      user_password: "",
      click1: 0,
      click2: 0,
      isVisible: false, //是否可视
      passwordOrText: "password", //密码框还是文本框
      checked: false,
      display: false,
      userInfo: [""],
    };
  },
  mixins:[setAtt],
  methods: {
    changeWhenFocus() {
      if (this.user_name == "" && this.click1 != 0) {
        this.wrongInputLabel = true;
        this.wrongInput = true;
        this.wrongInputLabelBlur = false;
        this.wrongInputBlur = false;
        this.trueInputLabel = false;
        this.trueInput = false;
        this.trueInputLabelBlur = false;
        this.trueInputBlur = false;
        // this.click1++;
      } else if (this.user_name == "" && this.click1 != 0) {
        this.wrongInputLabel = false;
        this.wrongInput = false;
        this.wrongInputLabelBlur = false;
        this.wrongInputBlur = false;
        this.trueInputLabel = true;
        this.trueInput = true;
        this.trueInputLabelBlur = false;
        this.trueInputBlur = false;
        // this.click1++;
      } else {
        this.wrongInputLabel = false;
        this.wrongInput = false;
        this.wrongInputLabelBlur = false;
        this.wrongInputBlur = false;
        this.trueInputLabel = true;
        this.trueInput = true;
        this.trueInputLabelBlur = false;
        this.trueInputBlur = false;
        // this.click1++;
      }
    },
    changeWhenBlur() {
      if (this.user_name == "") {
        this.wrongInputLabel = false;
        this.wrongInput = false;
        this.wrongInputLabelBlur = true;
        this.wrongInputBlur = true;
        this.trueInputLabel = false;
        this.trueInput = false;
        this.trueInputLabelBlur = false;
        this.trueInputBlur = false;
        this.click1++;
      } else {
        this.wrongInputLabel = false;
        this.wrongInput = false;
        this.wrongInputLabelBlur = false;
        this.wrongInputBlur = false;
        this.trueInputLabel = false;
        this.trueInput = false;
        this.trueInputLabelBlur = true;
        this.trueInputBlur = true;
        this.click1++;
      }
    },
    changeWhenFocus2() {
      if (this.user_password == "" && this.click2 != 0) {
        this.wrongInputLabel2 = true;
        this.wrongInput2 = true;
        this.wrongInputLabelBlur2 = false;
        this.wrongInputBlur2 = false;
        this.trueInputLabel2 = false;
        this.trueInput2 = false;
        this.trueInputLabelBlur2 = false;
        this.trueInputBlur2 = false;
        // this.click2++;
      } else if (this.user_password == "" && this.click2 == 0) {
        this.wrongInputLabel2 = false;
        this.wrongInput2 = false;
        this.wrongInputLabelBlur2 = false;
        this.wrongInputBlur2 = false;
        this.trueInputLabel2 = true;
        this.trueInput2 = true;
        this.trueInputLabelBlur2 = false;
        this.trueInputBlur2 = false;
        // this.click2++;
      } else {
        this.wrongInputLabel2 = false;
        this.wrongInput2 = false;
        this.wrongInputLabelBlur2 = false;
        this.wrongInputBlur2 = false;
        this.trueInputLabel2 = true;
        this.trueInput2 = true;
        this.trueInputLabelBlur2 = false;
        this.trueInputBlur2 = false;
        // this.click2++;
      }
    },
    changeWhenBlur2() {
      if (this.user_password == "") {
        this.wrongInputLabel2 = false;
        this.wrongInput2 = false;
        this.wrongInputLabelBlur2 = true;
        this.wrongInputBlur2 = true;
        this.trueInputLabel2 = false;
        this.trueInput2 = false;
        this.trueInputLabelBlur2 = false;
        this.trueInputBlur2 = false;
        this.click2++;
      } else {
        this.wrongInputLabel2 = false;
        this.wrongInput2 = false;
        this.wrongInputLabelBlur2 = false;
        this.wrongInputBlur2 = false;
        this.trueInputLabel2 = false;
        this.trueInput2 = false;
        this.trueInputLabelBlur2 = true;
        this.trueInputBlur2 = true;
        this.click2++;
      }
    },
    changeVisible() {
      if (this.passwordOrText == "password") this.passwordOrText = "text";
      else this.passwordOrText = "password";
      this.isVisible = !this.isVisible;
    },
    changeChecked() {
      this.checked = !this.checked;
      // this.display = !this.display;
    },
    login() {
      //第一次登陆时，将设置Vuex
      if (this.checked) {
        //已经同意
        var url = `${this.CURL}users/login?username=${this.user_name}&userpwd=${this.user_password}`;
        this.axios({
          method: "get",
          url,
        }).then((response) => {
          this.userInfo = response.data.msg;
          //存在此用户
          if (this.userInfo.length == 1) {
            this.$cookie.delete("userId");
            //设置cookie
            this.$cookie.set("userId", response.data.msg[0].userid);
            this.setMsg(this.axios, this.$store, response.data.msg[0].userid);
            setTimeout(() => {
              this.$router.push("/index");
            }, 600);
          }
        });
      } else {
        this.display = true;
        setTimeout(() => {
          this.display = false;
        }, 3000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(../../public/MyFont/iconfont.css);
.side {
  width: 375px;
  height: 1009.6px;
  float: left;
  img {
    height: 100%;
    width: 100%;
  }
}

.center {
  position: relative;
  margin-left: 375px;
  height: 100%;

  .center-header {
    height: 80px;
    width: 100%;
    position: relative;
    .Xiaomi {
      position: absolute;
      left: 20px;
      top: 20px;
      width: 154px;
      height: 40px;

      i {
        font-size: 40px;
        margin-right: 8px;
      }

      span {
        position: relative;
        top: -10px;
        font-size: 24px;
      }

      font-family: "MI Lan Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
        "Noto Color Emoji";
    }

    .other-word {
      width: 355px;
      height: 40px;
      position: absolute;
      right: 10px;
      top: 20px;
      text-align: center;

      span {
        cursor: pointer;
        display: inline-block;
        width: 56px;
        height: 40px;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 14px;
        line-height: 40px;
        color: #838383;
      }

      span:hover {
        color: #ff6700;
      }

      .line {
        width: 1px;
        height: 10px;
        color: #ddd;
      }

      .language {
        width: 86px;
      }
    }
  }

  .center-login {
    position: relative;
    text-align: center;
    height: 641px;
    padding-top: 125px;
    width: 100%;

    .login {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 360px;
      height: 476px;
      padding: 40px 45px 40px 45px;
      margin-bottom: 80px;
      background-color: #fff;
      box-shadow: 0 20px 50px 0 hsl(0deg 0% 64% / 10%);

      .login-header {
        position: relative;
        height: 41px;
        width: 100%;

        font-weight: 530;

        font-size: 22px;
        font-family: "MI Lan Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
          "Noto Color Emoji";

        span:nth-child(1) {
          cursor: pointer;
          position: absolute;
          left: 0px;
          border-bottom: 4px solid #ff6700;
        }

        span:nth-child(2) {
          cursor: pointer;
          position: absolute;
          left: 65px;
          color: #bbbbbb;
        }
      }

      .login_name {
        margin-top: 20px;
        position: relative;
        border: 1px solid #f9f9f9;
        background-color: #f9f9f9;
        input {
          width: 314px;
          height: 20px;
          padding: 30px 20px 10px 20px;
          border: none;
          font-size: 17px;
          background-color: transparent;
          outline: none;
          border-radius: 5px;
        }

        .label_default {
          color: rgba(0, 0, 0, 0.4);

          text-align: left;
          font-size: 17px;
          width: 166px;
          height: 20px;
          font-family: "MI Lan Pro", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
            "Noto Color Emoji";

          position: absolute;
          top: 20px;
          left: 20px;

          transition-duration: 0.3s;
        }

        .label_wrong {
          font-size: 12px;
          position: absolute;
          top: 6px;
          text-align: left;
          color: #ff6700;
        }

        .label_wrong_blur {
          position: absolute;
          top: 20px;
          left: 20px;
          font-size: 17px;
          color: #ff6700;
        }

        .label_true {
          font-size: 12px;
          position: absolute;
          top: 6px;
          text-align: left;
          color: rgba(0, 0, 0, 0.4);
        }

        .label_true_blur {
          font-size: 12px;
          position: absolute;
          top: 6px;
          text-align: left;
          color: rgba(0, 0, 0, 0.4);
        }
      }

      .hint1 {
        width: 356px;
        height: 20px;
        margin-top: 10px;
        font-size: 12px;
        color: #f04645;
        font-family: "MI Lan Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
          "Noto Color Emoji";
        text-align: left;
      }

      .hint2 {
        position: relative;
        width: 356px;
        height: 20px;
        margin-top: 10px;
        font-size: 12px;
        color: #f04645;
        font-family: "MI Lan Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
          "Noto Color Emoji";
        text-align: left;

        span:nth-child(1) {
          position: absolute;
          left: 0px;
        }

        span:nth-child(2) {
          position: absolute;
          left: 0px;
        }
      }

      .login_password {
        margin-top: 20px;
        position: relative;
        border: 1px solid #f9f9f9;
        background-color: #f9f9f9;
        input {
          width: 314px;
          height: 20px;
          padding: 30px 20px 10px 20px;
          border: none;
          font-size: 17px;
          background-color: transparent;
          outline: none;
          border-radius: 5px;
        }

        .label_default {
          color: rgba(0, 0, 0, 0.4);

          text-align: left;
          font-size: 17px;
          width: 166px;
          height: 20px;
          font-family: "MI Lan Pro", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
            "Noto Color Emoji";

          position: absolute;
          top: 20px;
          left: 20px;

          transition-duration: 0.3s;
        }

        .label_wrong {
          font-size: 12px;
          position: absolute;
          top: 6px;
          text-align: left;
          color: #ff6700;
        }

        .label_wrong_blur {
          position: absolute;
          top: 20px;
          left: 20px;
          font-size: 17px;
          color: #ff6700;
          text-align: left;
        }

        .label_true {
          font-size: 12px;
          position: absolute;
          top: 6px;
          text-align: left;
          color: rgba(0, 0, 0, 0.4);
        }

        .label_true_blur {
          font-size: 12px;
          position: absolute;
          top: 6px;
          text-align: left;
          color: rgba(0, 0, 0, 0.4);
        }

        .changeVisible {
          position: absolute;
          top: 0px;
          right: 0px;
          width: 60px;
          height: 60px;
          line-height: 60px;
          text-align: center;

          .iconfont {
            font-size: 20px;
            color: rgba(0, 0, 0, 0.25);
          }
        }
      }

      .input_wrong {
        background-color: #fcf2f3;
        border: 1px solid #ff5c00;
        border-radius: 5px;
        box-shadow: 0 0 1px 1px #ff5c00;
      }

      .input_wrong_blur {
        border: 1px solid #f9f9f9;
        background-color: #fcf2f3;
      }

      .input_true {
        border: 1px solid #ff5c00;
        border-radius: 5px;
      }

      .input_true_blur {
        border: 1px solid #f9f9f9;
      }

      .notification {
        display: none;
        width: 180px;
        height: 41px;
        line-height: 41px;
        text-align: center;
        position: absolute;
        left: 30%;
        background-color: #fff;
        z-index: 10;
        border: 1px solid #dedede;
        border-radius: 3px;
        font-family: "MI Lan Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
          "Noto Color Emoji";
        font-size: 14px;
        color: #343434;
        .iconfont {
          margin-right: 10px;
        }
      }

      .notification_display {
        display: block;
      }

      .confirm {
        position: relative;
        margin-top: 20px;
        width: 356px;
        height: 23px;

        color: #aaaaaa;
        font-size: 14px;
        font-family: "MI Lan Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
          "Noto Color Emoji";
        p {
          color: #333333;
          display: inline-block;
        }

        input {
          position: absolute;
          left: 2px;
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border: 1px solid #c9c9c9;
          border-radius: 5px;
          background-color: #f9f9f9;
        }

        input:checked {
          background: url("../../public/imgs/对号.png") no-repeat center;
          background-color: #ff6900;
        }
      }

      .confirm-login {
        width: 316px;
        height: 60px;
        padding-left: 20px;
        padding-right: 20px;
        margin-top: 20px;
        margin-bottom: 10px;
        background-color: #ffcba9;
        border: 1px solid #ffcba9;
        border-radius: 5px;

        input {
          width: 100%;
          height: 100%;
          background: transparent;
          line-height: 60px;
          font-size: 18px;
          color: #ffffff;
          border: none;
          outline: none;
          pointer-events: none;
        }

        .button-active {
          cursor: pointer;
          pointer-events: auto;
          background: transparent;
        }
      }

      .confirm-login-go {
        background-color: #ff7e29;
      }

      .forget {
        width: 356px;
        height: 25px;
        color: #ff7e29;
        color: 17px;
        font-family: "MI Lan Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
          "Noto Color Emoji";

        position: relative;

        span:nth-child(1) {
          position: absolute;
          top: 0;
          left: 0;
        }

        span:nth-child(2) {
          position: absolute;
          top: 0;
          right: 0;
        }

        span:hover {
          cursor: pointer;
        }
      }

      .other-methods {
        width: 360px;
        height: 40px;
        line-height: 40px;
        font-size: 17px;
        color: #aaaaaa;
      }

      .icons {
        width: 250px;
        height: 51px;
        margin: 20px auto;
        .iconfont {
          cursor: pointer;
          font-size: 46px;
          letter-spacing: 20px;
        }
      }
    }

    .login1 {
      height: 506px;
    }

    .login2 {
      height: 536px;
    }
  }

  .bottom {
    position: absolute;
    bottom: 20px;
    text-align: center;
    height: 17.6px;
    left: 50%;
    transform: translateX(-50%);

    font-size: 12px;
    color: #999999;
  }
}

.center:after {
  content: "";
  display: block;
  clear: both;
}
</style>