import { FC, useState } from "react";
import "./Bar.scss";
import fetchData from "../../redux/ActionCreators/FetchData";
import { useDispatch } from "react-redux";
import { openPopUpWithDataError } from "../../redux/Slice/Slice";

const SearchBar: FC = () => {
  const [city, setCity] = useState<string>("");
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCity(e.target.value);
  };
  const dispatch = useDispatch();
  const url = `https://the-ultimate-api-challenge.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b66b3fe27f7bea0990712afd47f3ae83`;
  return (
    <div className="search">
      <input className="search__input" value={city} onChange={handleChange} />
      <button
        className="search__button"
        onClick={() => {
          city
            ? dispatch(fetchData(url))
            : dispatch(openPopUpWithDataError("Input field cannot be empty"));
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
