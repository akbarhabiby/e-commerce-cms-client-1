<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="/" class="brand-link">
      <img src="https://extrampuh.files.wordpress.com/2013/11/gabmar-modifikasi-mobil-ferrari-putih-555x370.jpg" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">CMS H8 Store</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img :src="`https://avatars.dicebear.com/api/bottts/${admin.split('@')[0]}.svg`" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a class="d-block">{{ admin }}</a>
        </div>
      </div>
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item">
            <router-link to="/products" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>Products</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/banners" class="nav-link">
              <i class="nav-icon fas fa-archive"></i>
              <p>Banners</p>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    admin () {
      return this.$store.state.currentAdmin
    }
  }
}
</script>
