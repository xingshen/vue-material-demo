<template>
<page-content-back page-title="Button">
  <div class="main-content">
    <p>Buttons communicate the action that will occur when the user touches them.</p>
    <block-content block-title="Flat">
      <div class="block-content">
        <md-button>Default</md-button>
        <md-button class="md-primary">Primary</md-button>
        <md-button class="md-accent">Accent</md-button>
        <md-button class="md-warn">Warn</md-button>
        <md-button class="md-primary" disabled>Disabled</md-button>
        <md-button class="md-dense">Dense</md-button>
      </div>
    </block-content>

    <block-content block-title="Raised">
      <div class="block-content">
        <md-button class="md-raised">Default</md-button>
        <md-button class="md-raised md-primary">Primary</md-button>
        <md-button class="md-raised md-accent">Accent</md-button>
        <md-button class="md-raised md-warn">Warn</md-button>
        <md-button class="md-raised md-primary" disabled>Disabled</md-button>
        <md-button class="md-raised md-dense">Dense</md-button>
      </div>
    </block-content>
    <block-content block-title="Button vs Link vs Router Link">
      <div class="block-content">
        <md-button class="md-raised md-primary">Button</md-button>
        <md-button href="#/components/button" class="md-raised md-primary">Link</md-button>
        <router-link tag="md-button" to="/components/button" class="md-raised md-primary">Router Link</router-link>
      </div>
    </block-content>
    <block-content block-title="Icons-Flat">
      <div class="block-content">
        <md-button class="md-icon-button">
          <md-icon>more_vert</md-icon>
        </md-button>
        <md-button class="md-icon-button md-primary">
          <md-icon>more_vert</md-icon>
        </md-button>
        <md-button class="md-icon-button md-accent">
          <md-icon>more_vert</md-icon>
        </md-button>
        <md-button class="md-icon-button md-warn">
          <md-icon>more_vert</md-icon>
        </md-button>
        <md-button class="md-icon-button" disabled>
          <md-icon>more_vert</md-icon>
        </md-button>
        <md-button class="md-icon-button md-dense">
          <md-icon>more_vert</md-icon>
        </md-button>
      </div>
    </block-content>

    <block-content block-title="Floating Action Button">

      <div class="block-content">
        <div>
          <md-button class="md-fab">
            <md-icon>edit</md-icon>
          </md-button>

          <md-button class="md-fab md-primary">
            <md-icon>email</md-icon>
          </md-button>

          <md-button class="md-fab md-warn">
            <md-icon>save</md-icon>
          </md-button>

          <md-button class="md-fab md-clean">
            <md-icon>dialpad</md-icon>
          </md-button>

          <md-button class="md-fab" disabled>
            <md-icon>message</md-icon>
          </md-button>
        </div>

        <div>
          <md-button class="md-fab md-mini">
            <md-icon>edit</md-icon>
          </md-button>

          <md-button class="md-fab md-primary md-mini">
            <md-icon>email</md-icon>
          </md-button>

          <md-button class="md-fab md-warn md-mini">
            <md-icon>save</md-icon>
          </md-button>

          <md-button class="md-fab md-clean md-mini">
            <md-icon>dialpad</md-icon>
          </md-button>

          <md-button class="md-fab md-mini" disabled>
            <md-icon>message</md-icon>
          </md-button>
        </div>

        <!-- <div>
          <md-button class="md-fab md-fab-bottom-left">
            <md-icon>save</md-icon>
          </md-button>

          <md-button class="md-fab md-primary md-fab-bottom-center">
            <md-icon>dialpad</md-icon>
          </md-button>

          <md-button class="md-fab md-fab-bottom-right">
            <md-icon>add</md-icon>
          </md-button>
        </div> -->

      </div>
    </block-content>

    <block-content block-title="Themes">
      <div class="block-content">
        <md-button md-theme="indigo" class="md-primary">Indigo Flat</md-button>

        <md-button md-theme="teal" class="md-raised md-primary">Teal Raised</md-button>

        <md-button md-theme="orange" class="md-icon-button md-primary">
          <md-icon>add</md-icon>
        </md-button>

        <md-button md-theme="green" class="md-icon-button md-raised md-primary">
          <md-icon>message</md-icon>
        </md-button>

        <md-button md-theme="brown" class="md-fab md-primary">
          <md-icon>dialpad</md-icon>
        </md-button>
      </div>
    </block-content>

  </div>
</page-content-back>
</template>

<script>
export default {}
</script>

<style lang="css">

</style>
