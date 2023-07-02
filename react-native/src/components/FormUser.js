import React, { useState } from "react";
const FormHook = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  //   the ... is for copying last details and also saving
  const firstNameHandle = (e) => {
    setUser({ ...user, firstName: e.target.value });
  };
  const lastNameHandle = (e) => {
    setUser({ ...user, lastName: e.target.value });
  };
  return (
    <div>
      <form>
        <input onChange={firstNameHandle} value={user.firstName} />
        <input onChange={lastNameHandle} value={user.lastName} />
        <h2>my first name is "{user.firstName}"</h2>
        <h2>my last name is "{user.lastName}"</h2>
      </form>
    </div>
  );
};

export default FormHook;
