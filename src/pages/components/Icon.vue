<template>
<page-content-back page-title="Icon">
  <div class="main-content">
    <p>A system icon, or UI icon, symbolizes a command, file, device, or directory. System icons are also used to represent common actions like trash, print, and save.</p>
    <block-content block-title="Google Font">
      <div class="block-content">
        <md-icon>home</md-icon>
        <md-icon class="md-primary">menu</md-icon>
        <md-icon class="md-accent">people</md-icon>
        <md-icon class="md-warn">access_time</md-icon>
      </div>
    </block-content>

    <block-content block-title="Sizes">
      <div class="block-content">
        <md-icon>home</md-icon>
        <md-icon class="md-size-2x md-primary">home</md-icon>
        <md-icon class="md-size-3x md-accent">home</md-icon>
        <md-icon class="md-size-4x md-warn">home</md-icon>
      </div>
    </block-content>

    <block-content block-title="Images">
      <div class="block-content">
        <div>
          <strong class="md-body-2">PNG:</strong>
          <md-icon :md-src="icon_menu">menu</md-icon>
          <md-icon class="md-size-2x" :md-src="icon_menu">menu</md-icon>
          <md-icon class="md-size-3x" :md-src="icon_menu">menu</md-icon>
          <md-icon class="md-size-4x" :md-src="icon_menu">menu</md-icon>
        </div>
        <div>
          <strong class="md-body-2">SVG:</strong>
          <md-icon :md-src="icon_home"></md-icon>
          <md-icon class="md-size-2x md-primary" :md-src="icon_home"></md-icon>
          <md-icon class="md-size-3x md-accent" :md-src="icon_home"></md-icon>
          <md-icon class="md-size-4x md-warn" :md-src="icon_home"></md-icon>
        </div>
      </div>
    </block-content>


    <block-content block-title="Themes">
      <div class="block-content">
        <md-icon md-theme="light-blue" class="md-primary">home</md-icon>
        <md-icon md-theme="green" class="md-primary">menu</md-icon>
        <md-icon md-theme="brown" class="md-primary">people</md-icon>
        <md-icon md-theme="orange" class="md-primary">access_time</md-icon>
      </div>
    </block-content>
  </div>
</page-content-back>
</template>

<script>
export default {
  data () {
    return {
      icon_home: require('assets/icon-home.svg'),
      icon_menu: require('assets/icon-menu.png')
    }
  },

  methods: {

  }
}
</script>

<style lang="css">
</style>
