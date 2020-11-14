<template>
  <form @submit.prevent="login">
    <div class="input-group mb-3">
      <input type="email" class="form-control" placeholder="Email" v-model="email">
      <div class="input-group-append">
        <div class="input-group-text">
          <span class="fas fa-envelope"></span>
        </div>
      </div>
    </div>
    <div class="input-group mb-3">
      <input type="password" class="form-control" placeholder="Password" v-model="password">
      <div class="input-group-append">
        <div class="input-group-text">
          <span class="fas fa-lock"></span>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- /.col -->
      <div class="col-4">
        <button type="submit" class="btn btn-primary btn-block">Sign In</button>
      </div>
      <!-- /.col -->
    </div>
  </form>
</template>

<script>
import Swal from 'sweetalert2'
import Toast from '@/toast/toast'

export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('admin', data.email)
          this.$router.push('/')
          Toast.fire({
            icon: 'success',
            title: 'Hello ' + this.email + '.',
            text: 'Welcome Back!'
          })
        })
        .catch(({ response }) => {
          const { message } = response.data
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message
          })
        })
    }
  }
}
</script>
