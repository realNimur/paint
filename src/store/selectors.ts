import {storeType} from "./index";
import {prevStateType} from "./prevstate/prevState";

export const selectorCanvas = (state: storeType) : HTMLCanvasElement | null => state.canvas.canvas;
export const selectorTool = (state: storeType): any => state.tool.tool;
export const selectorUndoList = (state: storeType) => state.state.undoList;
export const selectorRedoList = (state: storeType) => state.state.redoList;