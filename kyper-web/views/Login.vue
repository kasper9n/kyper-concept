<template lang='pug'>
  .login
    h1 Log in
    TextBox.textbox(name='email' placeholder='Email' type='text')
    TextBox.textbox(name='password' placeholder='Password' type='password')
    .row
      router-link(to='/reset-password') Forgot password?
      //- Button.btn(@click='login("/app")') Forgot password?
      Button.btn(@click='login("/app")') Log in
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TextBox from '@/components/TextBox.vue'
import Button from '@/components/Button.vue'

export default {
  components: {
    TextBox,
    Button,
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
  max-width: 390px
  padding: 20px
  margin: auto
  text-align: center
  .textbox
    width: 100%
  .row
    display: flex
    justify-content: space-between
    a
      margin-right: 10px
      display: flex
      align-items: center
    .btn
      margin-top: 0px
      margin: 0px

</style>
