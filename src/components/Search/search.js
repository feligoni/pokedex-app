import React from "react";
import "./style.css";

const Search = ({ searchQuery, setSearchQuery }) => {
  const closeHandler = () => {
    setSearchQuery("");
  };
  return (
    <form action="/" method="get">
      <div class="search">
        <input type="checkbox" id="trigger" class="search__checkbox" />
        <label class="search__label-init" for="trigger"></label>
        <label
          class="search__label-active"
          for="trigger"
          onClick={closeHandler}
        ></label>
        <div class="search__border"></div>
        <input
          type="text"
          class="search__input"
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          id="header-search"
          placeholder="Search"
          name="s"
        />
        <div class="search__close"></div>
      </div>
    </form>
  );
};

export default Search;
