<template>
<page-content-back page-title="Radio">
  <div class="main-content">
    <p>Radio buttons allow the user to select one option from a set. Use radio buttons for exclusive selection if you think that the user needs to see all available options side-by-side.</p>
    <block-content block-title="Default">
      <div class="block-content">
        <div>
          <md-radio @change="radioChanged" v-model="radio1" id="my-test1" name="my-test-group1" md-value="1">My beautiful radio</md-radio>
          <md-radio @change="radioChanged" v-model="radio1" id="my-test2" name="my-test-group1" md-value="2">Another radio</md-radio>
          <md-radio @change="radioChanged" v-model="radio1" id="my-test3" name="my-test-group1" md-value="3">Another another radio</md-radio>
        </div>

        <div>
          <md-radio v-model="radio2" id="my-test4" name="my-test-group2" md-value="1" class="md-primary">Primary radio</md-radio>
          <md-radio v-model="radio2" id="my-test5" name="my-test-group2" md-value="2" class="md-primary">Another primary radio</md-radio>
          <md-radio v-model="radio2" id="my-test6" name="my-test-group2" md-value="3" class="md-primary">Another another primary radio</md-radio>
        </div>

        <div>
          <md-radio v-model="radio3" id="my-test7" name="my-test-group3" md-value="1" class="md-warn">Warn radio</md-radio>
          <md-radio v-model="radio3" id="my-test8" name="my-test-group3" md-value="2" class="md-warn">Another warn radio</md-radio>
          <md-radio v-model="radio3" id="my-test9" name="my-test-group3" md-value="3" class="md-warn">Another another warn radio</md-radio>
        </div>

        <div>
          <md-radio v-model="radio4" id="my-test10" name="my-test-group3" md-value="1">My beautiful radio</md-radio>
          <md-radio v-model="radio4" id="my-test11" name="my-test-group3" md-value="2" disabled>Disabled</md-radio>
          <md-radio v-model="radio4" id="my-test12" name="my-test-group3" md-value="3">Another radio</md-radio>
        </div>
      </div>
    </block-content>

    <block-content block-title="Themes">
      <div class="block-content">
        <md-theme md-name="orange">
          <md-radio v-model="radio5" id="my-test13" name="my-test-group4" md-value="1" class="md-primary">Orange radio</md-radio>
          <md-radio v-model="radio5" id="my-test14" name="my-test-group4" md-value="2" class="md-primary">Another Orange radio</md-radio>
          <md-radio v-model="radio5" id="my-test15" name="my-test-group4" md-value="3" class="md-primary">Another another Orange radio</md-radio>
        </md-theme>

        <md-theme md-name="brown">
          <md-radio v-model="radio6" id="my-test16" name="my-test-group4" md-value="1" class="md-primary">Brown radio</md-radio>
          <md-radio v-model="radio6" id="my-test17" name="my-test-group4" md-value="2" class="md-primary">Another Brown radio</md-radio>
          <md-radio v-model="radio6" id="my-test18" name="my-test-group4" md-value="3" class="md-primary">Another another Brown radio</md-radio>
        </md-theme>

        <md-theme md-name="green">
          <md-radio v-model="radio7" id="my-test19" name="my-test-group6" md-value="1" class="md-primary">Green radio</md-radio>
          <md-radio v-model="radio7" id="my-test20" name="my-test-group6" md-value="2" class="md-primary">Another Green radio</md-radio>
          <md-radio v-model="radio7" id="my-test21" name="my-test-group6" md-value="3" class="md-primary">Another another Green radio</md-radio>
        </md-theme>

        <md-theme md-name="teal">
          <md-radio v-model="radio8" id="my-test22" name="my-test-group3" md-value="1" class="md-primary">Teal radio</md-radio>
          <md-radio v-model="radio8" id="my-test23" name="my-test-group3" md-value="2" class="md-primary" disabled>Teal disabled radio</md-radio>
          <md-radio v-model="radio8" id="my-test24" name="my-test-group3" md-value="3" class="md-primary">Another another Teal radio</md-radio>
        </md-theme>
      </div>
    </block-content>

  </div>
</page-content-back>
</template>

<script>
export default {
  data () {
    return {
      radio1: 1,
      radio2: 2,
      radio3: 3,
      radio4: 1,
      radio5: 2,
      radio6: 3,
      radio7: 1,
      radio8: 2
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
