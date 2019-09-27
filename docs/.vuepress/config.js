// change /docs/.vuepress/config.js

module.exports = {
  theme: 'reco',
  title: '生命不惜，战斗不止',
  description: '每个人应该程序员都应该有一个极客精神',
  head: [
    ['meta', {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no'
    }]
  ],
  themeConfig: {
    valineConfig: {
      appId: 'Es0XkvlpqFTT0k9p8dlHWkgQ-gzGzoHsz', // your appId
      appKey: '0P4LrmEMIoROaOt1YfjMEAOQ', // your appKey
    },
    themePicker: true,
    type: 'blog',
    author: 'hpstream',
    nav: [
      { text: '时间排序', link: '/timeLine/', icon: 'reco-date' },
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 4, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认文案 “标签”
      }
    }
  }
}