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
#app
  font-family: 'Lato', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  padding: 0px 30px
  color: #2c3e50
a
  color: #2c3e50
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
