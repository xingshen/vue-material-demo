<template>
<page-content-back page-title="ImageLoader">
  <div class="main-content">
    <p>Illustrations and photographs may load and transition in three phases by staggering opacity, exposure, and saturation levels.</p>
    <block-content block-title="Default">
      <md-button class="md-primary md-raised" @click.native="loadImage">Load Image</md-button>
      <md-button class="md-primary md-raised" @click.native="clearImage">Clear Image</md-button>
      <md-image :md-src="src"></md-image>
    </block-content>

  </div>
</page-content-back>
</template>

<script>
export default {
  data () {
    return {
      src: require('assets/joker-1.jpg')
    }
  },
  methods: {
    loadImage () {
      console.log('loadImage')
      var options = [
        require('assets/joker-1.jpg'),
        require('assets/joker-2.jpg'),
        require('assets/joker-3.jpg'),
        require('assets/card-image-1.jpg'),
        require('assets/card-image-2.jpg')
      ]
      var option = options[Math.floor(Math.random() * 5)]
      console.log(option)
      this.src = option
    },
    clearImage () {
      this.src = null
    }
  }

}
</script>

<style lang="css">
</style>
