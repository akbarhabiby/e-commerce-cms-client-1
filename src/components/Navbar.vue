<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item d-none d-sm-inline-block">
        <a href="/" @click.prevent="changePage('/products')" class="nav-link">Products</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="/" @click.prevent="changePage('/banners')" class="nav-link">Banners</a>
      </li>
    </ul>
    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <button class="btn btn-danger" @click="logout">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import Swal from 'sweetalert2'
import Toast from '../toast/toast'

export default {
  name: 'Navbar',
  methods: {
    changePage (pageURL) {
      this.$router.push(pageURL)
    },
    logout () {
      Swal.fire({
        icon: 'question',
        title: 'Good Bye...',
        text: 'Are you sure you want to log out?',
        showCancelButton: true,
        reverseButtons: true
      })
        .then(({ isConfirmed }) => {
          if (isConfirmed) {
            localStorage.removeItem('access_token')
            localStorage.removeItem('admin')
            this.$router.push('/login')
            Toast.fire({
              icon: 'success',
              title: 'Logout Successfully!'
            })
          }
        })
    }
  }
}
</script>
