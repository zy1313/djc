<template>
  <div>
    <div class="listHead">
      <div class="head-container box-size">
        <a href="javascript:;" class="back-btn">
          <i class="icon-back" @click="back"></i>
        </a>
        <p class="module-name text-ignore" end-id="61"></p>
        <a href="javascript:;" class="search-btn none">
          <i class="icon-search"></i>
        </a>
      </div>
    </div>
    <div class="minecontainer">
      <div class="head-img" @click="tologin">
        <img src="#" onerror="this.style.display='none';" class="none" style="display: none;" />
      </div>
    </div>
    <div class="user-name" @click="tologin" v-text="text"></div>
    <img src="../images/mine3.png" alt="">
  </div>
</template>
<script>
export default {
  data(){
    return {
      text:"请登录"
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
    tologin(){
      if(this.text=="请登录"){
        this.$router.push({name:"login"})
      }else{
        let istrue = confirm("您确定要注销吗?");
        if (istrue) {
          localStorage.removeItem("phone")
          this.text="请登录"
        }
        
      }
      
    }
  },
  created(){
    if(localStorage.getItem("phone").length){
        this.text=localStorage.getItem("phone")
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
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 0.99rem; 
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
  }
}
.minecontainer{
    position: relative;
    height: 3.6rem;
    margin-bottom: 0.16rem;
    background: url(../images/mine1.png) no-repeat;
    background-size: 100%;
    .head-img {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 1.4rem;
    height: 1.4rem;
    margin-left: -.74rem;
    border: #fff solid .04rem;
    border-radius: 50%;
    background: #fff url(../images/userhead.png) 50% 50% no-repeat;
    background-size: 100%;
}
}
.user-name {
    color: #333;
    font-size: 0.32rem;
    text-align: center;
    margin-bottom: 0.12rem;
}
</style>