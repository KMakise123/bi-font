export default [
  { path: '/user',name:'登录', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/welcome',name:'欢迎页面', icon: 'smile', component: './Welcome' },
  { path: '/genChart',name:'数据分析(同步)', icon: 'AreaChartOutlined', component: './GenChart' },
  { path: '/genChart_async_mq',name:'数据分析(异步-队列)', icon: 'AreaChartOutlined', component: './GenChartMq' },
  { path: '/genChart_async_thread',name:'数据分析(异步-多线程)', icon: 'AreaChartOutlined', component: './GenChartThread' },
  { path: '/myChart',name:'我的图表',icon: 'PieChartOutlined',component: './MyChart/index'},
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name:'管理员页面',
    routes: [
      { path: '/admin',redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', component: './Admin' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
