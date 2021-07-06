<template>
  <div class="line">
    <el-menu
     :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#409EFF"
    >
      <el-menu-item index='1'>标签管理</el-menu-item>
      <el-menu-item index='2'>周期</el-menu-item>
      <el-submenu index="3">
          <template slot="title">处理中心</template>
          <el-menu-item>选项1</el-menu-item>
          <el-menu-item>选项2</el-menu-item>
          <el-menu-item>选项3</el-menu-item>
      </el-submenu>
    </el-menu>
    <!-- input 框 -->
    <el-form :model="ruleGey" label-width="80px">
        <el-form-item label="输入框">
            <el-input type="tel" @input="handleInput($event)" v-model="ruleGey.elInput"></el-input>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      ruleGey:{
          elInput:'',
      }
    };
  },
  methods: {
    // 只输入数字，，，没有试成功
    handleInput(e) {
      this.elInput = e.target.value.replace(/[^\d]/g,'')
    }
  }
};
</script>