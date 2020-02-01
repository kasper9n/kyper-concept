<template lang='pug'>
  .nav
    router-link.home(to='/')
      p Kyper
    router-link(to='/login')
      p Log in
</template>

<style lang='sass' scoped>
.nav
  display: flex
  align-items: center
  font-weight: 700
  .home
    font-size: 26px
    margin-right: auto

.router-link-exact-active
  color: #1ac781
</style>
