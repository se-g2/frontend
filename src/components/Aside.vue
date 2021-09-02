<template>
  <div>
    <el-menu
        style="width: 200px; min-height: calc(100vh - 50px)"
        :default-active="path"
        router
    >
      <el-menu-item index="/person">个人信息</el-menu-item>
      <el-menu-item index="/announce">公告信息</el-menu-item>
      <el-sub-menu>
        <template #title>订单信息</template>
        <el-menu-item index="/order">查看个人订单</el-menu-item>
        <el-menu-item index="/submit">新建订单</el-menu-item>
        <el-menu-item index="/score">订单打分</el-menu-item>
      </el-sub-menu>
        <el-sub-menu>
        <template #title>拼车订单</template>
        <el-menu-item index="/join">加入拼车</el-menu-item>
        <el-menu-item index="/cancel">取消拼车</el-menu-item>
      </el-sub-menu>
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
