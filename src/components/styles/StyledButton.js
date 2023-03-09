import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #252525;
  margin-top: 18px;
  color: white;
  display: flex;
  font-weight: bold;
  padding: 10px 20px;
  margin-bottom: 3em;
  align-items: center;
  border: none;
  border-radius: 85px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: green;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export default StyledButton;
