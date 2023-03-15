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
          >邮箱：contact@icc.ah.cn</span
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
      top:false,
      y:0
    }
  },
  mounted() {
    window.scrollTo(0,0)
    window.addEventListener("scroll", this.handleScrollbox, true);
    let w = window.screen.width;
    if (w < 800) {
      this.big = false;
    }
  },
  methods: {
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
span,div,h1,h2,h3{
  cursor: pointer;
}
.bigbox{
  display: flex;
  flex-direction: column;
  overflow-x:hidden;
  height: auto;
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