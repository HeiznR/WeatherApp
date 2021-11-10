import { FC, useState } from "react";
import "./Bar.scss";
interface ISearch {
  fetchData(name: string): void;
}
const SearchBar: FC<ISearch> = ({ fetchData }) => {
  const [city, setCity] = useState<string>("");
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="search">
      <input className="search__input" value={city} onChange={handleChange} />
      <button className="search__button" onClick={() => fetchData(city)}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
