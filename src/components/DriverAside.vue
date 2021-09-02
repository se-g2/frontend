<template>
  <div>
    <el-menu
        style="width: 200px; min-height: calc(100vh - 50px)"
        :default-active="path"
        router
    >
      <el-menu-item index="/driver/accept">接受订单</el-menu-item>
      <el-menu-item index="/driver/finish">结束订单</el-menu-item>
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
