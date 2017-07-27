<template>
<page-content-back page-title="Avatar">
  <div class="main-content">
    <p>Avatars can be used to represent people. When used with a specific logo, avatars can also be used to represent brand.</p>
    <block-content block-title="Default">
      <div class="block-content">
        <md-avatar>
          <img src="assets/avatar.png">
        </md-avatar>

        <md-avatar class="md-avatar-icon">
          <md-icon>home</md-icon>
        </md-avatar>

        <md-avatar class="md-avatar-icon md-primary">
          <md-icon>folder</md-icon>
        </md-avatar>

        <md-avatar class="md-avatar-icon md-accent">
          <md-icon>favorite</md-icon>
        </md-avatar>

        <md-avatar class="md-avatar-icon md-warn">
          <md-icon>notes</md-icon>
        </md-avatar>
      </div>
    </block-content>

    <block-content block-title="Larger">
      <div class="block-content">
        <md-avatar class="md-large">
          <img :src="largerPhoto">
        </md-avatar>

        <md-avatar class="md-avatar-icon md-large">
          <md-icon>home</md-icon>
        </md-avatar>

        <md-avatar class="md-avatar-icon md-large md-primary">
          <md-icon>folder</md-icon>
        </md-avatar>

        <md-avatar class="md-avatar-icon md-large md-accent">
          <md-icon>favorite</md-icon>
        </md-avatar>

        <md-avatar class="md-avatar-icon md-large md-warn">
          <md-icon>notes</md-icon>
        </md-avatar>
      </div>
    </block-content>

  </div>
</page-content-back>
</template>

<script>
export default {
  data () {
    return {
      photo: require('assets/avatar.png'),
      largerPhoto: require('assets/avatar-2.jpg')
    }
  }

}
</script>

<style lang="scss">

</style>
