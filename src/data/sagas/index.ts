import { all } from 'redux-saga/effects';
import _templateSaga from './_template';

export default function* rootSaga() {
  yield all([
    _templateSaga()
  ])
}