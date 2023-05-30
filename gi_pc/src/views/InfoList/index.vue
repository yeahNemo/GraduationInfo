<template>
    <el-card style="margin: 5rem 5rem;">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="姓名">
            </el-table-column>
            <el-table-column prop="sex" label="性别">
            </el-table-column>
            <el-table-column prop="company" label="公司">
            </el-table-column>
            <el-table-column prop="career" label="岗位">
            </el-table-column>
            <el-table-column prop="salary" label="薪资">
            </el-table-column>
            <el-table-column prop="email" label="邮箱">
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
export default {
    async created() {
        const res = await this.$http.get(`/user/getPage`)
        console.log('res', res.data.data);
        this.tableData = res.data.data.list
    },
    data() {
        return {
            tableData: []
            // tableData: [{
            //     date: '2016-05-02',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }, {
            //     date: '2016-05-04',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1517 弄'
            // }, {
            //     date: '2016-05-01',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1519 弄'
            // }, {
            //     date: '2016-05-03',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1516 弄'
            // }]
        }
    }
}
</script>
<style></style>