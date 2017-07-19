<template>
<page-content-back page-title="List">
  <div class="main-content">

    <p>Lists are best suited to presenting a homogeneous data type or sets of data types, such as images and text. They are optimized for reading comprehension while differentiating either between similar data types, or qualities within a single data type.</p>

    <block-content block-title="Single Line">
      <div class="block-content">
        <md-tabs md-fixed>
          <md-tab id="card1" md-label="Card1">
            <md-card>
              <md-list>
                <md-list-item>
                  <md-icon>move_to_inbox</md-icon> <span>Inbox</span>
                </md-list-item>

                <md-list-item>
                  <md-icon>send</md-icon> <span>Sent Mail</span>
                </md-list-item>

                <md-list-item>
                  <md-icon>delete</md-icon> <span>Trash</span>
                </md-list-item>

                <md-list-item>
                  <md-icon>error</md-icon> <span>Spam</span>

                  <md-divider class="md-inset"></md-divider>
                </md-list-item>

                <md-list-item>
                  <md-avatar>
                    <img src="https://placeimg.com/40/40/people/5" alt="People">
                  </md-avatar>

                  <span>Abbey Christansen</span>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon class="md-primary">chat_bubble</md-icon>
                  </md-button>
                </md-list-item>

                <md-list-item>
                  <md-avatar>
                    <img src="https://placeimg.com/40/40/people/1" alt="People">
                  </md-avatar>

                  <span>Alex Nelson</span>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon class="md-primary">chat_bubble</md-icon>
                  </md-button>
                </md-list-item>

                <md-list-item>
                  <md-avatar>
                    <img src="https://placeimg.com/40/40/people/6" alt="People">
                  </md-avatar>

                  <span>Mary Johnson</span>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>chat_bubble</md-icon>
                  </md-button>
                </md-list-item>
              </md-list>
            </md-card>
          </md-tab>
          <md-tab id="card2" md-label="Card2">
            <md-card>
              <md-list class="md-dense">
                <md-list-item>
                  <md-icon>move_to_inbox</md-icon> <span>Inbox</span>
                </md-list-item>

                <md-list-item>
                  <md-icon>send</md-icon> <span>Sent Mail</span>
                </md-list-item>

                <md-list-item>
                  <md-icon>delete</md-icon> <span>Trash</span>
                </md-list-item>

                <md-list-item>
                  <md-icon>error</md-icon> <span>Spam</span>

                  <md-divider class="md-inset"></md-divider>
                </md-list-item>

                <md-list-item>
                  <md-avatar>
                    <img src="https://placeimg.com/40/40/people/5" alt="People">
                  </md-avatar>

                  <span>Abbey Christansen</span>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon class="md-primary">chat_bubble</md-icon>
                  </md-button>
                </md-list-item>

                <md-list-item>
                  <md-avatar>
                    <img src="https://placeimg.com/40/40/people/1" alt="People">
                  </md-avatar>

                  <span>Alex Nelson</span>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon class="md-primary">chat_bubble</md-icon>
                  </md-button>
                </md-list-item>

                <md-list-item>
                  <md-avatar>
                    <img src="https://placeimg.com/40/40/people/6" alt="People">
                  </md-avatar>

                  <span>Mary Johnson</span>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>chat_bubble</md-icon>
                  </md-button>
                </md-list-item>
              </md-list>
            </md-card>
          </md-tab>
        </md-tabs>
      </div>
    </block-content>

    <block-content block-title="Double Line">
      <div class="block-content">
        <md-tabs md-fixed>
          <md-tab id="card1" md-label="Card1">
            <md-card>
              <md-list class="md-double-line">
                <md-list-item>
                  <md-icon class="md-primary">phone</md-icon>

                  <div class="md-list-text-container">
                    <span>(650) 555-1234</span>
                    <span>Mobile</span>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>sms</md-icon>
                  </md-button>
                </md-list-item>

                <md-list-item class="md-inset">
                  <div class="md-list-text-container">
                    <span>(650) 555-1234</span>
                    <span>Mobile</span>
                  </div>

                  <md-divider class="md-inset"></md-divider>
                </md-list-item>

                <md-list-item>
                  <md-icon class="md-primary">email</md-icon>

                  <div class="md-list-text-container">
                    <span>aliconnors@example.com</span>
                    <span>Personal</span>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>sms</md-icon>
                  </md-button>
                </md-list-item>

                <md-list-item class="md-inset">
                  <div class="md-list-text-container">
                    <span>ali_connors@example.com</span>
                    <span>Work</span>
                  </div>
                </md-list-item>
              </md-list>
            </md-card>
          </md-tab>
          <md-tab id="card2" md-label="Card2">
            <md-card>
              <md-list class="md-double-line md-dense">
                <md-list-item>
                  <md-icon class="md-primary">phone</md-icon>

                  <div class="md-list-text-container">
                    <span>(650) 555-1234</span>
                    <span>Mobile</span>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>sms</md-icon>
                  </md-button>
                </md-list-item>

                <md-list-item class="md-inset">
                  <div class="md-list-text-container">
                    <span>(650) 555-1234</span>
                    <span>Mobile</span>
                  </div>

                  <md-divider class="md-inset"></md-divider>
                </md-list-item>

                <md-list-item>
                  <md-icon class="md-primary">email</md-icon>

                  <div class="md-list-text-container">
                    <span>aliconnors@example.com</span>
                    <span>Personal</span>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>sms</md-icon>
                  </md-button>
                </md-list-item>

                <md-list-item class="md-inset">
                  <div class="md-list-text-container">
                    <span>ali_connors@example.com</span>
                    <span>Work</span>
                  </div>
                </md-list-item>
              </md-list>
            </md-card>
          </md-tab>
        </md-tabs>
      </div>
    </block-content>

    <block-content block-title="Triple Line">
      <div class="block-content">
        <md-tabs md-fixed>
          <md-tab id="card1" md-label="Card1">
            <md-card>
              <md-list class="custom-list md-triple-line">
                <md-list-item>
                  <md-avatar>
                    <img src="https://placeimg.com/40/40/people/1" alt="People">
                  </md-avatar>

                  <div class="md-list-text-container">
                    <span>Ali Connors</span>
                    <span>Brunch this weekend?</span>
                    <p>I'll be in your neighborhood doing errands...</p>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon class="md-primary">star</md-icon>
                  </md-button>

                  <md-divider class="md-inset"></md-divider>
                </md-list-item>

                <md-list-item>
                  <md-avatar>
                    <img src="https://placeimg.com/40/40/people/6" alt="People">
                  </md-avatar>

                  <div class="md-list-text-container">
                    <span>me, Scott, Jennifer</span>
                    <span>Summer BBQ</span>
                    <p>Wish I could come, but I'm out of town ...</p>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>star_border</md-icon>
                  </md-button>

                  <md-divider class="md-inset"></md-divider>
                </md-list-item>

                <md-list-item>
                  <md-avatar>
                    <img src="https://placeimg.com/40/40/people/5" alt="People">
                  </md-avatar>

                  <div class="md-list-text-container">
                    <span>Sandra Adams</span>
                    <span>Oui oui</span>
                    <p>Do you have Paris recommendations ...</p>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>star_border</md-icon>
                  </md-button>

                  <md-divider class="md-inset"></md-divider>
                </md-list-item>

                <md-list-item>
                  <md-avatar>
                    <img src="https://placeimg.com/40/40/people/8" alt="People">
                  </md-avatar>

                  <div class="md-list-text-container">
                    <span>Trevor Hansen</span>
                    <span>Order confirmation</span>
                    <p>Thank you for your recent order from ...</p>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>star_border</md-icon>
                  </md-button>

                  <md-divider class="md-inset"></md-divider>
                </md-list-item>
              </md-list>
            </md-card>
          </md-tab>
          <md-tab id="card2" md-label="Card2">
            <md-card>
              <md-list class="custom-list md-triple-line md-dense">
                <md-list-item>
                  <md-avatar>
                    <img src="https://placeimg.com/40/40/people/1" alt="People">
                  </md-avatar>

                  <div class="md-list-text-container">
                    <span>Ali Connors</span>
                    <span>Brunch this weekend?</span>
                    <p>I'll be in your neighborhood doing errands...</p>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon class="md-primary">star</md-icon>
                  </md-button>

                  <md-divider class="md-inset"></md-divider>
                </md-list-item>

                <md-list-item>
                  <md-avatar>
                    <img src="https://placeimg.com/40/40/people/6" alt="People">
                  </md-avatar>

                  <div class="md-list-text-container">
                    <span>me, Scott, Jennifer</span>
                    <span>Summer BBQ</span>
                    <p>Wish I could come, but I'm out of town ...</p>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>star_border</md-icon>
                  </md-button>

                  <md-divider class="md-inset"></md-divider>
                </md-list-item>

                <md-list-item>
                  <md-avatar>
                    <img src="https://placeimg.com/40/40/people/5" alt="People">
                  </md-avatar>

                  <div class="md-list-text-container">
                    <span>Sandra Adams</span>
                    <span>Oui oui</span>
                    <p>Do you have Paris recommendations ...</p>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>star_border</md-icon>
                  </md-button>

                  <md-divider class="md-inset"></md-divider>
                </md-list-item>

                <md-list-item>
                  <md-avatar>
                    <img src="https://placeimg.com/40/40/people/8" alt="People">
                  </md-avatar>

                  <div class="md-list-text-container">
                    <span>Trevor Hansen</span>
                    <span>Order confirmation</span>
                    <p>Thank you for your recent order from ...</p>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>star_border</md-icon>
                  </md-button>

                  <md-divider class="md-inset"></md-divider>
                </md-list-item>
              </md-list>
            </md-card>
          </md-tab>
        </md-tabs>
      </div>
    </block-content>
    <block-content block-title="Multiple Line">
      <div class="block-content">
        <md-card>
          <md-toolbar md-theme="white">
            <span class="md-title">Multiple options</span>
          </md-toolbar>

          <md-list>
            <md-list-item>Plain Text</md-list-item>
            <md-list-item target="_blank" href="http://www.xiami.com/radio/play/type/5/oid/10170?spm=a1z1s.6659509.0.0.2rzpXZ">Link</md-list-item>
            <md-list-item @click.native="openAlert">Button</md-list-item>
            <md-list-item>
              <router-link to="/components/list">Router View</router-link>
            </md-list-item>
          </md-list>
        </md-card>
      </div>
    </block-content>

    <block-content block-title="Expand list">
      <div class="block-content">
        <md-tabs md-fixed>
          <md-tab id="card1" md-label="Card1">
            <md-card>
              <md-toolbar md-theme="white">
                <span class="md-title">Single Expand</span>
              </md-toolbar>

              <md-list>
                <md-list-item>
                  <md-icon>whatshot</md-icon>
                  <span>News</span>

                  <md-list-expand>
                    <md-list>
                      <md-list-item class="md-inset">World</md-list-item>
                      <md-list-item class="md-inset">Americas</md-list-item>
                      <md-list-item class="md-inset">Europe</md-list-item>
                    </md-list>
                  </md-list-expand>
                </md-list-item>

                <md-list-item>
                  <md-icon>videogame_asset</md-icon>
                  <span>Games</span>

                  <md-list-expand>
                    <md-list>
                      <md-list-item class="md-inset">Console</md-list-item>
                      <md-list-item class="md-inset">PC</md-list-item>
                      <md-list-item class="md-inset">Phone</md-list-item>
                    </md-list>
                  </md-list-expand>
                </md-list-item>

                <md-list-item>
                  <md-icon>video_library</md-icon>
                  <span>Video</span>

                  <md-list-expand>
                    <md-list>
                      <md-list-item class="md-inset">Humor</md-list-item>
                      <md-list-item class="md-inset">Music</md-list-item>
                      <md-list-item class="md-inset">Movies</md-list-item>
                      <md-list-item class="md-inset">TV Shows</md-list-item>
                    </md-list>
                  </md-list-expand>
                </md-list-item>

                <md-list-item>
                  <md-icon>shopping_basket</md-icon>
                  <span>Shop</span>
                </md-list-item>
              </md-list>
            </md-card>
          </md-tab>

          <md-tab id="card2" md-label="Card2">
            <md-card>
              <md-toolbar md-theme="white">
                <span class="md-title">Multiple Expand</span>
              </md-toolbar>

              <md-list>
                <md-list-item md-expand-multiple>
                  <md-icon>whatshot</md-icon>
                  <span>News</span>

                  <md-list-expand>
                    <md-list>
                      <md-list-item class="md-inset">World</md-list-item>
                      <md-list-item class="md-inset">Americas</md-list-item>
                      <md-list-item class="md-inset">Europe</md-list-item>
                    </md-list>
                  </md-list-expand>
                </md-list-item>

                <md-list-item md-expand-multiple>
                  <md-icon>videogame_asset</md-icon>
                  <span>Games</span>

                  <md-list-expand>
                    <md-list>
                      <md-list-item class="md-inset">Console</md-list-item>
                      <md-list-item class="md-inset">PC</md-list-item>
                      <md-list-item class="md-inset">Phone</md-list-item>
                    </md-list>
                  </md-list-expand>
                </md-list-item>

                <md-list-item md-expand-multiple>
                  <md-icon>video_library</md-icon>
                  <span>Video</span>

                  <md-list-expand>
                    <md-list>
                      <md-list-item class="md-inset">Humor</md-list-item>
                      <md-list-item class="md-inset">Music</md-list-item>
                      <md-list-item class="md-inset">Movies</md-list-item>
                      <md-list-item class="md-inset">TV Shows</md-list-item>
                    </md-list>
                  </md-list-expand>
                </md-list-item>

                <md-list-item>
                  <md-icon>shopping_basket</md-icon>
                  <span>Shop</span>
                </md-list-item>
              </md-list>
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
  },
  methods: {
    openAlert () {
      window.alert('...')
    }
  }
}
</script>

<style lang="scss" scoped="">
.md-tab {
    padding: 0;
    margin: 0;
}
</style>
