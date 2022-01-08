<template>
  <div>
    <div id="addressContainer">
      <div class="address">
        <div class="header">
          <p>添加收货地址</p>
          <div class="icon">
            <i class="iconfont icon-cuohao" @click="changeDisplay"></i>
          </div>
        </div>
        <div class="body">
          <div class="name">
            <InputLabel
              :width="269"
              :height="18"
              :beforefixing="userName"
              warning0="请输入收货人姓名"
              warning1="收货人姓名不正确（英文、汉字）或未输入"
              warning2="收货人姓名，最少2个最多20个英文或汉字"
              name="姓名"
              :index="0"
              @getInput="getInput"
              ref="name"
            />
          </div>
          <div class="phone">
            <InputLabel
              :width="269"
              :height="18"
              :beforefixing="phone"
              warning0="请输入收货人手机号"
              warning1="请输入正确的手机号码"
              name="手机号"
              :index="1"
              @getInput="getInput"
              ref="phone"
            />
          </div>
          <div class="address1">
            <div
              class="showAddress"
              v-if="!showAreaChose"
              @click="showArea"
              @getInput="getInput"
            >
              <div class="addressWarning" v-if="showWarningAdd">
                <p>请选择区域</p>
                <span id="triangle"></span>
              </div>
              <p v-if="region != ''">{{ region }}</p>
              <p v-else>选择省 / 市 / 区 / 县</p>
            </div>
            <div v-else>
              <AreaChose
                name="选择省市区"
                @getInput="getInput"
                @getAddress="getAddress"
                ref="region"
              />
            </div>
          </div>
          <div class="address2">
            <InputLabel
              :width="586"
              :height="48"
              name="详细地址"
              :index="2"
              placeholder="详细地址，路名或街道名称，门牌号"
              :beforefixing="address"
              warning0="请输入详细地址"
              warning1="详细地址长度不对，最小为5个字，最大32个字"
              @getInput="getInput"
              ref="address"
            />
          </div>
          <div class="label">
            <InputLabel
              :width="586"
              :height="18"
              name="地址标签"
              :index="3"
              :beforefixing="remarks"
              placeholder="如“家”、“公司”，5个字以内"
              @getInput="getInput"
            />
          </div>
        </div>
        <div class="bottom">
          <div class="confirm" @click="confirm">确定</div>
          <div class="cancel" @click="changeDisplay">取消</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputLabel from "../common/InputLabel";
import AreaChose from "./AreaChose";
export default {
  data() {
    return {
      showAreaChose: false,
      userName: "",
      phone: "",
      region: "",
      address: "",
      remarks: "",
      showWarningAdd: false,
      isChange: false,
      id: 0,
      allReady: true,
    };
  },
  methods: {
    getAddress(province, city, country) {
      this.region = `${province} ${city} ${country}`;
      this.showAreaChose = false;
    },
    showArea() {
      this.showAreaChose = true;
    },
    notReady() {
      this.allReady = false;
    },
    ready() {
      this.allReady = true;
    },
    isMeet() {
      if(this.allReady == false) {
        //这是给修改且删除输入准备的
        this.$refs.name.showWarnings();
        this.$refs.phone.showWarnings();
        this.$refs.address.showWarnings();
      }
      //判断是否都选中了
      if (this.userName == "") {
        //userName没有写
        this.$refs.name.showWarnings();
        return false;
      } else {
        //发送过来的数据，都是合格的数据
        if (this.phone == "") {
          this.$refs.phone.showWarnings();
          return false;
        } else {
          if (this.region == "") {
            this.showWarningAdd = true;
            return false;
          } else {
            this.showWarningAdd = false;
            if (this.address == "") {
              this.$refs.address.showWarnings();
              return false;
            } else {
              return true;
            }
          }
        }
      }
    },
    confirm() {
      if (this.isChange == true) {
        //修改
        if (this.isMeet() == true && this.allReady) {
          //输入正确
          //可以提交
          //发送put请求
          let url = `${this.CURL}users/address`;
          this.axios({
            method: "put",
            url,
            data: {
              region: this.region,
              address: this.address,
              username: this.userName,
              phone: this.phone,
              remarks: this.remarks,
              id: this.id,
            },
          });
          this.changeDisplay();
          location.reload();
        }
      } else {
        //增加
        if (this.isMeet() == true && this.allReady) {
          //可以增加
          //发送Post请求
          let url = `${this.CURL}users/address`;
          this.axios({
            method: "post",
            url,
            data: {
              userid: this.$cookie.get("userId"),
              region: this.region,
              address: this.address,
              username: this.userName,
              phone: this.phone,
              remarks: this.remarks,
            },
          });
          this.changeDisplay();
          location.reload();
        }
      }
    },
    changeDisplay() {
      this.$parent.changeAddressInput();
    },
    getInput(input, from) {
      switch (from) {
        case "姓名":
          this.userName = input;
          break;
        case "手机号":
          this.phone = input;
          break;
        case "选择省市区":
          this.region = input;
          break;
        case "详细地址":
          this.address = input;
          break;
        case "地址标签":
          this.remarks = input;
          break;
      }
    },
    async changeAddress(id) {
      this.id = id;
      let url = `${this.CURL}users/address?id=${id}`;
      let result = await this.axios.get(url);
      let data = result.data.msg[0];
      this.userName = data.username;
      this.phone = data.phone;
      this.region = data.region;
      this.address = data.address;
      this.remarks = data.remarks;

      //修改
      this.isChange = true;
    },
  },
  mounted() {
    //设置高度
    document.getElementById("addressContainer").style.height =
      document.body.clientHeight + "px";
  },
  components: {
    InputLabel,
    AreaChose,
  },
};
</script>

<style lang="scss" scoped>
#addressContainer {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #7b7b7b;
  width: 99vw;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);

  .address {
    width: 660px;
    height: 432px;
    background-color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .header {
      width: 620px;
      height: 32px;
      padding: 14px 20px 14px 20px;
      background-color: #f5f5f5;
      line-height: 32px;

      p {
        font-size: 18px;
        color: #424242;
        font-family: "Helvetica Neue";
      }

      .icon {
        cursor: pointer;
        position: absolute;
        right: 18px;
        top: 15px;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        background-color: #f5f5f5;
        &:hover {
          background-color: #e53935;

          .iconfont {
            color: #fff;
          }
        }

        .iconfont {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 15px;
          font-weight: 900;
          color: #757575;
        }
      }
    }

    .body {
      width: 620px;
      height: 250px;
      padding: 20px 20px 20px 20px;
      position: relative;

      .name {
        position: absolute;
        top: 10px;
        left: 20px;
        width: 304px;
        height: 40px;
      }

      .phone {
        position: absolute;
        top: 10px;
        right: 20px;
        width: 304px;
        height: 40px;
      }

      .address1 {
        width: 620px;
        height: 40px;
        position: absolute;
        top: 70px;

        .showAddress {
          cursor: text;
          width: 568px;
          height: 18px;
          padding: 10px 16px 10px 16px;
          border: 1px solid #e0e0e0;
          position: relative;

          .addressWarning {
            position: absolute;
            background-color: #e53935;
            height: 30px;
            line-height: 30px;
            padding-left: 20px;
            padding-right: 20px;
            top: -25px;
            left: 10px;

            box-shadow: 2px 0px 5px #999;

            p {
              font-size: 10px;
              font-family: "Helvetica Neue";
              color: #fff;
            }

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

          p {
            font-size: 14px;
            font-family: "Helvetica Neue";
            color: #757575;
          }

          &:hover {
            border: 1px solid #d7d7d7;
          }
        }
      }

      .address2 {
        width: 620px;
        height: 70px;
        position: absolute;
        top: 130px;
      }

      .label {
        width: 720px;
        height: 40px;
        position: absolute;
        bottom: 20px;
      }
    }

    .bottom {
      width: 660px;
      height: 40px;
      padding-top: 20px;
      padding-bottom: 20px;
      border-top: 1px solid #e0e0e0;
      background-color: #f5f5f5;
      display: flex;
      justify-content: center;
      color: #fff;
      font-size: 14px;
      font-family: "Helvetica Neue";
      line-height: 40px;
      text-align: center;

      .confirm {
        width: 158px;
        height: 38px;
        border: 1px solid #b0b0b0;
        margin-left: 7px;
        margin-right: 7px;
        background-color: #ff6700;
        cursor: pointer;

        &:hover {
          background-color: #f25807;
        }
      }

      .cancel {
        width: 158px;
        height: 38px;
        border: 1px solid #b0b0b0;
        background-color: #b0b0b0;
        margin-left: 7px;
        margin-right: 7px;
        cursor: pointer;

        &:hover {
          background-color: #757575;
        }
      }
    }
  }
}
</style>