export class Weather {
  baseDate?: string;
  baseTime?: string;
  category: string;
  fcstDate?: string;
  fcstTime?: string;
  fcstValue?: string;
  nx?: number;
  ny?: number;
  constructor() {
    this.category = "";
  }
}

export class UserWeather {
  sort: string;
  category: string;
  title: string;
  size: number;
  color: string;
  constructor() {
    this.sort = "비";
    this.category = "PCP";
    this.title = "강수량";
    this.size = 1;
    this.color = "#64B2E3";
  }
}
