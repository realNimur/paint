import {SET_TOOL} from "./actions";

const toolState = {
    tool: null
}


export type toolStateType = typeof toolState;

export const toolReducer = (state = toolState, action: any) => {
    switch (action.type) {
        case SET_TOOL: {
            return {
                ...state,
                tool: action.payload
            }
        }
        default:
            return state;
    }
}

