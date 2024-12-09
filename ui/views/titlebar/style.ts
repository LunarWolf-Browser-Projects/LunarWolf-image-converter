import styled from 'styled-components';

export const TitleBarContainer = styled.div`
  -webkit-app-region: drag; /* Make the entire titlebar draggable */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333; /* Dark background */
  color: white;
  height: 40px;
  user-select: none;
`;

export const TitleBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const TitleBarButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

