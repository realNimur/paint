import React from 'react';
import styled, {createGlobalStyle} from "styled-components";
import {backgroundColor} from "./stylesConsts";
import Toolbar from "./components/Toolbar";
import SettingsBar from "./components/SettingsBar";
import Canvas from "./components/Canvas";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <AppWrapper>
                <Toolbar />
                <SettingsBar />
                <Canvas />
            </AppWrapper>
        </>
    )
}

export default App;
