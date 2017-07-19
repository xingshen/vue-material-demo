<template>
<page-content-back page-title="BottomBar">
  <div class="main-content">
    <p>Bottom navigation bars make it easy to explore and switch between top-level views in a single tap.</p>
    <div>
      <div class="head-section">
        <p>Default</p>
      </div>
      <md-dialog-alert :md-content="alert.content" :md-ok-text="alert.ok" ref="dialog1">
      </md-dialog-alert>
      <md-bottom-bar class="md-accent" @change="selecteChanged">
        <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
      </md-bottom-bar>

      <div class="head-section">
        <p>Using SVG</p>
      </div>
      <md-bottom-bar>
        <md-bottom-bar-item :md-icon-src="home">Recents</md-bottom-bar-item>
        <md-bottom-bar-item :md-icon-src="home">Favorites</md-bottom-bar-item>
        <md-bottom-bar-item :md-icon-src="home" md-active>Nearby</md-bottom-bar-item>
      </md-bottom-bar>
      <div class="head-section">
        <p>Shifting</p>
      </div>
      <md-bottom-bar md-shift md-theme="teal">
        <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
      </md-bottom-bar>
      <div class="head-section">
        <p>Dynamic Theme</p>
      </div>
      <md-theme :md-name="playground.theme">
        <md-bottom-bar md-shift>
          <md-bottom-bar-item @click.native="setTheme('blue')" md-icon="ondemand_video">Movies</md-bottom-bar-item>
          <md-bottom-bar-item @click.native="setTheme('teal')" md-icon="music_note">Music</md-bottom-bar-item>
          <md-bottom-bar-item @click.native="setTheme('brown')" md-icon="books" md-active>Books</md-bottom-bar-item>
          <md-bottom-bar-item @click.native="setTheme('indigo')" md-icon="photo">Pictures</md-bottom-bar-item>
        </md-bottom-bar>
      </md-theme>
    </div>
  </div>
  </div>
</page-content-back>
</template>

<script>
export default {
  data () {
    return {
      selectedIndex: 0,
      home: require('assets/icon-home.svg'),
      playground: {
        theme: 'brown'
      },
      alert: {
        content: 'this is a dialog!',
        ok: 'ok'
      }
    }
  },
  methods: {
    selecteChanged (index) {
      this.alert.content = 'u clicked index is ' + index
      this.$refs['dialog1'].open()
    },
    itemClick (event) {
      console.log(event)
    },
    setTheme (theme) {
      this.playground.theme = theme
    }
  }

}
</script>

<style lang="scss">

</style>
