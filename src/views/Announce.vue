<template>
  <el-table
    row-key="date"
    ref="filterTable"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="id"
      label="id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="title"
      label="title"
      width="180">
    </el-table-column>
    <el-table-column
      prop="publish"
      label="publish"
      width="180"
      sortable
      column-key="publish"
      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler"
      >
    </el-table-column>
    <el-table-column
      prop="update"
      label="update"
      sortable
      width="180"
      column-key="update"
      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler"
    >
    </el-table-column>
    <el-table-column
      prop="category"
      label="category"
      width="100"
      :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template #default="scope">
        <el-tag
          :type="scope.row.category === '家' ? 'primary' : 'success'"
          disable-transitions>{{scope.row.category}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      label="content"
      width="100">
      <template #default="scope">
        <el-button @click="handleClick(scope.row.content)" type="text">内容查看</el-button>
      </template>
    </el-table-column>
  </el-table>

</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: 0,
          publish: '2016-05-02',
          title: '王小虎',
          update: '2016-05-02',
          category: '家',
          content: 'sssssss'
        }, {
          id: 1,
          publish: '2016-05-04',
          title: '王小虎',
          update: '2016-05-02',
          category: '公司',
          content: 'sssssss'
        }, {
          id: 2,
          publish: '2016-05-01',
          title: '王小虎',
          update: '2016-05-02',
          category: '家',
          content: 'sssssss'
        }, {
          id: 3,
          publish: '2016-05-03',
          title: '王小虎',
          update: '2016-05-02',
          category: '公司',
          content: 'sssssss'
        }]
      }
    },
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('publish');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.category === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      handleClick(content){
        this.$alert(content, 'content', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
</script>