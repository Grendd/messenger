import React from "react";
import "./styles.scss";

export const Header = () => {
    return (
        <header className="header">
            <h1>Messenger</h1>
        </header>
    );
};

export const Footer = () => {
    return (
        <footer className="footer">
            <div>Created by <a href="github.com/grendd">grendd</a> in 2022</div>
        </footer>
    );
};

type PageProps = {
    children: React.ReactNode
}

const Page = ({children}: PageProps) => {
    return (
        <div className="page">
            {children}
        </div>
    );
};

export default Page;
