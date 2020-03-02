<template>
  <div class="footer" v-show="dis">
    <nav class="footer-nav" id="footer-nav">
      <em class="footer-close icon-cancel icon-cancel-auto-full"  @click="dispeare"></em>
      <a class="footer-link" href="javascript:applink(2, 2, 0, ' ', ' ', ' ', 0, 0);">
        <img src="../images/icon.png" onerror="this.style.display = 'none';" />
        <h4>打开APP</h4>
        <h3>大角虫漫画</h3>
        <p>超有爱的日更原创国漫平台</p>
      </a>
    </nav>
  </div>
</template>
<script>
export default {
    data(){
        return {
            dis:true
        }
    },
    methods:{
        dispeare(){
            this.dis=false
        }
    }
};
</script>
<style scoped>
html {
  font-size: 50px;
  color: -internal-root-color;
}
* {
  margin: 0;
  padding: 0;
  outline: none;
  list-style: none;
}
h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
}
b, em, i {
    font-style: normal;
    font-weight: normal;
}
/*底部浮动栏*/
.footer-nav {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  height: 1.2rem;
  background: rgba(0, 0, 0, 0.75);
}
.footer-close {
  float: left;
  width: 0.76rem;
  height: 100%;
}
.icon-cancel {
    background-image: url(../images/close.png);
    background-repeat: no-repeat;
    background-position: center;
}

.footer-link {
  position: relative;
  display: block;
  margin-left: 0.76rem;
  height: 100%;
}
.footer-link img {
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -0.43rem;
  width: 0.86rem;
  height: 0.86rem;
}
.footer-link h3,
.footer-link p {
    padding-left: 1rem;
    color: #fff;
    text-align: left;
}
.footer-link h3 {
  padding-top: 0.29rem;
  font-size: 0.32rem;
  line-height: 0.32rem;
}
.footer-link p {
  padding-top: 0.12rem;
  font-size: 0.22rem;
  line-height: 0.22rem;
}
.footer-link h4 {
  position: absolute;
  top: 50%;
  right: 0.23rem;
  margin-top: -0.3rem;
  width: 1.96rem;
  height: 0.6rem;
  border-radius: 0.12rem;
  background: #eac80d;
  color: #5b4912;
  text-align: center;
  font-size: 0.26rem;
  line-height: 0.6rem;
}
</style>