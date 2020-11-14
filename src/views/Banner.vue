<template>
  <div class="content-wrapper">
    <!-- Main content -->
    <section class="content mt-3">
      <div class="container-fluid">
        <div class="card card-info">
          <div class="card-header">
            <h3 class="card-title">Add Category</h3>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form class="form-horizontal">
            <div class="card-body">
              <div class="form-group row">
                <label for="category" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="category" placeholder="Category">
                </div>
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <button type="submit" class="btn btn-info">Add</button>
            </div>
            <!-- /.card-footer -->
          </form>
        </div>
      </div>
      <div class="card">
        <!-- /.card-header -->
        <div class="card-body">
          <h3>List Categories</h3>
          <div id="jsGrid1" class="jsgrid" style="position: relative; height: 100%; width: 100%;">
            <div class="jsgrid-grid-header jsgrid-header-scrollbar">
              <table class="jsgrid-table">
                <tr class="jsgrid-header-row">
                  <th class="jsgrid-header-cell jsgrid-header-sortable" style="width: 20px;">No</th>
                  <th class="jsgrid-header-cell jsgrid-header-sortable" style="width: 150px;">Name</th>
                  <th class="jsgrid-header-cell jsgrid-align-center jsgrid-header-sortable" style="width: 100px;">Actions</th>
                </tr>
              </table>
            </div>
            <div class="jsgrid-grid-body" style="height: 821px;">
              <table class="jsgrid-table">
                <tbody>
                  <tr class="jsgrid-row">
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 20px;">1</td>
                    <td class="jsgrid-cell" style="width: 150px;">Otto Clay</td>
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;"><button class="btn btn-primary">Edit</button> <button class="btn btn-danger">Delete</button></td>
                    </tr>
                  <tr class="jsgrid-alt-row">
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 20px;">2</td>
                    <td class="jsgrid-cell" style="width: 150px;">Connor Johnston</td>
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;"><button class="btn btn-primary">Edit</button> <button class="btn btn-danger">Delete</button></td>
                  </tr>
                  <tr class="jsgrid-row">
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 20px;">3</td>
                    <td class="jsgrid-cell" style="width: 150px;">Lacey Hess</td>
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;"><button class="btn btn-primary">Edit</button> <button class="btn btn-danger">Delete</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>
