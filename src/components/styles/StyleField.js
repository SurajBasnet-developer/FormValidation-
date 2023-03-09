import { Field } from "formik";
import styled from "styled-components";

const StyledField = styled(Field)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 25px;
  padding: 0.6em;
  border: none;
  outline: none;
  color: whitesmoke;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
  background-color: #171717;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  margin-top: 20px;
  height: 5px;
`;

export default StyledField;
