import { useFormik } from "formik";
import * as Yup from "yup";

// 1. init values
const initialValues = {
  name: "",
  email: "",
  password: "",
  RePassword: "",
};

// 2. submit
const onSubmit = (values) => {
  // do sth
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
});

const SignUpForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
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
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
