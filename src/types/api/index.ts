type Area = {
  name: string;
  cod: string;
};

type AreasObject = {
  area: Area;
  weatherCodes: Array<string>;
  weathers: Array<string>;
  winds: Array<string>;
  waves: Array<string>;
};

type Areas = Array<AreasObject>;

type TimeDefines = Array<string>;

type WeatherData = {
  publishingOffice: string;
  reportDatetime: string;
  timeSeries: Array<{
    timeDefines: TimeDefines;
    areas: Areas;
  }>;
};

/**
 * 気象庁APiのレスポンスデータ
 * @see https://www.jma.go.jp/bosai/forecast/data/forecast/230000.json
 */
export type GetWeatherData = Array<WeatherData>;
