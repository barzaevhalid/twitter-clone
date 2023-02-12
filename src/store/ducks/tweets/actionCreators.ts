import { Action } from "redux";
import { LoadingState, Tweet, TweetsState } from "./contracts/state";

export enum TweetsActionType {
  SET_TWEETS  = 'tweets/SET_TWEETS',
  FETCH_TWEETS  = 'tweets/FETCH_TWEETS',
  SET_LOADGIN_STATE = 'tweets/SET_LOADGIN_STATE'
} 

export interface SetTweetActionsInterface extends Action<TweetsActionType>{
  type: TweetsActionType.SET_TWEETS;
  payload: TweetsState['items']
}
export interface FetchTweetActionsInterface extends Action<TweetsActionType>{
  type: TweetsActionType.FETCH_TWEETS,
  // payload: Tweet[]
}
export interface SetTweetsLoadingInterface extends Action<TweetsActionType>{
  type: TweetsActionType.SET_LOADGIN_STATE,
  payload: LoadingState
}


export const setTweets = (payload: TweetsState['items']): SetTweetActionsInterface => ({
  type: TweetsActionType.SET_TWEETS,
  payload
})

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingInterface => ({
  type: TweetsActionType.SET_LOADGIN_STATE,
  payload
})

export const  fetchTweets = (): FetchTweetActionsInterface => ({
  type: TweetsActionType.FETCH_TWEETS,
  // payload
})

export type TweetsAction = SetTweetActionsInterface | SetTweetsLoadingInterface | FetchTweetActionsInterface;