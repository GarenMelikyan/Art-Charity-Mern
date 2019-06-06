import { createStore, combineReducers, applyMiddleware } from "redux";
import { Charities } from "./charities";
import { Promotions } from "./promotions";
import { Comments } from "./comments";
import { Leaders } from "./leaders";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "./forms";

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      charities: Charities,
      comments: Comments,
      leaders: Leaders,
      promotions: Promotions,
      ...createForms({
        feedback: InitialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
