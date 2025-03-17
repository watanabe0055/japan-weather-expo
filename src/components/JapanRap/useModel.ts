import type { GetWeatherData } from "../../types/api";

const useModel = () => {
  const weatherDataFetch = async (id: string) => {
    try {
      const url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${id}.json`;
      const response = await fetch(url);
      const data = (await response.json()) as GetWeatherData;
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    weatherDataFetch,
  };
};

export default useModel;
