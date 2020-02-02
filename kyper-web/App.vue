<template lang="pug">
  #app
    Nav
    transition(name='fade' mode='out-in')
      router-view
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'home',
  components: {
    Nav,
  },
}
</script>

<style lang='sass'>
body
  margin: 0px
#app
  font-family: 'Lato', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  // background-color: #26344E
  // background-color: #2c3e50
  background-color: #ffffff
#app, a
  color: #2c3e50
  // color: #ffffff
a
  text-decoration: none
p
  margin: 0px

.fade-enter-active, .fade-leave-active
  transition: all 0.1s ease-in-out
  transform: translateY(0px)
  opacity: 1

.fade-enter, .fade-leave-to
  transform: translateY(5px)
  opacity: 0

</style>
