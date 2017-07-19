<template>
<page-content-back page-title="Tooltip">
  <div class="main-content">
    <p>Tooltips identify an element when they are activated. They may contain brief helper text about its function. For example, they may contain text information about actionable icons.</p>

    <block-content block-title="Default">
      <div class="block-content block-content-align">
        <div>
          <md-button class="md-icon-button md-raised md-primary">
            <md-icon>folder</md-icon>
            <md-tooltip md-direction="top">My tooltip</md-tooltip>
          </md-button>

          <md-avatar>
            <img :src="photo">
            <md-tooltip md-direction="bottom">My tooltip</md-tooltip>
          </md-avatar>
        </div>

        <div>
          <md-button class="md-icon-button md-raised md-warn">
            <md-icon>home</md-icon>
            <md-tooltip md-direction="left">My tooltip</md-tooltip>
          </md-button>

          <md-avatar class="md-avatar-icon">
            <md-icon>person</md-icon>
            <md-tooltip md-direction="right">My tooltip</md-tooltip>
          </md-avatar>
        </div>
      </div>
    </block-content>

    <block-content block-title="Delay">
      <div class="block-content block-content-align">
        <div>
          <md-button class="md-icon-button md-raised md-primary">
            <md-icon>folder</md-icon>
            <md-tooltip md-delay="400" md-direction="top">My tooltip</md-tooltip>
          </md-button>

          <md-avatar>
            <img :src="photo">
            <md-tooltip md-delay="400" md-direction="bottom">My tooltip</md-tooltip>
          </md-avatar>
        </div>

        <div>
          <md-button class="md-icon-button md-raised md-warn">
            <md-icon>home</md-icon>
            <md-tooltip md-delay="400" md-direction="left">My tooltip</md-tooltip>
          </md-button>

          <md-avatar class="md-avatar-icon">
            <md-icon>person</md-icon>
            <md-tooltip md-delay="400" md-direction="right">My tooltip</md-tooltip>
          </md-avatar>
        </div>
      </div>
    </block-content>
  </div>
</page-content-back>
</template>

<script>
export default {
  data () {
    return {
      photo: require('assets/avatar-2.jpg')
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.md-avatar,
.md-button {
    margin: 24px;
}
.block-content-align{
  text-align: center;
}
</style>
