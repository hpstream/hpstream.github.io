export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  const {
    themeConfig,
    pages
  } = siteData;
  var yeardirs = {};
  var category = [];
  pages.forEach((val) => {
    var {
      year,
      timestamp,
      datatext
    } = val.lastUpdated;
    if (val.regularPath == '/') {
      return;
    }
    yeardirs[year] = yeardirs[year] || [];
    val.year = year;
    val.datatext = datatext;
    val.timestamp = timestamp;
    yeardirs[year].push(val);
    // 按照类别分类
  })
  Vue.prototype.$yeardirs = yeardirs;
  //  Vue.use(router, {
  //    themeConfig
  //  })
  // console.log(router);
  // ...做一些其他的应用级别的优化
  // console.log(siteData)
}

! function (win, doc) {
  var htmlDom = doc.getElementsByTagName("html")[0];
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  var recalc = function () {
    var htmlWidth = doc.documentElement.clientWidth || doc.body.clientWidth;
    if (htmlWidth > 960) {
      htmlWidth = 960
    }
    htmlDom.style.fontSize = htmlWidth / 20 + 'px';
  }

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
}(window, document);