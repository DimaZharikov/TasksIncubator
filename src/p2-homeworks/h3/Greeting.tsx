import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: boolean
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClassTrue = s.errorFalse;
    const displayNone = s.displayNone;


    return (
        <div className={s.content}>
            <input value={name} onChange={setNameCallback} className={error ? inputClassTrue : ""}/>
            <span className={error ? s.errorText : displayNone}>{error ? 'Введите имя' : ''}</span>
            <button onClick={addUser} className={s.button}>add</button>
            <br/>
            <span className={s.totalUsers}>Добавлено пользователей: {totalUsers}</span>
        </div>
    );
}

export default Greeting;
