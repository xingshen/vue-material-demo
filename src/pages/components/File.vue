<template>
<page-content-back page-title="File">
  <div class="main-content">
    <p>The file picker aim to select files like images, videos and other formats. They can have multiselection and use the devide file system to pick the file.</p>
    <block-content block-title="Single File">
      <div class="block-content">
        <md-input-container>
          <label>Single</label>
          <md-file v-model="single"></md-file>
        </md-input-container>

        <md-input-container>
          <md-file v-model="placeholder" placeholder="A nice input placeholder"></md-file>
        </md-input-container>

        <md-input-container>
          <md-file placeholder="Disabled" disabled></md-file>
        </md-input-container>

        <md-input-container>
          <label>Initial Value</label>
          <md-file v-model="initialValue"></md-file>
        </md-input-container>

        <md-input-container>
          <label>Multiple</label>
          <md-file v-model="multiple" multiple></md-file>
        </md-input-container>

        <md-input-container>
          <label>Only Images</label>
          <md-file v-model="onlyImages" accept="image/*"></md-file>
        </md-input-container>
      </div>
    </block-content>

  </div>
</page-content-back>
</template>

<script>
export default {
  data () {
    return {
      single: null,
      placeholder: null,
      initialValue: 'my-profile-picture.jpg',
      multiple: null,
      onlyImages: null
    }
  },

  methods: {
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    onOpen () {
      console.log('Opened')
    },
    onClose (type) {
      console.log('Closed', type)
    }
  }
}
</script>

<style lang="css">
</style>
