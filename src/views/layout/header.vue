<template>
  <div class="header-container">
    <div class="header-left">
      <label>
        寻趣乡村管理后台
      </label>
    </div>
    <div class="header-right">
      <el-dropdown>
        <span style="color:#eee;">用户操作<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>消息通知</el-dropdown-item>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.header-container {
  width: 100%;
}

.header-left {
  float: left;
  width: 200px;
}

.header-right {
  float: right;
  color: #eee;
  width: 100px;
}
</style>
