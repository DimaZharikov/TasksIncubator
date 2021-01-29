import classes from "./radio.module.css";
import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import { IRadio } from "../../HW7";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: Array<IRadio>
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
       onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options
      ? options.map((
          o,
          i // map options with key
        ) => (
          <label key={name + "-" + i} className={classes.RadioLabel}>
            <input
              type={"radio"}
              checked={o.checked}
              name={o.name}
              value={o.name}
              onChange={onChangeCallback}
              // name, checked, value, onChange
            />
            <span>{o.name}</span>
          </label>
        ))
      : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
