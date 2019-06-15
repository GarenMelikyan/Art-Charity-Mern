import { createStore, combineReducers, applyMiddleware } from "redux";
import { Charities } from "./charities";
import { Comments } from "./comments";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "./forms";

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      charities: Charities,
      comments: Comments,
      ...createForms({
        feedback: InitialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
