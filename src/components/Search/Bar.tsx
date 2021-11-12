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
  let url: string = `https://the-ultimate-api-challenge.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b66b3fe27f7bea0990712afd47f3ae83`;
  return (
    <div className="search">
      <input className="search__input" value={city} onChange={handleChange} />
      <button className="search__button" onClick={() => fetchData(url)}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
