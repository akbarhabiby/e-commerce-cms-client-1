<template>
  <div class="content-wrapper">
    <section class="content mt-3">
      <div class="card">
        <div class="card-body">
          <h3>List Products</h3>
          <div id="jsGrid1" class="jsgrid" style="position: relative; height: 100%; width: 100%;">
            <router-link to="/addproduct" class="btn btn-info">Add Product</router-link>
            <div class="jsgrid-grid-header jsgrid-header-scrollbar mt-3">
              <table class="jsgrid-table">
                <ProductCardHeader></ProductCardHeader>
              </table>
            </div>
          </div>
          <div class="jsgrid-grid-body" style="height: 821px;">
            <table class="jsgrid-table">
              <tbody>
                <ProductCard
                  v-for="(product, i) in products"
                  :key="product.id"
                  :product="product"
                  :i="i"
                ></ProductCard>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCardHeader from '@/components/ProductCardHeader'
import ProductCard from '../components/ProductCard'

export default {
  name: 'Product',
  components: {
    ProductCardHeader,
    ProductCard
  },
  methods: {
    addProduct () {
      this.$router.push('/products/add')
    },
    fetchPlaylist () {
      this.$store.dispatch('fetchProducts')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchPlaylist()
  }
}
</script>
