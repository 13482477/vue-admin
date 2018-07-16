export default {
  getMenuData() {
    return {
      id: 0,
      name: 'root',
      children: [
        {
          id: 1,
          name: '首页预览',
          children: [
            {
              id: 11,
              name: '首页头图配置',
              url: '',
            },
            {
              id: 12,
              name: '轮播图',
              url: '',
            },
            {
              id: 13,
              name: '标签设置',
              url: '',
            },
            {
              id: 14,
              name: '首页视频',
              url: '',
            },
            {
              id: 15,
              name: '首页图集',
              url: '',
            },
            {
              id: 14,
              name: '首页图文',
              url: '',
            },
          ],
        }, {
          id: 2,
          name: '视频管理',
        }, {
          id: 3,
          name: '图集管理',
        },
        {
          id: 4,
          name: '图文管理',
        },
      ],
    };
  },
};
