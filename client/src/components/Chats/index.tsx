import React from "react";
import {Image} from "../layout";

import "./styles.scss";

const chatsMock = [
    {
        lastMsg: "It's last message!",
        chatName: "Vasiliy"
    },
    {
        lastMsg: "It's last message!",
        chatName: "Vasiliy"
    },
    {
        lastMsg: "It's last message!",
        chatName: "Vasiliy"
    }
];

type ChatPreview = {
    chatName: string;
    lastMsg: string;
    img?: string;
};

const Chat = ({chatName, lastMsg, img}: ChatPreview) => {
    return (
        <div className="chat" onClick={e => console.log(e)}>
            <div className="chat__img">
                <Image path={img} size="l"/>
            </div>
            <div className="chat__content">
                <div className="chat__content__name">{chatName}</div>
                <div className="chat__content__msg">{lastMsg}</div>
            </div>
        </div>
    );
};

type ChatsProps = {
    chats?: ChatPreview[];
};

const Chats = ({chats = chatsMock}: ChatsProps) => {
    
    return (
        <div className="chats">
            {chats.map((chat, i) => <Chat key={`chat-${i}`}{...chat}/>)}
        </div>
    );
};

export default Chats;