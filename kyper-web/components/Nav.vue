<template lang='pug'>
  .nav.logged-in(v-if='$store.state.appArea && $store.state.account.loggedIn')
    router-link.item.home(to='/app')
      h3 Kyper
    .item(@click='logout()')
      h4 Log out
  .nav.logged-out(v-else)
    router-link.item.home(to='/')
      h2 Kyper
    router-link.item(to='/register')
      h4 Apply
    router-link.item(to='/login')
      h4 Log in
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('account', [ 'logout' ]),
    loginPage () {
      return this.$router.currentRoute.path === '/login'
    },
  },
  computed: {
  },
}
</script>

<style lang='sass' scoped>
.nav
  background-color: var(--background-color-2)
  box-shadow: var(--shadow)
  display: flex
  align-items: center
  font-weight: 600
  height: 60px
  padding: 0px 30px
  white-space: nowrap
  .item
    cursor: pointer
    margin: 0px 10px
    transition: 0.15s var(--easing)
    transition-property: opacity, color
    text-decoration: none
    padding: 2px
    h2, h3, h4
      margin: 0px
    &:hover
      opacity: 0.75
  .home
    margin-right: auto

.router-link-exact-active
  color: var(--accent-color)
</style>
