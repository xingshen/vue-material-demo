<template>
<page-content-back page-title="Rating Bar">
  <div class="main-content">
    <p>Rating Bar can be used to show a rating to user or capture a rating from user.</p>
    <block-content block-title="Default">
      <div class="block-content">
        <md-rating-bar v-model="rating1" disabled></md-rating-bar>
        <md-rating-bar v-model="rating2" :md-max-rating="10" disabled></md-rating-bar>
        <md-rating-bar v-model="rating3" :md-max-rating="7" class="md-primary" disabled></md-rating-bar>
        <md-rating-bar v-model="rating4" :md-max-rating="7" class="md-accent" disabled></md-rating-bar>
        <md-rating-bar v-model="rating5" :md-max-rating="7" class="md-warn" disabled></md-rating-bar>
        <md-rating-bar v-model="rating6" :md-max-rating="7" class="md-primary" :md-empty-icon="'star_border'"></md-rating-bar>
        <md-rating-bar v-model="rating7" :md-max-rating="5" class="md-warn" :md-empty-icon="'panorama_fish_eye'" :md-full-icon="'lens'"></md-rating-bar>
      </div>
    </block-content>

    <block-content block-title="Themes">
      <div class="block-content">
        <md-rating-bar v-model="rating8" class="md-primary" md-theme="orange" disabled></md-rating-bar>
        <md-rating-bar v-model="rating9" class="md-primary" md-theme="brown" disabled></md-rating-bar>
        <md-rating-bar v-model="rating10" class="md-primary" md-theme="light-blue"></md-rating-bar>
        <md-rating-bar v-model="rating11" class="md-primary" md-theme="teal" :md-empty-icon="'star_border'"></md-rating-bar>
      </div>
    </block-content>

    <block-content block-title="Sizes">
      <div class="block-content">
        <md-rating-bar v-model="rating12"></md-rating-bar>
        <md-rating-bar v-model="rating12" :md-icon-size="2"></md-rating-bar>
        <md-rating-bar v-model="rating12" :md-icon-size="3"></md-rating-bar>
      </div>
    </block-content>

    <!-- <block-content block-title="Images">
      <div class="block-content">
        <div>
          <div>
            <strong class="md-body-2">SVG:</strong>
            <md-rating-bar v-model="rating13" class="md-primary" :md-empty-icon="iconHome" :md-full-icon="iconHome"></md-rating-bar>
            <md-rating-bar v-model="rating13" class="md-primary" :md-empty-icon="iconHome" :md-full-icon="iconHome" :md-icon-size="2"></md-rating-bar>
          </div> -->
          <!-- <div>
            <strong class="md-body-2">PNG:</strong>
            <md-rating-bar v-model="rating13" :md-empty-icon="iconHomeBack" :md-full-icon="iconHomeFront"></md-rating-bar>
            <md-rating-bar v-model="rating13" :md-empty-icon="iconHomeBack" :md-full-icon="iconHomeFront" :md-icon-size="2"></md-rating-bar>
          </div> -->
        <!-- </div>
      </div>
    </block-content> -->

  </div>
</page-content-back>
</template>

<script>
export default {
  data () {
    return {
      rating1: 5 * 0.70,
      rating2: 10 * 0.6,
      rating3: 7 * 0.2,
      rating4: 7 * 0.84,
      rating5: 7 * 0.7,
      rating6: 7 * 0.5,
      rating7: 5 * 0.90,
      rating8: 5 * 0.9,
      rating9: 5 * 0.18,
      rating10: 5 * 0.45,
      rating11: 5 * 0.82,
      rating12: 5 * 0.5,
      rating13: 5 * 0.7,
      rating14: 5 * 0.4,
      iconHome: require('assets/icon-menu.png'),
      iconHomeBack: require('assets/icon-home-back.png'),
      iconHomeFront: require('assets/icon-home-front.png')
    }
  },
  methods: {
    radioChanged (value) {
      console.log('radioChanged' + value)
    }
  }
}
</script>

<style lang="css">
</style>
