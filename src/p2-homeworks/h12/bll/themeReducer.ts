export type ThemeInitState = {
    themes: string
}

export type ThemeActionTotalType = SetDarkThemeActionType | SetRedThemeActionType | SetSomeThemeActionType

type SetDarkThemeActionType = {
    type:'SET-DARK-THEME'
}

type SetRedThemeActionType = {
    type:'SET-RED-THEME'
}

type SetSomeThemeActionType = {
    type:'SET-SOME-THEME'
}

const initState = {
    themes: 'some'
};

export const themeReducer = (state:ThemeInitState = initState, action: ThemeActionTotalType): ThemeInitState => { // fix any
    switch (action.type) {
        case "SET-DARK-THEME":
            return {themes: 'dark'}
        case "SET-RED-THEME":
            return {themes: 'red'}
        case "SET-SOME-THEME":
            return {themes: 'some'}
        default: return state;
    }
};