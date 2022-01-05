import Brush from "../../tools/Brush";
import Rect from "../../tools/Rect";
import Circle from "../../tools/Circle";
import Eraser from "../../tools/Eraser";
import Line from "../../tools/Line";

export const SET_TOOL = 'SET_TOOL';

export const setTool = (tool: Brush | Rect | Circle | Eraser | Line) => ({type: SET_TOOL, payload: tool})