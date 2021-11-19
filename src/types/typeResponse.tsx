export interface IForecast {
  city: { name: string; country: string };
  list: [
    {
      main: { temp: number; temp_max: number; temp_min: number };
      weather: [{ description: string; icon: string }];
      wind: { speed: number };
    }
  ];
}
