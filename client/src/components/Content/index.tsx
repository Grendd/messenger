import React from "react";
import Chats from "../Chats";
import Dialog from "../Dialog";


import "./styles.scss";


export const Content = () => {
    return (
        <div className="content">
            <Chats />
            <Dialog name="Ivan Gamaz"/>
        </div>
    );
};

export default Content;