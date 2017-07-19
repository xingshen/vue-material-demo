<template>
<md-card>
  <div class="head-section">
    <p>{{blockTitle}}</p>
  </div>

  <slot></slot>
</md-card>
</template>

<style lang="scss">
@import "src/stylesheets/commonCss.scss";
.md-card{
  margin-bottom: 16px;
}

.head-section {
    font-size: 24px;
    padding-left: 10px;
    border-bottom: $horizontal-line;
}
</style>

<script>
export default {
  props: {
    blockTitle: String
  }
}
</script>
