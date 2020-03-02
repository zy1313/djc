<template>
  <div>
    <div class="listHead">
      <div class="head-container box-size">
        <a href="javascript:;" class="back-btn">
          <i class="icon-back" @click="back"></i>
        </a>
        <p class="module-name text-ignore" end-id="61">注册</p>
        <a href="javascript:;" class="search-btn none">
          <i class="icon-search"></i>
        </a>
      </div>
    </div>
    <div class="login-content">
      <!-- <div class="login-img">
        <img src alt />
      </div>-->
      <p class="res-massages">欢迎来到大角虫星系 \(•ㅂ•)/♥</p>
      <div class="input-row inputAcc">
        <i></i>
        <input type="text" class="input-lgnum" placeholder="请输入手机号" v-model.trim="phone"/>
      </div>
      <div class="input-row inputcode">
        <i></i>
        <input class="input-rescode" placeholder="请输入验证码" />
        <span id="retcode" onclick="zt_retcode(1);">获取验证码</span>
      </div>
      <div class="input-row inputPas">
        <i></i>
        <input type="password" class="input-lgpsd" placeholder="请输入密码(6-18位)" v-model.trim="password"/>
      </div>
      <p class="agreeRes">
        *我已同意接受
        <a
          href="javascript:;"
          onclick="location.href = DjcUtils.getUrlGoTo('protocol');"
        >《大角虫漫画许可及服务协议》</a>
      </p>
      <div class="loginSuccess" id="Login" @click="regBtn">提交</div>
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
    async regBtn() {
      // 点击注册
      let data = { phone: this.phone, password: this.password };
      if (!/^1[3-9]\d{9}$/.test(this.phone)){
          Toast("手机号码格式错误");
      }else if(this.password.length>15 ||this.password.length<6){
          Toast("密码长度为6-15个字符");
      }else{
          let res = await this.$axios.post(`http://47.113.83.37:1920/user/reg`, data);
      window.console.log(res.data);
      if (res.data.status == "success" && this.password) {
          
        Toast("注册成功");
          // 跳转
        this.$router.push({name:"login",params:data});   
      } 
      if (res.data.status == "exit") Toast("手机号码已注册");
      if (res.data.status == "incomplete") Toast("请完善注册信息");
      } 
    }
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
  .res-massages {
    text-align: center;
    color: #333;
    font-size: 0.24rem;
    margin: 0 auto;
    margin-top: 0.42rem;
    margin-bottom: 0.42rem;
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
  .inputcode {
    i {
      display: inline-block;
      width: 0.38rem;
      height: 0.38rem;
      background: url(../images/login_icon_code.png) no-repeat;
      background-size: cover;
    }
    span {
      font-size: 0.26rem;
      color: #ffc107;
      float: right;
      height: 0.78rem;
      position: absolute;
      right: 0;
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
  .agreeRes {
    font-size: 0.24rem;
    color: #666;
    text-align: center;
    a {
      color: #ffc107;
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