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
          url: '/main/proxy',
        }, {
          id: 2,
          name: '主机',
          icon: 'el-icon-setting',
          children: [
            {
              id: 21,
              name: '主机管理',
              icon: 'el-icon-view',
              url: '/main/host',
            },
          ],
        },
      ],
    };
  },
};
