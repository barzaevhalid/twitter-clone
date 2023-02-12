import produce, { Draft } from "immer";
import { TweetsAction, TweetsActionType } from "./actionCreators";
import { LoadingState, TweetsState } from "./contracts/state";

const initalTweetsState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER
}


export const tweetsReducer  = produce((draft: Draft<TweetsState>, action: TweetsAction) => {
  switch (action.type) {
    case TweetsActionType.SET_TWEETS:
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADAED
      break;
      
    case TweetsActionType.FETCH_TWEETS:
      draft.items = [];
      draft.loadingState = LoadingState.LOADING;
      break;

    case TweetsActionType.SET_LOADGIN_STATE:
      draft.loadingState = action.payload
      break;
  
    default:
      break;
  }
  
}, initalTweetsState) 