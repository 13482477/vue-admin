<template>
  <div class="menu-container">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen">
      <tree-node v-for="(value, index) in menus" :key="index" :inputData="value"></tree-node>
    </el-menu>
  </div>
</template>

<script>
import treeNode from './tree_node';
import menuService from '../../service/api/menuApi';

export default {
  name: 'nav_menu',
  components: {
    treeNode,
  },
  data() {
    return {
      menus: menuService.getMenuData().children,
    };
  },
  methods: {
    handleOpen() {
      console.log('menu opened');
    },
  },
};
</script>

<style scoped>
.menu-container .el-menu {
  border-right: none;
}
</style>
