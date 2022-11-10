import React from "react";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
  termsAndConditions: Yup.bool().oneOf(
    [true],
    "You need to accept the terms and conditions"
  ),
  category: Yup.string().required("Select first"),
  gender: Yup.string().required("must be select"),
  description: Yup.string()
    .min(20, "Minimum 20 words ")
    .required(" minimun 20 words"),
  name: Yup.string().required("Write name here"),
  togglebutton: Yup.boolean().oneOf([true]).required("You need to Switch"),
});

const FormikForm = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{
              email: " ",
              password: "",
              termsAndConditions: false,
              selectOption: "",
              gender: "",
              category: "",
              description: "",
              name: "",
              togglebutton: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              console.log(values);
              alert("Form is validated! Submitting the form...");
            }}
          >
            {({
              touched,
              errors,
              isSubmitting,
              values,
              handleChange,
              handleBlur,
            }) =>
            
                <div>
                  <div className="row mb-5">
                    <div className="col-lg-12 text-center">
                      <h1 className="mt-5">Login Form</h1>
                    </div>
                  </div>
                  <Form>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        autoComplete="off"
                        className={`mt-2 form-control
                          ${touched.name && errors.name ? "is-invalid" : ""}`}
                      />
                      <ErrorMessage
                        component="div"
                        name="email"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        autoComplete="off"
                        className={`mt-2 form-control
                          ${touched.email && errors.email ? "is-invalid" : ""}`}
                      />
                      <ErrorMessage
                        component="div"
                        name="email"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password" className="mt-3">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className={`mt-2 form-control
                          ${
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="password"
                        className="invalid-feedback"
                      />
                    </div>
                    <div>
                      <div>
                        <label htmlFor="category">Category</label>
                        <select
                          id="category"
                          name="category"
                          className={`mt-2 form-control
                         ${
                           touched.category && errors.category
                             ? "is-invalid"
                             : ""
                         }`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.category}
                        >
                          <option value="">Select</option>
                          <option value="Food">Food</option>
                          <option value="Entertainment">Entertainment</option>
                          <option value="Academic">Academic</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-2">
                      <label>
                        Female
                        <Field type="radio" name="gender" value="Female" />
                      </label>
                      <label>
                        Male
                        <Field type="radio" name="gender" value="Male" />
                      </label>
                      {errors.gender &&  <p style={{color:'#dc3545'}}>{errors.gender}</p> }
                    </div>
                    <div className="mt-2">
                      <label>
                        Description
                        <Field
                          type="textarea"
                          name="description"
                          rows="4"
                          cols="50"
                          className={`mt-2 form-control
                          
                          ${
                            touched.description && errors.description
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                      </label>
                    </div>

                    <div className="mt-4">
                      <label className="switch">
                        <Field type="checkbox" name="togglebutton" />
                        <span className="slider round"></span>
                      </label>
                      {errors.togglebutton && <p style={{color:'#dc3545'}}>{errors.togglebutton}</p>}
                    </div>

                    <div className="mt-2">
                      <label>
                        Terms and conditions
                        <Field type="checkbox" name="termsAndConditions" />
                      </label>
                      {errors.termsAndConditions && (
                        <p style={{color:'#dc3545'}}>{errors.termsAndConditions}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-4"
                    >
                      Submit
                    </button>
                  </Form>
                </div>
            }
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default FormikForm;
