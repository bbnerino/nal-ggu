interface Weather {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}

interface Astronomy {
  category: string;
  value: string;
}

type FullData = Weather | Astronomy;

interface StartData {
  sort: string;
  category: string;
  title: string;
  size: string;
  color: string;
}
