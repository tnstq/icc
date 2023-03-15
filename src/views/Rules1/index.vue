<template>
  <div class=bigbox>
    <Header blue="Rules"/>
    <div class="body">
      <h1>2022-2023年度全球发明大会中国区竞赛活动规则</h1>
      <div class="pdf">
       <img src="./image/1.png" alt="">
       <img src="./image/2.png" alt="">
       <img src="./image/3.png" alt="">
       <img src="./image/4.png" alt="">
       <img src="./image/5.png" alt="">
       <img src="./image/6.png" alt="">
       <img src="./image/7.png" alt="">
       <img src="./image/8.png" alt="">
       <img src="./image/9.png" alt="">
       <img src="./image/10.png" alt="">
       <img src="./image/11.png" alt="">
       <img src="./image/12.png" alt="">
      </div>
 
    </div>
    <Footer />
  </div>
</template>

<script>

export default {
  data() {
    return {
      src: null,
      loading: false,
      pdf: "./pdf/98ud.pdf",
    };
  },
  mounted() {
    window.scrollTo(0,0)
  },

};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.bigbox {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  height: auto;
}
.body {
  height: 120vh;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 15vh;
  padding: 10vh 0;
  h1{
    margin-bottom: 10vh;
  }
  .pdf {
    height: 90%;
    width: 50%;
    background-color: #fff;
    overflow: scroll;

    img{
      width: 100%;
    }
  }
  
}
</style>