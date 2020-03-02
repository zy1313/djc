<template>
  <div>
    <!-- 头部 -->
    <div class="listHead">
      <div class="head-container box-size">
        <a href="javascript:;" class="back-btn">
          <i class="icon-back" @click="back"></i>
        </a>
        <p class="module-name text-ignore" end-id="61">{{detailslist.title}}</p>
        <a href="/djch5/View/center" class="login-btn" @click.prevent="tomine">
          <i class="icon-login"></i>
        </a>
        <a href="javascript:;" class="search-btn" @click.prevent="tosearch">
          <i class="icon-search"></i>
        </a>
      </div>
    </div>
    <div class="detailCont">
      <div id="detail-content" class="detail-content">
        <div class="detail-left icon-wait icon-wait-auto-full">
          <img
            onload="this.style.display='block';"
            :src="detailslist.thumb"
            style="display: block;"
          />
        </div>
        <div class="detail-right clearfix">
          <h2 class="detail-name text-ignore">{{detailslist.title}}</h2>
          <h3 class="detail-author text-ignore">{{detailslist.author}}</h3>
          <h3 class="detail-type text-ignore">
            <em>一周六更</em>
            <i>点击</i>
            <em v-text="(detailslist.hit_num/100000000).toFixed(1)+'亿'"></em>
            <i>人气</i>
            <em v-text="(detailslist.views/10000).toFixed(1)+'万'"></em>
          </h3>
          <h3
            class="detail-desc longtext-ignore text-normal"
          >{{detailslist.description}}</h3>
          <p class="detail-tag">
            <em class="icon-tag" data-label-id="2">少年</em>
            <em class="icon-tag" data-label-id="7">动作</em>
            <em class="icon-tag" data-label-id="9">悬疑</em>
          </p>
          <p class="detail-star">
            <i class="icon-star-a"></i>
            <i class="icon-star-a"></i>
            <i class="icon-star-a"></i>
            <i class="icon-star-a"></i>
            <i class="icon-star-b"></i>
          </p>
          <a
            href="https://m.dajiaochongmanhua.com/djch5/View/read?cid=45&amp;bookid=1378"
            class="detail-read"
          >开始阅读</a>
        </div>
      </div>
    </div>
    <img src="../images/d.png" alt="" class="details">
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../components/footer";
export default {
  data(){
    return {
        detailslist:""
    }
      },  
  methods: {
      tomine(){
      this.$router.push("/mine")
    },
     tosearch(){
      this.$router.push("/search")
    },
    back() {
      this.$router.back();
    }
  },
   components: {
    Footer
  },
  async created(){
      let {bookid}=this.$route.query;
      let {data}=await this.$axios.get("http://47.113.83.37:1920/goods/details",{params:{bookid}})
      this.detailslist=data[0]
      window.console.log(this.detailslist)
  }
};
</script>
<style lang="scss" scoped>
html {
  // font-size: 13.34vw
  font-size: 50px;
  color: -internal-root-color;
}
h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
}
* {
  margin: 0;
  padding: 0;
  outline: none;
  list-style: none;
}
b, em, i {
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
    .login-btn {
      position: absolute;
      top: 50%;
      width: 0.4rem;
      height: 0.4rem;
      margin-top: -0.2rem;
      right: 1.3rem;
      i {
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        background: url(../images/icon_me.png) no-repeat;
        background-size: 100%;
      }
    }
    .search-btn {
      position: absolute;
      top: 50%;
      width: 0.4rem;
      height: 0.4rem;
      margin-top: -0.2rem;
      right: 0.4rem;
      .icon-search {
        background-image: url(../images/search.png);
        background-repeat: no-repeat;
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        background-size: 100%;
      }
    }
  }
}
.detailCont {
  position: fixed;
  flex: 1;
  overflow: auto;
  top: 0.99rem;
  img {
    width: 100%;
    height: 100%;
    }
  .detail-content {
    padding: 0 0.24rem;
    border-top: 0.4rem solid #fff;
    background: #fff;
    font-size: .24rem;
    .icon-wait.icon-wait-auto-full {
      background-position: center center;
      background-size: 75% auto;
    }
    .detail-left {
      overflow: hidden;
      float: left;
      width: 2.63rem;
      height: 3.5rem;
      border-radius: 0.08rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      background-color: #f9f9f9;
    }
    .detail-right {
    position: relative;
    margin-left: 2.87rem;
    padding-top: .06rem;
    text-align: left;
    height: 3.5rem;
    h2 {
    font-size: .28rem;
    }
    .detail-name {
    width: 2.6rem;
    height: .3rem;
    line-height: .32rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }
   
     h3 {
    margin-top: .2rem;
    color: #333;
    }
    .detail-author{
    height: .22rem;
    line-height: .24rem;
    font-size: .2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }
    .detail-type  {
    height: .22rem;
    line-height: .24rem;
    font-size: .2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
        i{
            margin-left: .26rem;
            margin-right: .06rem;
            color: #a8b0b5;
        } 
    }
    .detail-desc {
    height: .5rem;
    line-height: .26rem;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: .2rem;
    color: #333;
    font-size: .24rem;
    }
    
    .detail-tag {
    margin-top: .24rem;
    font-size: .18rem;
    color: #a8b0b5;
        em {
        text-align: center;
        float: left;
        width: .76rem;
        height: .36rem;
        line-height: .36rem;
        margin-right: .24rem;
        background-size: 100% 100%;
        }
    }
    .detail-star {
    position: absolute;
    top: .06rem;
    right: 0;
    height: .28rem;
    i {
    float: left;
    width: .28rem;
    height: .28rem;
    margin-left: .03rem;
    background-size: 100% 100%;
    }
    .icon-star-a {
    background-image: url(../images/star.png);
    background-repeat: no-repeat;
    }
    .icon-star-b {
    background-image: url(../images/starb.png);
    background-repeat: no-repeat;
    }
    }
    .detail-read {
    position: absolute;
    text-align: center;
    left: 0;
    bottom: .06rem;
    width: 2.48rem;
    height: .74rem;
    line-height: .74rem;
    border-radius: .08rem;
    color: #fff;
    background: #ffb600;
    }
   
    }
  }
  
}
.details{
    position: relative;
    top: 5rem;
  } 
</style>