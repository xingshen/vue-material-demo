<template>
<page-content-back page-title="Switch">
  <div class="main-content">
    <p>Radio buttons allow the user to select one option from a set. Use radio buttons for exclusive selection if you think that the user needs to see all available options side-by-side.</p>
    <block-content block-title="Default">
      <div class="block-content">
        <md-switch v-model="checked0" id="my-test0" name="my-test0"></md-switch>
        <md-switch v-model="checked1" id="my-test1" name="my-test1" class="md-primary">Primary Color</md-switch>
        <md-switch v-model="checked2" id="my-test2" name="my-test2" class="md-warn">Warn Color</md-switch>
        <md-switch v-model="checked3" id="my-test3" name="my-test3" disabled>Disabled</md-switch>
      </div>
    </block-content>

    <block-content block-title="Witch type">
      <div class="block-content">
        <md-switch v-model="checked8" id="my-test8" name="my-test8">Default</md-switch>

        <form @click.stop.prevent="submit">
          <md-switch type="submit" v-model="checked9" id="my-test9" name="my-test9" class="md-primary">Submit</md-switch>
        </form>
      </div>
    </block-content>
    <block-content block-title="Themes">
      <div class="block-content">
        <md-switch md-theme="orange" v-model="checked4" id="my-test4" name="my-test4" class="md-primary"></md-switch>
        <md-switch md-theme="green" v-model="checked5" id="my-test5" name="my-test5" class="md-primary">Green Primary Color</md-switch>
        <md-switch md-theme="brown" v-model="checked6" id="my-test6" name="my-test6" class="md-primary">Brown Primary Color</md-switch>
        <md-switch md-theme="light-blue" v-model="checked7" id="my-test7" name="my-test7" class="md-primary" disabled>Light Blue Primary Color Disabled</md-switch>
      </div>
    </block-content>

  </div>
</page-content-back>
</template>

<script>
export default {
  data () {
    return {
      checked0: true,
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
      checked6: true,
      checked7: true,
      checked8: true,
      checked9: true,
      checked10: true
    }
  },
  methods: {
    submit () {
      alert('This switch submits the form')
    }
  }
}
</script>

<style lang="css">
</style>
