import { useState } from "react";
import { Input } from "@nextui-org/react";
function Filters({ searchHandler }) {
  const [searchText, setSearchText] = useState("");

  const searchInputHandler = (e) => {
    setSearchText(e.target.value);
    searchHandler(searchText);
  };
  return (
    <section className="search-input mb-3 mb-sm-0 me-sm-4">
      <Input
        fullWidth
        placeholder="Search..."
        status="secondary"
        value={searchText}
        onChange={(e) => searchInputHandler(e)}
        aria-label="search"
      />
    </section>
  );
}

export default Filters;
