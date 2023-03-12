<template>
  <div>
    <Header />
    <div class="bigboder" :class="{ bigboder2: !big }">
      <div class="middle" :class="{ middle2: !big }">
        <h3>
          信息发布&nbsp;&nbsp;｜
          &nbsp;&nbsp;2022-2023年度全球发明大会中国区协调单位名单（第三批）
        </h3>
        <div class="top">
          <span>作者:全球发明大会中国区</span>
          <span class="time">发布时间: 2023-02-06</span>
          <span>129 次浏览</span>
        </div>
        <div class="text">
          <h2>
            2022-2023年度全球发明大会中国区<br />

            拟在各地开展活动的协调单位名单<br />

            （第三批）
          </h2>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;根据全球发明大会中国区省级选拔赛组织要求，拟邀请以下单位：好小囡艺术发展（上海）有限公司、重庆市少年宫、兰州市青少年科技教育协会、辽宁省人工智能学会、澳门创新发明协会，协助全球发明大会中国区工作组在上海市、重庆市、甘肃省、辽宁省及澳门特别行政区开展赛事筹备活动。</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;各协调单位须严格落实教育部办公厅等四部门关于印发《面向中小学生的全国性竞赛活动管理办法》(教监管厅函〔2022〕4号)的文件要求，遵照《2022-2023年度全球发明大会中国区竞赛活动规则》的要求在各地开展赛事组织协调工作。</span
          ></div>
        <div class="foot">
          <div class="left">
            <span>联系邮箱：</span> <span>contact@inventionconvention.cn</span>
          </div>
          <div class="right">
            <span>全球发明大会中国区工作组秘书处</span>
            <span>2023年2月06日</span>
          </div>
        </div>
      </div>
      <div :class="{'sfoot':big,'smallFoot':!big}">
      <span @click="up">上一篇：公益培训 | 关于举办2022-2023年度全球发明大会中国区培训通知</span>
      <span @click="down">下一篇：信息发布｜2022-2023年度全球发明大会中国区协调单位名单（第二批）</span>
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
    up(){
      this.$router.push({name:'Detail7'})
    },
    down(){
      this.$router.push({name:'Detail9'})
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
.bigboder2 {
  margin-top: 0 !important;
}
.bigboder {
  margin-top: 15vh;
  height: 120vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
   .middle2 {
    width: 100vw !important;
  }
  .middle {
    height: 100%;
    width: 50%;
    overflow: scroll;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
     padding: 2vw 5vw;
    box-sizing: border-box;
    .top {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 1vh;
      margin-top: 1vh;
      padding-bottom: 1vh;
      border-bottom: 1vh solid #d9d9d9;
      font-size: 0.5vw;
      padding: 2vw 0;
      .time {
        margin: 0 3vh;
      }
    }
    h3 {
      font-size: 1.5vw;
      color: #4f6eaa;
      text-align: center;
    }
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        text-align: center;
        margin-top: 3vh;
        line-height: 40px;
        font-size: 1vw;
      }
      span {
        font-size: 1vw;
        line-height: 4vh;
        margin: 2vh 0;
        strong {
          color: #07b9f1;
        }
      }
    }
    .foot {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 15vh;
      font-size: 1vw;
      .left {
        display: flex;
        flex-direction: column;
      }
      .right {
        display: flex;
        flex-direction: column;
        text-align: right;
        width: 50%;
        margin-top: 10vh;
      }
    }
    img {
      width: 100%;
    }
  }
}
.sfoot{
  height: 20vh;
  display: flex;
  height: 20vh;
  width: 50vw;
  margin-left: 25vw;
  background-color: #fff;
  flex-direction: column;
  width: 40vw;
  font-size: 1vw;
  text-align: left;
  margin-top: 5vh;
  font-family: SimSun;
    font-size: 12px;
    color: #444!important;
    font-weight: normal;
    line-height: 25px;
  span:hover{
    color:skyblue;

  }
}
.smallFoot{
  width: 50vw;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  margin: 5vh 0;
  span{
    width: 100%;
    padding: 1vh 0;
        overflow: hidden; // 文字超长隐藏
    text-overflow:ellipsis; // 显示...
    white-space: nowrap; // 单行显示
  }
}
</style>