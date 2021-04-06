import axios, { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';
import { call, put, takeLatest } from 'redux-saga/effects';
import { _templateActions } from '../../actions';

export default function* saga() {
  yield takeLatest(_templateActions.TYPES.ACTION_REQUEST,
    function* (action: AnyAction) {
      try {
        const res: AxiosResponse = yield call(() =>
          axios.get('url', {
            params: { ...action.params }
          })
        );
        yield put(_templateActions.response(res['data']));
      } catch (e) {
        yield put(_templateActions.error(e.message || "Error!"));
      }
    }
  )
}