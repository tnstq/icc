<template>
  <div>
    <Header blue="Call"/>
    <div class="body" :class="{ body: big, smallbody: !big }">
      <div class="top">
        <h1>联系我们</h1>
        <div class="line">
          <img src="./image/add.png" alt="" /> <span>成为合作伙伴</span>
        </div>
        <div class="line">
          <img src="./image/add.png" alt="" /> <span>成为参赛者</span>
        </div>
        <div class="line">
          <img src="./image/add.png" alt="" /> <span>成为志愿者</span>
        </div>
      </div>
      <div class="bottom">
        <img src="./image/emil.png" alt="" /><span
          >邮箱：contact@inventionconvention.cn</span
        >
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name:'Call',
  data() {
    return {
      big:true,
    }
  },
  mounted() {
    window.scrollTo(0,0)
    let w = window.screen.width;
    if (w < 800) {
      this.big = false;
    }
  },
};
</script>
<style lang="less" scoped>
span,div,h1,h2,h3{
  cursor: pointer;
}
.body {
  .top {
    background-image: url("./image/1.jpg");
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      color: white;
      margin: 10vh;
      font-size: 50px;
    }
    .line {
      display: flex;
      width: 35vw;
      border-bottom: 2px solid white;
      align-items: center;
      padding-bottom: 4vh;
      margin-bottom: 4vh;
      img {
        width: 4vw;
        height: 4vw;
        animation: moves2 2s;
      }
      span {
        flex: 1;
        text-align: center;
        font-size: 25px;
        color: white;
        font-family: SimSun;
        margin-left: -4vw;
        animation: moves 2s;
      }
    }
  }
  .bottom {
    background-color: #20124d;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      color: white;
      margin-left: 20px;
    }
  }
}
.smallbody{
  .top {
    background-image: url("./image/1.jpg");
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      color: white;
      margin: 10vh;
      font-size: 13vw;
    }
    .line {
      display: flex;
      flex-direction: column;
      width: 90vw;
      align-items: center;
      border-bottom: 2px solid white;
      align-items: center;
      padding-bottom: 4vh;
      margin-bottom: 4vh;
      img {
        width: 14vw;
        height: 14vw;
        animation: moves2 2s;
        margin-bottom: 5vw;
        margin-left: -3vw;
      }
      span {
        flex: 1;
        text-align: center;
        font-size: 25px;
        color: white;
        font-family: SimSun;
        margin-left: -4vw;
        animation: moves 2s;
        font-weight: 700;
      }
    }
  }
  .bottom {
    background-color: #20124d;
    height: 30vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      color: white;
      margin-left: 20px;
      margin-top: 2vw;
    }
  }
}
@keyframes moves {
  from {
    transform: translateX(60vw);
  }
  to {
    transform: translateX(0px);
  }
}
@keyframes moves2 {
  from {
    transform: translateX(-50vw);
  }
  to {
    transform: translateX(0px);
  }
}
</style>