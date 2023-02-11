import { call, put, takeEvery } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi';
import { TweetsActionType } from './actionCreators'
import { Tweet } from './contracts/state';



export function* fetchTweetsRequest() {
 const data: Tweet[] = yield call(TweetsApi.fetchTweets)
 console.log(data[0]._id)
}

export function* tweetsSaga() {
  console.log(123);
  
  yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest)
}