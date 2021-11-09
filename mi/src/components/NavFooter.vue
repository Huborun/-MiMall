<template>
  <div>
    <div class="footer">
      <div class="footer-service">
        <div class="service first-href">
          <a href="javascript:;"
            ><i class="iconfont icon-editor2"></i>预约维修服务</a
          >
        </div>
        <div class="service">
          <a href="javascript:;"
            ><i class="iconfont icon-7tianbaotui"></i>天无理由退货</a
          >
        </div>
        <div class="service">
          <a href="javascript:;"
            ><i class="iconfont icon-15tianbaotui01"></i>15天免费换货</a
          >
        </div>
        <div class="service">
          <a href="javascript:;"
            ><i class="iconfont icon-liwuhuodong"></i>满69包邮</a
          >
        </div>
        <div class="service">
          <a href="javascript:;"
            ><i class="iconfont icon-weizhi"></i>520余家售后网点</a
          >
        </div>
      </div>
      <div class="footer-links">
        <div class="footer-links-items">
          <dl>
            <dt>帮助中心</dt>
            <dd><a href="javascript:;">账户管理</a></dd>
            <dd><a href="javascript:;">购物指南</a></dd>
            <dd><a href="javascript:;">订单操作</a></dd>
          </dl>

          <dl>
            <dt>服务支持</dt>
            <dd><a href="javascript:;">售后政策</a></dd>
            <dd><a href="javascript:;">自助服务</a></dd>
            <dd><a href="javascript:;">相关下载</a></dd>
          </dl>
          <dl>
            <dt>线下门店</dt>
            <dd><a href="javascript:;">小米之家</a></dd>
            <dd><a href="javascript:;">服务网点</a></dd>
            <dd><a href="javascript:;">授权体验店/专区</a></dd>
          </dl>
          <dl>
            <dt>关于小米</dt>
            <dd><a href="javascript:;">了解小米</a></dd>
            <dd><a href="javascript:;">加入小米</a></dd>
            <dd><a href="javascript:;">投资者关系</a></dd>
            <dd><a href="javascript:;">企业社会责任</a></dd>
            <dd><a href="javascript:;">廉洁举报</a></dd>
          </dl>
          <dl>
            <dt>关注我们</dt>
            <dd><a href="javascript:;">新浪微博</a></dd>
            <dd><a href="javascript:;">官方微信</a></dd>
            <dd><a href="javascript:;">联系我们</a></dd>
            <dd><a href="javascript:;">公益基金会</a></dd>
          </dl>
          <dl>
            <dt>特色服务</dt>
            <dd><a href="javascript:;">F 码通道</a></dd>
            <dd><a href="javascript:;">礼物码</a></dd>
            <dd><a href="javascript:;">防伪查询</a></dd>
          </dl>
        <div class="item-right">
            <div class="concat">400-100-5678</div>
            <div class="concat-message">8:00-18:00（仅收市话费）</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-footer",
};
</script>

<style lang="scss" scoped>
@import url(../../public/MyFont/iconfont.css);
.footer {
  // position: absolute;
  // bottom: 0;

  width: 100%;
  .footer-service {
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 1226px;
    height: 80px;
    border-bottom: 1px solid #e0e0e0;
    .service {
      float: left;
      width: 19.8%;
      height: 25px;
      text-align: center;
      border-left: 1px solid #e0e0e0;

      a {
        font-size: 16px;
        vertical-align: middle;
      }

      i {
        margin-right: 6px;
        font-size: 24px;
        vertical-align: middle;
      }

      :hover {
        color: #ff6700;
      }
    }

    .first-href {
      border: none;
    }
  }

  .footer-links {
    .footer-links-items {
      position: relative;
      margin: 0 auto;
      padding-top: 40px;
      padding-bottom: 40px;
      width: 1226px;
      height: 169.9px;
      display: flex;
      align-items: center;

      dl {
        margin-top:-50px;
        width: 160px;
        height: 114.6px;

        dt {
          width: 160px;
          height: 16.8px;
          color: #424242;
          font-size: 14px;
          margin-bottom: 16px;
          margin-top:-1px;
        }

        dd {
          width: 160px;
          height: 17.6px;
          margin-top: 10px;
          a {
            font-size: 12px;
            &:hover {
              color: #ff6700;
            }
          }
        }
      }

      .item-right {
        width: 251px;
        height: 110.2px;
        border-left: 1px solid #e0e0e0;
        position: absolute;
        right: 0;

        .concat {
          text-align: center;
          font-size: 22px;
          color: #ff6700;
        }

        .concat-message {
          text-align: center;
          font-size: 12px;
          color: #616161;
        }
      }
    }
  }
}

a {
  background-color: rgba(0, 0, 0, 0);
  text-decoration: none;
  color: #616161;
  line-height: 40px;
  display: inline-block;
  font-size: 16px;
}

.img1 {
  width: 24px;
  height: 24px;
  border: 1px solid black;
}
</style>
