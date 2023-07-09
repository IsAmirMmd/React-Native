import { useState } from "react";
import { useProductAction } from "../../components/Providers/ProductsProvider";

const SearchBar = ({ filter }) => {
  const [value, setValue] = useState("");

  const { searchHandler, filterHandler } = useProductAction();

  const changehadler = (e) => {
    filterHandler(filter);
    searchHandler(e, filter);
    setValue(e.target.value);
  };

  return (
    <div>
      <div>
        <label></label>
        <input type="text" onChange={changehadler} value={value} />
      </div>
    </div>
  );
};

export default SearchBar;
