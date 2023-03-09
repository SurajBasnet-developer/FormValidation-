import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import StyledForm from "./styles/StyleForm";
import StyledField from "./styles/StyleField";
import StyleErrorMessage from "./styles/StyledErrorMessage";
import StyledButton from "./styles/StyledButton";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "too short!")
    .max(50, "too long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "too short!")
    .max(50, "too long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Required"),
});

const onSubmit = (values) => {
  console.log(values);
};

const Form = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ errors, touched }) => (
      <StyledForm>
        <StyledField type="text" name="firstName" placeholder="First Name" />
        {errors.firstName && touched.firstName ? (
          <StyleErrorMessage>{errors.firstName}</StyleErrorMessage>
        ) : null}

        <StyledField type="text" name="lastName" placeholder="Last Name" />
        {errors.lastName && touched.lastName ? (
          <StyleErrorMessage>{errors.lastName}</StyleErrorMessage>
        ) : null}

        <StyledField type="email" name="email" placeholder="Email" />
        {errors.email && touched.email ? (
          <StyleErrorMessage>{errors.email}</StyleErrorMessage>
        ) : null}

        <StyledField type="password" name="password" placeholder="password" />
        {errors.password && touched.password ? (
          <StyleErrorMessage>{errors.password}</StyleErrorMessage>
        ) : null}
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    )}
  </Formik>
);

export default Form;
