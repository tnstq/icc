<template>
  <div>
    <div :class="{ footer: big, small: !big }">
      <!-- <div class="right">
        <span
          >《版权所有》COPYRIGHT©2023，www.inventionconvention.cn , All rights
          reserved.<br />版权所有 © 全球发明大会中国区 未经许可 严禁复制
          沪ICP备2022034759号-1</span
        >
      </div> -->
      <div class="left">
        <div class="img" v-if="big">
          <img src="./image/logo2.png" alt="" class="img1" />
          <img src="./image/logo3.png" alt="" class="img2" />
        </div>
        <div class="ma">
          <div class="ma1">
            <img src="./image/ma.jpg" alt="" />
            <div>关注官方微信客服号</div>
          </div>
          <!-- <div class="ma2">
            <img src="./image/ma.jpg" alt="" />
            <div>关注官方微信订阅号</div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      big: true,
    };
  },
  mounted() {
    let w = window.screen.width;
    if (w < 800) {
      this.big = false;
    }
  },
};
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
  cursor: pointer;
}
.footer {
  height: 30vh;
  background-color: #5a5a5a;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .right {
    span {
      color: white;
      opacity: 0.5;
    }
  }
  .left {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: -10vw;
    .img {
      width: 100%;
      .img1 {
        width: 30%;
      }
      .img2 {
        width: 14%;
        margin-bottom: 60px;
        margin-bottom: 5vw;
      }
    }
  }
}
.ma {
  display: flex;
  font-size: 12px;
  color: white;
  justify-content: space-between;
  width: 20vw;
  height: 20vh;
  .ma1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 8vw;
    text-align: center;
  }
  .ma2 {
    display: flex;
    flex-direction: column;
    width: 8vw;
    text-align: center;
    justify-content: space-between;
  }
}
.small {
  height: 30vh;
  background-color: #042423;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  .right {
    display: flex;
    justify-content: center;
    margin-bottom: 4vh;
    span {
      font-size: 2vh;
      color: #5a5a51;
      text-align: center;
      margin-top: 50px;
      line-height: 4vh;
    }
  }
  .left {
    .ma {
      display: flex;
      font-size: 12px;
      color: white;
      justify-content: space-around;
      width: 100vw;
      .ma1 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 40vw;
        text-align: center;
      }
      .ma2 {
        display: flex;
        flex-direction: column;
        width: 40vw;
        text-align: center;
        justify-content: space-between;
      }
      div {
        font-size: 2vh;
        color: #5a5a51;
        margin-top: 2vw;
      }
    }
  }
}
</style>