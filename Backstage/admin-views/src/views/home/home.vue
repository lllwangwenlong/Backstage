<template>
    <div class="container">
      <div class="header">
        <h2 class="header-title">云书后台管理系统</h2>
        <img src="http://pbl.yaojunrong.com/FiC8ZOpJDzsI5-9HHZPmnAm1WGAo" alt="" class="header-photo">
      </div>
      <div class="nav">
        <el-menu
          :router="true"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="/home/index">首页</el-menu-item>
              <el-menu-item index="/login">登录页</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="/home/users">用户管理</el-menu-item>
              <el-menu-item index="/home/userslist">用户列表</el-menu-item>
              <el-menu-item index="/home/usersadd">用户添加</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">分页管理</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">图书管理</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped lang="scss">
.container {
  .header {
    position: relative;
    margin-left: 200px;
    height: 80px;
    line-height: 60px;
    text-align: center;

    .header-title {
      font-size: 20px;
      color: #333;
      font-weight: 400;
    }

    .header-photo{
      position: absolute;
      top: 5px;
      right: 20px;
      bottom: 5px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #000;
    }
  }

  .nav {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    border-right: 1px solid #f1f1f1;
    background-color: #545c64;
  }

  .main-content {
    margin-left: 200px;
    padding: 15px;
  }
}
</style>
