import produce, { Draft } from "immer";
import { TweetsAction, TweetsActionType } from "./actionCreators";
import { LoadingState, TweetsState } from "./contracts/state";

const initalTweetsState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER
}


export const tweetsReducer  = produce((draft: Draft<TweetsState>, action: TweetsAction) => {
  const {type, payload} = action;
  if(type === TweetsActionType.SET_TWEETS) {
    draft.items = payload
  }
}, initalTweetsState) 