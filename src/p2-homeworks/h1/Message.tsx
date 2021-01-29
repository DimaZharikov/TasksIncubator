import React from "react";
import s from "./Message.module.css";


type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

type MessagePropsType = {
    messageData: MessageDataType
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            <img className={s.img} alt='Текст' src={props.messageData.avatar}/>
            <div className={s.content}>
                <div className={s.name}>{props.messageData.name}</div>
                <div className={s.text}>{props.messageData.message}</div>
                <div className={s.time}>{props.messageData.time}</div>
            </div>

            <div className={s.clear}></div>

        </div>
    )
}

export default Message;
