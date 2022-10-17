import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export interface StartData {
  sort: string;
  category: string;
  title: string;
  size: string;
  color: string;
}

export const startState = atom<StartData[]>({
  key: "startState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
