<template>
  <div class="error-page">
      <div class="pic-401">
        <i class="el-icon-warning icon"></i>
        <div class="bullshit">
          <div class="bullshit__oops">很抱歉!</div>
          <div class="bullshit__headline">{{ message }}</div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'error_401',
  computed: {
    message () {
      return '您没有权限访问该页面......'
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.pic-401{
  display: flex;
  position: absolute;
  padding-top: 100px;
  padding-left: 100px;
  align-items: center;
  .icon{
    font-size: 80px;
    text-align: center;
    margin-right: 30px;
    color: #ff9600;
  }
}
.bullshit {
    &__oops {
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
      color: #1bbd9d;
      margin-bottom: 20px;
    }
    &__headline {
      font-size: 20px;
      line-height: 24px;
      color: #222;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
</style>
