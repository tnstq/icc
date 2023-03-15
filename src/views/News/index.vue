<template>
  <div class=bigbox>
    <div v-if="top" :class="{ runTop: top }" @click="toTop">
      <svg
        t="1678766219182"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3026"
        width="18"
        height="18"
      >
        <path
          d="M512 378.24l-418.88 418.88L0 704l512-512 512 512-93.12 93.12z"
          fill="#fff"
          p-id="3027"
        ></path>
      </svg>
    </div>
    <Header blue="News" />
    
    <div :class="{ body: big, smallbody: !big }" v-if="big">
      <div class="one" v-if="show">
        <ul>
          <li>
            <div class="data" v-if="big">
              <div class="day">24</div>
              <div class="mnth">2023-02</div>
            </div>
            <div class="text" @click="news1">
              信息发布 | 2022-2023年度全球发明大会中国区竞赛活动规则
            </div>
            <span v-if="!big">2023-02-24</span>
          </li>
          <li>
            <div class="data" v-if="big">
              <div class="day">24</div>
              <div class="mnth">2023-02</div>
            </div>
            <div class="text" @click="news2">
              公益培训 | 直通ICC竞赛内容，引领科创公益新潮流
            </div>
            <span v-if="!big">2023-02-24</span>
          </li>
          <li>
            <div class="data" v-if="big">
              <div class="day">24</div>
              <div class="mnth">2023-02</div>
            </div>
            <div class="text" @click="news3">
              信息发布｜2022-2023年度全球发明大会中国区协调单位名单（第五批）
            </div>
            <span v-if="!big">2023-02-24</span>
          </li>
          <li>
            <div class="data" v-if="big">
              <div class="day">22</div>
              <div class="mnth">2023-02</div>
            </div>
            <div class="text" @click="news4">
              新闻动态 | 桐乡市科协主席沈玉林一行调研全球发明大会中国区
            </div>
            <span v-if="!big">2023-02-22</span>
          </li>
          <li>
            <div class="data" v-if="big">
              <div class="day">22</div>
              <div class="mnth">2023-02</div>
            </div>
            <div class="text" @click="news5">
              新闻动态 |
              美国驻华大使馆经济处、新闻文化处外交官一行到访中国友好和平发展基金会
            </div>
            <span v-if="!big">2023-02-22</span>
          </li>
        </ul>
      </div>
      <div class="one" v-else>
        <ul>
          <li>
            <div class="data" v-if="big">
              <div class="day">15</div>
              <div class="mnth">2023-02</div>
            </div>
            <div class="text" @click="news6">
              信息发布｜2022-2023年度全球发明大会中国区协调单位名单（第四批）
            </div>
            <span v-if="!big">2023-02-15</span>
          </li>
          <li>
            <div class="data" v-if="big">
              <div class="day">08</div>
              <div class="mnth">2023-02</div>
            </div>
            <div class="text" @click="news7">
              公益培训 | 关于举办2022-2023年度全球发明大会中国区培训通知
            </div>
            <span v-if="!big">2023-02-08</span>
          </li>
          <li>
            <div class="data" v-if="big">
              <div class="day">06</div>
              <div class="mnth">2023-02</div>
            </div>
            <div class="text" @click="news8">
              信息发布｜2022-2023年度全球发明大会中国区协调单位名单（第三批）
            </div>
            <span v-if="!big">2023-02-06</span>
          </li>
          <li>
            <div class="data" v-if="big">
              <div class="day">29</div>
              <div class="mnth">2023-01</div>
            </div>
            <div class="text" @click="news9">
              信息发布｜2022-2023年度全球发明大会中国区协调单位名单（第二批）
            </div>
            <span v-if="!big">2023-01-29</span>
          </li>
          <li>
            <div class="data" v-if="big">
              <div class="day">20</div>
              <div class="mnth">2023-01</div>
            </div>
            <div class="text" @click="news10">
              信息发布｜2022-2023年度全球发明大会中国区协调单位名单（第一批）
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <span v-if="!big">2023-01-20</span>
          </li>
        </ul>
      </div>
      <div class="pag">
        <span @click="c1" v-if="!show"> <<首页</span>
        <span @click="c2" :class="{ active: show }">&nbsp;1&nbsp;</span>
        <span @click="c3" :class="{ active: !show }">&nbsp;2&nbsp;</span>
        <span @click="c4" v-if="show">尾页>></span>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      flag: true,
      show: true,
      big: true,
      top:false,
      y:0
    };
  },
  mounted() {
    (this.flag = true), (this.show = true);
    window.scrollTo(0, 0);
    let w = window.screen.width;
    //console.log(w);
    if (w < 800) {
      this.big = false;
    }
    window.addEventListener("scroll", this.handleScrollbox, true);
  },
  created() {
    (this.flag = true), (this.show = true);
  },
  methods: {
    c1() {
      this.show = true;
    },
    c2() {
      this.show = true;
    },
    c3() {
      this.show = false;
    },
    c4() {
      this.show = false;
    },
    news1() {
      this.$router.push({ name: "Detail" });
    },
    news2() {
      this.$router.push({ name: "Detail2" });
    },
    news3() {
      this.$router.push({ name: "Detail3" });
    },
    news4() {
      this.$router.push({ name: "Detail4" });
    },
    news5() {
      this.$router.push({ name: "Detail5" });
    },
    news6() {
      this.$router.push({ name: "Detail6" });
    },
    news7() {
      this.$router.push({ name: "Detail7" });
    },
    news8() {
      this.$router.push({ name: "Detail8" });
    },
    news9() {
      this.$router.push({ name: "Detail9" });
    },
    news10() {
      this.$router.push({ name: "Detail10" });
    },
     handleScrollbox() {
      this.currentScroll = window.pageYOffset; //表示当前滚动的位置
      this.y = window.pageYOffset;
    },
    toTop(){
      window.scrollTo(0, 0);
    }
  },
  watch:{
    y(){
      //console.log(this.y);
      if(this.y > 150){
        this.top  = true
      }else{
        this.top = false
      }
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
span,div,h1,h2,h3{
  cursor: pointer;
}
.bigbox{
  overflow-x:hidden;
  .runTop{
    position: fixed;
    right: 10px;
    bottom: 20vh;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #1d1d1d;
    z-index: 1000;
    text-align: center;
      margin: 0 auto;
      color: #fff;
    
    .icon{
      margin-top: 5px;
    }
  }
}
.body {
  background-color: #efefef;
  width: 100vw;
  height: 120vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .one {
    height: 50%;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      li {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #cfcdcd;
        padding-bottom: 2vh;
        .data {
          width: 4vw;
          height: 4vw;
          background-color: #198ede;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          .day {
            color: #fff;
            font-size: 1.5vw;
            font-family: SimSun;
            font-weight: 700;
            margin-top: 0.5vw;
          }
          .mnth{
            font-size: 0.5vw;
          }
        }
        .text {
          display: inline-block;
          font-family: SimSun;
          font-size: 1vw;
          color: #5a5a5a;
          font-weight: normal;
          text-decoration: none;
          margin-left: 3vw;
        }
        .text:hover {
          color: #198ede;
        }
      }
    }
  }
  .pag {
    margin-top: 5vh;
    span {
      border: 1px solid #978f8f;
      border-radius: 5px;
      padding: 1vh 1vh;
      margin: 0 0.5vh;
      font-size: 12px;
      background-color: #fff;
    }

    .active {
      background-color: #ff9900;
    }
    span:hover {
      background-color: #ff9900;
    }
  }
}
.smallbody {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  margin-top: 10vw;
  .one {
    height: 90%;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      li {
        border-bottom: 1px solid #ededed;
        height: 20%;
        margin-bottom: 20px;
        font: 12px/140% "Microsoft YaHei", "黑体", Helvetica, Arial, Tahoma,
          sans-serif;
        font-size: 17px;
        padding: 5px 10px;
        box-sizing: border-box;
        font-family: SimSun;
        font-weight: 700;
        color: 5a5a5a;
        span{
          font-size: 12px;
          color: #929292;
        }
      }
    }
  }
  .pag {
    text-align: center;
    span {
      border: 1px solid #978f8f;
      border-radius: 5px;
      padding: 1vh 1vh;
      margin: 0 0.5vh;
      font-size: 12px;
      background-color: #fff;
    }
  }
}
</style>

