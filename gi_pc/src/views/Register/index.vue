<template>
    <div>
        <el-card class="box-card">
            <div slot="header">
                <span>注册</span>
            </div>
            <el-form :model="model" label-width="5rem" :rules="rules" ref="registerForm">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="model.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="model.password" :type="flag ? 'text' : 'password'">
                        <i slot="suffix" class="icon-style" :class="elIcon" autocomplete="auto" @click="flag = !flag" />
                    </el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="model.email"></el-input>
                </el-form-item>
                <el-form-item style="display: flex; justify-content: start;">
                    <el-button @click="submit" type="primary">注册</el-button>
                </el-form-item>
            </el-form>
            <div style="font-size:0.8rem; display: flex; justify-content: end;">
                <el-button type="text" @click="$router.push('/login')">
                    已有账号？
                </el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
import { successMsg, errorMsg } from '@/utils/message'
export default {
    computed: {
        elIcon() {
            return this.flag ? "el-icon-minus" : "el-icon-view";
        }
    },
    data() {
        return {
            flag: false,
            model: {
                username: "",
                password: "",
                email: ""
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, message: '长度大于3位', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, message: '长度大于6位', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: "输入邮箱！", trigger: "blur" },
                    { pattern: /^\w+@\w+\.\w+$/i, message: '检查格式！', trigger: 'blur' },
                ]
            }
        }
    },
    methods: {
        submit() {
            this.$refs['registerForm'].validate((result) => {
                if (result) {
                    this.$http.post('user/add', this.model).then(res => {
                        console.log(res);
                        successMsg('注册成功！')
                        this.$router.push('/login')
                    }).catch(e => {
                        console.log(e);
                    })
                } else {
                    return
                }
            });
        },
    },
}
</script>

<style scoped>
.box-card {
    width: 40rem;
    margin: 8rem auto;
}
</style>