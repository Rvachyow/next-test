import { createEffect, createStore } from "effector";

export const getOnline = createEffect(() =>
  fetch("http://localhost:4000/getOnline").then((req) => req.json())
);

export const $online = createStore("").on(
  getOnline.doneData,
  (state, result) => result
);
