<template>
  <div>
    <div class="listHead">
      <div class="head-container box-size">
        <a href="javascript:;" class="back-btn">
          <i class="icon-back" @click="back"></i>
        </a>
        <p class="module-name text-ignore" end-id="61">登录</p>
        <a href="javascript:;" class="search-btn none">
          <i class="icon-search"></i>
        </a>
      </div>
    </div>
    <div class="login-content">
      <div class="login-img">
        <img src alt />
      </div>
      <div class="input-row inputAcc">
        <i></i>
        <input type="text" class="input-lgnum" placeholder="请输入手机号" v-model.trim="phone"/>
      </div>
      <div class="input-row inputPas">
        <i></i>
        <input type="password" class="input-lgpsd" placeholder="请输入密码(6-18位)" v-model.trim="password"/>
      </div>
      <div class="content-padded clearfix">
        <div class="link-area">
          <a class="forgetPassword">忘记密码</a>
        </div>

        <div>
          <a class="goRes" @click="toreg">注册</a>
        </div>
      </div>
      <div class="loginSuccess" id="Login" @click="loginBtn">登录</div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
    data() {
    return {
      password: "",
      phone: "",
      
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    toreg(){
        this.$router.push({name:"reg"})
    },
    async loginBtn() {
    // 点击登录
    let data = { phone: this.phone, password: this.password };
    if(!/^1[3-9]\d{9}$/.test(this.phone)){
        Toast('手机号码格式错误');
    }else if(this.password.length==0){
        Toast("密码不能为空")
    }else if(this.phone.length==0){
        Toast("用户名不能为空")
    }else{
        let res=await this.$axios.post(`http://47.113.83.37:1920/user/login`, data)
        window.console.log(res)
        if(res.data.status=="success"&&this.password){
            Toast('登录成功');
            localStorage.setItem("phone",this.phone)
            // 跳转
            localStorage.setItem("authorzion",res.data.token)
            this.$router.push("/home");
        }
        if(res.data.status=="error")Toast('用户名或登录密码不正确！');
    }
    
    },
  },
  created(){
    //   this.password=this.$route.query,password;
    //   this.phone=this.$route.query.phone;
    window.console.log(this.$route.query)
  }
};
</script>
<style lang="scss" scoped>
html {
  // font-size: 13.34vw
  font-size: 50px;
  color: -internal-root-color;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}
button,
input,
select,
textarea {
  border: none;
  font-size: 100%;
  font-family: "Microsoft YaHei", "Helvetica Neue", Helvetica, STHeiTi,
    sans-serif;
}
* {
  margin: 0;
  padding: 0;
  outline: none;
  list-style: none;
}
b,
em,
i {
  font-style: normal;
  font-weight: normal;
}
.listHead {
  background: #fff;
  * {
    display: block;
  }
  .box-size {
    // -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .head-container {
    // position: fixed;
    // z-index: 9999;
    background-color: white;
    width: 100%;
    height: 0.99rem;
    border-bottom: 1px solid #e4e4e4;
    padding: 0.3rem 0 0.29rem;
    .back-btn,
    .search-btn {
      position: absolute;
      width: 0.32rem;
      height: 0.4rem;
    }
    .back-btn {
      left: 0.4rem;
      i {
        display: block;
        width: 0.32rem;
        height: 0.4rem;
        background-position: 50% 50%;
        background-size: 100%;
      }
      .icon-back {
        background-image: url(../images/left.png);
        background-repeat: no-repeat;
      }
    }
    .module-name {
      width: 5rem;
      text-align: center;
      color: #333;
      position: absolute;
      font-size: 0.34rem;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    .text-ignore {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .search-btn {
      right: 0.4rem;
    }
  }
}
.login-content {
  .login-img {
    width: 2.87rem;
    height: 0.7rem;
    background: url(../images/login_logo.png) no-repeat;
    background-size: cover;
    margin: 0.94rem auto;
  }

  .input-row {
    position: relative;
    padding-left: 0.94rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0.6rem;
    font-size: 0.3rem;
    color: #cdcdcd;
    line-height: 0.78rem;
    width: 4.18rem;
    border-bottom: 1px solid #dfdfdf;
    i {
      position: absolute;
      top: 0.2rem;
      left: 0;
    }
    input {
      width: 100%;
      background: none;
    }
  }
  .inputAcc {
    i {
      display: inline-block;
      width: 0.38rem;
      height: 0.38rem;
      background: url(../images/login_icon_account.png) no-repeat;
      background-size: cover;
    }
  }
  .inputPas {
    margin-bottom: 0.3rem;
    i {
      display: inline-block;
      width: 0.38rem;
      height: 0.38rem;
      background: url(../images/login_icon_password.png) no-repeat;
      background-size: cover;
    }
  }
  .content-padded {
    font-size: 0.24rem;
    color: #666;
    width: 5.22rem;
    margin: 0 auto;
    margin-bottom: 0.6rem;
    .link-area {
      .forgetPassword {
        float: left;
      }
    }
    .goRes {
      float: right;
    }
  }
  .loginSuccess {
    width: 2.6rem;
    height: 0.88rem;
    background-color: #ffc107;
    border-radius: 0.03rem;
    color: #333;
    font-size: 0.3rem;
    text-align: center;
    line-height: 0.88rem;
    margin: 1rem auto 0;
  }
}
</style>