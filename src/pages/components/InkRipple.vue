<template>
<page-content-back page-title="Ink Ripple">
  <div class="main-content">
    <p>Ink ripples confirm user input by immediately expanding outward from the point of touch. The card lifts to indicate an active state.</p>
    <block-content block-title="Default">
      <div class="block-content">

        <div class="has-ripple">
          <md-ink-ripple /> This div has ripple effect
        </div>

        <div class="has-ripple purple">
          <md-ink-ripple /> This div has ripple effect
        </div>

        <div class="has-ripple blue">
          <md-ink-ripple /> This div has ripple effect
        </div>

        <div class="has-ripple red">
          <md-ink-ripple md-disabled/> This div has ripple effect
        </div>

        <md-card class="card-ripple" md-with-hover>
          <md-card-media>
            <md-ink-ripple />
            <img :src="src">
          </md-card-media>

          <md-card-actions>
            <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>bookmark</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>share</md-icon>
            </md-button>
          </md-card-actions>
        </md-card>
      </div>
    </block-content>

  </div>
</page-content-back>
</template>

<script>
export default {
  data () {
    return {
      src: require('assets/card-image-1.jpg')
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
.has-ripple {
    margin-bottom: 16px;
    padding: 20px;
    display: inline-block;
    position: relative;
}

.blue {
    color: #2196F3;
}

.purple {
    color: #9C27B0;
}

.red {
    color: #F44336;
}

.card-ripple {
    width: 100%;
    margin-top: 24px;
}
</style>
