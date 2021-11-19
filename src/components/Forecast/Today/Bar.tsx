import { FC } from "react";
import { IForecast } from "../../../types/typeResponse";
import "./Bar.scss";

interface IData {
  data: IForecast;
}

const TodayBar: FC<IData> = ({ data }) => {
  const { name, country } = data.city;
  const { icon, description } = data.list[0].weather[0];
  return (
    <div className="todayForecast">
      <div className="todayForecast__name">
        {name},{country}
      </div>
      <img
        className="todayForecast__image"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather-icon"
      />
      <div className="todayForecast__temp">
        {Math.round(data.list[0].main.temp - 273)}°C
      </div>
      <div className="todayForecast__description">{description}</div>
      <div className="todayForecast__wind">
        wind: <span>{data.list[0].wind.speed} m/s</span>
      </div>
    </div>
  );
};

export default TodayBar;
