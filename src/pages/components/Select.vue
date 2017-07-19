<template>
<page-content-back page-title="Select">
  <div class="main-content">
    <p>A dropdown button selects between multiple selections. The select displays the current state and a down arrow.</p>
    <block-content block-title="Default">
      <div class="block-content">

          <md-input-container>
            <label for="movie">Movie</label>
            <md-select name="movie" id="movie" v-model="movie">
              <md-option value="fight_club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather_ii">Godfather II</md-option>
              <md-option value="godfather_iii">Godfather III</md-option>
              <md-option value="godfellas">Godfellas</md-option>
              <md-option value="pulp_fiction">Pulp Fiction</md-option>
              <md-option value="scarface">Scarface</md-option>
            </md-select>
          </md-input-container>

          <md-input-container>
            <label for="country">Country</label>
            <md-select name="country" id="country" v-model="country">
              <md-option value="australia">Australia</md-option>
              <md-option value="brazil">Brazil</md-option>
              <md-option value="japan">Japan</md-option>
              <md-option value="united_states">United States</md-option>
            </md-select>
          </md-input-container>

          <md-input-container>
            <label for="font">Font</label>
            <md-select name="font" id="font" v-model="font">
              <md-option value="arial">Arial</md-option>
              <md-option value="calibri">Calibri</md-option>
              <md-option value="cambria">Cambria</md-option>
              <md-option value="comic_sans">Comic Sans</md-option>
              <md-option value="consolas">Consolas</md-option>
              <md-option value="courier">Courier</md-option>
              <md-option value="droid_sans">Droid Sans</md-option>
              <md-option value="georgia">Georgia</md-option>
              <md-option value="helvetica">Helvetica</md-option>
              <md-option value="impact">Impact</md-option>
              <md-option value="roboto">Roboto</md-option>
              <md-option value="segoe_ui">Segoe UI</md-option>
              <md-option value="times_new_roman">Times New Roman</md-option>
              <md-option value="ubuntu">Ubuntu</md-option>
              <md-option value="verdana">Verdana</md-option>
            </md-select>
          </md-input-container>

          <md-input-container>
            <label for="food">Food</label>
            <md-select name="food" id="food" v-model="food">
              <md-subheader>Fruits</md-subheader>
              <md-option value="apples">Apples</md-option>
              <md-option value="bananas">Bananas</md-option>
              <md-option value="peaches">Peaches</md-option>
              <md-option value="oranges">Oranges</md-option>

              <md-subheader>Vegetables</md-subheader>
              <md-option value="carrots">Carrots</md-option>
              <md-option value="cucumbers">Cucumbers</md-option>

              <md-subheader>Baked Goods</md-subheader>
              <md-option value="apple_pie">Apple Pie</md-option>
              <md-option value="chocolate_cake">Chocolate Cake</md-option>
            </md-select>
          </md-input-container>
        </div>

        <md-button class="md-raised md-primary" @click.native="setPulpFiction">Set Pulp Fiction</md-button>

    </block-content>

    <block-content block-title="Multiple">
      <div class="block-content">
        <md-input-container>
          <label for="users=">Simple multiselect</label>
          <md-select name="option" id="option" multiple v-model="items">
            <md-option v-for="option in options" :key="option" :value="option">
              {{option.name}}
            </md-option>
          </md-select>
        </md-input-container>

        <div>Selected letters: {{items}}</div>

        <md-input-container>
          <label for="users">Users</label>
          <md-select name="users" id="users" multiple v-model="users">
            <md-subheader>Managers</md-subheader>
            <md-option value="jim_halpert">Jim Halpert</md-option>
            <md-option value="dwight_schrute">Dwight Schrute</md-option>
            <md-option value="michael_scott">Michael Scott</md-option>

            <md-subheader>Employees</md-subheader>
            <md-option value="pam_beesly">Pam Beesly</md-option>
            <md-option value="angela_martin">Angela Martin</md-option>
            <md-option value="kelly_kapoor">Kelly Kapoor</md-option>
            <md-option value="ryan_howard">Ryan Howard</md-option>
            <md-option value="kevin_malone">Kevin Malone</md-option>
            <md-option value="creed_bratton">Creed Bratton</md-option>
            <md-option value="oscar_nunez">Oscar Nunez</md-option>
            <md-option value="toby_flenderson">Toby Flenderson</md-option>
            <md-option value="stanley_hudson">Stanley Hudson</md-option>
            <md-option value="meredith_palmer">Meredith Palmer</md-option>
            <md-option value="phyllis_lapin_vance">Phyllis Lapin-Vance</md-option>
          </md-select>
        </md-input-container>

        <div>Selected users: {{users}}</div>
      </div>
    </block-content>

    <block-content block-title="Icon">
      <div class="block-content">
        <md-select name="users" id="users" multiple v-model="users">
          <md-button class="md-icon-button" md-menu-trigger slot="icon">
            <md-icon>people</md-icon>
          </md-button>

          <md-subheader>Managers</md-subheader>
          <md-option value="jim_halpert">Jim Halpert</md-option>
          <md-option value="dwight_schrute">Dwight Schrute</md-option>
          <md-option value="michael_scott">Michael Scott</md-option>

          <md-subheader>Employees</md-subheader>
          <md-option value="pam_beesly">Pam Beesly</md-option>
          <md-option value="angela_martin">Angela Martin</md-option>
          <md-option value="kelly_kapoor">Kelly Kapoor</md-option>
          <md-option value="ryan_howard">Ryan Howard</md-option>
          <md-option value="kevin_malone">Kevin Malone</md-option>
          <md-option value="creed_bratton">Creed Bratton</md-option>
          <md-option value="oscar_nunez">Oscar Nunez</md-option>
          <md-option value="toby_flenderson">Toby Flenderson</md-option>
          <md-option value="stanley_hudson">Stanley Hudson</md-option>
          <md-option value="meredith_palmer">Meredith Palmer</md-option>
          <md-option value="phyllis_lapin_vance">Phyllis Lapin-Vance</md-option>
        </md-select>

        <div>Selected users: {{users}}</div>
      </div>
    </block-content>

  </div>
</page-content-back>
</template>

<script>
export default {
  data () {
    return {
      movie: 'godfather',
      country: '',
      font: '',
      food: '',
      users: [],
      options: [{
        id: 1,
        name: 'a'
      },
      {
        id: 2,
        name: 'b'
      },
      {
        id: 3,
        name: 'c'
      },
      {
        id: 4,
        name: 'd'
      },
      {
        id: 5,
        name: 'e'
      }
      ],
      items: [],
      usersIcon: [],
      iconMenuOptions: {
        mdAlignTrigger: true
      }
    }
  },
  methods: {
    setPulpFiction () {
      this.movie = 'pulp_fiction'
    }
  }
}
</script>

<style lang="scss">
</style>
