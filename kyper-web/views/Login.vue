<template lang='pug'>
  .login
    h1 Log in
    TextBox.textbox(name='email' placeholder='Email' type='text')
    TextBox.textbox(name='password' placeholder='Password' type='password')
    p Don't have an account?&nbsp;
      router-link(to='/register') Register
    button(@click='login("/app")') Log in
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TextBox from '@/components/TextBox.vue'

export default {
  components: {
    TextBox,
  },
  methods: {
    ...mapActions('account', [ 'login', 'logout' ]),
  },
  computed: mapState('account', [ 'loggedIn' ]),
}
</script>

<style lang='sass' scoped>
.login
  width: 100%
  max-width: 350px
  padding: 20px
  margin: auto
  text-align: center
  .textbox
    width: 100%

</style>
