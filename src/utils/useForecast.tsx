import { useState } from "react";
import { IForecast } from "../types/types";
import axios from "axios";

const useForecast = () => {
  const defaultValuesForData: IForecast = {
    city: { name: "Gdansk", country: "PL" },
    list: [
      {
        main: { temp: 10, temp_max: 12, temp_min: 8 },
        weather: [{ description: "test", icon: "test icon" }],
        wind: { speed: 2.3 },
      },
    ],
  };

  const [data, setData] = useState<IForecast>(defaultValuesForData);

  const fetchData = async (city: string) => {
    try {
      const response = await axios.get<IForecast>(
        `https://the-ultimate-api-challenge.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b66b3fe27f7bea0990712afd47f3ae83`
      );
      const data: IForecast = await response.data;
      setData(data);
      console.log(data);
      return data;
    } catch (error) {
      alert(error);
    }
  };

  return { fetchData, data };
};

export default useForecast;
