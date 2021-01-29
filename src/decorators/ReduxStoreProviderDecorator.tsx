import React from 'react'
import {Provider} from 'react-redux'
import {combineReducers, createStore} from "redux";
import {loadingReducer} from "../p2-homeworks/h10/bll/loadingReducer";
import {themeReducer} from "../p2-homeworks/h12/bll/themeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer
});

export const storyBookStore = createStore(reducers)


const ReduxStoreProviderDecoration = (storyFn: any) => (
    <Provider store={storyBookStore}>
        {storyFn()}
    </Provider>
)

export default ReduxStoreProviderDecoration;