<template>
  <el-container>
    <el-header>
      <my_header></my_header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <my_menu></my_menu>
      </el-aside>
      <el-main>
        <el-row>
          <el-col :span="24">
            <el-breadcrumb>
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col style="line-height: 50px">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
              <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
              <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
        <el-row>
          <router-view/>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import header from './header';
import menu from './nav_menu';

export default {
  components: {
    my_header: header,
    my_menu: menu,
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
