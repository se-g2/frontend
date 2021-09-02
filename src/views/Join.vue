<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="id"
      label="编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="creator"
      label="创建者"
      width="180">
    </el-table-column>
    <el-table-column
      prop="departure"
      label="离开地"
      width="180">
    </el-table-column>
    <el-table-column
      prop="arrival"
      label="到达地"
      width="180">
    </el-table-column>
    <el-table-column
      prop="startTime"
      label="出发时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="endTime"
      label="结束时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="distance"
      label="距离"
      width="180">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格"
      width="180">
    </el-table-column>
    <el-table-column
      prop="driver_identityCode"
      label="司机编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="180">
    </el-table-column>
    <el-table-column
      prop="complete"
      label="完成"
      width="180">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "Join",
    data() {
      return {
        tableData: [{
            id: 0,
            createTime: "2021-09-02T02:02:57.476Z",
            creator: 0,
            departure: "string",
            arrival: "string",
            startTime: "2021-09-02T02:02:57.476Z",
            endTime: "2021-09-02T02:02:57.476Z",
            distance: 0,
            price: 0,
            driver_identityCode: "string",
            status: "cancelled",
            complete: "false"
        },
        {
            id: 1,
            createTime: "2021-09-02T02:02:57.476Z",
            creator: 0,
            departure: "string",
            arrival: "string",
            startTime: "2021-09-02T02:02:57.476Z",
            endTime: "2021-09-02T02:02:57.476Z",
            distance: 0,
            price: 0,
            driver_identityCode: "string",
            status: "cancelled",
            complete: "false"
        },
        ]
      }
    },
}
</script>
