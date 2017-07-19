<template>
<page-content-back page-title="Snackbar">
  <div class="main-content">
    <p>Snackbars contain a single line of text directly related to the operation performed. They may contain a text action, but no icons.</p>

    <form novalidate @submit.stop.prevent="open">
      <div>
        <div class="md-body-2">Vertical</div>
        <md-radio v-model="vertical" id="top" name="snackbar-vertical" md-value="top">top</md-radio>
        <md-radio v-model="vertical" id="bottom" name="snackbar-vertical" md-value="bottom">bottom</md-radio>
      </div>

      <div>
        <div class="md-body-2">Horizontal</div>
        <md-radio v-model="horizontal" id="left" name="snackbar-horizontal" md-value="left">left</md-radio>
        <md-radio v-model="horizontal" id="center" name="snackbar-horizontal" md-value="center">center</md-radio>
        <md-radio v-model="horizontal" id="right" name="snackbar-horizontal" md-value="right">right</md-radio>
      </div>

      <div>
        <div class="md-body-2">Delay</div>

        <md-input-container>
          <md-input type="number" v-model="duration"></md-input>
        </md-input-container>
      </div>

      <md-button type="submit" class="md-primary md-raised">Open Snackbar</md-button>

      <md-snackbar :md-position="vertical + ' ' + horizontal" ref="snackbar" :md-duration="duration">
        <span>messages</span>
        <md-button class="md-accent" md-theme="light-blue" @click.native="$refs.snackbar.close()">Retry</md-button>
      </md-snackbar>
    </form>


  </div>
</page-content-back>
</template>

<script>
export default {
  data () {
    return {
      vertical: 'bottom',
      horizontal: 'center',
      duration: 4000
    }
  },
  methods: {
    open () {
      this.$refs.snackbar.open()
    }
  }
}
</script>

<style lang="scss">
p {
    padding: 10px;
}
</style>
