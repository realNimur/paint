import {SET_CANVAS} from "./actions";

const canvasState = {
    canvas: null,
}

export type canvasStateType = typeof canvasState;

export const canvasReducer = (state = canvasState, action: any) => {
    switch (action.type) {
        case SET_CANVAS: {
            return {
                ...state,
                canvas: action.payload
            }
        }
        default:
            return {...state};
    }
}

