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

interface InfoData {
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
