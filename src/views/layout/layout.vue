<template>
  <el-container>
    <el-header>
      <my-head></my-head>
    </el-header>
    <el-container>
      <el-aside width="250px">
        <my-menu></my-menu>
      </el-aside>
      <el-main>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import header from './header';
import menu from './nav_menu';

export default {
  components: {
    myHead: header,
    myMenu: menu,
  },
};
</script>

<style scoped>
.el-header {
  background-color: #409EFF;
  color: #eee;
  line-height: 60px;
}

.el-aside {
  color: #333;
  text-align: left;
  line-height: 60px;
}
</style>
