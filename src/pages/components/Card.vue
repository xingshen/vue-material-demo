<template>
<page-content-back page-title="Card">
  <div class="main-content">

    <p>Cards may contain a photo, text, and a link about a single subject. They may display content containing elements of varying size, such as photos with captions of variable length.

      <br><br>The card components are very granular. Every single part of a card is a component. You can combine them in any order that you want, following the same logic of the examples.</p>

    <block-content block-title="Regular Cards">
      <div class="block-content">
        <md-tabs md-fixed>
          <md-tab id="card1" md-label="Card1">
            <md-card>
              <md-card-media>
                <img :src="card1">
              </md-card-media>

              <md-card-header>
                <div class="md-title">Title goes here</div>
                <div class="md-subhead">Subtitle here</div>
              </md-card-header>

              <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
              </md-card-content>
            </md-card>
          </md-tab>
          <md-tab id="card2" md-label="Card2">
            <md-card>
              <md-card-header>
                <md-card-header-text>
                  <div class="md-title">Title goes here</div>
                  <div class="md-subhead">Subtitle here</div>
                </md-card-header-text>

                <md-menu md-size="4" md-direction="bottom left">
                  <md-button class="md-icon-button" md-menu-trigger>
                    <md-icon>more_vert</md-icon>
                  </md-button>

                  <md-menu-content>
                    <md-menu-item>
                      <span>Call</span>
                      <md-icon>phone</md-icon>
                    </md-menu-item>

                    <md-menu-item>
                      <span>Send a message</span>
                      <md-icon>message</md-icon>
                    </md-menu-item>
                  </md-menu-content>
                </md-menu>
              </md-card-header>

              <md-card-media>
                <img :src="card1" alt="People">
              </md-card-media>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
              </md-card-content>
            </md-card>
          </md-tab>
          <md-tab id="card3" md-label="Card3">
            <md-card>
              <md-card-media>
                <img :src="card2" alt="People">
              </md-card-media>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
              </md-card-content>
            </md-card>
          </md-tab>
        </md-tabs>
      </div>
    </block-content>

    <block-content block-title="Hover Effect">
      <div class="block-content">

        <md-tabs md-fixed>
          <md-tab id="card1" md-label="Card1">
            <md-card md-with-hover>
              <md-card-header>
                <div class="md-title">Title goes here</div>
                <div class="md-subhead">Subtitle here</div>
              </md-card-header>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
              </md-card-content>

              <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions>
            </md-card>
          </md-tab>
          <md-tab id="card2" md-label="Card2">
            <md-card md-with-hover>
              <md-card-media>
                <img :src="card1">

                <md-ink-ripple></md-ink-ripple>
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
          </md-tab>
          <md-tab id="card3" md-label="Card3">
            <md-card md-with-hover>
              <md-card-header>
                <md-avatar>
                  <img :src="photo">
                </md-avatar>

                <div class="md-title">Title goes here</div>
                <div class="md-subhead">Subtitle here</div>
              </md-card-header>

              <md-card-media>
                <img :src="card1">
              </md-card-media>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
              </md-card-content>

              <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions>
            </md-card>
          </md-tab>
        </md-tabs>
      </div>
    </block-content>

    <block-content block-title="Image cover with predefined aspect ratio">
      <div class="block-content">
        <md-tabs md-fixed>
          <md-tab id="card1" md-label="Card1">
            <md-card>
              <md-card-media-cover md-text-scrim>
                <md-card-media md-ratio="16:9">
                  <img :src="card4">
                </md-card-media>

                <md-card-area>
                  <md-card-header>
                    <div class="md-title">Title goes here</div>
                    <div class="md-subhead">Subtitle here</div>
                  </md-card-header>

                  <md-card-actions>
                    <md-button>Action</md-button>
                    <md-button>Action</md-button>
                  </md-card-actions>
                </md-card-area>
              </md-card-media-cover>
            </md-card>
          </md-tab>
          <md-tab id="card2" md-label="Card2">
            <md-card>
              <md-card-media-cover md-solid>
                <md-card-media md-ratio="1:1">
                  <img :src="card4">
                </md-card-media>

                <md-card-area>
                  <md-card-header>
                    <div class="md-title">Title goes here</div>
                    <div class="md-subhead">Subtitle here</div>
                  </md-card-header>

                  <md-card-actions>
                    <md-button>Action</md-button>
                    <md-button>Action</md-button>
                  </md-card-actions>
                </md-card-area>
              </md-card-media-cover>
            </md-card>
          </md-tab>
        </md-tabs>
      </div>
    </block-content>
    <block-content block-title="Full Control">
      <div class="block-content">

        <md-tabs md-fixed>
          <md-tab id="card1" md-label="Card1">
            <md-card>
              <md-card-area>
                <md-card-media>
                  <img :src="card1">
                </md-card-media>

                <md-card-header>
                  <div class="md-title">Title goes here</div>
                  <div class="md-subhead">Subtitle here</div>
                </md-card-header>

                <md-card-content>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                </md-card-content>
              </md-card-area>

              <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions>
            </md-card>
          </md-tab>

          <md-tab id="card2" md-label="Card2">
            <md-card>
              <md-card-media>
                <img :src="card1">
              </md-card-media>

              <md-card-header>
                <div class="md-title">Title goes here</div>
                <div class="md-subhead">Subtitle here</div>
              </md-card-header>

              <md-card-expand>
                <md-card-actions>
                  <md-button>Action</md-button>
                  <md-button>Action</md-button>
                  <span style="flex: 1"></span>
                  <md-button class="md-icon-button" md-expand-trigger>
                    <md-icon>keyboard_arrow_down</md-icon>
                  </md-button>
                </md-card-actions>

                <md-card-content>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                </md-card-content>
              </md-card-expand>
            </md-card>
          </md-tab>
        </md-tabs>
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
      card1: require('assets/card-image-1.jpg'),
      card2: require('assets/card-image-2.jpg'),
      card3: require('assets/card-image-3.jpg'),
      card4: require('assets/card-sky.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
.md-tab {
    padding: 0;
    margin: 0;
}
</style>
