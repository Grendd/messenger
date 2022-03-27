import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import * as serviceWorker from "./serviceWorker";
import store from "./store/store";
import Page, {Header, Footer} from "./components/Page";
import Content from "./components/Content";

import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Page>
                <Header />
                <Content />
                <Footer />
            </Page>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
