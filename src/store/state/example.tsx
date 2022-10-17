import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const exampleState = atom<number>({
  key: "exmpale",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

interface myObject {
  name: string;
  age: number;
  description: string;
}

export const objectState = atom<myObject>({
  key: "object",
  default: {
    name: "루이",
    age: 20,
    description: "안녕하살",
  },
  effects_UNSTABLE: [persistAtom],
});

export interface InfoData {
  sort: string;
  category: string;
  title: string;
  size: string;
  color: string;
}

export const dataState = atom<InfoData[]>({
  key: "data",
  default: [],
});

export const testState = atom<InfoData[]>({
  key: "test",
  default: [
    {
      category: "POP",
      color: "#64B2E3",
      size: "2",
      sort: "강수",
      title: "강수확률",
    },
    {
      category: "PTY",
      color: "#FFA57A",
      size: "1",
      sort: "강수",
      title: "강수형태",
    },
    {
      category: "PCP",
      color: "#56DFA3",
      size: "2",
      sort: "강수",
      title: "1시간 강수량",
    },
  ],
});

export const sessionTriger = atom({
  key: "sessionTriger",
  default: false,
});
