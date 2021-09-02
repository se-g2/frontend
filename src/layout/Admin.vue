<template>
  <div>
    <AdminHeader></AdminHeader>
    <!-- 主体 -->
  <div style="display: flex">
    <!-- 侧边栏 -->
    <AdminAside></AdminAside>
    <!-- 内容 -->
    <router-view style="flex: 1"/>
  </div>
  </div>
</template>

<style>

</style>

<script>
import AdminHeader from "@/components/AdminHeader"
import AdminAside from "@/components/AdminAside"
export default{
  name: "Admin",
  components: {
    AdminHeader,
    AdminAside
  }
}
</script>