import * as ActionTypes from "./ActionTypes";
import { CHARITIES } from "../shared/charities";

export const addComment = (charityId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    charityId: charityId,
    rating: rating,
    author: author,
    comment: comment
  }
});

export const fetchCharities = () => dispatch => {
  dispatch(charitiesLoading(true));

  setTimeout(() => {
    dispatch(addCharities(CHARITIES));
  }, 2000);
};

export const charitiesLoading = () => ({
  type: ActionTypes.CHARITIES_LOADING
});

export const charitiesFailed = errmess => ({
  type: ActionTypes.CHARITIES_FAILED,
  payload: errmess
});

export const addCharities = charities => ({
  type: ActionTypes.ADD_CHARITIES,
  payload: charities
});
