<template>
<page-content-back page-title="Tabs">
  <div class="main-content">
    <p>Tabs enable content organization at a high level, such as switching between views, data sets, or functional aspects of an app.</p>
    <block-content block-title="Default">
      <md-tabs>
        <md-tab id="movies" md-label="Movies">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        </md-tab>

        <md-tab id="music" md-label="Music">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        </md-tab>


        <md-tab id="pictures" md-label="Pictures" md-tooltip="This is the pictures tab!">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
        </md-tab>
      </md-tabs>
    </block-content>
    <block-content block-title="Fixed">
      <md-tabs md-fixed>
        <md-tab id="movies" md-label="Movies">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        </md-tab>

        <md-tab id="music" md-label="Music">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        </md-tab>


        <md-tab id="pictures" md-label="Pictures">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
        </md-tab>
      </md-tabs>
    </block-content>
    <block-content block-title="Centered with Text and Icon">
      <md-tabs md-centered>
        <md-tab md-label="Movies" md-icon="ondemand_video">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        </md-tab>

        <md-tab md-label="Music" md-icon="music_note">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        </md-tab>

        <md-tab md-label="Pictures" md-icon="photo">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
        </md-tab>
      </md-tabs>

    </block-content>

    <block-content block-title="Aligned to the right">
      <md-tabs md-right>
        <md-tab md-icon="phone">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        </md-tab>

        <md-tab md-icon="favorite" md-disabled>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        </md-tab>

        <md-tab md-icon="near_me">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
        </md-tab>
      </md-tabs>
    </block-content>
  </div>
</page-content-back>
</template>

<script>
export default {}
</script>
<style lang="scss">
.md-tabs {
    margin-top: 10px;
}
</style>
