import React from "react";
import {Property} from "csstype";
import {Message as MessageType} from "../../types";
import {Unit} from "../layout";
import {currentDate} from "../../utils";
import "./styles.scss";

export const Message = ({text, isOwner = false, date}: MessageType) => {
    const {row, background, radius} = {
        row: isOwner ? "row-reverse" : "row",
        background: isOwner ? "blue" : "darkblue",
        radius: isOwner ? "16px 0 24px 16px" : "0 16px 16px 24px"
    };
    
    return (
        <Unit flexDirection={row as Property.FlexDirection}>
            <div className="message" style={{backgroundColor: background, borderRadius: radius}}>
                {date && <div className="message-time">{currentDate("time")}</div>}
                {text}
            </div>
        </Unit>
    );
};

type MessagesProps = {
    messages: MessageType[];
}

const Messages = ({messages}: MessagesProps) => {
    return (
        <div className="messages">
            {messages.map((message, i) => <Message key={`message-${i}`} {...message}/>)}
        </div>
    );
};

export default Messages;