<template>
<page-content-back page-title="Menu">
  <div class="main-content">
    <p>Menus appear upon interaction with a button, action, or other control. They display a list of choices, with one choice per line.
      <br>You can create menus with selection items or show rich content.</p>
    <block-content block-title="Directions">
      <div class="block-content">
        <md-menu>
          <md-button md-menu-trigger>Bottom Right</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-direction="bottom left">
          <md-button md-menu-trigger>Bottom Left</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item disabled>My Item 3</md-menu-item>
            <md-menu-item>My Item 4</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-direction="top left">
          <md-button md-menu-trigger>Top Left</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-direction="top right">
          <md-button md-menu-trigger>Top Right</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>
    </block-content>

    <block-content block-title="Alignments">
      <div class="block-content">
        <md-menu>
          <md-button md-menu-trigger>Default</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-align-trigger>
          <md-button md-menu-trigger>Align trigger</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu :md-offset-x="154" md-offset-y="12">
          <md-button md-menu-trigger>Custom offset</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>
    </block-content>

    <block-content block-title="Sizes">
      <div class="block-content">
        <md-menu md-size="1">
          <md-button md-menu-trigger>Size 1</md-button>

          <md-menu-content>
            <md-menu-item>Item 1</md-menu-item>
            <md-menu-item>Item 2</md-menu-item>
            <md-menu-item>Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-size="2">
          <md-button md-menu-trigger>Size 2</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-size="3">
          <md-button md-menu-trigger>Size 3</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-size="4">
          <md-button md-menu-trigger>Size 4</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-size="5">
          <md-button md-menu-trigger>Size 5</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-size="6">
          <md-button md-menu-trigger>Size 6</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-size="7">
          <md-button md-menu-trigger>Size 7</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>
    </block-content>


    <block-content block-title="Rich Content and List Icons">
      <div class="block-content">
        <md-menu md-size="4" md-direction="top right" ref="menu">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>contacts</md-icon>
          </md-button>

          <md-menu-content>
            <div class="author-card">
              <md-avatar class="md-large">
                <img :src="photo">
              </md-avatar>

              <div class="author-card-info">
                <span>Marcos Moura</span>
                <div class="author-card-links">
                  <a href="https://linkedin.com/in/marcosvmmoura" target="_blank" rel="noopener">Linkedin</a>
                  <a href="https://github.com/marcosmoura" target="_blank" rel="noopener">GitHub</a>
                </div>
              </div>
            </div>
          </md-menu-content>
        </md-menu>

        <md-menu md-size="4">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>phone</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item>
              <md-icon>phone</md-icon>
              <span>My Item 1</span>
            </md-menu-item>

            <md-menu-item>
              <md-icon>phone</md-icon>
              <span>My Item 2</span>
            </md-menu-item>

            <md-menu-item>
              <md-icon>phone</md-icon>
              <span>My Item 3</span>
            </md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-direction="bottom left" md-size="4">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>near_me</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item>
              <span>Find on map</span>
              <md-icon>near_me</md-icon>
            </md-menu-item>

            <md-menu-item>
              <span>Call</span>
              <md-icon>phone</md-icon>
            </md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-button class="md-raised md-primary" @click.native="$refs.menu.open">Open contact card</md-button>
      </div>
    </block-content>
  </div>
</page-content-back>
</template>

<script>
export default {
  data () {
    return {
      photo: require('assets/marcosmoura.jpg')
    }
  },

  methods: {

  }
}
</script>

<style lang="css">
</style>
