const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'NEAR and Far from Any Coding',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

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
    lastUpdated: false,
    sidebar: {
      '/computer/': [
        {
          title: 'Chapter 1: You and Your Computer',
          collapsable: false
        }
      ],
      '/internet/': [
        {
          title: 'Chapter 2: You and The Internet',
          collapsable: false
        }
      ],
      '/web2/': [
        {
          title: 'Chapter 3: You and Web2',
          collapsable: false
        }
      ],
      '/web3/': [
        {
          title: 'Chapter 4: You and Web3',
          collapsable: false
        }
      ],
      '/near/': [
        {
          title: 'Chapter 5: You and NEAR',
          collapsable: false
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
