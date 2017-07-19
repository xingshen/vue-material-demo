<template>
<page-content-back page-title="Speed Dial">
  <div class="main-content">
    <p>The floating action button can fling out related actions upon press. The button should remain on screen after the menu is invoked. Tapping in the same spot should either activate the most commonly used action or close the open menu.</p>

    <block-content block-title="Mode and event Type">
      <div class="block-content">
        <md-speed-dial md-open="hover" class="md-fab-bottom-left" md-theme="purple">
          <md-button class="md-fab" md-fab-trigger>
            <md-icon md-icon-morph>close</md-icon>
            <md-icon>share</md-icon>
          </md-button>

          <md-button class="md-fab md-primary md-mini md-clean">
            <md-icon>email</md-icon>
          </md-button>

          <md-button class="md-fab md-primary md-mini md-clean">
            <md-icon>content_copy</md-icon>
          </md-button>
        </md-speed-dial>

        <md-speed-dial md-mode="scale" class="md-fab-bottom-right">
          <md-button class="md-fab" md-fab-trigger>
            <md-icon md-icon-morph>close</md-icon>
            <md-icon>share</md-icon>
          </md-button>

          <md-button class="md-fab md-mini md-clean">
            <md-icon>email</md-icon>
          </md-button>

          <md-button class="md-fab md-mini md-clean">
            <md-icon>content_copy</md-icon>
          </md-button>
        </md-speed-dial>
      </div>
    </block-content>

    <p>Directions</p>
    <md-card>
      <div class="block-content">

        <md-speed-dial md-open="hover" md-direction="bottom" class="md-fab-top-left" md-theme="light-blue">
          <md-button class="md-fab" md-fab-trigger>
            <md-icon md-icon-morph>event</md-icon>
            <md-icon>add</md-icon>
          </md-button>

          <md-button class="md-fab md-primary md-mini md-clean">
            <md-icon>note_add</md-icon>
          </md-button>

          <md-button class="md-fab md-primary md-mini md-clean">
            <md-icon>alarm_add</md-icon>
          </md-button>
        </md-speed-dial>

        <md-speed-dial md-open="hover" md-direction="left" class="md-fab-top-right" md-theme="light-blue">
          <md-button class="md-fab" md-fab-trigger>
            <md-icon md-icon-morph>event</md-icon>
            <md-icon>add</md-icon>
          </md-button>

          <md-button class="md-fab md-primary md-mini md-clean">
            <md-icon>note_add</md-icon>
          </md-button>

          <md-button class="md-fab md-primary md-mini md-clean">
            <md-icon>alarm_add</md-icon>
          </md-button>
        </md-speed-dial>

        <md-speed-dial md-open="hover" class="md-fab-bottom-right" md-theme="light-blue">
          <md-button class="md-fab" md-fab-trigger>
            <md-icon md-icon-morph>event</md-icon>
            <md-icon>add</md-icon>
          </md-button>

          <md-button class="md-fab md-primary md-mini md-clean">
            <md-icon>note_add</md-icon>
          </md-button>

          <md-button class="md-fab md-primary md-mini md-clean">
            <md-icon>alarm_add</md-icon>
          </md-button>
        </md-speed-dial>

        <md-speed-dial md-open="hover" md-direction="right" class="md-fab-bottom-left" md-theme="light-blue">
          <md-button class="md-fab" md-fab-trigger>
            <md-icon md-icon-morph>event</md-icon>
            <md-icon>add</md-icon>
          </md-button>

          <md-button class="md-fab md-primary md-mini md-clean">
            <md-icon>note_add</md-icon>
          </md-button>

          <md-button class="md-fab md-primary md-mini md-clean">
            <md-icon>alarm_add</md-icon>
          </md-button>
        </md-speed-dial>
      </div>
    </md-card>
  </div>
</page-content-back>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
.block-content {
    height: 300px;
}

</style>
