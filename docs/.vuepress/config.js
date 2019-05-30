module.exports = {
  title: 'hpstream',
  description: '',
  head: [
    ['link', {rel: 'icon',href: '/img/logo.jpeg'}]
  ],
  base:"/",
  themeConfig:{
    logo: "/img/logo.jpeg"
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale('zh-cn');
          return {
            year: moment(timestamp).format('YYYY'),
            datatext: moment(timestamp).calendar(),
            timestamp: timestamp
          }
        }
      }
    ]
  ]
  
}
