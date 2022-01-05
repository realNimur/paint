import React, {ChangeEvent} from 'react';
import styled from "styled-components";
import gradientSVG from "../assets/img/gradient.svg";
import {useSelector} from "react-redux";
import {selectorTool} from "../store/selectors";

const LabelGradientStyled = styled.label`
  display: inline-block;
  height: 25px;
  width: 25px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #fff;
  background-image: url(${gradientSVG});
  background-repeat: no-repeat;
  background-position: center center;
`
const InputColorStyled = styled.input`
  opacity: 0;
`
const GradientWrapper = styled.span`
`

const GradientButton = () => {
    const currentTool = useSelector(selectorTool);

    const changeColor = (e: ChangeEvent<HTMLInputElement>) => {
        if (currentTool) {
            if (e.target.id === 'color') {
                currentTool.fillColor = e.target.value;
            } else {
                currentTool.strokeColor = e.target.value;
            }
        }
    }


    return (
        <GradientWrapper>
            <span>
                 <LabelGradientStyled htmlFor="color" />
            <span>Цвет</span>
            <InputColorStyled onChange={(e) => changeColor(e)} type="color" id="color" />
            </span>
            <span>
                  <LabelGradientStyled htmlFor="color-stroke" />
            <span>Цвет обводки</span>
            <InputColorStyled onChange={(e) => changeColor(e)} type="color" id="color-stroke" />
            </span>
        </GradientWrapper>
    )
        ;
};

export default GradientButton;