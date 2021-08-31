<template>
    <div style="width: 100%; height: 100vh; background-color: darkslateblue; overflow: hidden">
    <div style="width: 400px; margin: 100px auto">
        <div style="font-size: 30px; text-align: center; padding: 30px 0">欢迎登录</div>
      <el-form ref="form" :model="form" size="normal" :rules="rules">
        <el-form-item prop="number">
          <el-input prefix-icon="el-icon-user-solid" v-model="form.number" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input prefix-icon="el-icon-lock" v-model="form.code" placeholder="请输入验证码"></el-input>
        </el-form-item>
      <el-row>
        <el-button style="width: 50%"  type="primary" @click="getValidcode">获取验证码</el-button>
        <el-button style="width: 45%" type="primary" @click="login">登 录</el-button>
      </el-row>      
      </el-form>
    </div>
    </div>
</template>

<script>
import request from "@/utils/request"

export default {
    name:'Login',
    data(){
        return {
            form:{},
            rules: {
                number: [
                    {required: true, message: '请输入手机号', trigger: 'blur'},
                ],
                code: [
                    {required: true, message: '请输入验证码', trigger: 'blur'},
                ],
            },
        }
    },
    methods:{
        login(){
          this.$refs['form'].validate((valid) => {
              if (valid) {
                request.post("/auth/tele/code", this.form).then(res => {
                if (res.ok) {//
                  this.$message({
                    type: "success",
                    message: "登录成功"
                })
                this.$router.push("/verify")  //登录成功之后进行页面的跳转，跳转到用户身份验证
                } else {
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
    getValidcode() {
          if(this.form.number){
          request.post("/auth/tele/request", this.form.number).then(res => {
          console.log(res)
          if (res.ok) {
          this.$message({
            type: "success",
            message: "获取验证码成功"
          })
        } else {
          this.$message({
            type: "error",
            message: res.msg
          })
        }
      })
          }
          else{
              alert('submit number!');
          }
    }
    }
}
</script>

<style scoped>
</style>

