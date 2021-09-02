<template>
<div style="padding: 10px">
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    >
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
      prop="score"
      label="评分"
      width="180"
      >
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
          <el-button type="primary" plain @click="handleDelete(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  export default {
    name: "Cancel",
    data() {
      return {
        form:{},
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
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
            score: 0
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
            score: 0
        },
        ]
      }
    },
    methods:{
    handleDelete(index) {
        this.tableData.splice(index, 1)
        this.$alert('确认删除？', '警告！', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        })
    },
    }
}
</script>
