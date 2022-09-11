import React, { Component } from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import { withFormik } from "formik";
import * as Yup from "yup";
import Recaptcha from "react-recaptcha";
import "./main.css";

const script = document.createElement("script");
script.src = "https://www.google.com/recaptcha/api.js";
script.async = true;
script.defer = true;
document.body.appendChild(script);

const forms = withFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
    reason: Yup.string().required("Reason is required!"),
    help: Yup.string().required("Help is required!")
  }),
  mapPropsToValues: props => ({
    email: "",
    reason: "",
    help: "",
    contact: "",
    phone: "",
    recaptcha: ""
  }),
  handleSubmit: (values, { setSubmitting }) => {
    const payload = {
      ...values
    };
    setTimeout(() => {
      alert(JSON.stringify(payload, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: "MyForm"
});

const ContactForm = props => {
  const {
    values,
    touched,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    setFieldTouched,
    isSubmitting
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <div className="block-form">
          <div className="block-form-left">
            <label htmlFor="reason" style={{ display: "block" }}>
              You reason for contacting us*
            </label>
            <input
              id="reason"
              type="text"
              value={values.reason}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.reason && touched.reson && (
              <div style={{ color: "red", marginTop: ".5rem" }}>
                {errors.reason}
              </div>
            )}
            <label htmlFor="help" style={{ display: "block" }}>
              How can we help you?*
            </label>
            <textarea
              id="help"
              rows="6"
              type="text"
              value={values.help}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.help && touched.help && (
              <div style={{ color: "red", marginTop: ".5rem" }}>
                {errors.help}
              </div>
            )}
          </div>
          <div className="block-form-right">
            <label htmlFor="contact" style={{ display: "block" }}>
              Contact person name*
            </label>
            <input
              id="contact"
              type="text"
              value={values.contact}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="email" style={{ display: "block" }}>
              Email
            </label>
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <div style={{ color: "red", marginTop: ".5rem" }}>
                {errors.email}
              </div>
            )}
            <label htmlFor="phone" style={{ display: "block" }}>
              Phone number*
            </label>
            <input
              id="phone"
              type="text"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <label>Recaptcha Validation</label>
        <p>
          * Fields marked with an asterisk are required Any information which
          concerns you is solely intended for REB, as data controller, to
          process your submitted application. Please only provide information
          which are strictly necessary to process your application.
        </p>
        <div className="btn">
          <button type="submit" className="btnform" disabled={isSubmitting}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

/*        <Recaptcha
          sitekey="6Lcx758UAAAAANN98Q7KmewKE0M1Ey-Prtt9I4Lg"
          render="explicit"
          theme="dark"
          verifyCallback={response => {
            setFieldValue("recaptcha", response);
          }}
          onloadCallback={() => {
            console.log("done loading!");
          }}
        />*/
/*
        <button
          type="button"
          className="outline"
          onClick={handleReset}
          disabled={!dirty || isSubmitting}
        >
          Reset
        </button>
*/

const MyEnhancedForm = forms(ContactForm);

export default MyEnhancedForm;
