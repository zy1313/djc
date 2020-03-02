<template>
  <div>
    <!-- 头部导航 -->
    <div class="header">
      <h1 class="logo">
        <a href="javascript:;" class="logo-btn"></a>
      </h1>
      <a href="/djch5/View/center" class="login-btn" @click.prevent="tomine">
        <i class="icon-login"></i>
      </a>
      <a href="javascript:;" class="search-btn" @click.prevent="tosearch">
        <i class="icon-search"></i>
      </a>
    </div>
    <div class="section">
      <!-- 轮播图 -->
      <div class="banner">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item style>
            <img src="http://cdn.517w.com/uploadfile/2017/1027/20171027040650707.jpg" alt />
          </van-swipe-item>
          <van-swipe-item style>
            <img src="http://cdn.517w.com/uploadfile/2017/1108/20171108104010177.jpg" alt />
          </van-swipe-item>
          <van-swipe-item style>
            <img src="http://cdn.517w.com/uploadfile/2017/1109/20171109021006803.jpg" alt />
          </van-swipe-item>
          <van-swipe-item style>
            <img src="http://cdn.517w.com/uploadfile/2017/1107/20171107104349367.jpg" alt />
          </van-swipe-item>
          <van-swipe-item style>
            <img src="http://cdn.517w.com/uploadfile/2017/1109/20171109020839236.jpg" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 一周人气 -->
      <div class="title-ctn">
        <h2 class="titlelist">一周人气</h2>
        <a href="javascript:;" class="more-btn popular-btn" @click="more1">更多</a>
      </div>
      <div
        class="swiper-wrapper wekrank-wrapper border-box"
        style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);"
      >
        <div
          class="swiper-slide wekrank-slide swiper-slide-active"
          v-for="item in week"
          :key="item.bookid"
          @click="todetails(item.bookid)"
        >
          <div class="wek-cartoon-ctn" :bookid="item.bookid">
            <img
              :src="item.thumb_3"
              class="wek-cartoon-img"
              onerror="this.src='/dacu_app/app/Public/images/wek-bg.png'"
            />
            <!-- <img src="/dacu_app/app/Public/images/wek-rank1.png" class="wek-rank-icon" /> -->
          </div>
          <div class="wek-infor">
            <p class="rank-number">{{item.rank_id}}</p>
            <div class="cartoon-infor">
              <p class="bookname">{{item.title}}</p>
              <p class="writename">{{item.author}}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 精挑细选 -->
      <div class="title-ctn">
        <h2 class="titlelist">精挑细选</h2>
        <a href="javascript:;" class="more-btn suggest-btn" @click="more2">更多</a>
      </div>

      <div class="manhua-ctn choose-ctn">
        <ul class="clearfix">
          <li
            class="border-box choose-list"
            bookid="item.bookid"
            v-for="item in sected"
            :key="item.bookid"
            @click="todetails(item.bookid)"
          >
            <div class="manhua-imgctn choose-imgctn">
              <img :src="item.thumb" class="choose-img" onerror="this.src=" __public__ images />
            </div>
            <div class="manhua-infor choose-infor border-box">
              <p class="manhua-bookname choose-bookname">{{item.title}}</p>
              <p class="manhua-writename choose-writename">{{item.author}}</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- 新作推荐 -->
      <div class="title-ctn">
        <h2 class="titlelist">新作推荐</h2>
        <a href="javascript:;" class="more-btn suggest-btn" @click="more3">更多</a>
      </div>
      <div class="manhua-ctn new-ctn">
      <ul class="clearfix">
        <li class="border-box manhua-list new-list" bookid="item.bookid" v-for="item in newed"
            :key="item.bookid" @click="todetails(item.bookid)">
          <div class="manhua-imgctn new-imgctn">
            <img
              :src="item.thumb"
              class="manhua-img new-img"
              onerror="this.src=/dacu_app/app/Public/images/wek-bg.png"
            />
          </div>
          <div class="manhua-infor choose-infor border-box">
            <p class="manhua-bookname new-bookname">{{item.title}}</p>
            <p class="manhua-writename new-writename">{{item.author}}</p>
          </div>
        </li>
       
        
   
      </ul>
    </div>
      <!-- 刚刚更新 -->
      <div class="title-ctn">
        <h2 class="titlelist">刚刚更新</h2>
        <a href="javascript:;" class="more-btn suggest-btn" @click="more4">更多</a>
      </div>
      <div class="manhua-ctn  updata-ctn">
      <ul class="clearfix">
        <li class="border-box manhua-list new-list" bookid="item.bookid" v-for="item in updataed"
            :key="item.bookid" @click="todetails(item.bookid)">
          <div class="manhua-imgctn new-imgctn">
            <img
              :src="item.thumb"
              class="manhua-img new-img"
              onerror="this.src=/dacu_app/app/Public/images/wek-bg.png"
            />
          </div>
          <div class="manhua-infor choose-infor border-box">
            <p class="manhua-bookname new-bookname">{{item.title}}</p>
            <p class="manhua-writename new-writename">{{item.author}}</p>
          </div>
        </li>
      </ul>
    </div>

    </div> 
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../components/footer";
export default {
  data() {
    return {
      week: "",
      sected: "",
      newed:"",
      updataed:"",
    };
  },
  components: {
    // HelloWorld
    Footer
  },
  methods: {
    tomine(){
      this.$router.push("/mine")
    },
     tosearch(){
      this.$router.push("/search")
    },
    // 获取首页的数据
    async getweeded() {
      let { data } = await this.$axios.get("http://47.113.83.37:1920/goods/week");
      this.week = data;
      // window.console.log(data);
    },
    async getsected() {
      let { data } = await this.$axios.get(
        "http://47.113.83.37:1920/goods/sected"
      );
      this.sected = data;
      // window.console.log(data);
    },
    async getnewed() {
      let { data } = await this.$axios.get(
        "http://47.113.83.37:1920/goods/newed"
      );
      this.newed = data;
      // window.console.log(data);
    },
    async getupdataed() {
      let { data } = await this.$axios.get(
        "http://47.113.83.37:1920/goods/updataed"
      );
      this.updataed = data;
      // window.console.log(data);
    },
    more1(){
      this.$router.push({name:"list",query:{cid:1,listname:"一周人气"}})
      // window.console.log(111)
    },
    more2(){
      this.$router.push({name:"list",query:{cid:2,listname:"精挑细选"}})
    },
    more3(){
      this.$router.push({name:"list",query:{cid:3,listname:"新品推荐"}})
    },
    more4(){
      this.$router.push({name:"list",query:{cid:4,listname:"刚刚更新"}})
    },
    todetails(bookid){
      this.$router.push({name:"details",query:{bookid}})
    }
  },
  created() {
    this.getweeded();
    this.getsected();
    this.getnewed();
    this.getupdataed();
  }
};
</script>
<style lang="scss">
html {
  // font-size: 13.34vw
  font-size: 50px;
  color: -internal-root-color;
}
* {
  margin: 0;
  padding: 0;
  outline: none;
  list-style: none;
}

.header {
  position: fixed;
  z-index: 9999;
  background-color: white;
  width: 100%;
  height: 1rem;
  border-bottom: 1px solid #e4e4e4;
  .logo {
    position: absolute;
    top: 50%;
    left: 0.4rem;
    height: 0.47rem;
    margin-top: -0.235rem;
    a {
      display: block;
      width: 1.96rem;
      height: 0.47rem;
      background: url(../images/index-logo.png) no-repeat;
      background-size: 100%;
    }
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
.section {
  background: #f9f9f9;
  position: relative;
  flex: 1;
  overflow: auto;
  top: 1rem;
  .banner {
    img {
      width: 100%;
      height: 3.88rem;
    }
  }
  .title-ctn {
    // display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    .titlelist {
      font-size: 0.3rem;
      font-weight: bold;
      color: #333;
      margin: 0.3rem 0 0 0.24rem;
    }
    .more-btn {
      text-decoration: none;
      font-size: 0.26rem;
      color: #666;
      margin: 0.3rem 0.24rem 0 0;
    }
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
    transition-timing-function: ease-out;
    margin: 0 auto;
    padding-top: 0.3rem;
    padding-left: 0.24rem;
    overflow: auto;
    .wekrank-slide {
      width: 1.8rem;
      margin-right: 0.36rem;
      flex-shrink: 0;
      height: 100%;
      position: relative;
      .wek-cartoon-ctn {
        width: 1.78rem;
        height: 1.78rem;
        margin-bottom: 0.2rem;
        .wek-cartoon-img {
          width: 1.78rem;
          height: 1.78rem;
          border: 1px solid #e4e4e4;
          border-radius: 8px;
        }
      }
      .wek-infor {
        // display: -webkit-flex;
        display: flex;
        .rank-number {
          font-size: 0.3rem;
          color: #f9c965;
          margin: 0.1rem 0.14rem 0.08rem;
        }
        .cartoon-infor {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          .bookname {
            font-size: 0.26rem;
            color: #333;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .writename {
            font-size: 0.22rem;
            color: #999;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }
  }
  // 精挑细选
  .manhua-ctn {
    margin-top: 0.3rem;
    padding: 0 0.24rem;
    overflow: hidden;
    ul {
      // display: -webkit-flex;
      display: flex;
      flex-wrap: wrap;
      margin-right: -0.24rem;
      margin-bottom: -0.24rem;
      .choose-list {
        width: 46%;
        border: 1px solid #e4e4e4;
        border-radius: 8px;
        margin-right: 0.24rem;
        margin-bottom: 0.24rem;
        background: #fff;
        overflow: hidden;
        box-sizing: border-box;
        .choose-imgctn {
          width: 100%;
          height: 2.12rem;
          .choose-img {
            width: 100%;
            height: 100%;
          }
        }
        .manhua-infor {
          padding: 0.16rem 0.2rem;
          box-sizing: border-box;
          .manhua-bookname {
            font-size: 0.26rem;
            color: #333;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .manhua-writename {
            font-size: 0.22rem;
            color: #999;
            margin-top: 0.08rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
      .manhua-list {
      width: 29%;
      border: 1px solid #e4e4e4;
      border-radius: 8px;
      margin-right: 0.24rem;
      margin-bottom: 0.24rem;
      background: #fff;
      overflow: hidden;
      box-sizing: border-box;
      .new-imgctn, .updata-imgctn {
        width: 100%;
        height: 2.9rem;
        background: url(../images/manhua-bg.png) no-repeat;
        background-size: 100% 100%;
         .manhua-img {
          width: 100%;
          height: 100%;
        }
      }
      .manhua-infor {
        padding: 0.16rem 0.20rem;
        box-sizing: border-box;
        .manhua-bookname {
          font-size: 0.26rem;
          color: #333;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .manhua-writename {
          font-size: 0.22rem;
          color: #999;
          margin-top: 0.08rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }

      }
  }
   
  } 
  .updata-ctn {
    margin-bottom: 1.5rem;
  }
}
</style>