<template>
<page-content-back page-title="Rating Bar">
  <div class="main-content">
    <p>Progress and activity indicators are visual indications of an app loading content.</p>
    <block-content block-title="Determinate">
      <div class="block-content">
        <md-button class="md-primary md-raised" @click.native="restartProgress">Restart</md-button>
        <md-spinner :md-progress="progress" v-if="transition"></md-spinner>
        <md-spinner :md-progress="progress" v-if="transition" class="md-accent"></md-spinner>
        <md-spinner :md-progress="progress" v-if="transition" class="md-warn"></md-spinner>
      </div>
    </block-content>

    <block-content block-title="Indeterminate">
      <div class="block-content">
        <md-spinner md-indeterminate></md-spinner>
        <md-spinner md-indeterminate class="md-accent"></md-spinner>
        <md-spinner md-indeterminate class="md-warn"></md-spinner>
      </div>
    </block-content>

    <block-content block-title="Sizes">
      <div class="block-content">
        <md-spinner :md-size="20" md-indeterminate class="md-accent"></md-spinner>
        <md-spinner :md-size="60" md-indeterminate class="md-warn"></md-spinner>
        <md-spinner :md-size="150" md-indeterminate></md-spinner>

        <md-spinner :md-size="20" :md-stroke="2" md-indeterminate class="md-accent"></md-spinner>
        <md-spinner :md-size="60" :md-stroke="1.5" md-indeterminate class="md-warn"></md-spinner>
        <md-spinner :md-size="150" :md-stroke="1" md-indeterminate></md-spinner>
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
      done: false,
      transition: true
    }
  },
  methods: {
    startProgress () {
      this.progressInterval = window.setInterval(() => {
        this.progress += 3

        if (this.progress > 115) {
          this.done = true
          window.clearInterval(this.progressInterval)
          window.setTimeout(() => {
            this.done = false
          }, 3000)
        }
      }, 100)
    },
    restartProgress () {
      this.progress = 0
      this.transition = false
      this.done = false

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

<style lang="css">
</style>
