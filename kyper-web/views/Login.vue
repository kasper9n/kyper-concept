<template lang='pug'>
  .login
    h1 Logged in? {{ loggedIn }}
    button(@click='login()') Log in
    button(@click='logout()') Log out
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions('account', [ 'login', 'logout' ]),
  },
  computed: mapState('account', [ 'loggedIn' ]),
}
</script>

<style lang='sass' scoped>
</style>
