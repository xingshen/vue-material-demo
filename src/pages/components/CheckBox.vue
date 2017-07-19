<template>
<page-content-back page-title="CheckBox">
  <div class="main-content">
    <p>Checkboxes allow the user to select multiple options from a set.</p>
    <block-content block-title="Default">
      <div class="block-content">
        <md-checkbox id="my-test1" name="my-test1" v-model="checkbox">Regular Checkbox</md-checkbox>
        <md-checkbox id="my-test2" name="my-test2" v-model="checkbox" class="md-primary">Primary Color</md-checkbox>
        <md-checkbox id="my-test3" name="my-test3" v-model="checkbox" class="md-warn">Warn Color</md-checkbox>
        <md-checkbox id="my-test4" name="my-test4" v-model="checkbox" disabled>Disabled</md-checkbox>
      </div>
    </block-content>

    <block-content block-title="Themes">
      <div class="block-content">
        <md-checkbox md-theme="orange" id="my-test5" name="my-test5" v-model="checkbox2" class="md-primary">Primary Orange</md-checkbox>
        <md-checkbox md-theme="green" id="my-test6" name="my-test6" v-model="checkbox2" class="md-primary">Primary Green</md-checkbox>
        <md-checkbox md-theme="light-blue" id="my-test7" name="my-test7" v-model="checkbox2" class="md-primary">Primary Light Blue</md-checkbox>
        <md-checkbox md-theme="indigo" id="my-test8" name="my-test8" v-model="checkbox2" class="md-primary">Primary Indigo</md-checkbox>
        <md-checkbox md-theme="brown" id="my-test9" name="my-test9" v-model="checkbox2" class="md-primary" disabled>Primary Brown Disabled</md-checkbox>
      </div>
    </block-content>

  </div>
</page-content-back>
</template>

<script>
export default {
  data () {
    return {
      checkbox: false,
      checkbox2: true
    }
  }

}
</script>

<style lang="scss">

</style>
