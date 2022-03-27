import React, {ChangeEvent, useState} from "react";
import Messages from "../Message";
import {Unit, Image} from "../layout";
import {Message as MessageType} from "../../types";

import "./styles.scss";

type DialogProps = {
    name: string
};

type InputFormProps = {
    onSubmit: (e: MessageType) => void
}

const DialogHeader = ({name}: DialogProps) => {
    return (
        <Unit className="dialog__header">
            <Unit alignItems="center">
                <Image size="l" />
            </Unit>
            <div className="dialog__title" style={{width: "100%"}}>{name}</div>
        </Unit>
    );
};

const InputForm = ({onSubmit}: InputFormProps) => {
    const [message, setMessage] = useState("");
    
    const onEnter = (e: React.KeyboardEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(message === "")
            return;
        
        onSubmit({text: message, isOwner: true, date: String(new Date())});
        setMessage("");
    };

    return (
        <form onSubmit={onEnter} onClick={e => e.stopPropagation()} className="dialog__form">
            <input
                id="taskInput"
                className="dialog__input"
                type="text"
                autoComplete="off"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.currentTarget.value)}
                value={message}
                placeholder="Write a message..."
            /> 
        </form>
    );
};

const messagesMock = [{text: "tuc tuc tuc))", isOwner: false},{text: "Hello.", isOwner: true},{text: "tuc tuc tuc))", isOwner: false},{text: "Hello.", isOwner: true},{text: "tuc tuc tuc))", isOwner: false},{text: "Hello.", isOwner: true},{text: "tuc tuc tuc))", isOwner: false},{text: "Hello.", isOwner: true},{text: "Hello))", isOwner: false},{text: "Who are you?", isOwner: true},{text: "Vanyok Gamaz))", isOwner: false},{text: "dancer", isOwner: false},{text: "How are you?", isOwner: true},{text: "I'm fine)))", isOwner: false},{text: "Are you idiot?", isOwner: true},{text: "I just wanna dance.", isOwner: false},{text: "Are you idiot?", isOwner: true},{text: "I just wanna dance!!", isOwner: false},{text: "You are idiot.", isOwner: true},{text: "lorem upsum jnejfne jenfjen nwejfnjein njn nejwjen nejwfnjenfij njewjwenjenfiwe n newj", isOwner: false},].reverse();

const Dialog = ({name}: DialogProps) => {
    const [messages, setMessages] = useState<MessageType[]>(messagesMock);

    const onEnter = (newMsg: MessageType) => {
        setMessages([newMsg, ...messages]);
    };

    return (
        <div className="dialog">
            <DialogHeader name={name}/>
            <Messages messages={messages} />
            <InputForm onSubmit={onEnter}/>
        </div>
    );
};

export default Dialog;