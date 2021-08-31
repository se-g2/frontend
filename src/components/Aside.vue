<template>
  <div>
    <el-menu
        style="width: 200px; min-height: calc(100vh - 50px)"
        :default-active="path"
        router
    >
      <el-menu-item index="/person">个人信息</el-menu-item>
      <el-menu-item index="/announce">公告信息</el-menu-item>
      <el-menu-item index="/order">订单信息</el-menu-item>
      <el-menu-item index="/news">新闻管理</el-menu-item>
      <el-submenu index="1" v-if="user.role === 1">
        <template #title>系统管理</template>
        <el-menu-item index="/user">用户管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
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
