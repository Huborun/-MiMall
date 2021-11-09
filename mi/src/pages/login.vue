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
        </div>
      </div>
      <div class="bottom">
        小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
      position: absolute;
      // right:100px;
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