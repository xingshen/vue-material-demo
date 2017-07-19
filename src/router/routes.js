import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

const About = require('page/main/About')
const Theme = require('page/main/Theme')
const Components = require('page/main/Components')
const Avatar = require('components/Avatar')
const BottomBar = require('components/BottomBar')
const Button = require('components/Button')
const ButtonToggle = require('components/ButtonToggle')
const Tabs = require('components/Tabs')
const Card = require('components/Card')
const CheckBox = require('components/CheckBox')
const Chips = require('components/chips')
const Dialog = require('components/dialog')
const File = require('components/file')
const Icon = require('components/icon')
const ImageLoader = require('components/imageloader')
const InkRipple = require('components/inkripple')
const Input = require('components/input')
const List = require('components/list')
const Menu = require('components/menu')
const Progress = require('components/progress')
const Radio = require('components/radio')
const RatingBar = require('components/ratingbar')
const Select = require('components/select')
const Sidenav = require('components/sidenav')
const Snackbar = require('components/snackbar')
const SpeedDial = require('components/speeddial')
const Spinner = require('components/spinner')
const Switch = require('components/switch')
const Toolbar = require('components/toolbar')
const Tooltip = require('components/tooltip')
const Whiteframe = require('components/whiteframe')

// const main = [
//   {
//     path: '/',
//     name: 'introduction',
//     component: Introduction
//   }
// ]

const test = [
//   {
//   path: '/',
//   name: 'test',
//   component: require('../test/PageContent1')
// },
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/theme',
    name: 'theme',
    component: Theme
  },
  {
    path: '/components',
    name: 'components',
    component: Components
  },
  {
    path: '/components/avatar',
    name: 'avatar',
    component: Avatar
  }, {
    path: '/components/bottom-bar',
    name: 'bottom-bar',
    component: BottomBar
  }, {
    path: '/components/button',
    name: 'button',
    component: Button
  }, {
    path: '/components/button-toggle',
    name: 'button-toggle',
    component: ButtonToggle
  }, {
    path: '/components/tabs',
    name: 'tabs',
    component: Tabs
  }, {
    path: '/components/card',
    name: 'card',
    component: Card
  }, {
    path: '/components/checkbox',
    name: 'checkbox',
    component: CheckBox
  }, {
    path: '/components/chips',
    name: 'chips',
    component: Chips
  }, {
    path: '/components/dialog',
    name: 'dialog',
    component: Dialog
  }, {
    path: '/components/file',
    name: 'file',
    component: File
  }, {
    path: '/components/icon',
    name: 'icon',
    component: Icon
  }, {
    path: '/components/image-loader',
    name: 'image-loader',
    component: ImageLoader
  }, {
    path: '/components/ink-ripple',
    name: 'ink-ripple',
    component: InkRipple
  }, {
    path: '/components/input',
    name: 'input',
    component: Input
  }, {
    path: '/components/list',
    name: 'list',
    component: List
  }, {
    path: '/components/menu',
    name: 'menu',
    component: Menu
  }, {
    path: '/components/progress',
    name: 'progress',
    component: Progress
  }, {
    path: '/components/radio',
    name: 'radio',
    component: Radio
  }, {
    path: '/components/rating-bar',
    name: 'rating-bar',
    component: RatingBar
  }, {
    path: '/components/select',
    name: 'select',
    component: Select
  }, {
    path: '/components/sidenav',
    name: 'sidenav',
    component: Sidenav
  }, {
    path: '/components/snackbar',
    name: 'snackbar',
    component: Snackbar
  }, {
    path: '/components/speeddial',
    name: 'speeddial',
    component: SpeedDial
  }, {
    path: '/components/spinner',
    name: 'spinner',
    component: Spinner
  }, {
    path: '/components/switch',
    name: 'switch',
    component: Switch
  }, {
    path: '/components/toolbar',
    name: 'toolbar',
    component: Toolbar
  }, {
    path: '/components/tooltip',
    name: 'tooltip',
    component: Tooltip
  }, {
    path: '/components/whiteframe',
    name: 'whiteframe',
    component: Whiteframe
  }
]

Vue.use(Router)

export default new Router({
  routes: [].concat(test)
})
