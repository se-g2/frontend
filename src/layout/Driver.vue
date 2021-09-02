<template>
  <div>
    <DriverHeader></DriverHeader>
    <!-- 主体 -->
  <div style="display: flex">
    <!-- 侧边栏 -->
    <DriverAside></DriverAside>
    <!-- 内容 -->
    <router-view style="flex: 1"/>
  </div>
  </div>
</template>

<style>

</style>

<script>
import DriverHeader from "@/components/DriverHeader"
import DriverAside from "@/components/DriverAside"
export default{
  name: "Driver",
  components: {
    DriverHeader,
    DriverAside
  }
}
</script>