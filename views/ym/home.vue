<template>
  <div class="box">
    <div class="aa">
      <van-nav-bar title="欧美文化的抽象美感">
        <template #left>
          <van-icon name="arrow-left" size="30" color="#999" />
        </template>
        <template #right>
          <van-icon name="wap-nav" size="27" color="#999" />
          <span style="color: #999; font-size: 12px">导航</span>
        </template>
      </van-nav-bar>
      <div class="preview">
        <img src="/img/bg.png" alt="" style="width: 100%; margin-top: 40px" />
        <van-steps
          background="#202020"
          active-icon="success"
          inactive-icon=""
          active-color="#38f"
          style="margin-top: 46px; margin-bottom: 70px"
        >
          <van-step>买家下单</van-step>
          <van-step>商家接单</van-step>
          <van-step>买家提货</van-step>
          <van-step>交易完成</van-step>
        </van-steps>
        <div class="txt">
          <p style="color: #fff; font-size: 26px">
            设计诠释：less is more
            不需要过多的装饰，简单的墙面背景与简洁的家具即可组成一个温暖的家
          </p>
        </div>
      </div>
    </div>
    <div class="bb">
      <p>
        房先森互联网家装别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，
        杜绝项目转包外包，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制服务。
      </p>
    </div>
    <div class="cc">
      <p style="font-size: 18px; text-align: center">
        <van-icon name="phone-circle-o" color="#38ca4" />
        服务热线：400-9977-658
      </p>
      <van-row style="text-align: center" v-model="active">
        <van-col span="6">触屏版</van-col>
        <van-col span="6">电脑版</van-col>
        <van-col span="6">关于我们</van-col>
        <van-col span="6">联系我们</van-col>
      </van-row>
      <p style="font-size: 18px; text-align: center">
        &copy 2016 sirfang.com 刚需装修就找房先森
      </p>
    </div>
    <div class="zz">预约免费设计</div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [],
  //注册组件
  components: {},
  data() {
    return {
      active: 0,
    };
  },
  // 在实例创建完成后被立即调用最早开始使用 data和methods中数据的钩子
  created() {},
  //挂载完成，HTML已经被渲染到了页面上，这个阶段可以执行dom操作，可以进行数据请求
  mounted() {},
  //方法
  methods: {},
  //计算属性
  computed: {},
  //监听器
  watch: {},
  //自定义指令
  directives: {},
};
</script>

<style lang="scss" scoped>
.box {
  background: #ccc;
  position: relative;
}
/deep/.van-nav-bar__right {
  display: flex;
  flex-direction: column;
}
.preview {
  width: 100%;
  height: 700px;
  background: #202020;
}
.txt {
  width: 100%;
  height: 100px;
  overflow: auto;
}
.aa {
  margin-bottom: 20px;
}
.bb {
  padding: 10px;
  background: #fff;
  text-indent: 30px;
  font-size: 18px;
  margin-bottom: 20px;
}
.cc {
  padding: 10px;
  background: #fff;
}
.zz {
  width: 100%;
  height: 60px;
  background: rgba($color: #ff4351, $alpha: 0.8);
  position: absolute;
  bottom: 0px;
  text-align: center;
  line-height: 60px;
  color: #fff;
  font-size: 20px;
}
</style>
