import React, {useState} from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";
import s from './hw7.module.css'

const arr: Array<string> = ["x", "y", "z"];

function HW7() {
    const [value, onChangeOption] = useState(arr[1]);

    return (
        <div>
            <hr/>
            homeworks 7

            {/*should work (должно работать)*/}
            <div className={s.wrapper}>
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={"radio"}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
            </div>
        </div>
    );
}

export default HW7;
