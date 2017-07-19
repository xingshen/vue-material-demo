import Vue from 'vue'
import PageContent from './components/PageContent'
import PageContentBack from './components/PageContentBack'
import BlockContent from './components/BlockContent'

Vue.component('page-content', PageContent)
Vue.component('page-content-back', PageContentBack)
Vue.component('block-content', BlockContent)

var VueMaterial = require('vue-material')
require('vue-material/dist/vue-material.css')
require('vue-material/dist/vue-material.js')
Vue.use(VueMaterial)

Vue.material.registerTheme({
  default: {
    primary: 'red',
    accent: 'pink'
  },
  blue: {
    primary: 'blue',
    accent: 'pink'
  },
  indigo: {
    primary: 'indigo',
    accent: 'pink'
  },
  brown: {
    primary: 'brown',
    accent: 'green'
  },
  purple: {
    primary: 'purple',
    accent: 'blue'
  },
  orange: {
    primary: 'orange',
    accent: 'purple'
  },
  green: {
    primary: 'green',
    accent: 'pink'
  },
  'light-blue': {
    primary: 'light-blue',
    accent: 'yellow'
  },
  teal: {
    primary: 'teal',
    accent: 'orange'
  },
  'blue-grey': {
    primary: 'blue-grey',
    accent: 'blue'
  },
  cyan: {
    primary: 'cyan',
    accent: 'pink'
  },
  red: {
    primary: 'red',
    accent: 'pink'
  },
  white: {
    primary: 'white',
    accent: 'blue'
  },
  grey: {
    primary: {
      color: 'grey',
      hue: 300
    },
    accent: 'indigo'
  }

})
Vue.material.setCurrentTheme('indigo')
