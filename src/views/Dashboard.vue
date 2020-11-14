<template>
  <div class="wrapper">
    <!-- * Start Navbar -->
    <Navbar></Navbar>
    <!-- * End Navbar -->
    <!-- * Start Sidebar -->
    <Sidebar></Sidebar>
    <!-- * End Sidebar -->
    <router-view />
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Sidebar
  },
  beforeRouteEnter (to, from, next) {
    const token = localStorage.getItem('access_token')
    const admin = localStorage.getItem('admin')
    if (!token || !admin) {
      next('/login')
    } else {
      next()
    }
  },
  created () {
    const accessToken = localStorage.getItem('access_token')
    const admin = localStorage.getItem('admin')
    this.$store.commit('setAccessToken', accessToken)
    this.$store.commit('setCurrentAdmin', admin)
  }
}
</script>
