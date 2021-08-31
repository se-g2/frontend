<template>
    <div style="width: 100%; height: 100vh; background-color: darkslateblue; overflow: hidden">
    <div style="width: 400px; margin: 100px auto">
        <div style="font-size: 30px; text-align: center; padding: 30px 0">欢迎验证</div>
      <el-form ref="form" :model="form" size="normal" :rules="rules">
        <el-form-item prop="userno">
          <el-input prefix-icon="el-icon-user-solid" v-model="form.userno" placeholder="请输入学号"></el-input>
        </el-form-item>
        <el-form-item prop="name">
          <el-input prefix-icon="el-icon-lock" v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-button style="width: 100%" type="primary" @click="verify">验证</el-button>    
      </el-form>
    </div>
    </div>
</template>

<script>
import request from "@/utils/request"

export default {
    name:'Verify',
    data(){
        return {
            form:{},
            rules: {
                userno: [
                    {required: true, message: '请输入学工号', trigger: 'blur'},
                ],
                name: [
                    {required: true, message: '请输入姓名', trigger: 'blur'},
                ],
            },
        }
    },
    methods:{
        verify(){
          this.$refs['form'].validate((valid) => {
            sessionStorage.setItem("user", JSON.stringify(this.form))  // 缓存用户信息
            this.$router.push({path:'/',query: {userno: this.form.userno}})  //登录成功之后进行页面的跳转，跳转到主页
              if (valid) {
                request.post("/verify", this.form).then(res => {
                if (res.ok) {//
                  this.$message({
                    type: "success",
                    message: "验证成功"
                })
                sessionStorage.setItem("user", JSON.stringify(this.form))  // 缓存用户信息
                this.$router.push({path:'/',query: {userno: this.form.userno}})  //登录成功之后进行页面的跳转，跳转到主页
                } else {//此处应该对应于各种出错码
                  this.$message({
                  type: "error",
                  message: res.msg
                  })
                }
               })
              }
              else{
                alert('submit!');
              }
            })
          },
    }
}
</script>

<style scoped>
</style>

