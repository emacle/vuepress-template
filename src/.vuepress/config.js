const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress 文档',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  /**
   * TODO: 指定base后，md文件中图片引用只能以
   * <img :src="$withBase('/foo.png')" alt="foo"> 形式添加，麻烦
   * 还是直接发布到时根目录或者虚拟主机指定端口还访问比较合适 
   * https://example.com:12000
   * Apache2 配置如下
   * <VirtualHost *:12000>
   *     ServerAdmin webmaster@localhost
   *     DocumentRoot /var/www/vuepress/dist
   * <Directory /var/www/vuepress/dist/>
   *  AllowOverride All
   * </Directory>
   * </VirtualHost>
   * 
   * Apache以Alias方式部署网站时,需要指定base
   * 如果你打算发布到 https://example.com/，则可以省略这一步，因为 base 默认即是 "/"。
   * 如果你打算发布到 https://example.com/vuepress，则将 base 设置为 "/vuepress/"。
   * Apache2 配置如下
   * Alias /vuepress "/var/www/vuepress/dist"
   * <Directory /var/www/vuepress/dist>
   *   Options +FollowSymlinks
   *   AllowOverride all
   *   Require all granted
   * </Directory>
   */
  // base: '/vuepress/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    logo: '/hero.png',
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: '主页', link: '/' },                      // 根路径
      {
        text: '指南',
        link: '/guide/',
      },
      { text: 'Github', link: 'https://github.com/emacle/vuepress-template' }, // 外部链接
      // {
      //   text: 'Config',
      //   link: '/config/'
      // },
      // {
      //   text: 'VuePress',
      //   link: 'https://v1.vuepress.vuejs.org'
      // }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('指南'),
    }
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ]
}

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '', // README.md
        'using-vue',
        'hello-world',
        'image'
      ]
    }
  ]
}