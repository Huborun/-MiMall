<template>
  <div>
    <div class="hintAddressContainer">
      <div class="adderssHint">
        <span>{{ name }}</span>
        <span>{{ phone }}</span>
        <span>{{ region }}</span>
        <span>{{ address }}</span>
        <div class="selectAddress" @click="setAddress">选择该收货地址</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      region: "",
      address: "",
      active: true,
    };
  },
  methods: {
    setAddress() {
      this.$bus.$emit("setFirstAddress");
      this.active = false;

      let timer = setInterval(() => {
        document.documentElement.scrollTop =
          document.documentElement.scrollTop - 30;

        if (document.documentElement.scrollTop <= 0) {
          clearInterval(timer);
        }
      }, 10);

      document.getElementsByClassName("hintAddressContainer")[0].style.display =
        "none";
    },
  },
  async mounted() {
    //接收信息，此时用户已选择地址
    this.$bus.$on("changeActive", () => {
      this.active = false;
    });

    let url = `${this.CURL}users/address?userid=${this.$cookie.get("userId")}`;
    let result = await this.axios.get(url);
    let data = result.data.msg[0];
    this.name = data.username;
    this.phone = data.phone.slice(0, 3) + "****" + data.phone.slice(7);
    this.region = data.region;
    this.address = data.address;
    let _this = this;
    window.onmousewheel = document.onmousewheel = function () {
      if (document.documentElement && document.documentElement.scrollTop) {
        let t = document.documentElement.scrollTop;
        if (
          t > 330 &&
          _this.active &&
          document.getElementsByClassName("hintAddressContainer")[0]
        ) {
          document.getElementsByClassName(
            "hintAddressContainer"
          )[0].style.display = "block";
        } else if (document.getElementsByClassName("hintAddressContainer")[0]) {
          document.getElementsByClassName(
            "hintAddressContainer"
          )[0].style.display = "none";
        }
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.hintAddressContainer {
  width: 99vw;
  height: 71px;
  border-top: 1px solid #e0e0e0;
  position: fixed;
  top: 0px;
  left: 0;
  background-color: #ffffff;
  box-shadow: 0 3px 6px rgb(0 0 0 / 10%);

  display: none;

  .adderssHint {
    width: 1226px;
    height: 71px;
    line-height: 71px;
    margin: 0 auto;
    position: relative;

    span {
      font-size: 14px;
      font-family: "Helvetica Neue";
      color: #757575;
    }

    span:nth-child(1) {
      margin-right: 18px;
    }

    span:nth-child(2) {
      margin-right: 18px;
    }

    span:nth-child(3) {
      margin-right: 5px;
    }

    .selectAddress {
      width: 160px;
      height: 40px;
      cursor: pointer;

      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      text-align: center;
      line-height: 40px;
      background-color: #ff6700;

      color: #fff;
      font-size: 14px;
      font-family: "Helvetica Neue";

      &:hover {
        background-color: #f25807;
      }
    }
  }
}
</style>