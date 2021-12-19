<template>
  <div>
    <div class="product">
      <span class="ItemName">
        {{ name_ }}
      </span>
      <div class="category">
        <div v-if="category_.length == 1" class="category1">
          <div class="learnMore">
            查看更多 <i class="iconfont icon-xiangyou3fill"></i>
          </div>
          <div v-if="itemLists[1] && itemLists[0].length == 1" class="firstRow">
            <LeadingRow
              :src="itemLists[0][0].src"
              :JumpId="itemLists[0][0].JumpId"
              type="big"
            />
          </div>
          <div
            v-else-if="itemLists[1] && itemLists[0].length > 1"
            class="firstRow"
          >
            <LeadingRow
              :src="itemLists[0][0].src"
              :JumpId="itemLists[0][0].JumpId"
              type="middle"
            />
            <LeadingRow
              :src="itemLists[0][1].src"
              :JumpId="itemLists[0][1].JumpId"
              type="middle"
            />
          </div>
          <div class="otherRow">
            <div
              class="singleItem"
              v-for="(item, index) in itemLists[1]"
              :key="index"
            >
              <SingleProduct
                :src="item.src"
                :name="item.name"
                :sketch="item.sketch"
                :price="item.price"
                :oldprice="item.oldprice"
                :type="index > 7 ? 'small' : 'middle'"
                :JumpId="item.JumpId"
              />
            </div>
          </div>
        </div>
        <div
          v-else
          class="category2"
          v-for="(category, index) in category_"
          :key="index"
        >
          <div class="categoryName" @mouseenter="changeFocused(index)">
            {{ category }}
          </div>
          <div v-if="itemLists[1] && itemLists[0][0]" class="categoryItem">
            <div class="firstRow">
              <LeadingRow
                v-if = "!itemLists[0][1]"
                :JumpId="itemLists[0][0].JumpId"
                :src="itemLists[0][0].src"
                type="big"
              />
              <LeadingRow
                v-if = "itemLists[0][1]"
                :JumpId="itemLists[0][0].JumpId"
                :src="itemLists[0][0].src"
                type="middle"
              />
              <LeadingRow
                v-if = "itemLists[0][1]"
                :JumpId="itemLists[0][1].JumpId"
                :src="itemLists[0][1].src"
                type="middle"
              />
            </div>
            <div class="otherRow">
              <div
                class="singleItem"
                v-for="(item, index2) in itemLists[index + 1]"
                :key="index2"
              >
                <SingleProduct
                  v-if="index2 < 7"
                  :JumpId="item.JumpId"
                  :name="item.name"
                  :sketch="item.sketch"
                  :price="item.price"
                  :oldprice="item.oldprice"
                  :src="item.src"
                  type="middle"
                />
                <SingleProduct
                  v-if="index2 == 7"
                  type="small"
                  :name="item.name"
                  :src="item.src"
                  :price="item.price"
                />
              </div>
              <SingleProduct :category="category" type="more" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDimensionalArray } from "../../js/array";
import SingleProduct from "./SingleProduct.vue";
import LeadingRow from "./LeadingRow.vue";
export default {
  data() {
    return {
      url_: this.url,
      name_: this.name,
      category_: this.category,
      itemLists: [],
      order_: this.order,
      morethanone_: this.morethanone,
    };
  },
  props: {
    url: String,
    name: String,
    category: Array,
    order: Number,
    morethanone: Boolean,
  },
  components: {
    SingleProduct,
    LeadingRow,
  },
  computed: {
    categoryLength() {
      return this.category_.length;
    },
  },
  async mounted() {
    //获取数据
    let list = await getDimensionalArray(this.axios, this.url_, this.category_);
    setTimeout(async () => {
      this.itemLists = list;
    }, 800);

    setTimeout(() => {
      if (this.morethanone_ == true) {
        //设置初始颜色
        let item =
          document.getElementsByClassName("categoryName")[
            this.order + this.categoryLength - 1
          ];
        item.className = "categoryName changeColor";
        //设置初始hide状态
        for (let i = this.order_; i < this.order+this.categoryLength-1; i++) {
          item = document.getElementsByClassName("categoryItem")[i];
          item.className = "categoryItem hide"
        }
      }
    }, 800);
  },
  methods: {
    changeFocused(index) {
      index = index+this.order_
      //index：当前移入元素是第几-1个categoryItem
      let item;
      for (let i = this.order_; i < this.order_+this.categoryLength; i++) {
        item = document.getElementsByClassName("categoryItem")[i];
        if (i == index) {
          //当前移入的元素
          //则不应该有hide
          if (item.className.search("hide") > 0) {
            item.className = "categoryItem";
          }
          //移入的元素应该变色
          item = document.getElementsByClassName("categoryName")[i];
          item.className = "categoryName changeColor";
        } else {
          //当前没有移入的元素
          //则应该有hide
          if (item.className.search("hide") < 0) {
            item.className += " hide";
          }
          //没有移入的元素不应该变色
          item = document.getElementsByClassName("categoryName")[i];
          item.className = "categoryName";
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  width: 1226px;
  height: 672px;
  margin-top: 70px;
  margin-left: auto;
  margin-right: auto;

  position: relative;

  .ItemName {
    position: absolute;
    top: 0;
    font-family: "Helvetica Neue";
    font-weight: 200;
    font-size: 22px;
    color: #333;
  }

  .category {
    .category1 {
      position: relative;
      .learnMore {
        float: right;
        cursor: pointer;
        .icon-xiangyou3fill {
          font-family: "Helvetica Neue";
          color: #b0b0b0;
          font-size: 20px;
        }
        &:hover {
          color: #ff6700;
          transition-duration: 0.4s;

          .icon-xiangyou3fill {
            color: #ff6700;
            transition-duration: 0.4s;
          }
        }
      }
      .firstRow {
        position: absolute;
        top: 40px;
        width: 234px;
        height: 614px;
      }
      .otherRow {
        position: absolute;
        top: 40px;
        right: 0px;
        width: 992px;
        height: 614px;
      }
    }

    .category2 {
      position: relative;
      .categoryName {
        float: right;
        margin-left: 30px;
        cursor: pointer;
        border: none;

        font-size: 16px;
        color: #424242;
      }

      .categoryItem {
        position: absolute;
        top: 40px;
        width: 1226px;
        height: 628px;

        .firstRow {
          float: left;
          width: 234px;
          height: 624px;
        }

        .otherRow {
          float: left;
          width: 990px;
          height: 648px;
        }
      }
    }
  }
}

.hide {
  display: none !important;
}

.changeColor {
  color: #ff6700 !important;
  border-bottom: 2px solid #ff6700 !important;
}
</style>