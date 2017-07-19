<template>
<page-content-back page-title="Progress">
  <div class="main-content">
    <p>A linear progress indicator should always fill from 0% to 100% and never decrease in value. It should be represented by bars on the edge of a header or sheet that appear and disappear.</p>
    <block-content block-title="Determinate">
      <div class="block-content">
        <md-progress :md-progress="progress"></md-progress>
        <md-progress class="md-accent" :md-progress="progress"></md-progress>
        <md-progress class="md-warn" :md-progress="progress"></md-progress>
        <md-button class="md-primary md-raised" @click.native="restartProgress">Restart</md-button>
      </div>
    </block-content>

    <block-content block-title="Indeterminate">
      <div class="block-content">
        <md-progress md-indeterminate></md-progress>
        <md-progress class="md-accent" md-indeterminate></md-progress>
        <md-progress class="md-warn" md-indeterminate></md-progress>
      </div>
    </block-content>

    <block-content block-title="Themes">
      <div class="block-content">
        <md-progress md-theme="orange" md-indeterminate></md-progress>
        <md-progress md-theme="green" :md-progress="progress"></md-progress>
        <md-progress md-theme="purple" md-indeterminate></md-progress>
      </div>
    </block-content>

  </div>
</page-content-back>
</template>

<script>
export default {
  data () {
    return {
      progress: 0,
      progressInterval: null,
      transition: true
    }
  },
  methods: {
    startProgress () {
      this.progressInterval = window.setInterval(() => {
        this.progress += 3

        if (this.progress > 100) {
          window.clearInterval(this.progressInterval)
        }
      }, 100)
    },
    restartProgress () {
      this.progress = 0
      this.transition = false

      window.clearInterval(this.progressInterval)
      window.setTimeout(() => {
        this.transition = true
        this.startProgress()
      }, 600)
    }
  },
  mounted () {
    this.startProgress()
  }
}
</script>

<style lang="scss">
.progress-area {
    height: 44px;

    + .md-button {
        margin: 16px 0 0;
    }
}

.md-progress {
    margin-bottom: 16px;
}
</style>
