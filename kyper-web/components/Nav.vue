<template lang='pug'>
  div
    .nav.logged-in(v-if='$store.state.appArea && $store.state.account.loggedIn')
      router-link.home(to='/')
        p Kyper
      router-link.home(to='/app')
        p Kyper dash
      .clickable(@click='logout()')
        p Log out
    .nav.logged-out(v-else)
      router-link.home(to='/')
        p Kyper
      router-link(to='/login')
        p Log in
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('account', [ 'logout' ]),
  },
}
</script>

<style lang='sass' scoped>
.nav
  display: flex
  align-items: center
  font-weight: 700
  padding: 10px 30px
  .home
    font-size: 26px
    margin-right: auto
  .clickable
    cursor: pointer

.router-link-exact-active
  color: #1ac781
</style>
