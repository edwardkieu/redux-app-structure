import { createStore, compose, applyMiddleware } from "redux";
import appReducers from "./../reducer/index";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(appReducers, composeEnhancer(applyMiddleware(thunk)));