import React, {createContext} from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter} from "react-router-dom";

import App from "./components/App";
import Store from "./store/store";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


interface State {
    store: Store;
}
const store = new Store();
export const Context = createContext<State>({store});


root.render(
    <Context.Provider value={{store}}>
        <BrowserRouter>
                <App/>
        </BrowserRouter>
    </Context.Provider>
);
