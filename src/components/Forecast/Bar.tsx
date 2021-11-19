import { FC } from "react";
import { IForecast } from "../../types/typeResponse";
import TodayBar from "./Today/Bar";
interface IData {
  data: IForecast;
}
const ForecastBar: FC<IData> = ({ data }) => {
  return (
    <div className="forecastBar">
      <TodayBar data={data} />
    </div>
  );
};

export default ForecastBar;
