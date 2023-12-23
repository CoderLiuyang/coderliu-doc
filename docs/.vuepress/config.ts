import {defineUserConfig} from 'vuepress'
import {defaultTheme} from '@vuepress/theme-default'

export default defineUserConfig({
    // bundler: undefined,

    port: 8081,
    lang: 'zh-CN',
    title: 'coderliu',
    description: '一款开箱即用的快速构建web应用的脚手架',
    head: [
        // 站点图标
        ["link", {rel: "icon", href: "images/logo.ico"}],
        // SEO
        [
            "meta",
            {
                name: "keywords",
                content:
                    "coderliu是一款基于jdk11的web程序脚手架。",
            },
        ],
        // 百度统计
        [
            "script",
            {},
            `
        var _hmt = _hmt || [];
        (function() {
         var hm = document.createElement("script");
         hm.src = "https://hm.baidu.com/hm.js?1ac5f426ffb8c4cd0c2d016e41fc267a";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
        })();
      `
        ],
    ],
   permalink: "/:slug",

    // 监听文件变化，热更新
   extraWatchFiles: [".vuepress/*.ts", ".vuepress/sidebars/*.ts"],
    markdown: {
        // 开启代码块的行号
        lineNumbers: true,
        // 支持 4 级以上的标题渲染
        extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
    },

    theme: defaultTheme({
        logo: 'images/logo.png',
        navbar: [
            {
                text: '文档',
                link: '/foo/'
            },
            {
                text: 'Gitee',
                link: 'https://gitee.com/coderliufriends/coderliu-parent'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/CoderLiuyang/coderliu-parent'
            },
        ],
        sidebar: {
            '/foo/': [
                {
                    text: '介绍',
                    children: [
                        {
                            text: '快速开始',
                            link: '/foo/one'
                        },
                        '/docs/introduce/start',
                        '/docs/introduce/config'
                    ]
                }]
        }
    })
})


