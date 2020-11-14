<template>
  <div class="content-wrapper">
    <!-- Main content -->
    <section class="content mt-3">
      <div class="container-fluid">
        <div class="row">
          <!-- left column -->
          <div class="col-md-12">
            <!-- jquery validation -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Add Product <small>For Customers</small></h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form id="quickForm" @submit.prevent="addProduct">
                <div class="card-body">
                  <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" placeholder="e.g: Apple iPhone 12 Pro Max" v-model="product.name">
                  </div>
                  <div class="form-group">
                    <label>Image URL</label>
                    <input type="text" class="form-control" placeholder="e.g: https://images.google.com/image.png" v-model="product.image_url">
                  </div>
                  <div class="form-group">
                    <label>Price</label>
                    <input type="number" class="form-control" placeholder="e.g: 12000000" v-model="product.price">
                  </div>
                  <div class="form-group">
                    <label>Stock</label>
                    <input type="number" class="form-control" placeholder="e.g: 12" v-model="product.stock">
                  </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            <!-- /.card -->
            </div>
          <!--/.col (left) -->
          <!-- right column -->

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import Toast from '@/toast/toast'

export default {
  name: 'AddProduct',
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    addProduct () {
      const payload = {
        data: {
          name: this.product.name,
          image_url: this.product.image_url,
          price: this.product.price,
          stock: this.product.stock
        },
        access_token: localStorage.getItem('access_token')
      }
      if (payload.data.price >= 0 && payload.data.stock >= 0) {
        this.$store.dispatch('addProduct', payload)
          .then(_ => {
            Toast.fire({
              title: 'Success add new Product!',
              icon: 'success'
            })
            this.$router.push('/products')

            this.product.name = ''
            this.product.image_url = ''
            this.product.price = ''
            this.product.stock = ''
          })
          .catch(err => {
            Swal.fire({
              title: 'Oopss...',
              text: err.response.data.message.join(','),
              icon: 'error'
            })
          })
      } else {
        Swal.fire({
          title: 'Oopss...',
          text: 'Input cannot be minus',
          icon: 'error'
        })
      }
    }
  }
}
</script>
