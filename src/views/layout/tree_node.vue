<template>
  <el-submenu v-if="hasChildren" :index="String(nodeData.url)">
    <template slot="title">
      <i :class="iconClass"></i>
      <span>{{nodeData.name}}</span>
    </template>
    <tree-node v-for="(value, index) in nodeData.children" :key="index" :inputData="value"></tree-node>
  </el-submenu>
  <el-menu-item v-else :index="String(nodeData.url)">
    <i :class="iconClass"></i>
    <span slot="title">{{nodeData.name}}</span>
  </el-menu-item>
</template>
<script>
import treeNode from './tree_node';

export default {
  name: 'treeNode',
  props: ['inputData'],
  components: {
    treeNode,
  },
  data() {
    return {
      nodeData: this.inputData,
    };
  },
  computed: {
    hasChildren: ($this) => {
      const result = typeof ($this.nodeData.children) !== 'undefined' && $this.nodeData.children != null && $this.nodeData.children.length > 0;
      return result;
    },
    iconClass: ($this) => {
      if (typeof ($this.nodeData.icon) === 'undefined' || $this.nodeData.icon === null || $this.nodeData.icon === '') {
        return 'el-icon-share';
      }
      return $this.nodeData.icon;
    },
  },
};
</script>

<style scoped>

</style>
