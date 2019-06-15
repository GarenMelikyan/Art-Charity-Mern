import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

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
  return fetch(baseUrl + "charities")
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(charities => dispatch(addCharities(charities)))
    .catch(error => dispatch(charitiesFailed(error.message)));
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

export const fetchComments = () => dispatch => {
  return fetch(baseUrl + "comments")
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = errmess => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess
});

export const addComments = comments => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});
