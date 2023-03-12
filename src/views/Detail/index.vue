<template>
  <div>
    <Header />
    <div :class="{ body: big, smallBody: !big }">

      <h1>2022-2023年度全球发明大会中国区竞赛活动规则</h1>
      <div class="top" :class="{ top2: !big }">
        <span>作者:全球发明大会中国区</span>
        <span class="time">发布时间: 2023-02-24</span>
        <span>339次浏览</span>
      </div>
      <div class="pdf">
        <div class="back" @click="back">< &nbsp;返回</div>
        <img src="./image/1.png" alt="" />
        <img src="./image/2.png" alt="" />
        <img src="./image/3.png" alt="" />
        <img src="./image/4.png" alt="" />
        <img src="./image/5.png" alt="" />
        <img src="./image/6.png" alt="" />
        <img src="./image/7.png" alt="" />
        <img src="./image/8.png" alt="" />
        <img src="./image/9.png" alt="" />
        <img src="./image/10.png" alt="" />
        <img src="./image/11.png" alt="" />
        <img src="./image/12.png" alt="" />
      </div>
      <div :class="{'sfoot':big,'smallFoot':!big}">
      <span @click="up">上一篇：无</span>
      <span @click="down">下一篇：公益培训    |    直通ICC竞赛内容，引领科创公益新潮流</span>
    </div>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      big: true,
    };
  },
  mounted() {
    window.scrollTo(0,0)
    let w = window.screen.width;
    if (w < 800) {
      this.big = false;
    }
  },
  methods: {
    up() {},
    down() {
      this.$router.push({ name: "Detail2" });
    },
    back(){
      this.$router.push({name:'News'})
    }
  },
};

</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
span,div,h1,h2,h3{
  cursor: pointer;
}
.body {
  h1 {
    margin-bottom: 5vh;
    font-size: 2vw;
  }
  height: 120vh;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 15vh;
  padding: 10vh 0;
  .top {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 1vh;
    padding-bottom: 1vh;
    font-size: 0.5vw;
    width: 30vw;
  }
  .pdf {
    height: 100%;
    width: 50%;
    background-color: #fff;
    overflow: scroll;

    img {
      width: 100%;
    }
  }
}
.smallBody {
  height: 100vh;
  width: 100vw;
  h1 {
    margin-bottom: 5vh;
    font-size: 2vw;
  }
  .top {
    display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 1vh;
      padding-bottom: 1vh;
      border-bottom: 1vh solid #d9d9d9;
      padding: 2vw 0;
      span{
        display: inline-block;
        font-size: 0.5vw;
      }
      .time {
        margin: 0 3vh;
      }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10vh 0;
  .pdf {
    height: 100%;
    width: 100%;
    background-color: #fff;
    overflow: scroll;

    img {
      width: 100%;
    }
  }
}
.sfoot {
  display: flex;
  flex-direction: column;
  margin-left: -30%;
  margin-top: 2vw;
      font-family: SimSun;
    font-size: 12px;
    color: #444!important;
    font-weight: normal;
    line-height: 25px;
  span:hover {
    color: skyblue;
  }
}
.smallFoot{
  width: 100vw;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  text-align: left;
  margin-bottom: -5vh;
  span{
    width: 100%;
    padding: 1vh 0;
        overflow: hidden; // 文字超长隐藏
    text-overflow:ellipsis; // 显示...
    white-space: nowrap; // 单行显示
  }
}
.back{
  padding: 10px;
  font: 15px Arial,"宋体",Helvetica, sans-serif,Verdana;
}
.back:hover{
  color: skyblue;
}
</style>