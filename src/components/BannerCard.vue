<template>
  <tr class="jsgrid-row">
    <td class="jsgrid-cell jsgrid-align-center" style="width: 20px;">{{ i }}</td>
    <td class="jsgrid-cell" style="width: 150px;">{{ banner.name }}</td>
    <td class="jsgrid-cell" style="width: 150px;">{{ banner.image_url }}</td>
    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;"><button class="btn btn-primary" @click.prevent="editBanner(banner.id)">Edit</button> <button class="btn btn-danger" @click.prevent="deleteBanner(banner.id)">Delete</button></td>
  </tr>
</template>

<script>
export default {
  name: 'BannerCard',
  props: ['i', 'banner'],
  methods: {
    editBanner(id) {
    },
    deleteBanner(id) {
    }
  }
}
</script>
