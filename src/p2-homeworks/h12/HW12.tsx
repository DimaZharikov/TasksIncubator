import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";

const themes: Array<string> = ['some', 'red', 'dark'];

function HW12() {
    const theme = useSelector((state: AppStoreType) => state.theme.themes)
    const dispatch = useDispatch()
    const onChangeOption = (option: string): void => {
        if (option === 'dark') {
            dispatch({type: 'SET-DARK-THEME'})
        }
        if (option === 'red') {
            dispatch({type: 'SET-RED-THEME'})
        }
        if (option === 'some') {
            dispatch({type: 'SET-SOME-THEME'})
        }
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12

                <div className={s.wrapperHW12}>
                    <SuperSelect
                        options={themes}
                        onChangeOption={onChangeOption}
                    />
                </div>

            </span>
        </div>
    );
}

export default HW12;
