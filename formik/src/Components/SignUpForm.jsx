import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const onSubmit = (values) => {
    // do sth
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
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
