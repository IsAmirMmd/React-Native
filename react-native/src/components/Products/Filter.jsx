import { useState } from "react";
import { useProductAction } from "../Providers/ProductsProvider";
import Select from "react-select";
import _ from "lodash";

const options = [
  { value: "", label: "All" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
];

const sortOptions = [
  { value: "high", label: "highest" },
  { value: "low", label: "lowest" },
];

const Filter = () => {
  const { filterHandler, sortHandlerProduct } = useProductAction();
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("");

  const changeHandler = (e) => {
    console.log(sort.value);
    filterHandler(e);
    sortHandlerProduct(sort);
    setValue(e);
  };

  const sortHandler = (e) => {
    sortHandlerProduct(e);
    setSort(e);
  };

  return (
    <div>
      sort by
      <Select value={value} onChange={changeHandler} options={options} />
      sort by
      <Select value={sort} onChange={sortHandler} options={sortOptions} />
    </div>
  );
};

export default Filter;
