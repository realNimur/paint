import {SET_REDO_LIST, SET_UNDO_LIST} from "./actions";

const prevState = {
    undoList: [],
    redoList: []
}

export type prevStateType = typeof prevState;

export const prevStateReducer = (state = prevState, action: any) => {
    switch (action.type) {
        case SET_REDO_LIST: {
            return {
                ...state,
                redoList: action.payload
            }
        }
        case SET_UNDO_LIST: {
            return {
                ...state,
                undoList: action.payload
            }
        }
        default:
            return {...state};
    }
}

