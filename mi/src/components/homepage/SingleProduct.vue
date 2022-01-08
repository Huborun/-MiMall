<template>
  <div>
    <div v-if="type_ == 'middle'" class="middle">
      <a v-if="JumpId_" :href="'/#/product/' + JumpId_">
        <img v-lazy="src_" />
        <div class="item-name">{{ name_ }}</div>
        <div class="item-sketch">{{ sketch_ }}</div>
        <div v-if="!oldprice_" class="item-price">
          {{ price_ }}元
        </div>
        <div v-else class="item-price2">
          {{ price_ }}元
          <span class="item-oldPirce">{{ oldprice_ }}元</span>
        </div>
      </a>
      <a v-else href="javascript:;">
        <img v-lazy="src_" />
        <div class="item-name">{{ name_ }}</div>
        <div class="item-sketch">{{ sketch_ }}</div>
        <div v-if="!oldprice_" class="item-price">
          {{ price_ }}元
        </div>
        <div v-else class="item-price2">
          {{ price_ }}元
          <span class="item-oldPirce">{{ oldprice_ }}元</span>
        </div>
      </a>
    </div>
    <div v-if="type_ == 'small'" class="small">
      <img v-lazy="src_" />
      <div class="itemText">
        <div class="itemName">{{ name_ }}</div>
        <div class="itemPrice">{{ price_ }}元</div>
      </div>
    </div>
    <div v-if="type_ == 'more'" class="more">
      <div class="text">
        <p>浏览更多</p>
        <p>{{ category_ }}</p>
      </div>
      <div class="font">
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      JumpId_: this.showid,
      name_: this.name,
      sketch_: this.sketch,
      price_: this.price,
      oldprice_: this.oldprice,
      type_: this.type,
      src_: this.src,
      category_: this.category,
    };
  },
  props: [
    "showid",
    "name",
    "sketch",
    "price",
    "oldprice",
    "type",
    "src",
    "category",
  ],
  methods: {},
};
</script>

<style lang="scss" scoped>
.middle {
  a {
    display: block;
    float: left;
    width: 234px;
    height: 260px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 13px;
    margin-bottom: 11px;
    text-decoration: none;
    background-color: #fff;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    .item-name {
      width: 214px;
      height: 20.8px;
      font-size: 14px;
      margin: 20px 10px 2px 10px;
      font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
        Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
      color: #333333;
    }

    .item-sketch {
      font-size: 12px;
      margin: 0 10px 10px 10px;
      color: #b0b0b0;
    }

    .item-price {
      font-size: 14px;
      color: #ff6700;
      font-family: Helvetica;
    }

    .item-price2 {
      font-size: 14px;
      color: #ff6700;
      font-family: Helvetica;
      .item-oldPirce {
        margin-left: 5px;
        color: #b0b0b0;
        text-decoration: line-through;
        font-family: Helvetica;
      }
    }

    &:hover {
      position: relative;
      top: -3px;
      box-shadow: 5px 5px 5px #e8e8e8;
      transition-duration: 0.5s;
    }
  }
}
.small {
  cursor: pointer;
  position: relative;
  float: left;
  width: 234px;
  height: 148px;
  margin-left: 13px;
  margin-bottom: 11px;
  background-color: #fff;

  .itemText {
    position: absolute;
    top: 30%;
    left: 15%;
    width: 94px;

    .itemName {
      font-size: 14px;
      color: #333333;
    }
    .itemPrice {
      color: #ff6700;
      font-size: 14px;
    }
  }

  img {
    position: absolute;
    right: 8%;
    top: 25%;
    width: 80px;
    height: 80px;
  }

  &:hover {
    position: relative;
    top: -3px;
    box-shadow: 5px 5px 5px #e8e8e8;
    transition-duration: 0.5s;
  }
}
.more {
  cursor: pointer;
  float: left;
  width: 234px;
  height: 143px;
  margin-left: 13px;
  background-color: #fff;
  position: relative;

  .text {
    position: absolute;
    top: 40%;
    left: 10%;
    p:nth-child(1) {
      font-size: 18px;
    }
    p:nth-child(2) {
      font-size: 12px;
      color: #757575;
    }
  }

  .font {
    position: absolute;
    top: 35%;
    right: 15%;
    i {
      font-size: 48px;
      color: #ff6700;
      font-weight: 600;
    }
  }
  &:hover {
    position: relative;
    top: -3px;
    box-shadow: 5px 5px 5px #e8e8e8;
    transition-duration: 0.5s;
  }
}
</style>