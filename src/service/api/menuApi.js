export default {
  getMenuData() {
    return {
      id: 0,
      name: 'root',
      children: [
        {
          id: 1,
          name: 'Proxy',
          icon: 'el-icon-star-on',
        }, {
          id: 2,
          name: '主机',
          icon: 'el-icon-setting',
          children: [
            {
              id: 21,
              name: '主机管理',
              icon: 'el-icon-view',
            },
          ],
        },
      ],
    };
  },
};
