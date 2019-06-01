import { createStore, combineReducers } from "redux";
import { Charities } from "./charities";
import { Promotions } from "./promotions";
import { Comments } from "./comments";
import { Leaders } from "./leaders";

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      charities: Charities,
      comments: Comments,
      leaders: Leaders,
      promotions: Promotions
    })
  );

  return store;
};
