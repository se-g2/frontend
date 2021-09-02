<template>
  <div>
    <el-menu
        style="width: 200px; min-height: calc(100vh - 50px)"
        :default-active="path"
        router
    >
      <el-sub-menu>
        <template #title>人员管理</template>
        <el-menu-item index="/admin/new">新增管理员</el-menu-item>
        <el-menu-item index="/admin/usernew">新增用户</el-menu-item>
        <el-menu-item index="/admin/usermodify">修改用户</el-menu-item>
        <el-menu-item index="/admin/userdelete">删除用户</el-menu-item>
      </el-sub-menu>
        <el-sub-menu>
        <template #title>载具管理</template>
        <el-menu-item index="/admin/vehiclemodify">修改载具</el-menu-item>
        <el-menu-item index="/admin/vehicledelete">删除载具</el-menu-item>
      </el-sub-menu>
        <el-sub-menu>
        <template #title>订单管理</template>
        <el-menu-item index="/admin/orderfinish">标记订单完成</el-menu-item>
        <el-menu-item index="/admin/orderdelete">取消订单</el-menu-item>
        <el-menu-item index="/admin/orderfeedback">读取关于订单的反馈</el-menu-item>
        <el-menu-item index="/admin/orderreply">回复针对订单的反馈</el-menu-item>
      </el-sub-menu>      
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "DriverAside",
  data() {
    return {
      user: {},
      path: this.$route.path   // 设置默认高亮的菜单
    }
  },
}
</script>

<style scoped>

</style>
