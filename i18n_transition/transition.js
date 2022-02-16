// 简体转繁体
// 自动生成 zh-HK 的i18n文件

const path = require('path')
const fs = require('fs')
const Translate = require('./ToolGood.Words.Translate')

const translate = new Translate()

const zh = fs.readFileSync(path.resolve(__dirname, '../src/locales/zh/translation.json'))
const zhJSON = JSON.parse(zh.toString())

const tsl = (target, key, parent) => {
    if (typeof target === 'object') {
        Object.keys(target).forEach(_key => {
            tsl(target[_key], _key, target)
        })
    }
    else {
        parent[key] = translate.ToTraditionalChinese(target)
    }
}
// 转为繁体
tsl(zhJSON)

const str = JSON.stringify(zhJSON)

// 写文件
fs.writeFileSync(path.resolve(__dirname, '../src/locales/zh-HK/translation.json'), str)


