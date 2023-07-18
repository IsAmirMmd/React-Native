import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const formik = useFormik({
    initialValues,
  });

  function submitHandler(e) {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div class="formControl">
          <label>name</label>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            type="text"
          />
        </div>
        <div class="formControl">
          <label>email</label>
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="text"
          />
        </div>
        <div class="formControl">
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
