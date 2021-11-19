import { useState } from "react";
import { IForecast } from "../types/typeResponse";
import axios from "axios";
import { iError } from "../types/typeError";

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
  const [error, setError] = useState<iError>({
    cod: 1,
    message: "",
    errorOccured: false,
  });

  const fetchData = async (url: string) => {
    try {
      const response = await axios.get<IForecast>(url);
      const data: IForecast = await response.data;
      setData(data);
      console.log(response);
      return data;
    } catch (er) {
      let e = (er as any).response;
      setError({
        cod: e.data.cod,
        message: e.data.message,
        errorOccured: true,
      });
      return;
    }
  };

  return { fetchData, data, error, setError };
};

export default useForecast;
