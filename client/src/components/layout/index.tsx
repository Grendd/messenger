import React from "react";
import {UnitProps, Size} from "./types";

import "./styles.scss";

export type ImageProps = {
    path?: string;
    size?: Size
}
export const Image = ({path, size="m"}: ImageProps) => {
    const sizeStyles = (size: Size) => {
        switch(size) {
            case "s":
                return {width: "20px", height: "20px"};
            case "m":
                return {width: "40px", height: "40px"};
            case "l":
                return {width: "60px", height: "60px"};
            case "xl":
                return {width: "80px", height: "80px"};
            default:
                return {width: "40px", height: "40px"};
        }
    };

    return (
        <div className="img-fc" style={sizeStyles(size)}>
            {path && <img src={path} alt="user"/>}
        </div>
    );
};

export const Unit = ({children, className = "", ...props}: UnitProps) => <div className={`unit ${className}`} style={props}>{children}</div>;
