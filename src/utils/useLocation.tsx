const GetLocation = (fetchData: Function) => {
  const succesCallback = (position: any) => {
    fetchData(
      `https://the-ultimate-api-challenge.herokuapp.com/api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=b66b3fe27f7bea0990712afd47f3ae83`
    );
  };
  navigator.geolocation.getCurrentPosition(succesCallback);
};

export default GetLocation;
