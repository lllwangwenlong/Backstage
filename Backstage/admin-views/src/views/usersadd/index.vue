<template>
    <div class="users-add">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" placeholder="请输入用户名" style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" placeholder="请输入密码" style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="form.nickname" placeholder="请输入昵称" style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item label="个人邮箱">
          <el-input v-model="form.email" placeholder="请输入个人邮箱" style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item label="个人签名">
          <el-input type="textarea" v-model="form.desc" placeholder="请输入个人签名" style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item label="上传头像">
          <el-input v-model="form.avatar"  style="width: 400px"></el-input>
          <!--<el-upload-->
            <!--class="avatar-uploader"-->
            <!--action="https://jsonplaceholder.typicode.com/posts/"-->
            <!--:show-file-list="false"-->
            <!--:on-success="handleAvatarSuccess"-->
            <!--:before-upload="beforeAvatarUpload">-->
            <!--<img v-if="form.avatar" :src="form.avatar" class="avatar">-->
            <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
          <!--</el-upload>-->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addUsers">立即添加</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        data () {
          return {
            form:{
              username: '',
              password: '',
              desc: '',
              email: '',
              nickname: '',
              avatar: ''
            }
          }
        },
      methods: {
        // handleAvatarSuccess(res, file) {
        //   this.avatar = URL.createObjectURL(file.raw);
        // },
        // beforeAvatarUpload(file) {
        //   const isJPG = file.type === 'image/jpeg';
        //   const isLt2M = file.size / 1024 / 1024 < 2;
        //
        //   if (!isJPG) {
        //     this.$message.error('上传头像图片只能是 JPG 格式!');
        //   }
        //   if (!isLt2M) {
        //     this.$message.error('上传头像图片大小不能超过 2MB!');
        //   }
        //   return isJPG && isLt2M;
        // },
        addUsers() {
          this.$axios.post('/user',this.form).then(res => {
            if(res.code == 200) {
              this.$message.success("添加成功")
            }
          })
        }
      }
    }
</script>

<style scoped lang="scss">
.users-add {
  .avatar-uploader {
    .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }
}
</style>
