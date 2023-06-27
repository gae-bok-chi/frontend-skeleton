import { atom } from "recoil";

export const currentDateState = atom({
  key: "currentDate",
  default: new Date().toISOString().split("T")[0],
});
