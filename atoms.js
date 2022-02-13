import { atom } from "recoil";

const NUM_VOTES_KEY = "hotbutterfly-numvotes";
const NUM_VOTES_DEFAULT = 0;
const IS_WORKER_KEY = "hotbutterfly-isworker";
const IS_WORKER_DEFAULT = false;

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    if (typeof window !== "undefined") {
      const savedValue = localStorage.getItem(key);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };

export const numVotesState = atom({
  key: NUM_VOTES_KEY,
  default: NUM_VOTES_DEFAULT,
  effects: [localStorageEffect(NUM_VOTES_KEY)],
});

export const isWorkerState = atom({
  key: IS_WORKER_KEY,
  default: IS_WORKER_DEFAULT,
  effects: [localStorageEffect(IS_WORKER_KEY)],
});
