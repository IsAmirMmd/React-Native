import { useState } from "react";
import { useProductAction } from "../Providers/ProductsProvider";
import Select from "react-select";

const options = [
  { value: "", label: "All" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
];

const Filter = () => {
  const { filterHandler } = useProductAction();
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    filterHandler(e);
    setValue(e);
  };

  return (
    <div>
      sort by
      {/* <select value={value} onChange={(e) => changeHandler(e)}>
        <option value="">All</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select> */}
      <Select value={value} onChange={changeHandler} options={options} />
    </div>
  );
};

export default Filter;
