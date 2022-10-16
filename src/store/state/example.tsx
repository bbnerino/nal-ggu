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

export const dnd = atom<InfoData[]>({
  key: "dnd",
  default: [
    {
      sort: "강수",
      category: "POP",
      title: "강수확률",
      size: "2",
      color: "#64B2E3",
    },
    {
      sort: "강수",
      category: "PTY",
      title: "강수형태",
      size: "2",
      color: "#64B2E3",
    },
    {
      sort: "강수",
      category: "PCP",
      title: "1시간 강수량",
      size: "2",
      color: "#64B2E3",
    },
  ],
});
