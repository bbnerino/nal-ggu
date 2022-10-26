import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { DEFAULT_LOCATION_STATE } from "../../utils/constants";
const { persistAtom } = recoilPersist();

export const startState = atom<StartData[]>({
  key: "startState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const locationState = atom({
  key: "selectedInformation",
  default: DEFAULT_LOCATION_STATE,
  effects_UNSTABLE: [persistAtom],
});
