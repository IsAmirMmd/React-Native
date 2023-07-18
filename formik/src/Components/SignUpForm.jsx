import { useState } from "react";

const SignUpForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function changeHandler({ target }) {
    setData({ ...data, [target.name]: target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    setData({
      name: "",
      email: "",
      password: "",
    });
    console.log("submit");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div class="formControl">
          <label>name</label>
          <input
            name="name"
            value={data.name}
            onChange={changeHandler}
            type="text"
          />
        </div>
        <div class="formControl">
          <label>email</label>
          <input
            name="email"
            value={data.email}
            onChange={changeHandler}
            type="text"
          />
        </div>
        <div class="formControl">
          <label>password</label>
          <input
            name="password"
            value={data.password}
            onChange={changeHandler}
            type="text"
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
