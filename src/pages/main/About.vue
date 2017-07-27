<template>
<page-content page-title="About">
  <div class="main-content">

    <span class="md-title">&nbsp&nbsp&nbsp&nbsp项目简介</span>
    <span class="md-body-2">&nbsp&nbsp&nbsp&nbsp本项目是Vue Material样式的一个mobile demo，也是本人第一个web项目（虽然都是静态页面），完全是出于学习的目的。过程中当然遇到很多问题，好在都走通了。有些问题仍然没有想通，需要继续花时间学习。</span>

  </div>

  </div>

</page-content>
</template>

<script>
export default {
  data () {
    return {
      photo: require('assets/photo.jpg')
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

.main-content{
  padding: 10px;
  display: flex;
  flex-flow: column;
}

span{
  margin-top: 10px;
}
</style>
