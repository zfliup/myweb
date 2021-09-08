<template>
  <div class="login">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item>
        <div style="font-size: 25px;color: #fff;">欢迎回来</div>
      </el-form-item>
      <el-form-item prop="userName">
        <el-input v-model="ruleForm.userName" autocomplete="false" prefix-icon="el-icon-user"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="false" prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        pass: '',
        userName: '',
      },
      rules: {
        pass: [
          {required: true, message: '请输入密码', trigger: 'change'}
        ],
        userName: [
          {required: true, message: '请输入账号', trigger: 'change'}
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleForm.userName === 'admin' && this.ruleForm.pass === '123456') {
            sessionStorage.setItem('info', JSON.stringify({userName: this.ruleForm.userName, pass: this.ruleForm.pass}))
            this.$router.push({path: '/MainPage'})
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="scss">
.login {
  background-image: url("../assets/img/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .demo-ruleForm {
    width: 360px;
    box-sizing: border-box;
    padding: 20px 40px;
    /*background: rgba(255,255,255,0.8);*/
    border-radius: 20px;
    /*box-shadow: 0px 0px 0px 1px;*/
    .el-input__inner {
      border-radius: 15px;
    }

    .el-button {
      width: 100%;
      border-radius: 15px;
    }
  }

}
</style>
