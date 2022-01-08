<template>
  <div>
    <div class="product">
      <span class="ItemName">
        {{ name_ }}
      </span>
      <div class="category">
        <div v-if="categoryList.length == 1" class="category1">
          <div class="learnMore">
            查看更多 <i class="iconfont icon-xiangyou3fill"></i>
          </div>
          <div v-if="itemLists[1] && itemLists[0].length == 1" class="firstRow">
            <LeadingRow
              :src="itemLists[0][0].src"
              :showid="itemLists[0][0].showid"
              type="big"
            />
          </div>
          <div
            v-else-if="itemLists[1] && itemLists[0].length > 1"
            class="firstRow"
          >
            <LeadingRow
              :src="itemLists[0][0].src"
              :showid="itemLists[0][0].showid"
              type="middle"
            />
            <LeadingRow
              :src="itemLists[0][1].src"
              :showid="itemLists[0][1].showid"
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
                :showid="item.showid"
              />
            </div>
          </div>
        </div>
        <div v-else class="category2">
          <div class="firstRow" v-if="itemLists[0] && itemLists[0].length > 0">
            <LeadingRow
              v-if="!itemLists[0][1]"
              :showid="itemLists[0][0].showid"
              :src="itemLists[0][0].src"
              type="big"
            />
            <LeadingRow
              v-if="itemLists[0][1]"
              :showid="itemLists[0][0].showid"
              :src="itemLists[0][0].src"
              type="middle"
            />
            <LeadingRow
              v-if="itemLists[0][1]"
              :showid="itemLists[0][1].showid"
              :src="itemLists[0][1].src"
              type="middle"
            />
          </div>
          <div
            class="otherCotainer"
            v-for="(category, index) in categoryList"
            :key="index"
          >
            <div class="categoryName" @mouseenter="changeFocused(index)">
              {{ category }}
            </div>
            <div v-if="itemLists[1] && itemLists[0][0]" class="categoryItem">
              <div class="otherRow">
                <div
                  class="singleItem"
                  v-for="(item, index2) in itemLists[index + 1]"
                  :key="index2"
                >
                  <SingleProduct
                    v-if="item.issmall == 0"
                    :showid="item.showid"
                    :name="item.name"
                    :sketch="item.sketch"
                    :price="item.price"
                    :oldprice="item.oldprice"
                    :src="item.src"
                    type="middle"
                  />
                  <SingleProduct
                    v-if="item.issmall == 1"
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
  </div>
</template>

<script>
// import { getDimensionalArray } from "../../js/array";
import SingleProduct from "./SingleProduct.vue";
import LeadingRow from "./LeadingRow.vue";
export default {
  data() {
    return {
      url_: this.url,
      name_: this.name,
      itemLists: [],
      categoryList: [],
      order_: this.order,
    };
  },
  props: {
    url: String,
    name: String,
    order: Number,
  },
  components: {
    SingleProduct,
    LeadingRow,
  },
  async mounted() {
    //目的：根据url，判断是否有多列
    let result = await this.axios.get(this.url);
    let CategoryList = [];
    let array = result.data.msg;
    //此Project第一列的图像
    let firstRow = [];

    array.forEach((item) => {
      if (item.category) {
        //新的category
        if (CategoryList.indexOf(item.category) == -1) {
          //这表示新的category
          CategoryList.push(item.category);
        }
      }

      //设置公共的第一列
      if (item.firstrow == 1) {
        firstRow.push(item);
      }
    });

    this.categoryList = CategoryList;

    //itemList：存放数据库中获取的所有item
    let itemList = new Array(CategoryList.length + 1);
    for (let i = 1; i < itemList.length; i++) {
      //初始化为元素是数组的数组
      itemList[i] = new Array();
    }
    itemList[0] = firstRow;
    CategoryList.forEach((cate, index) => {
      array.forEach((arr) => {
        if (arr.category == cate) {
          itemList[index + 1].push(arr);
        }
      });
    });
    this.itemLists = itemList;
    // console.log(itemList);

    setTimeout(() => {
      if (this.categoryList.length > 1) {
        //设置初始颜色
        let item =
          document.getElementsByClassName("categoryName")[
            this.order + this.categoryList.length - 1
          ];
        if (item.className) {
          item.className = "categoryName changeColor";
          //设置初始hide状态
          for (
            let i = this.order_;
            i < this.order + this.categoryList.length - 1;
            i++
          ) {
            item = document.getElementsByClassName("categoryItem")[i];
            item.className = "categoryItem hide";
          }
        }
      }
    }, 300);
  },
  methods: {
    changeFocused(index) {
      //this.order_：判断当前是哪一个OtherProduct

      index = index + this.order_;
      //index：当前移入元素是第几-1个categoryItem
      let item;
      for (
        let i = this.order_;
        i < this.order_ + this.categoryList.length;
        i++
      ) {
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
      .firstRow {
        position: absolute;
        left: 0px;
        top: 40px;
        width: 234px;
        height: 624px;
      }

      .otherCotainer {
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

          .otherRow {
            position: absolute;
            right: 0px;
            width: 990px;
            height: 648px;
          }
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