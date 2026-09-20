<template>
    <div class="todo-add">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>待办事项</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-form ref="formData" :model="formData" :rules="rules" label-width="80px" label-position="left" style="margin-top: 20px">
        <el-form-item label="事项名称" prop="name">
          <el-input v-model="formData.name" placeholder="请输入事项名称"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="desc">
          <el-input type="textarea" v-model="formData.desc" placeholder="请输入描述"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addTodo">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        data () {
          var checkName = (rule, value, callback) => {
            if (!value) {
              return callback(new Error('请输入事项名称'));
            } else {
              callback();
            }
          };
          return {
            formData:{
              name: '',
              desc: ''
            },
            rules: {
              name: [
                { validator: checkName, trigger: 'blur' }
              ]
            }
          }
        },
      methods: {
        addTodo() {
          this.$axios.post('/todo',this.formData).then(res => {
            if(res.code == 200) {
              this.$message.success(res.msg)
              this.formData = { name: '', desc: '' }
            }
          })
        }
      }
    }
</script>

<style scoped lang="scss">
.todo-add {
  width: 600px;
}
</style>