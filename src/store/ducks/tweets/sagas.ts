import { call, put, takeEvery } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi';
import { setTweets, setTweetsLoadingState, TweetsActionType } from './actionCreators'
import { LoadingState, Tweet } from './contracts/state';



export function* fetchTweetsRequest() {
 try {
  const items: Tweet[] = yield call(TweetsApi.fetchTweets);
  yield put(setTweets(items));
 } catch(e) {
  yield put(setTweetsLoadingState(LoadingState.ERROR));
 }
 
}

export function* tweetsSaga() {
  
  yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest)
}