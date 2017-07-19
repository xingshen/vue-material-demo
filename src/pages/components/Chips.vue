<template>
<page-content-back page-title="Chips">
  <div class="main-content">
    <p>Checkboxes allow the user to select multiple options from a set.</p>
    <block-content block-title="Single Chips">
      <div class="block-content">
        <md-chip>Marcos Moura</md-chip>
        <md-chip md-deletable>Luiza Ivanenko</md-chip>
      </div>
    </block-content>

    <block-content block-title="Static">
      <div class="block-content">
        <md-chips v-model="fruits" md-static>
          <template scope="chip">{{ chip.value }}</template>
        </md-chips>
      </div>
    </block-content>
    <block-content block-title="Static">
      <div class="block-content">
        <md-chips v-model="contacts" md-input-placeholder="Add a contact">
          <template scope="chip">{{ chip.value }}</template>
        </md-chips>
      </div>
    </block-content>

    <block-content block-title="Static">
      <div class="block-content">
        <md-chips v-model="cities" :md-max="5" md-input-placeholder="Cities...">
          <template scope="chip">
        <span>{{ chip.value }}</span>
        <small v-if="chip.value === 'Amsterdam'">(favorite)</small>
      </template>
        </md-chips>
      </div>
    </block-content>
  </div>
</page-content-back>
</template>

<script>
export default {
  data () {
    return {
      contacts: ['Marcos Moura'],
      fruits: ['Orange', 'Apple', 'Pineapple'],
      cities: ['Amsterdam', 'London', 'Tokio']
    }
  }

}
</script>
