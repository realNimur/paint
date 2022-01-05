import React, {FC, useEffect, useRef} from 'react';
import styled from "styled-components";
import {setCanvas} from "../store/canvas/actions";
import {useDispatch, useSelector} from "react-redux";
import {selectorUndoList} from "../store/selectors";
import {setUndoList} from "../store/prevstate/actions";

const CanvasWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

const CanvasStyled = styled.canvas`
  border: 1px solid #000;
  background-color: #fff;
  width: 600px;
  height: 400px;
`

const Canvas: FC = () => {

    const canvasRef = useRef<null | HTMLCanvasElement>(null);
    const dispatch = useDispatch();
    const undoList = useSelector(selectorUndoList);

    useEffect(() => {
        if (canvasRef.current instanceof HTMLCanvasElement) {
            dispatch(setCanvas(canvasRef.current));
        }
    }, [])
    return (
        <CanvasWrapper>
            <CanvasStyled
                width={600}
                height={400}
                ref={canvasRef}
                onMouseUp={() => {
                    if (canvasRef && canvasRef.current) {
                        let tempUndoList = [];
                        if(undoList.length > 0){
                            tempUndoList = [...undoList, canvasRef.current.toDataURL()];
                        } else {
                            tempUndoList = [canvasRef.current.toDataURL()]
                        }
                        dispatch(setUndoList(tempUndoList))
                    }
                }}
            />
        </CanvasWrapper>
    );
};

export default Canvas;