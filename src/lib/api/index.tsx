import axios from 'axios';

const api = axios.create({
  baseURL: `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst`
  // baseURL: `https://cors.bridged.cc/http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst`
  // baseURL: `https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst`
});

function timeTransform() {
  const current = new Date(Date.now() - 1000 * 60 * 60 * 3);
  let date = Number(current.toLocaleDateString().replaceAll('.', '').replaceAll(' ', ''));
  let time: number = current.getHours() * 100;
  if (time < 200) {
    date--;
    time = 2330;
  }

  return [String(date), time < 1000 ? `0${time}` : String(time)];
}

export const getInformation = async (x: string, y: string) => {
  const [base_date, base_time] = timeTransform();
  const response = await api({
    params: {
      serviceKey: "D2MocWkiexYG26roL3iWAgrpSwa3imd91kvZTP/AE1VHetV1nLwa3yJ65hk3DNcQugudA5lVQozFi25WKxoOGw==",
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
