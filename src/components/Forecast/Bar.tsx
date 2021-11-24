import { FC } from "react";
import { IForecast } from "../../types/typeResponse";
import TodayBar from "./Today/Bar";

const ForecastBar: FC = () => {
  return (
    <div className="forecastBar">
      <TodayBar />
    </div>
  );
};

export default ForecastBar;
