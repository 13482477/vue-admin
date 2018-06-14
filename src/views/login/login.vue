<template>
  <div class="login-container">
    <div class="login-form-container">
      <el-form :model="loginForm" ref="loginForm" :rules="rules" label-width="100px" size="mini" class="demo-ruleForm">
        <el-form-item prop="username" label-width="0px">
          <label>用户名</label>
          <el-input type="text" v-model="loginForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password" label-width="0px">
          <label>密码</label>
          <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-button type="primary" v-on:click="submitForm('loginForm')">提交</el-button>
          <el-button type="primary" plain v-on:click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import loginService from '@/service/loginService';

export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const loginResult = loginService.login(this.$store, this.loginForm.username, this.loginForm.password);
          if (loginResult != null) {
            this.$router.push('/main');
          } else {
            alert('login failed');
          }
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;

.login-container {
  background-color: $bg;
  color: #eee;
  position: fixed;
  height: 100%;
  width: 100%;
}

.login-form-container {
  width: 300px;
  position: absolute;
  height: 400px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.login-form-container label {
  font-size: large;
}

</style>
