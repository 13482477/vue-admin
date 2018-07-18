<template>
  <el-container class="container">
    <el-header>
      <my-head></my-head>
    </el-header>
    <el-container class="sub-container">
      <el-aside class="aside">
        <my-menu></my-menu>
      </el-aside>
      <el-main class="content-container">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import header from './header';
import menu from './nav_menu';
import breadcrumb from './breadcrumb';
import tab from './tab';

export default {
  components: {
    myHead: header,
    myMenu: menu,
    myBreadcrumb: breadcrumb,
    myTab: tab,
  },
};
</script>

<style scoped>
.el-header {
  background-color: #409EFF;
  color: #eee;
  line-height: 60px;
}

.aside {
  color: #333;
  text-align: left;
  line-height: 60px;
  height: 100%;
  background-color: #222222;
}
.breadcrumb {
  margin-bottom: 0px;
}

.container {
  height: 100%;
}

.sub-container {
  height: 100%;
}

.content-container {
  padding: 10px;
}
</style>
