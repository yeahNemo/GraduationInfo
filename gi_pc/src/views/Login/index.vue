<template>
    <div>
        <el-card class="box-card">
            <div slot="header">
                <span>登录</span>
            </div>
            <div style="padding-right:3rem;">
                <el-form :model="model" label-width="5rem" :rules="rules" ref="registerForm">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="model.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="model.password" :type="flag ? 'text' : 'password'">
                            <i slot="suffix" class="icon-style" :class="elIcon" autocomplete="auto"
                                @click="flag = !flag"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="验证码" prop="validateCode">
                        <el-row type="flex">
                            <el-input v-model="model.validateCode"></el-input>
                            <vertifyCode :validate-code.sync="validateCode"></vertifyCode>
                        </el-row>
                    </el-form-item>
                    <el-form-item style="display: flex; justify-content: center;">
                        <el-button @click="submit" type="primary">登录</el-button>
                        <el-button @click="$router.push('/register')" style="margin-left:5rem">注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
        <el-button @click="changeTheme">
            切换主题
        </el-button>
    </div>
</template>

<script>
import { setToken, setUserId } from '@/utils/auth';
import { successMsg, errorMsg } from '@/utils/message';
export default {
    inject: ['changeSkin'],
    components: {
        vertifyCode: () => import("@/components/VertifyCode"),
    },
    computed: {
        elIcon() {
            return this.flag ? "el-icon-minus" : "el-icon-view";
        }
    },
    data() {
        return {
            flag: false,
            validateCode: '',
            model: {
                username: "",
                password: "",
                validateCode: '',
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
                validateCode: [
                    { required: true, message: '请输入验证码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        changeTheme() {
            this.changeSkin()
        },
        submit() {
            this.$refs['registerForm'].validate(async (result) => {
                if (result) {
                    // 验证登录
                    if (this.validateCode.toLowerCase() === this.model.validateCode.toLowerCase()) {
                        await this.$http.post('/user/login', this.model).then(async res => {
                            console.log(res);
                            // 保存ID
                            setUserId(res.data.data.id)
                            // setToken(res.data.data.tokenHead + ' ' + res.data.data.token)
                            // console.log('userInfo:', res.data.data.userInfo);
                            // this.$store.commit('setUserInfo', res.data.data.userInfo)
                            // this.$store.commit('setUserRole', res.data.data.userRole)
                            // 开启WebSocket服务
                            // this.initSocket(res.data.data.userInfo.username)
                            this.$router.push('/info')
                            successMsg('登录成功')
                        })
                    } else {
                        errorMsg('验证码错误')
                        return
                    }
                } else {
                    errorMsg('检查填写！')
                    return
                }

            });
        },
    },

}
</script>

<style scoped>
.icon-style {
    margin-right: 8px;
}

.box-card {
    width: 30rem;
    margin: 13rem auto;
}
</style>