# hello-world.md 新增markdown

新增markdown 必须在 src/.vuepress/config.js 里配置
``` js
    sidebar: {
      '/guide/': [
        {
          title: '向导',
          collapsable: false,
          children: [
            '',
            'using-vue',
            'hello-world'
          ]
        }
      ],
    }
```
