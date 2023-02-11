import { Action } from "redux";
import { TweetsState } from "./contracts/state";

export enum TweetsActionType {
  SET_TWEETS  = 'tweets/SET_TWEETS',
  FETCH_TWEETS  = 'tweets/FETCH_TWEETS'
} 

export interface SetTweetActionsInterface extends Action<TweetsActionType>{
  type: TweetsActionType.SET_TWEETS;
  payload: TweetsState['items']
}
export interface FetchTweetActionsInterface extends Action<TweetsActionType>{
  type: TweetsActionType.FETCH_TWEETS
}


export const setTweets = (payload: TweetsState['items']): SetTweetActionsInterface => ({
  type: TweetsActionType.SET_TWEETS,
  payload
})
export const  fetchTweets = (): FetchTweetActionsInterface => ({
  type: TweetsActionType.FETCH_TWEETS,
})

export type TweetsAction = SetTweetActionsInterface;