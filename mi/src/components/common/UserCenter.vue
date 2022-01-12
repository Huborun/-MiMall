<template>
    <span
      class="user-name"
      @mouseenter="showUserTrue"
      @mouseleave="showUserFalse"
      ><p>{{ $store.state.userName }}</p>
      <i class="iconfont icon-xiangxia"></i>
      <div class="showDetails" v-if="showUser">
        <a href="javascript:;">个人中心</a>
        <a href="javascript:;">评价晒单</a>
        <a href="javascript:;">我的喜欢</a>
        <a href="javascript:;">小米账户</a>
        <a href="/index" @click="quit">退出登录</a>
      </div>
    </span>
</template>

<script>
export default {
  data() {
    return {
      showUser: false,
    };
  },
  methods: {
    showUserFalse() {
      this.showUser = false;
    },
    showUserTrue() {
      this.showUser = true;
    },
    quit() {
      //退出时删除cookie
      this.$cookie.delete("userId");
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.user-name {
  cursor: pointer;
  text-align: center;
  display: inline-block;
  width: 100px;
  height: 40px;
  line-height: 40px;

  position: relative;

  p {
    display: inline-block;
    font-family: Helvetica Neue;
    font-size: 12px;
    color: #b0b0b0;
    &:hover {
      color: #ff6700;
    }
  }
  .iconfont {
    font-size: 12px;
    position: absolute;
    right: 2px;
    top: 0px;
    color: #b0b0b0;
    &:hover {
      color: #ff6700;
    }
  }

  &:hover {
    transition-duration: 0.3s;
    background-color: #fff;
    p {
      color: #ff6700;
    }
    .iconfont {
      color: #ff6700;
    }
  }

  .showDetails {
    position: absolute;
    top: 40px;
    width: 100px;
    font-size: 12px;
    background-color: #fff;
    z-index: 120;
    box-shadow: 2px 2px 5px #888888;

    a {
      display: block;
      width: 50px;
      height: 24px;
      padding: 3px 25px 3px 25px;
      line-height: 24px;
      font-family: Helvetica Neue;
      color: #424242;
    }

    a:hover {
      background-color: #f5f5f5;
      color: #ff6700;
    }
  }
}
</style>
