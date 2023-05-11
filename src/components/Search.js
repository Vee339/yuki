import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Search() {
  const [active, setActive] = useState(false);

  return (
    <div className="search">
      <div className={`inputBox${active ? " active" : ""}`}>
        <input
          type="text"
          placeholder="Search for anything...."
          name="search"
        />
        <div className="icon" onClick={() => setActive(true)}>
          <CiSearch />
        </div>
      </div>
    </div>
  );
}

export default Search;
