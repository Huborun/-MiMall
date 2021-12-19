<template>
  <div id="root">
    <div class="header">
      <span>视频</span>
      <div class="more">
        <span>查看全部</span><i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
    <div class="body">
      <div class="video" @click="changeDisplay1(1)">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e74c4ff741bcdfc5b28a48a43e4edc6d.jpg?thumb=1&w=370&h=225&f=webp&q=90"
        />
        <i class="iconfont icon-bofang"></i>
        <div class="text">2021年春季新品发布会第一场</div>
      </div>
      <div class="video" @click="changeDisplay1(2)">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg?thumb=1&w=370&h=225&f=webp&q=90"
        />
        <i class="iconfont icon-bofang"></i>
        <div class="text">Redmi 10X系列发布会</div>
      </div>
      <div class="video" @click="changeDisplay1(3)">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96563e75833ba4563bd469dd28203b09.jpg?thumb=1&w=370&h=225&f=webp&q=90"
        />
        <i class="iconfont icon-bofang"></i>
        <div class="text">小米10 青春版 发布会</div>
      </div>
      <div class="video" @click="changeDisplay1(4)">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fd26bb99b723337a2f8eaba84f7d5bb.jpg?thumb=1&w=370&h=225&f=webp&q=90"
        />
        <i class="iconfont icon-bofang"></i>
        <div class="text">小米10 8K手机拍大片</div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="show1" class="videos">
        <div class="containerOuter"></div>
        <div class="containerInner">
          <div class="text2">
            &nbsp;&nbsp;&nbsp;&nbsp;2021年春季新品发布会第一场
          </div>
          <div class="cancel" @click="changeDisplay2(1)">
            <i class="iconfont icon-quxiao"></i>
          </div>
          <div class="video">
            <video controls autoplay>
              <source
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812358b69886e576c66a01f1f00affe9.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="show2" class="videos">
        <div class="containerOuter"></div>
        <div class="containerInner">
          <div class="text2">&nbsp;&nbsp;&nbsp;&nbsp;Redmi 10X系列发布会</div>
          <div class="cancel" @click="changeDisplay2(2)">
            <i class="iconfont icon-quxiao"></i>
          </div>
          <div class="video">
            <video controls autoplay>
              <source
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="show3" class="videos">
        <div class="containerOuter"></div>
        <div class="containerInner">
          <div class="text2">&nbsp;&nbsp;&nbsp;&nbsp;小米10 青春版 发布会</div>
          <div class="cancel" @click="changeDisplay2(3)">
            <i class="iconfont icon-quxiao"></i>
          </div>
          <div class="video">
            <video controls autoplay>
              <source
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="show4" class="videos">
        <div class="containerOuter"></div>
        <div class="containerInner">
          <div class="text2">&nbsp;&nbsp;&nbsp;&nbsp;小米10 8K手机拍大片</div>
          <div class="cancel" @click="changeDisplay2(4)">
            <i class="iconfont icon-quxiao"></i>
          </div>
          <div class="video">
            <video controls autoplay>
              <source
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
    };
  },
  methods: {
    changeDisplay1(index) {
      switch (index) {
        case 1:
          {
            this.show1 = true;
          }
          break;
        case 2:
          {
            this.show2 = true;
          }
          break;
        case 3:
          {
            this.show3 = true;
          }
          break;
        case 4:
          {
            this.show4 = true;
          }
          break;
      }
    },
    changeDisplay2(index) {
      switch (index) {
        case 1:
          {
            this.show1 = false;
          }
          break;
        case 2:
          {
            this.show2 = false;
          }
          break;
        case 3:
          {
            this.show3 = false;
          }
          break;
        case 4:
          {
            this.show4 = false;
          }
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 1226px;
  height: 58px;
  margin: 0 auto;
  line-height: 58px;

  span {
    font-size: 22px;
    font-family: Helvetica Neue;
    font-weight: 200;
  }

  .more {
    position: absolute;
    right: 0;
    top: 0;
    width: 92px;
    height: 58px;
    cursor: pointer;
    span {
      position: absolute;
      right: 28px;
      top: 0px;
      font-size: 16px;
      color: #424242;
      font-weight: 400;
      font-family: Helvetica Neue;
    }
    .iconfont {
      position: absolute;
      font-size: 20px;
      right: 2px;
      top: 0px;
      color: #b0b0b0;
    }

    &:hover {
      span {
        color: #ff6700;
        transition-duration: 0.3s;
      }
      .iconfont {
        color: #ff6700;
        transition-duration: 0.3s;
      }
    }
  }
}

.body {
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  width: 1226px;
  height: 299px;
  display: flex;
  flex-direction: row;

  .video {
    position: relative;
    width: 296px;
    height: 285px;
    background-color: #fff;
    transition-duration: 0.5s;
    img {
      width: 296px;
      height: 180px;
    }

    .text {
      margin-top: 30px;
      text-align: center;
      color: #333333;
      font-size: 14px;
      font-family: "Helvetica Neue";
    }

    .iconfont {
      position: absolute;
      top: 135px;
      left: 25px;
      color: #fff;
      font-size: 30px;
      font-weight: 700;
    }

    &:hover {
      top: -10px;
      box-shadow: 3px 3px 5px #888888;
      .iconfont {
        color: #ff6700;
      }
    }
  }

  .video:nth-child(n + 2) {
    margin-left: 14px;
  }
}
#root {
  padding-bottom: 15px;
}
.videos {
  .containerOuter {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #2a2e33;
    z-index: 100;
    opacity: 0.2;
  }
  .containerInner {
    z-index: 101;
    width: 880px;
    height: 555px;
    position: fixed;
    top: 23%;
    left: 29%;
    background-color: #2a2e33;
    .text2 {
      width: 880px;
      height: 60px;
      background-color: #fff;
      font-size: 18px;
      line-height: 60px;
      color: #424242;
      text-align: left;
      opacity: 1;
    }

    .cancel {
      position: absolute;
      right: 20px;
      top: 14px;
      cursor: pointer;

      .iconfont {
        font-size: 24px;
        color: #757575;
        transition-duration: 0.5s;

        &:hover {
          color: #e53935;
        }
      }
    }

    .video {
      width: 880px;
      height: 495px;

      video {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>