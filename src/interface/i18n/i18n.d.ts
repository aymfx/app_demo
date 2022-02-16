interface I18NDeafultProps {
    defaultText?: string
    interpolation?: {
        [key?: string]: any
    }
}

interface I18NTextProps extends I18NDeafultProps {
    i18nKey: string
}

type I18NAddChangeCallback = (t: (s: string) => string) => void

type I18NObjValueString = { [key: string]: string }

type I18NGetI18NText = (
    key: string,
    options?: I18NDeafultProps
) => string

type I18NUseI18NText = (options?: { prefix?: string }) => {
    getI18NText: I18NGetI18NText
}

