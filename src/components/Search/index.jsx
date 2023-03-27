import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import SearchDropdown from "../SearchDropdown";

function Search({ searchInput, onSearchInputChange, dataFiltered }) {
  function onChange(event) {
    onSearchInputChange(event.currentTarget.value);
  }

  return (
    <Container className="container-fluid w-75">
      <Form.Control className="mt-3" onChange={onChange} value={searchInput} placeholder="Search" aria-label="Search" />
      <SearchDropdown searchInput={searchInput} dataFiltered={dataFiltered} />
    </Container>
  );
}

export default Search;
