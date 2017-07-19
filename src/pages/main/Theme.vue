<template>
<page-content page-title="Theme">
  <div class="main-content">

    <p>Click change theme</p>

    <md-card md-theme="blue-grey" class="md-primary">
      <md-button v-on:click="switchTheme" name="blue-grey">blue-grey</md-button>
    </md-card>
    <md-card md-theme="cyan" class="md-primary">
      <md-button v-on:click="switchTheme" name="cyan">cyan</md-button>
    </md-card>
    <md-card md-theme="green" class="md-primary">
      <md-button v-on:click="switchTheme" name="green">green</md-button>
    </md-card>
    <md-card md-theme="indigo" class="md-primary">
      <md-button v-on:click="switchTheme" name="indigo">indigo</md-button>
    </md-card>
    <md-card md-theme="orange" class="md-primary">
      <md-button v-on:click="switchTheme" name="orange">orange</md-button>
    </md-card>
    <md-card md-theme="purple" class="md-primary">
      <md-button v-on:click="switchTheme" name="purple">purple</md-button>
    </md-card>
    <!-- <md-card md-theme="red" class="md-primary">
      <md-button v-on:click="switchTheme" name="red">red</md-button>
    </md-card> -->

  </div>

</page-content>
</template>

<script>
import Vue from 'vue'

export default {
  methods: {
    switchTheme: function (event) {
      Vue.material.setCurrentTheme(event.target.name)
    }
  }
}
</script>

<style lang="scss">
p {
    font-size: 20px;
    margin-bottom: 20px;
}
.md-card {
    margin-bottom: 20px;
}
</style>
