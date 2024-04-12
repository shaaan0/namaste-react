import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};

//   if (!values.userName) {
//     errors.userName = "Required";
//   } else if (values.userName.length < 5) {
//     errors.userName = "Must be 5 characters or more";
//   }
//   if (!values.password) {
//     errors.userName = "Required";
//   } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
//       values.password
//     )
//   ) {
//     errors.userName =
//       "Password must have Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:";
//   }
//   return errors;
// };

const LoginForm = () => {
  //   const formik = useFormik({
  //     initialValues: {
  //       userName: "",
  //       password: "",
  //     },
  //     validationSchema: Yup.object({
  //       userName: Yup.string()
  //         .max(15, "Must be less than 15 characters or less")
  //         .min(5, "Must be more than 5 chracters")
  //         .required("Required"),
  //       password: Yup.string()
  //       .matches(
  //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  //         "Password must have Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"
  //       )
  //       .required("Password is mandatory"),
  //     }),
  //     onSubmit: (values) => {
  //       alert(JSON.stringify(values, null, 2));
  //     },
  //   });

  return (
    <Formik
      initialValues={{ userName: "", password: "" }}
      validationSchema={Yup.object({
        userName: Yup.string()
          .max(15, "Must be less than 15 characters or less")
          .min(5, "Must be more than 5 chracters")
          .required("Required"),
        password: Yup.string()
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must have at least one uppercase letter, one lowercase letter, one number and one special character:"
          )
          .min(8, "Must have minimum eight characters")
          .required("Password is mandatory"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            name="userName"
            type="text"
            {...formik.getFieldProps("userName")}
          />
          {formik.touched.userName && formik.errors.userName ? (
            <div>{formik.errors.userName}</div>
          ) : (
            <div></div>
          )}
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.userName && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
