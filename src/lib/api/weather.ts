import { apiWithWeather } from './main';

const timeTransform = () => {
  const current = new Date(Date.now() - 1000 * 60 * 60 * 3);
  let date = Number(current.toLocaleDateString().replaceAll('.', '').replaceAll(' ', ''));
  let time: number = current.getHours() * 100;
  if (time < 200) {
    date--;
    time = 2330;
  }

  return [String(date), time < 1000 ? `0${time}` : String(time)];
}

export const getWeatherInformation = async (x: string, y: string) => {
  const [base_date, base_time] = timeTransform();
  const response = await apiWithWeather({
    params: {
      serviceKey: process.env.REACT_APP_WEATHER_API_KEY,
      numOfRows: '12',
      pageNo: '1',
      base_date,
      base_time,
      nx: x,
      ny: y,
      dataType: 'JSON',
    }
  })
  return response.data.response.body.items
}
