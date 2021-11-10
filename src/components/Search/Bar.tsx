import { useState } from "react";

const SearchBar = () => {
  const [city, setCity] = useState<string>("");
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="search">
      <input className="search__input" value={city} onChange={handleChange} />
      <button className="search__button">Search</button>
    </div>
  );
};

export default SearchBar;
