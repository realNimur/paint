export const SET_UNDO_LIST = 'SET_UNDO_LIST';
export const SET_REDO_LIST = 'SET_REDO_LIST';

export const setUndoList = (array: any[]) => ({type: SET_UNDO_LIST, payload: array})
export const setRedoList = (array: any[]) => ({type: SET_REDO_LIST, payload: array})