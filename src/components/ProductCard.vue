<template>
  <tr class="jsgrid-row">
    <td class="jsgrid-cell jsgrid-align-center" style="width: 20px;">{{ i+1 }}</td>
    <td class="jsgrid-cell" style="width: 150px;">{{ product.name }}</td>
    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;"><img :src="product.image_url" width="150px"></td>
    <td class="jsgrid-cell jsgrid-align-center" style="width: 50px;">{{ stock }}</td>
    <td class="jsgrid-cell jsgrid-align-center" style="width: 50px;">{{ price }}</td>
    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;"><button class="btn btn-primary" @click="editProduct(product.id)">Edit</button> <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button></td>
  </tr>
</template>

<script>
import Swal from 'sweetalert2'
import Toast from '../toast/toast.js'

export default {
  name: 'ProductCard',
  props: ['product', 'i'],
  methods: {
    editProduct (id) {
      this.$store.commit('setCurrentProduct', this.product)
      this.$router.push('/editproduct/' + id)
    },
    deleteProduct (id) {
      Swal.fire({
        title: 'Delete?',
        text: 'Are you sure you want to delete this product?',
        icon: 'question',
        showCancelButton: true,
        reverseButtons: true
      })
        .then(({ isConfirmed }) => {
          if (isConfirmed) {
            return this.$store.dispatch('deleteProduct', id)
          }
        })
        .then(data => {
          if (data) {
            if (data.status === 200) {
              this.$store.dispatch('fetchProducts')
              Toast.fire({
                title: 'Success delete product',
                icon: 'success'
              })
            }
          }
        })
    }
  },
  computed: {
    price () {
      return `Rp. ${this.product.price}`
    },
    stock () {
      return `${this.product.stock} pcs`
    }
  }
}
</script>
