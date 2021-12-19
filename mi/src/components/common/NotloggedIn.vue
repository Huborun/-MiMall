<template>
  <div>
    <div v-if="show" class="alert">
      <span>为方便您购买，请提前登录</span>
      <span @click="goToLogin">立即登录</span>
      <i class="iconfont icon-cuowuguanbiquxiao" @click="changeShow"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
      changeShow(){
          this.show = false;
      }, 
      goToLogin(){
          this.$router.push("/login")
      }
  },
  mounted() {
    setTimeout(() => {
      if (this.$cookie.get("userId")) {
        this.show = false;
      }else{
        this.show = true;
      }
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
.alert{
    width: 99vw;
    height: 48px;
    text-align: center;
    line-height: 48px;
    background-color: #F7F7F7;
    box-shadow: 1px -1px 2px #888888;
    border-top:1px solid #e0e0e0;
    span{
        font-size: 14px;
        font-family: "Helvetica Neue";
    }

    span:nth-child(1){
        color:#333333;

    }

    span:nth-child(2){
        cursor: pointer;
        padding-left: 20px;
        color: #ff6700;
    }

    .iconfont{
        cursor: pointer;
        padding-left:10px;
    }
}
</style>