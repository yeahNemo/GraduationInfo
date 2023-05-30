<template>
    <div>
        <el-card class="info-form">
            <div slot="header">
                <span>信息收集</span>
            </div>
            <el-form ref="form" :model="form" label-width="80px" :rules="rules">
                <el-form-item prop="name" label="姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item prop="sex" label="性别">
                    <el-select v-model="form.sex" placeholder="请选择性别">
                        <el-option label="男" value="男"></el-option>
                        <el-option label="女" value="女"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="career" label="从事事业">
                    <el-input v-model="form.career"></el-input>
                </el-form-item>
                <el-form-item prop="company" label="公司单位">
                    <el-input v-model="form.company"></el-input>
                </el-form-item>
                <el-form-item prop="salary" label="薪资">
                    <el-input v-model="form.salary"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { getUserId } from '@/utils/auth';
import { successMsg, errorMsg } from '@/utils/message';
export default {
    data() {
        let validSex = (rule, value, callback) => {
            // 直接用value 获取不到选中的值 
            // 所以直接 用HTML中 v-model 绑定的值来判断 是否有值
            if (this.form.sex === '') {
                callback(new Error('请选择性别'))
            } else {
                callback()
            }
        }
        return {
            form: {
                name: '',
                career: '',
                sex: '',
                company: '',
                salary: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                sex: [
                    { required: true, validator: validSex, message: '请选择性别', trigger: 'change' }
                ],
                company: [
                    { required: true, message: '请输入公司', trigger: 'blur' }
                ],
                career: [
                    { required: true, message: '请输入从事事业', trigger: 'blur' }
                ],
                salary: [
                    { required: true, message: '请输入薪资', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        onSubmit() {
            this.$refs['form'].validate(async (result) => {
                if (result) {
                    this.form['id'] = getUserId()
                    const res = await this.$http.post('/user/update', this.form)
                    successMsg('填报成功')
                } else {
                    errorMsg('检查填写！')
                }
            })
        }
    }
}
</script>

<style>
.info-form {
    margin: 10rem 20rem
}
</style>