<template>
<div class="page-content">
  <md-whiteframe md-elevation="1" md-tag="md-toolbar">

    <md-button class="md-icon-button nav-trigger" @click.native="back">
      <md-icon>arrow_back</md-icon>
    </md-button>

    <div class="md-title">{{pageTitle}}</div>
  </md-whiteframe>

  <slot></slot>
</div>
</template>

<style lang="scss">
.page-content {
    min-height: 100%;
    max-height: 100%;
    flex: 1;
    display: flex;
    flex-flow: column;
}

.nav-trigger {
    @media (min-height: 1281px) {
        display: none;
    }
}
</style>

<script>

export default {
  props: {
    pageTitle: String
  },

  methods: {
    back () {
      console.log('page-content-back go back')
      this.$router.go(-1)
    },
    mounted () {
      document.title = this.pageTitle + '- Vue Material'
    }
  }
}
</script>
