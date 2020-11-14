<template>
  <div class="login-page">
    <div class="login-box">
    <!-- /.login-logo -->
    <div class="card card-outline card-primary">
      <div class="card-header text-center">
        <a href="./index2.html" class="h1">CMS H8<b> Store</b></a>
      </div>
      <div class="card-body">
        <p class="login-box-msg">Sign in to start your session</p>
        <LoginForm></LoginForm>
        <p class="mt-3">
          <a href="https://firebase.app" target="_blank" class="text-center">Go to Customer Page</a>
        </p>
      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
  </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'LoginPage',
  components: {
    LoginForm
  },
  beforeRouteEnter (to, from, next) {
    const token = localStorage.getItem('access_token')
    const admin = localStorage.getItem('admin')
    if (!token || !admin) {
      next()
    } else {
      next('/')
    }
  }
}
</script>
