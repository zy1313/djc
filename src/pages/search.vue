<template>
  <div>
    <div class="listHead">
      <div class="head-container box-size">
        <a href="javascript:;" class="back-btn">
          <i class="icon-back" @click="back"></i>
        </a>
        <div class="form-ctn">
          <span class="search-icon icon-search"></span>
          <input
            type="text"
            name="search-bar"
            class="search-bar border-box"
            placeholder="请输入漫画名/作者名"
            v-model="search"
            @keyup.13="tosearch"
          />
          <span class="cancel-btn none"></span>
        </div>
        <a href="javascript:;" class="search-btn" @click.prevent="tosearch">
          <i class="icon-search">搜索</i>
        </a>
      </div>
    </div>
    <section>
      <div class="hot-sh-ctn border-box">
        <h2 class="hot-sh-title">热门搜索</h2>
        <div class="hot-content-ctn border-box">
          <ul class="clearfix">
            <li class="hot-cont-list text-ignore" @click="todetail(19)">星梦偶像计划</li>
            <li class="hot-cont-list text-ignore" @click="todetail(8)">迷域行者</li>
            <li class="hot-cont-list text-ignore" @click="todetail(3355)">Lily</li>
            <li class="hot-cont-list text-ignore" @click="todetail(558)">校花的贴身高手</li>
            <li class="hot-cont-list text-ignore" @click="todetail(662)">全职高手</li>
            <li class="hot-cont-list text-ignore" @click="todetail(338)">孙渣</li>
            <li class="hot-cont-list text-ignore" @click="todetail(2663)">超三国</li>
            <li class="hot-cont-list text-ignore" @click="todetail(2634)">百合</li>
            <li class="hot-cont-list text-ignore" @click="todetail(1043)">恋爱的无休止境</li>
          </ul>
        </div>
      </div>
      <div class="his-sh-ctn border-box">
        <h2 class="his-sh-title">历史记录</h2>
        <div class="clear-btn" @click="del">清空</div>
        <div class="his-content-ctn">
          <ul class="clearfix">
            <li
              class="his-cont-list text-ignore"
              v-for="item in this.searchlist"
              :key="item"
              @click="seachitem(item)"
            >{{item}}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      search: "",
      searchlist: ""
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    todetail(bookid) {
      this.$router.push({ name: "details", query: { bookid } });
    },
    // 搜索
    async tosearch() {
      // 根据关键字进行发请求
      let { data } = await this.$axios.get(
        `http://47.113.83.37:1920/goods/search`,
        { params: { keyword: this.search } }
      );
      window.console.log(data);
      if (data.length) {
        let { bookid } = data[0];
        this.todetail(bookid);
      } else {
        Toast("亲亲，没有相关的漫画哦");
      }

      // 搜索记录从本地存储获取
      if (localStorage.searchlist && localStorage.searchlist.length != 0) {
        this.searchlist = JSON.parse(localStorage.getItem("searchlist"));
      } else {
        this.searchlist = [];
      }
      // 如果有已经搜索过的内容，则把搜索记录放在最前面
      // 如果搜索的内容不为空，则进行判断
      if (this.search.length) {
        if (this.searchlist.indexOf(this.search) !== -1) {
          this.searchlist.splice(this.searchlist.indexOf(this.search), 1);
          // 如果历史记录不能超过6条
        } else if (this.searchlist.length > 5) {
          this.searchlist.pop();
        }
        // 添加一条记录
        this.searchlist.unshift(this.search);
        localStorage.setItem("searchlist", JSON.stringify(this.searchlist));
      } else {
        // 搜索的内容为空，弹出提示信息
        Toast("搜索的漫画名或者作者名不能为空");
      }
      // 清空输入框
      this.search = "";
    },
    seachitem(item) {
      this.search = item;
      this.tosearch();
    },
    // 清空搜索历史
    del() {
      this.searchlist = [];
      localStorage.removeItem("searchlist");
    }
  },
  created() {
    this.searchlist = JSON.parse(localStorage.getItem("searchlist"));
  }
};
</script>
<style lang="scss" scoped>
html {
  font-size: 50px;
  color: #999;
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
* {
  margin: 0;
  padding: 0;
  outline: none;
  list-style: none;
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
    .back-btn {
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
    .form-ctn {
      width: 5.13rem;
      height: 0.6rem;
      position: absolute;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      top: 0.2rem;
      .search-icon {
        position: absolute;
        width: 0.26rem;
        height: 0.26rem;
        margin-left: 0.24rem;
        margin-top: 0.18rem;
        background-size: 0.26rem 0.26rem;
      }
      .icon-search {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFW…StKFBqkoz/b1Yx2TEQBKpEikdf5TUGjpljUgyv/k7W/ggwAI0qwjA9JZf+AAAAAElFTkSuQmCC);
        background-repeat: no-repeat;
      }
      .search-bar {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        border: 1px solid #e4e4e4;
        background: #eee;
        padding-right: 0.66rem;
        padding-left: 0.66rem;
        color: #333;
        font-size: 0.26rem;
        box-sizing: border-box;
      }
      .cancel-btn {
        position: absolute;
        right: 0.24rem;
        top: 0;
        width: 0.25rem;
        height: 0.24rem;
        margin-top: 0.18rem;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAAGXRFW…ZM0wCiWhrou+T7/4PwgSwhn8gO8pLj79A7D4n4fB/8CTAAPbZ3S1G1XzkAAAAASUVORK5CYII=);
        background-repeat: no-repeat;
        background-size: 100%;
      }
    }
    .search-btn {
      position: absolute;
      right: 0.4rem;
      top: 0.34rem;
      i {
        color: #333;
        font-size: 0.24rem;
      }
    }
  }
}
.hot-sh-ctn {
  padding: 0.3rem 0.24rem 0;
  border-bottom: 1px solid #e4e4e4;
  background: #fff;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  top: 0.99rem;
  text-align: left;
  .hot-sh-title {
    margin-bottom: 0.5rem;
    color: #333;
    font-size: 0.22rem;
  }
  .hot-content-ctn {
    padding: 0 0.3rem;
    box-sizing: border-box;
    ul {
      margin-right: -0.9rem;
      margin-bottom: -0.3rem;
      .hot-cont-list {
        float: left;
        color: #333;
        font-size: 0.22rem;
        margin-right: 0.8rem;
        margin-bottom: 0.6rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
.his-sh-ctn {
  padding: 0.3rem 0.24rem 0.5rem;
  margin-top: 0.24rem;
  border-top: 1px solid #e4e4e4;
  background: #fff;
  position: relative;
  box-sizing: border-box;
  text-align: left;
  top: 0.7rem;
  .his-sh-title {
    margin-bottom: 0.5rem;
    color: #333;
    font-size: 0.22rem;
  }
  .clear-btn {
    position: absolute;
    right: 0.24rem;
    top: 0.3rem;
    color: #333;
    font-size: 0.22rem;
  }
  .his-content-ctn {
    ul {
      margin-bottom: -0.5rem;
      .his-cont-list {
        position: relative;
        font-size: 0.26rem;
        color: #333;
        margin-bottom: 0.5rem;
        padding-left: 0.5rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>