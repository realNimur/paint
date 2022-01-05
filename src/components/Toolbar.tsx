import React, {FC, useEffect} from 'react';
import styled from "styled-components";
import {toolbarHeight} from "../stylesConsts";
import brushSVG from '../assets/img/brush.svg';
import eraserSVG from '../assets/img/eraser.svg';
import undoSVG from '../assets/img/undo.svg';
import redoSVG from '../assets/img/redo.svg';
import saveSVG from '../assets/img/save.svg';
import GradientButton from "./GradientButton";
import {setTool} from "../store/tool/actions";
import {useDispatch, useSelector} from "react-redux";
import Brush from "../tools/Brush";
import {selectorCanvas, selectorRedoList, selectorUndoList} from "../store/selectors";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";
import {setRedoList, setUndoList} from "../store/prevstate/actions";

export const ToolbarStyled = styled.div`
  height: ${toolbarHeight};
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  box-shadow: 0 4px 5px gray;
  z-index: 2;
  padding: 0 40px 0 20px;
`


export const ButtonStyled = styled.button`
  height: 25px;
  width: 25px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 14px;
  background-color: #fff;

  &.active {
    outline: 2px solid red;
  }
`

const ButtonBrushStyled = styled(ButtonStyled)`
  background-image: url(${brushSVG});
  background-repeat: no-repeat;
  background-position: center center;
`

const ButtonSquareStyled = styled(ButtonStyled)`
  border-radius: 3px;
  background-color: #000;
`

const ButtonCircleStyled = styled(ButtonStyled)`
  border-radius: 50%;
  border: 2px solid #000;
`

const ButtonEraserStyled = styled(ButtonStyled)`
  background-image: url(${eraserSVG});
  background-repeat: no-repeat;
  background-position: center center;
`

const ButtonLineStyled = styled(ButtonStyled)`
  width: 25px;
  height: 3px;
  background-color: #000;
  transform: rotate(-45deg) translateX(12px);
  margin-right: 20px;
`

const ButtonUndoStyled = styled(ButtonStyled)`
  background-image: url(${undoSVG});
  background-repeat: no-repeat;
  background-position: center center;
`

const ButtonRedoStyled = styled(ButtonStyled)`
  background-image: url(${redoSVG});
  background-repeat: no-repeat;
  background-position: center center;
`

const ButtonSaveStyled = styled(ButtonStyled)`
  background-image: url(${saveSVG});
  background-repeat: no-repeat;
  background-position: center center;
`

const ButtonWrapper = styled.div`
  flex-grow: 1
`

const Toolbar: FC = () => {
    const dispatch = useDispatch();
    const canvasObj = useSelector(selectorCanvas);
     const undoList = useSelector(selectorUndoList);
     const redoList = useSelector(selectorRedoList);

       const undoHandler = () => {
        if (canvasObj) {
            let ctx = canvasObj.getContext('2d')
            if (ctx) {
                if (undoList.length > 0) {
                    let tempArray = [...undoList];
                    let dataUrl = tempArray.pop();
                    if (dataUrl) {
                        dispatch(setUndoList(tempArray))
                        dispatch(setRedoList([...redoList,dataUrl]));

                        let img = new Image();
                        img.src = dataUrl;
                        img.onload = () => {
                            if (ctx) {
                                ctx.clearRect(0, 0, canvasObj.width, canvasObj.height);
                                ctx.drawImage(img, 0, 0, canvasObj.width, canvasObj.height);
                            }
                        }
                    }
                } else {
                    ctx.clearRect(0, 0, canvasObj.width, canvasObj.height);
                }
            }
        }
    }
    const redoHandler = () => {
        if (canvasObj) {
            let ctx = canvasObj.getContext('2d')
            if (ctx) {
                if (redoList.length > 0) {

                    let tempArray = [...redoList];
                    let dataUrl = tempArray.pop();

                    if (dataUrl) {
                        dispatch(setRedoList(tempArray))
                        let img = new Image();
                        img.src = dataUrl;
                        img.onload = () => {
                            if (ctx) {
                                ctx.clearRect(0, 0, canvasObj.width, canvasObj.height);
                                ctx.drawImage(img, 0, 0, canvasObj.width, canvasObj.height);
                            }
                        }
                    }
                }
            }
        }
    }
    return (
        <ToolbarStyled>
            <ButtonWrapper>
                <ButtonBrushStyled onClick={() => {
                    if (canvasObj) dispatch(setTool(new Brush(canvasObj)))
                }}
                />
                <ButtonSquareStyled onClick={() => {
                    if (canvasObj) dispatch(setTool(new Rect(canvasObj)))
                }} />
                <ButtonCircleStyled onClick={() => {
                    if (canvasObj) dispatch(setTool(new Circle(canvasObj)))
                }} />
                <ButtonEraserStyled onClick={() => {
                    if (canvasObj) dispatch(setTool(new Eraser(canvasObj)))
                }} />
                <ButtonLineStyled onClick={() => {
                    if (canvasObj) dispatch(setTool(new Line(canvasObj)))
                }} />
                <GradientButton />
            </ButtonWrapper>
            <div className="">
                <ButtonUndoStyled onClick={undoHandler} />
                <ButtonRedoStyled onClick={redoHandler}/>
                <ButtonSaveStyled />
            </div>


        </ToolbarStyled>
    );
};

export default Toolbar;