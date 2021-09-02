<template>
  <div>
    <el-card style="width: 40%; margin: 10px">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="出发地">
          <el-input v-model="form.departure"></el-input>
        </el-form-item>
        <el-form-item label="目的地">
          <el-input v-model="form.arrival"></el-input>
        </el-form-item>
        <el-form-item label="出发时间">
                <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.startTime" style="width: 100%;"></el-time-picker>
                    </el-col>
                    </el-form-item>
      </el-form>
      <div style="text-align: center">
        <el-button type="primary" @click="update">新建</el-button>
      </div>
    </el-card>

  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  name: "Submit",
  data() {
    return {
      form: {}
    }
  },
  methods: {
    update() {
        alert("新建成功！");
      request.put("/order/new", this.form).then(res => {
        console.log(res)
        if (res.ok) {
          this.$message({
            type: "success",
            message: "更新成功"
          })
          sessionStorage.setItem("user", JSON.stringify(this.form))
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
