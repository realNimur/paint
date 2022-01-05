import {combineReducers, createStore} from "redux";
import {toolReducer, toolStateType} from "./tool/toolState";
import {canvasReducer, canvasStateType} from "./canvas/canvasState";
import {composeWithDevTools} from "redux-devtools-extension";
import {prevStateReducer, prevStateType} from "./prevstate/prevState";


const reducers = combineReducers({tool: toolReducer, canvas: canvasReducer, state: prevStateReducer})

export const store = createStore(reducers, composeWithDevTools())

export type storeType = {
    tool: toolStateType,
    canvas: canvasStateType,
    state: prevStateType
};


