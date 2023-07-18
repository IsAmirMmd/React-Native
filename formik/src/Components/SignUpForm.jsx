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
            type="text"
          />
        </div>
        <div className="formControl">
          <label>email</label>
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="text"
          />
        </div>
        <div className="formControl">
          <label>password</label>
          <input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="text"
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
