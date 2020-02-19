<template lang='pug'>
.page
  .centered
    h1.title Page missing
    p.text If found, please&nbsp;
      router-link(to='/') return home
</template>

<script>
export default {
  title: '404',
}
</script>

<style lang='sass' scoped>
.link
  display: flex
  align-items: center
.page
  padding: 30px
  max-width: 390px
  text-align: center
  display: flex
  flex-direction: column
  justify-content: center
  .title
    margin: 0px
    margin-bottom: 5px
  .text
    margin: 0px
</style>
