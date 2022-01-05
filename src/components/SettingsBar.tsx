import React, {FC} from 'react';
import styled from "styled-components";
import {toolbarHeight} from "../stylesConsts";
import {ToolbarStyled} from "./Toolbar";
import {useDispatch, useSelector} from "react-redux";
import {selectorTool} from "../store/selectors";

const SettingsbarStyled = styled(ToolbarStyled)`
  top: ${toolbarHeight};
  z-index: 1;
  justify-content: start;
`

const SettingsBar: FC = () => {
    const selectTool = useSelector(selectorTool);

    return (
        <SettingsbarStyled>
            <label htmlFor="line-width">Толщина линии</label>
            <input
                id="line-width"
                type="number"
                min={1}
                max={50}
                defaultValue={1}
                onChange={(e) => {
                    if (selectTool) {
                        selectTool.lineWidth = e.target.value;
                    }
                }}
            />
        </SettingsbarStyled>
    );
};

export default SettingsBar;