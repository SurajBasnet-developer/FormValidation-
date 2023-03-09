import { Form } from "formik";
import styled from "styled-components";
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 5px;
  padding-left: 2em;
  padding-right: 2em;
  padding-bottom: 0.4em;
  background-color: #171717;
  border-radius: 40px;
  transition: 0.6s ease-in-out;
  text-align: center;
  width: 200px;
  height: 410px;
`;

export default StyledForm;
