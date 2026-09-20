<template>
  <div class="container">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>待办事项</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form ref="formData" :model="formData" :rules="rules" label-width="80px" style="margin-top: 20px; width: 600px;">
      <el-form-item label="事项名称" prop="name">
        <el-input v-model="formData.name" placeholder="请输入事项名称"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" v-model="formData.desc" placeholder="请输入描述信息"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addTodo">添加待办</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="todoList" border style="width: 100%; margin-top: 20px;">
      <el-table-column prop="name" label="事项名称" min-width="200"></el-table-column>
      <el-table-column prop="desc" label="描述" min-width="300"></el-table-column>
      <el-table-column prop="createdAt" label="创建时间" width="200"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  const STORAGE_KEY = 'todo_items'
  export default {
    data () {
      var validateName = (rule, value, callback) => {
        if (!value || !value.trim()) {
          callback(new Error('事项名称不能为空'))
        } else {
          callback()
        }
      }
      return {
        formData: {
          name: '',
          desc: ''
        },
        rules: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ]
        },
        todoList: []
      }
    },
    methods: {
      loadTodos () {
        try {
          const list = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
          this.todoList = Array.isArray(list) ? list : []
        } catch (e) {
          this.todoList = []
        }
      },
      saveTodos () {
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todoList))
        } catch (e) {
          this.$message.error('保存失败，请检查浏览器存储')
          return false
        }
        return true
      },
      addTodo () {
        this.$refs.formData.validate(valid => {
          if (!valid) {
            return false
          }
          const item = {
            id: Date.now() + '_' + Math.random().toString(36).slice(2, 8),
            name: this.formData.name.trim(),
            desc: (this.formData.desc || '').trim(),
            createdAt: this.formatTime(new Date())
          }
          this.todoList.unshift(item)
          if (!this.saveTodos()) {
            this.todoList.shift()
            return
          }
          this.$message.success('待办事项创建成功')
          this.resetForm()
        })
      },
      resetForm () {
        this.formData.name = ''
        this.formData.desc = ''
      },
      formatTime (date) {
        const pad = n => (n < 10 ? '0' + n : '' + n)
        return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate()) + ' ' + pad(date.getHours()) + ':' + pad(date.getMinutes()) + ':' + pad(date.getSeconds())
      }
    },
    created () {
      this.loadTodos()
    }
  }
</script>

<style scoped lang="scss">
.container {
  width: 100%;
}
</style>