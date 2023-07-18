import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import Select from "../common/Select";

// 1. init values
const initialValues = {
  name: "",
  email: "",
  password: "",
  RePassword: "",
  gender: "",
  nationality: "",
  terms: false,
};

// 2. submit
const onSubmit = (values) => {
  // do sth
  axios
    .post("http://localhost:3001/users", values)
    .then((res) => console.log(res.data))
    .catch();
};

// 3. validate(using formik handler)
const validate = (values) => {
  let errors = {};

  if (!values.name) errors.name = "Name is Required";
  if (!values.email) errors.email = "email is Required";
  if (!values.password) errors.password = "password is Required";

  return errors;
};

// 3. validate(using yup handler)
const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("email format").required("email is Required"),
  password: Yup.string()
    .required("password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  RePassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  gender: Yup.string().required("Select gender"),
  nationality: Yup.string().required("nationality is required"),
  terms: Yup.boolean()
    .required("The terms must be accepted")
    .oneOf([true], "The terms must be accepted"),
});

// 4. if we have the user id in db we can load its details and let him edit them
const savedData = {
  name: "amir",
  email: "amirf@gmal.com",
  password: "1235@#Abcd",
  RePassword: "1235@#Abcd",
  gender: "0",
  nationality: "IR",
  terms: false,
};

const items = [
  { value: "", name: "Select from below" },
  { value: "IR", name: "iran" },
  { value: "GER", name: "germany" },
  { value: "US", name: "usa" },
];

const SignUpForm = () => {
  const [savedDataDB, setSavedDataDB] = useState(null);

  useEffect(() => {
    // for ex we have data in db of user with id="1" ↓
    // axios
    //   .get("http://localhost:3001/users/1")
    //   .then((res) => {
    //     setSavedDataDB(res.data);
    //   })
    //   .catch();
  }, []);

  const formik = useFormik({
    initialValues: savedDataDB || initialValues,
    enableReinitialize: true,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="formControl">
          <label>name</label>
          <input name="name" {...formik.getFieldProps("name")} type="text" />
          {formik.errors.name && formik.touched.name && (
            <p className="error-onForm">{formik.errors.name}</p>
          )}
        </div>
        <div className="formControl">
          <label>email</label>
          <input name="email" {...formik.getFieldProps("email")} type="text" />
          {formik.errors.email && formik.touched.email && (
            <p className="error-onForm">{formik.errors.email}</p>
          )}
        </div>
        <div className="formControl">
          <label>password</label>
          <input
            name="password"
            {...formik.getFieldProps("password")}
            type="text"
          />
          {formik.errors.password && formik.touched.password && (
            <p className="error-onForm">{formik.errors.password}</p>
          )}
        </div>
        <div className="formControl">
          <label>enter password again</label>
          <input name="P" {...formik.getFieldProps("RePassword")} type="text" />
          {formik.errors.RePassword && formik.touched.RePassword && (
            <p className="error-onForm">{formik.errors.RePassword}</p>
          )}
        </div>
        <div>
          <input
            type="radio"
            checked={formik.values.gender === "0"}
            name="gender"
            value="0"
            onChange={formik.handleChange}
            id="0"
          />
          <label htmlFor="0">Male</label>
        </div>
        <div>
          <input
            type="radio"
            checked={formik.values.gender === "1"}
            name="gender"
            value="1"
            onChange={formik.handleChange}
            id="1"
          />
          <label htmlFor="1">Female</label>
        </div>
        <div>
          <Select items={items} formik={formik} name={"nationality"} />
        </div>
        <div>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            value="true"
            checked={formik.values.terms}
            onChange={formik.handleChange}
          />
          <label>Terms and Conditions</label>
        </div>
        <button type="submit" disabled={!formik.isValid}>
          submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
