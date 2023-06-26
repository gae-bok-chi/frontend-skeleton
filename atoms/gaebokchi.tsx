import { atom } from "recoil";

export const todayDateState = atom({
  key: "todayDate",
  default: new Date().toISOString().split("T")[0],
});
