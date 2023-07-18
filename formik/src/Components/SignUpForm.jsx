import { useFormik } from "formik";

// 1. init values
const initialValues = {
  name: "",
  email: "",
  password: "",
};

// 2. submit
const onSubmit = (values) => {
  // do sth
};

// 3. validate
const validate = (values) => {
  let errors = {};

  if (!values.name) errors.name = "Name is Required";
  if (!values.email) errors.email = "email is Required";
  if (!values.password) errors.password = "password is Required";

  return errors;
};

const SignUpForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="formControl">
          <label>name</label>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
          />
          {formik.errors.name && formik.touched.name && (
            <p className="error-onForm">{formik.errors.name}</p>
          )}
        </div>
        <div className="formControl">
          <label>email</label>
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
          />
          {formik.errors.email && formik.touched.email && (
            <p className="error-onForm">{formik.errors.email}</p>
          )}
        </div>
        <div className="formControl">
          <label>password</label>
          <input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
          />
          {formik.errors.password && formik.touched.password && (
            <p className="error-onForm">{formik.errors.password}</p>
          )}
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
