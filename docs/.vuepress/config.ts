import {defineUserConfig} from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
export default defineUserConfig({

    port: 8081,
    lang: 'zh-CN',
    title: 'coderliu',
    description: '这是我的第一个 VuePress 站点',
    // theme: defaultTheme({
    // }),

    themeConfig: {
        logo: 'https://excalidraw.com/apple-touch-icon.png',
    }
})


