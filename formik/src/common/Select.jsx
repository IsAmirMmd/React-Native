const Select = ({ formik, items,name }) => {
  return (
    <div className="formControl">
      <select {...formik.getFieldProps(name)}>
        {items.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <p className="error-onForm">{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default Select;
