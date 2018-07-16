<template>
  <el-submenu v-if="hasChildren" :index="String(nodeData.id)">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>{{nodeData.name}}</span>{{nodeData.id}}
    </template>
    <tree_node v-if="hasChildren" v-for="value in nodeData.children" :key="value"></tree_node>
  </el-submenu>
  <el-menu-item v-else :index="String(nodeData.id)">
    <i class="el-icon-menu"></i>
    <span slot="title">{{nodeData.name}}</span>{{nodeData.id}}
  </el-menu-item>
</template>
<script>
export default {
  name: 'items',
  props: ['model'],
  components: {},
  data() {
    return {
      nodeData: this.model,
    };
  },
  computed: {
    hasChildren: () => {
      if (typeof (this.children) !== 'undefined' && this.children != null && this.children.length > 0) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>

</style>
