<template>
  <div :class="{'Header':big,'small':!big}">
    <div class="img">
      <img src="./image/icon.jpg" alt="" class="img1"/>
      <img src="./image/icon2.png" alt="" class="img2" />
    </div>
    <div class="nav" v-if="big">
      <ul>
        <li @click="home" :class="{'blue':blue=='Home'}">首页</li>
        <li @click="about" :class="{'blue':blue=='About'}">关于ICC</li>
        <li @click="rules" :class="{'blue':blue=='Rules'}">2022-2023ICC</li>
        <li @click="news" :class="{'blue':blue=='News'}">新闻热点</li>
        <li @click="phone" :class="{'blue':blue=='Call'}">联系我们</li>
      </ul>
    </div>
    <div class="nav2" v-else @click="nav2to"><svg t="1678416825991" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2790" width="32" height="32"><path d="M133.310936 296.552327l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949 0-19.781623-15.997312-35.950949-35.950949-35.950949L133.310936 224.650428c-19.781623 0-35.950949 16.169326-35.950949 35.950949C97.359987 280.383 113.529313 296.552327 133.310936 296.552327z" fill="#575B66" p-id="2791"></path><path d="M890.51705 476.135058 133.310936 476.135058c-19.781623 0-35.950949 16.169326-35.950949 35.950949 0 19.781623 16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949C926.467999 492.304384 910.298673 476.135058 890.51705 476.135058z" fill="#575B66" p-id="2792"></path><path d="M890.51705 727.447673 133.310936 727.447673c-19.781623 0-35.950949 15.997312-35.950949 35.950949s16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-15.997312 35.950949-35.950949S910.298673 727.447673 890.51705 727.447673z" fill="#575B66" p-id="2793"></path></svg></div>
    <div v-if="nav" class="nav2to"><ul>
        <li @click="home" :class="{'blue':blue=='Home'}">首页</li>
        <li @click="about" :class="{'blue':blue==''}">关于ICC</li>
        <li @click="news" :class="{'blue':blue=='News'}">新闻热点</li>
        <li @click="phone" :class="{'blue':blue=='Call'}">联系我们</li>
      </ul></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      big:true,
      nav:false
    }
  },
  props:['blue'],
  mounted() {
    let w =  window.screen.width
    if(w < 800){
      this.big = false
     }
     this.nav = false
  },
  methods: {
    home() {
      this.$router.push({ name: "Home" });
    },
    about() {
      this.$router.push({ name: "About" });
    },
    rules() {
      this.$router.push({ name: "Rules" });
    },
    news() {
      this.$router.push({ name: "News" });
    },
    phone() {
      this.$router.push({name:'Call'})
    },
    nav2to(){
      if(this.nav == true){
        this.nav = false
      }else{
        this.nav = true
      }
    }
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
.Header {
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-around;
  position: fixed;
  background-color: #fff;
  left: 0;
  top: 0;
  z-index: 999;
  .img {
    display: flex;
    width: 20vw;
    margin-top: 1vh;
    .img1 {
      height: 60%;
      margin-top: 0.5vw;
    }
    .img2 {
      height: 80%;
      margin-left: 1vw;
    }
  }
  .nav {
    width: 50vw;
    height: 100%;
    ul {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      li {
        list-style: none;
        width: 10vw;
        font-size: 1vw;
        line-height: 100%;
      }
      .blue{
        color:skyblue;
      }
      li:hover{
        color:skyblue;
        cursor: pointer;
      }
    }
  }
  
}
.small{
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 100vw;
 padding: 0 2vw;
 box-sizing: border-box;
 .img{
  display: flex;
  width: 100%;
  .img1 {
      width: 40%;
      margin-top: 0.5vw;
    }
    .img2 {
      width: 60%;
      margin-left: 1vw;
    }
 }
 .nav2to{ 
  width: 50vw;
  height: 150px;
  position: absolute;
  top: 0;
  left: 25%;
  background: rgba(8, 8, 8, 0.7);
  z-index: 999;
  text-align: center;
  margin-top: 1vh;
  font-size: 4vw;
  margin-top: 20vh;
  animation: right2 1s;
  overflow: hidden;
  ul{
    li{
      color: #fff;
      z-index: 999;
      margin-top: 2vh;
    }
  }
 }
}
.nav2{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 10px 0;
  }

  @keyframes right2 {
  from {
    height: 0;
  }

  to {
    height: 150px;
  }
}
</style>