<template>
  <div>
    <div class="topbar">
      <div class="container">
        <div class="topbar-navi"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-header",
};
</script>

<style>
.topbar {
  -webkit-text-size-adjust: 100%;
  font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
    Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  position: relative;
  z-index: 30;
  height: 40px;
  font-size: 12px;
  color: #b0b0b0;
  background: #333;
}

.container {
  -webkit-text-size-adjust: 100%;
  font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
    Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  font-size: 12px;
  color: #b0b0b0;
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
}

.topbar-navi {
  -webkit-text-size-adjust: 100%;
  --sr-annote-color-0: #b4d9fb;
  --sr-annote-color-1: #ffeb3b;
  --sr-annote-color-2: #a2e9f2;
  --sr-annote-color-3: #a1e0ff;
  --sr-annote-color-4: #a8ea68;
  --sr-annote-color-5: #ffb7da;
  font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
    Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  font-size: 12px;
  color: #b0b0b0;
  cursor: url("data:image/png;base64,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")
      0 0,
    auto;
  float: left;
  height: 40px;
  line-height: 40px;
}
</style>