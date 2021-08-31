<template>
  <div>
    <el-card style="width: 40%; margin: 10px">
      <el-form ref="form" :model="form" label-width="150px">
        <el-form-item label="id">
          <el-input v-model="form.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="avatar">
          <el-input v-model="profile.avatar"></el-input>
        </el-form-item>
        <el-form-item label="bio">
          <el-input v-model="profile.bio"></el-input>
        </el-form-item>
        <el-form-item label="schoolId">
          <el-input v-model="form.schoolId " disabled></el-input>
        </el-form-item>
        <el-form-item label="name">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="tele">
          <el-input v-model="form.tele" disabled></el-input>
        </el-form-item>
        <el-form-item label="score">
          <el-input v-model="form.score" disabled></el-input>
        </el-form-item>
        <el-form-item label="finishOrders">
          <el-input v-model="form.finishOrders" disabled></el-input>
        </el-form-item>
        <el-form-item label="like">
          <el-input v-model="form.like" disabled></el-input>
        </el-form-item>
        <el-form-item label="isDriver">
          <el-input v-model="form.isDriver" disabled></el-input>
        </el-form-item>
        <el-form-item label="isAdmin">
          <el-input v-model="form.isAdmin" disabled></el-input>
        </el-form-item>
        </el-form>
        <el-form ref="driverProfile" :model="driverProfile" label-width="150px" v-show="isDriver">
        <el-form-item label="identityCode">
          <el-input v-model="driverProfile.identityCode" disabled></el-input>
        </el-form-item>
        <el-form-item label="driverLicense">
          <el-input v-model="driverProfile.isDriver" disabled></el-input>
        </el-form-item>    
        <el-form-item label="availableTime">
          <el-input v-model="driverProfile.availableTime" disabled></el-input>
        </el-form-item>    
        </el-form>  
         <el-form ref="vechicles" :model="vechicles" label-width="150px" v-show="isDriver">  
        <el-form-item label="vehicles.id">
          <el-input v-model="vehicles.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="vehicles.brand">
          <el-input v-model="vehicles.brand" disabled></el-input>
        </el-form-item>
        <el-form-item label="vehicles.size">
          <el-input v-model="vehicles.size" disabled></el-input>
        </el-form-item>
        <el-form-item label="vehicles.color">
          <el-input v-model="vehicles.color" disabled></el-input>
        </el-form-item>
        <el-form-item label="vehicles.capacity">
          <el-input v-model="vehicles.capacity" disabled></el-input>
        </el-form-item>      
        <el-form-item label="vehicles.license">
          <el-input v-model="vehicles.license" disabled></el-input>
        </el-form-item>      
      </el-form>
      <div style="text-align: center">
        <el-button type="primary" @click="update">保存</el-button>
      </div>
    </el-card>

  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  name: "Person",
  data() {
    isDriver: false
    return {
      form: {},
      profile: {},
      driverProfile: {},
      vehicles: {}
    }
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      request.get("/user/info", {
      }).then(res => {
        this.form.id = res.data.id
        this.form.schoolId=res.data.schoolId
        this.form.name=res.data.name
        this.form.tele=res.data.tele
        this.form.score=res.data.score
        this.form.finishOrders=res.data.finishOrders
        this.form.like=res.data.like
        this.form.isDriver=res.data.isDriver
        this.form.isAdmin=res.data.isAdmin
        this.profile = res.data.profile
        this.driverProfile=res.data.driverProfile
        this.vehicles=res.data.vehicles
        this.isDriver=res.data.isDriver
      })
    },
    update() {
      request.put("/user/profile/modify", this.profile).then(res => {
        console.log(res)
        if (res.code === '0') {
          this.$message({
            type: "success",
            message: "更新成功"
          })
        } else {
          this.$message({
            type: "error",
            message: res.msg
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
