import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
function Signup() {
  let validtion = yup.object({
    firstName: yup.string().required("fitst name rrequird").min(3).max(10),
    email: yup.string().required().email(),
  });
  function doneForm(values) {
    console.log(values);
  }
  let formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      phoneNamber: "",
    },
    validationSchema: validtion,
    onSubmit: doneForm,
  });
  return (
    <div className="container mt-5">
      <form onSubmit={formik.handleSubmit}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="firstName"
            class="form-control"
            placeholder="Enter your Name"
          />
          {formik.errors.firstName ? (
            <p className="text-danger fs-6 my-2">{formik.errors.firstName}</p>
          ) : (
            ""
          )}
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="lastName"
            placeholder="Enter your Name"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="email"
            placeholder="Enter your Email"
          />
          {formik.errors.email ? (
            <p className="text-danger fs-6 my-2">{formik.errors.email}</p>
          ) : (
            ""
          )}
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="password"
            placeholder="Enter your Password"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            RePassword
          </label>
          <input
            type="text"
            class="form-control"
            name="rePassword"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="rePassword"
            placeholder="confirm Password"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Phone Number
          </label>
          <input
            type="text"
            class="form-control"
            name="phoneNamber"
            value={formik.values.phoneNamber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="phoneNamber"
            placeholder="Enter your Phone number"
          />
        </div>
        <div className="text-end">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
