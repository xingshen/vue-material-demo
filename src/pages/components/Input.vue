<template>
<page-content-back page-title="Input">
  <div class="main-content">
    <p>Inputs allow users to input text and usually appear in forms. Users may enter text, numbers, or mixed-format types of input.</p>
    <block-content block-title="Regular fields">
      <div class="block-content">

        <form novalidate @submit.stop.prevent="submit">
          <md-input-container>
            <label>Initial value</label>
            <md-input v-model="initialValue"></md-input>
          </md-input-container>

          <!-- <md-input-container>
            <label>Autocomplete (with fetch)</label>
            <md-autocomplete :fetch="fetchFunction"></md-autocomplete>
          </md-input-container> -->

          <md-input-container>
            <label>With label</label>
            <md-input placeholder="My nice placeholder"></md-input>
          </md-input-container>

          <md-input-container md-inline>
            <label>Inline field</label>
            <md-input></md-input>
          </md-input-container>

          <md-input-container>
            <label>Number</label>
            <md-input type="number"></md-input>
          </md-input-container>

          <md-input-container>
            <label>Textarea</label>
            <md-textarea></md-textarea>
          </md-input-container>

          <md-input-container>
            <label>Disabled</label>
            <md-input disabled></md-input>
          </md-input-container>
        </form>

      </div>
    </block-content>
    <block-content block-title="Passwords">
      <div class="block-content">
        <form novalidate @submit.stop.prevent="submit">
          <md-input-container>
            <label>Regular Password</label>
            <md-input type="password"></md-input>
          </md-input-container>

          <md-input-container md-has-password>
            <label>Password Reveal</label>
            <md-input type="password"></md-input>
          </md-input-container>
        </form>
      </div>
    </block-content>

    <block-content block-title="Icons">
      <div class="block-content">
        <form novalidate @submit.stop.prevent="submit">
          <md-input-container>
            <md-icon class="md-warn">
              warning
              <md-tooltip>Be careful. You're almost broken!</md-tooltip>
            </md-icon>
            <label>Money</label>
            <md-input type="text"></md-input>
            <md-icon>attach_money</md-icon>
          </md-input-container>

          <md-input-container>
            <md-icon>phone</md-icon>
            <label>Phone</label>
            <md-input type="tel"></md-input>
          </md-input-container>

          <md-input-container>
            <md-icon>speaker_notes</md-icon>
            <label>Notes</label>
            <md-textarea></md-textarea>
          </md-input-container>
        </form>
      </div>
    </block-content>

    <block-content block-title="Required and Errors">
      <div class="block-content">

        <form novalidate @submit.stop.prevent="submit">
          <md-input-container>
            <label>Required</label>
            <md-input required></md-input>
          </md-input-container>

          <md-input-container class="md-input-invalid">
            <label>Error</label>
            <md-input required></md-input>
          </md-input-container>

          <md-input-container class="md-input-invalid">
            <label>Error with message</label>
            <md-input required></md-input>

            <span class="md-error">Validation message</span>
          </md-input-container>

          <md-input-container class="md-input-invalid">
            <label>Textarea with error</label>
            <md-textarea></md-textarea>

            <span class="md-error">Textarea validation message</span>
          </md-input-container>
        </form>
      </div>
    </block-content>


    <block-content block-title="Character counter">
      <div class="block-content">
        <form novalidate @submit.stop.prevent="submit">
          <md-input-container>
            <label>Textarea</label>
            <md-textarea maxlength="70"></md-textarea>
          </md-input-container>

          <md-input-container>
            <label>Input</label>
            <md-input maxlength="20"></md-input>
          </md-input-container>
        </form>
      </div>
    </block-content>
    <block-content block-title="Themes">
      <div class="block-content">

        <form novalidate @submit.stop.prevent="submit">
          <md-input-container md-theme="green">
            <label>Green - Input</label>
            <md-input></md-input>
          </md-input-container>

          <md-input-container md-theme="red">
            <label>Red - Textarea</label>
            <md-textarea></md-textarea>
          </md-input-container>
        </form>
      </div>
    </block-content>
  </div>
</page-content-back>
</template>

<script>
export default {
  data () {
    return {
      initialValue: 'My initial value',
      autocompleteValue: 'auto complete value',
      list: [
        'avatar', 'blue arrow', 'cow boy'
      ]
    }
  },
  methods: {
    fetchFunction (param) {
      // param = { queryParam: query }

      // 'fetchAutocomplete' should return a Promise.

      // md-autocomplete will call fetchAutocomplete and pass
      // 'param' as an argument.
      // the 'param' is composed by a query param and
      // a query.
    }
  }

}
</script>

<style lang="scss">
.md-input-container {
    width: 100%;
}
</style>
