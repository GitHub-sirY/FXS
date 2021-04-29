<template>
  <div class="home" @click="czD">
    <!-- 大盒子 -->
    <div class="box">
      <!-- 搜素框 -->
      <input type="text" @click.stop="czS()" v-model="czSS" @keydown="czUp" />
      <!-- 搜素框 -->

      <!-- 历史记录 -->
      <ul v-show="czShow">
        <li
          v-for="(itme, index) in czListData"
          :key="itme.id"
          @mouseover="czHove(index)"
          :class="{ bg: czDell == index }"
        >
          <span>{{ itme.msg }}</span>
          <span v-show="czDell == index" class="del" @click.stop="czDel(index)"
            >删除</span
          >
        </li>
      </ul>
      <!-- 历史记录 -->
    </div>
    <!-- 大盒子 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      czSS: "",
      // 搜素的内容
      czList: [],
      // 历史记录
      czShow: false,
      // 判断是否显示
      czListData: [
        {
          id: 1,
          msg: "签位",
        },
        {
          id: 2,
          msg: "阿松大",
        },
        {
          id: 3,
          msg: "禁用",
        },
        {
          id: 4,
          msg: "确认",
        },
      ],
      // 原数据
      czDell: -1,
      // 显示删除和背景色
    };
  },
  methods: {
    czS() {
      this.czShow = true;
    },
    // 点击input显示
    czD() {
      this.czShow = false;
    },
    // 点击空白处 input 消失
    czHove(index) {
      this.czDell = index;
    },
    //  鼠标划过改变颜色和显示删除
    czUp(e) {
      if (e.keyCode == 38) {
        this.czDell = this.czDell <= 0 ? 0 : this.czDell - 1;
      } else if (e.keyCode == 40) {
        let czNum = this.czListData.length - 1;
        console.log(czNum);
        this.czDell = this.czDell >= czNum ? czNum : this.czDell + 1;
      }
    },
    // 判断是否按了上下键
    czDel(index) {
      this.czListData.splice(index, 1);
    },
    //  点击删除
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
.box {
  width: 500px;
  margin: 0 auto;
  height: 24px;
  input {
    width: 100%;
    height: 100%;
  }
  ul {
    li {
      display: flex;
      height: 30px;
      padding: 0 10px;
      justify-content: space-between;
      align-items: center;
    }
    .bg {
      background: #ccc;
    }
    .del {
      cursor: pointer;
    }
  }
}
</style>


