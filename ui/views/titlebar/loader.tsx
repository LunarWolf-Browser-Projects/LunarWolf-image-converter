import React from 'react';
import { TitleBarContainer, TitleBarContent, TitleBarButton } from './style';

// Import the Electron API for window manipulation
const { remote } = window.require('electron');
const currentWindow = remote.getCurrentWindow();

const TitleBar: React.FC = () => {
  // Custom logic for handling close, minimize, and maximize
  const handleClose = () => {
    currentWindow.close();  // Close the window
  };

  const handleMinimize = () => {
    currentWindow.minimize();  // Minimize the window
  };

  const handleMaximize = () => {
    if (currentWindow.isMaximized()) {
      currentWindow.restore();  // Restore the window if it's maximized
    } else {
      currentWindow.maximize();  // Maximize the window
    }
  };

  return (
    <TitleBarContainer>
      <TitleBarContent>
        <h1>LunarWolf Browser</h1>
        <div>
          <TitleBarButton onClick={handleMinimize}>_</TitleBarButton>
          <TitleBarButton onClick={handleMaximize}>🗖</TitleBarButton>
          <TitleBarButton onClick={handleClose}>❌</TitleBarButton>
        </div>
      </TitleBarContent>
    </TitleBarContainer>
  );
};

export default TitleBar;
