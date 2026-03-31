import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const SearchBar = () => {
  const [item, setitem] = useState("");
  return (
    <form className="d-flex searchbar" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={item}
        onChange={(e) => {
          setitem(e.target.value);
          console.log(item);
        }}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
      <Link to="/addemployee">
        <button className="btn btn-primary Addemp" type="submit">
          <IoIosAddCircleOutline /> Add
        </button>
      </Link>
    </form>
  );
};
export default SearchBar;
