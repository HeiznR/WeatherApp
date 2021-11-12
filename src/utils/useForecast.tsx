import { useState } from "react";
import { IForecast } from "../types/types";
import axios from "axios";

const useForecast = () => {
  const defaultValuesForData: IForecast = {
    city: { name: "", country: "" },
    list: [
      {
        main: { temp: 0, temp_max: 0, temp_min: 0 },
        weather: [{ description: "", icon: "" }],
        wind: { speed: 0 },
      },
    ],
  };

  const [data, setData] = useState<IForecast>(defaultValuesForData);

  const fetchData = async (url: string) => {
    try {
      const response = await axios.get<IForecast>(url);
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
