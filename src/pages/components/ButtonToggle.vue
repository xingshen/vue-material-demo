<template>
<page-content-back page-title="Button Toggle">
  <div class="main-content">
    <p>Toggle buttons may be used to group related options. Arrange layout and spacing to convey that certain toggle buttons are part of a group.</p>
    <block-content block-title="Multiple">
      <md-button-toggle class="block-content">
        <md-button class="md-icon-button md-toggle">
          <md-icon>format_bold</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>format_italic</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>strikethrough_s</md-icon>
        </md-button>

        <md-button class="md-icon-button md-toggle">
          <md-icon>title</md-icon>
        </md-button>
      </md-button-toggle>

      <md-button-toggle class="md-primary block-content">
        <md-button class="md-icon-button md-toggle">
          <md-icon>format_bold</md-icon>
        </md-button>

        <md-button class="md-icon-button md-toggle">
          <md-icon>format_italic</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>format_underline</md-icon>
        </md-button>

        <md-button class="md-icon-button" disabled>
          <md-icon>title</md-icon>
        </md-button>
      </md-button-toggle>

      <md-button-toggle class="block-content">
        <md-button class="md-toggle">Works</md-button>
        <md-button class="md-toggle">With</md-button>
        <md-button>Text</md-button>
        <md-button>Too</md-button>
      </md-button-toggle>
    </block-content>

    <block-content block-title="Single Selection">
      <md-button-toggle md-single class="block-content">
        <md-button class="md-icon-button">
          <md-icon>format_bold</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>format_italic</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>strikethrough_s</md-icon>
        </md-button>

        <md-button class="md-icon-button md-toggle">
          <md-icon>title</md-icon>
        </md-button>
      </md-button-toggle>

      <md-button-toggle md-single class="md-primary block-content">
        <md-button class="md-icon-button">
          <md-icon>format_bold</md-icon>
        </md-button>

        <md-button class="md-icon-button md-toggle">
          <md-icon>format_italic</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>format_underline</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>title</md-icon>
        </md-button>
      </md-button-toggle>

      <md-button-toggle md-single class="block-content">
        <md-button>Works</md-button>
        <md-button>With</md-button>
        <md-button>Text</md-button>
        <md-button>Too</md-button>
      </md-button-toggle>
    </block-content>
  </div>


</page-content-back>
</template>

<script>
export default {}
</script>

<style lang="scss">

</style>
