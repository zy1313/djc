<template>
  <div>
    <!-- 头部 -->
    <div class="listHead">
      <div class="head-container box-size">
        <a href="javascript:;" class="back-btn">
          <i class="icon-back" @click="back"></i>
        </a>
        <p class="module-name text-ignore" end-id="61">{{listname}}</p>
        <a href="javascript:;" class="search-btn none">
          <i class="icon-search"></i>
        </a>
      </div>
    </div>
    <div class="listCont">
      <div class="more-cartoon-ctn">
        <ul class="clearfix">
          <li class="more-cartoon-list" bookid="item.bookid" v-for="item in listdata" :key="item.bookid"
          @click="todetail(item.bookid)">
            <div class="list-img-ctn">
              <img :src="item.thumb" alt />
            </div>
            <div class="list-infor-ctn box-size">
              <div class="list-detail">
                <div class="clearfix works-ctn">
                  <div class="list-bookname text-ignore" title>{{item.title}}</div>
                  <div class="list-scroe clearfix">
                    <i class="icon-star-a"></i>
                    <i class="icon-star-a"></i>
                    <i class="icon-star-a"></i>
                    <i class="icon-star-a"></i>
                    <i class="icon-star-b"></i>
                  </div>
                </div>
                <div class="clearfix works-ctn">
                  <div class="list-writer text-ignore">{{item.author}}</div>
                  <div class="list-upTime">一周六更</div>
                </div>
                <div class="list-msg works-ctn text-ignore">
                  <i class="list-title">更新</i>
                    <!-- v-text="new Date((item.updatetime)*1).toLocaleDateString()" -->
                  <span class="list-content" data-gx-time >2019-02-14</span>
                  <i class="list-title">点击</i>
                  <span class="list-content" data-dj-num v-text="(item.hit_num/100000000).toFixed(1)+'亿'"></span>
                  <i class="list-title">人气</i>
                  <span class="list-content" data-rq-num v-text="(item.views/10000).toFixed(1)+'万'"></span>
                </div>
                <div class="list-summary longtext-ignore">{{item.description}}</div>
              </div>
            </div>
          </li>
          
          
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            listdata:"",
            listname:""
        }
    },
    methods:{
        back(){
            this.$router.back()
        },
        todetail(bookid){
          this.$router.push({name:"details",query:{bookid}})
        }
    },
   async created(){
       let {cid,listname}=this.$route.query;
        this.listname=listname;
        let {data} =await this.$axios.get(`http://47.113.83.37:1920/goods/list${cid}`);
        this.listdata=data;
        // window.console.log(data)
    }
};
</script>
<style lang="scss" scoped>
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
  }
}
.listCont {
  position: relative;
   top:0.99rem; 
  flex: 1;
  overflow: auto;
  padding: 0 0.24rem;
  box-sizing: border-box;
  .more-cartoon-list {  
    width: 100%;
    height: 3.32rem;
    position: relative;
    overflow: hidden;
    margin-top: 0.32rem;
    background: #fff;
    padding-bottom: 0.16rem;
    border-bottom: 1px solid #e4e4e4;
    .list-bookname, .list-img-ctn, .list-infor-ctn {
        float: left;
    }
    .list-img-ctn{
        img {
            display: block;
            width: 2.5rem;
            height: 3.32rem;
            // background: url(../../images/place/index2.png) no-repeat;
            background-size: cover;
        }
    }
    .list-infor-ctn {
    width: 45%;
    padding-left: 0.24rem;
    padding-top: 0.04rem;
    box-sizing: border-box;
    .list-detail {
        overflow: hidden;
        .works-ctn {
            margin-bottom: 0.24rem;
            margin-top: 0.02rem;
            text-align: left;
            .list-bookname {
                width: 3.04rem;
                height: 0.34rem;
                line-height: 0.34rem;
                font-size: 0.28rem;
                color: #333;
                font-weight: bold;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                text-align: left;
            }
            .list-writer {
                font-size: 0.2rem;
                color: #999;
                width: 3.58rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .list-upTime {
                font-size: 0.2rem;
                color: #999;
                margin-top: 0.24rem;
            }
            .list-scroe {
                width: 1.7rem;
                height: 0.34rem;
                margin-right: -0.03rem;
                i {
                    display: block;
                    float: left;
                    width: 0.28rem;
                    height: 0.28rem;
                    margin-right: 0.03rem;
                    margin-left: 0.02rem;
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

        }
        .list-msg {
            
            height: 0.3rem;
            margin-bottom: 0.24rem;
            margin-top: 0.02rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-right: 0.12rem;
            font-size: 0.2rem;
            color: #999;
            i{
            font-style: normal;
             font-weight: normal; 
            }
            
            
        }
        .list-summary {
            text-align: left;
            font-size: 0.2rem;
            color: #999;
            line-height: 0.28rem;
            height: 0.52rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
    }
    }

}
</style>