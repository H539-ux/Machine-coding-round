import React from "react";
import SearchInput from "./SearchInput";
import { useState } from "react";
import { useEffect } from "react";
import Results from "./Results";
import "./home.css";
const SearchBarHome = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState("");
  const getData = async () => {
    try {
      setLoading(true);
      const data = await fetch("https://jsonplaceholder.typicode.com/users");

      let response = await data.json();
      setData(response);
      setFilterData(response);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError("failed to fetch data");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (input) => {
    setError("");
    const newData = data.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    if (newData.length === 0) {
      setError("no data found");
    }
    setFilterData(newData);
  };
  return (
    <div className="home-container">
      <SearchInput
        onSearch={handleSearch}
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
      />
      {error.length > 0 ? (
        <p>{error}</p>
      ) : loading ? (
        <p>..loading</p>
      ) : (
        showResults && <Results data={filterData} />
      )}
    </div>
  );
};

export default SearchBarHome;
