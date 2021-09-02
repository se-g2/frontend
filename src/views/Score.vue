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
          <el-button type="primary" plain @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-dialog title="提示" v-model="dialogVisible" width="30%">
      <el-form :model="form" label-width="120px">
        <el-form-item label="编号">
          <el-input v-model="form.id" style="width: 80%" disabled></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="form.price" style="width: 80%" disabled></el-input>
        </el-form-item>
        <el-form-item label="评分">
                <el-col :span="11">
                    <el-rate v-model="form.score" :colors="colors"></el-rate>
                    </el-col>
        </el-form-item>
      </el-form>
      <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="save">确 定</el-button>
          </span>
      </template>
    </el-dialog>
</div>
</template>

<script>
  export default {
    name: "Score",
    data() {
      return {
        currentIndex: 0,
        dialogVisible: false,
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
    load() {
      request.get("/order/rating", {
      }).then(res => {
        this.tableData = res.data
      })
    },
    save() {
      this.tableData[this.currentIndex].score=this.form.score
      this.dialogVisible=false
      if (this.form.id) {  // 更新
        request.post("/order/rating", this.form).then(res => {
          console.log(res)
          if (res.ok) {
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
          this.load() // 刷新表格的数据
          this.dialogVisible = false  // 关闭弹窗
        })
      } else {  // 新增
        request.post("/user", this.form).then(res => {
          console.log(res)
          if (res.code === '0') {
            this.$message({
              type: "success",
              message: "新增成功"
            })
          } else {
            this.$message({
              type: "error",
              message: res.msg
            })
          }

          this.load() // 刷新表格的数据
          this.dialogVisible = false  // 关闭弹窗
        })
      }

    },
    handleEdit(index, row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.currentIndex=index
      this.dialogVisible = true
    },
    }
}
</script>
