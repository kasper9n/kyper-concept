<template lang='pug'>
.dashboard(v-title='"Dashboard - Kyper"')
  p Logged in? {{ loggedIn }}
  p email {{ email }}
  p firstName {{ firstName }}
  p lastName {{ lastName }}
  button(@click='login()') Log in
  button(@click='logout()') Log out
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions('account', [ 'login', 'logout' ]),
  },
  computed: mapState('account', [ 'loggedIn', 'email', 'firstName', 'lastName' ]),
}
</script>

<style lang='sass' scoped>
</style>
