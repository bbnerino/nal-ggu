import { atom } from "recoil";
import {recoilPersist} from 'recoil-persist'
const {persistAtom} = recoilPersist()
export const exampleState =atom<number>({
  key:'exmpale',
  default :1,
  effects_UNSTABLE: [persistAtom],
})
