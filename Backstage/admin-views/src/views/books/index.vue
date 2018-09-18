<template>
    <div class="container">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="icon"
          label="封面"
          width="120">
          <template slot-scope="scope">
            <img :src="scope.row.icon" class="icon">
          </template>
        </el-table-column>
        <el-table-column
          prop="_id"
          label="ID"
          width="240">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="200">
        </el-table-column>
        <el-table-column label="操作" width="200px">
          <template slot-scope="scope">
            <el-button @click="handleDetails(scope.row)" size="small" type="primary">
              查看详细
            </el-button>
            <el-button @click="handleDelete(scope.row._id)" size="small" type="danger">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          tableData: []
        }
      },
      methods: {
        getBooks (pn) {
          this.$axios.get('/category',{pn: '2'}).then(res => {
            this.tableData = res.data
          })
        }
      },
      created () {
        this.getBooks()
      }
    }
</script>

<style scoped lang="scss">
.container {
  width: 750px;

  .icon {
    width: 100px;
    height: 100px;
  }
}
</style>
