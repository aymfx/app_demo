import { useState, useEffect } from "react";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import zh from "./zh/translation.json";
import zh_hk from "./zh-HK/translation.json";
// 订阅
const callbacks: I18NAddChangeCallback[] = [];
const runCallbacks = () => callbacks.forEach((cb) => cb((s) => i18n.t(s)));
export const i18nAddChange = (cb: I18NAddChangeCallback) => {
  callbacks.push(cb);
  return () => {
    const index = callbacks.indexOf(cb);
    if (index > -1) callbacks.splice(index, 1);
  };
};

// 使用i18文字
let inited = false;
// 单次获取
export const getI18NTextOnce: I18NGetI18NText = (
  key = "",
  { defaultText = key, interpolation } = {}
) =>
  inited
    ? i18n.t(key, { defaultValue: defaultText, ...interpolation })
    : defaultText;
// hooks获取
export const useI18NText: I18NUseI18NText = ({ prefix = "" } = {}) => {
  const [, /* count */ setCount] = useState(0);

  useEffect(() => {
    const un = i18nAddChange(() => setCount((count) => count + 1));
    return () => un();
  }, [prefix]);

  return {
    /**
     * @description 获取国际化文本
     * @param {String} key 内容key
     * @param {Object} params
     * @param {String} params.defaultText 默认内容
     * @param {Object} params.interpolation 插值内容
     * */
    getI18NText: (key = "", { defaultText = key, interpolation } = {}) =>
      inited
        ? i18n.t(prefix + key, { defaultValue: defaultText, ...interpolation })
        : defaultText,
  };
};

// 使用方式
// // i18n国际化纯文本
// const { getI18NText } = useI18NText({ prefix: 'login.' })

// console.log(getI18NText('请输入手机号码'))

// 订阅
i18n.on("initialized", (/* options */) => {
  // console.log('i18n initialized', options)
  inited = true;
  runCallbacks();
});
i18n.on("languageChanged", (/* lng */) => {
  // console.log('i18n languageChanged', lng)
  runCallbacks();
});
i18n.on("loaded", (/* loaded */) => {
  // console.log('i18n loaded', loaded)
  runCallbacks();
});
// i18n.on('failedLoading', (lng, ns, msg) => console.log('i18n failedLoading', lng, ns, msg))
// i18n.on('missingKey', (lngs, namespace, key, res) => console.log('i18n missingKey', lngs, namespace, key, res))

// 初始化
i18n
  .use(LanguageDetector) // 嗅探当前浏览器语言
  // .use(Backend)
  .use(initReactI18next) // init i18next
  .init({
    detection: {
      // order and from where user language should be detected
      order: [
        /* 'querystring', 'cookie',  */ /* 'localStorage', */ /*  'sessionStorage', */ "navigator",
        "htmlTag" /* , 'path', 'subdomain' */,
      ],
    },
    // 需要注释掉，否则不会自动加载对应资源
    // 利用 resources 立即设置当前环境语言用于接口请求 header 的设置
    // 使用 reloadResources 方法重新加载远程资源
    // 引入资源文件
    resources: {
      zh: {
        translation: zh,
      },
      "zh-hk": {
        translation: zh_hk,
      },
    },
    // 选择默认语言，会覆盖自动检测
    // lng: 'zh-HK', // navigator.language,
    // 备用语言始终会被加载
    fallbackLng: "zh",
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
