import axios, { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';
import { call, put, takeLatest } from 'redux-saga/effects';
import { authActions } from '../../actions';

export default function* saga() {
  yield takeLatest(authActions.TYPES.AUTH_LOGIN_REQUEST,
    function* (action: AnyAction) {
      try {
        const res: AxiosResponse = yield call(() =>
          axios.get('url', {
            params: { ...action.params }
          })
        );
        yield put(authActions.loginResponse(res['data']));
      } catch (e) {
        yield put(authActions.errorResponse(e.message || "Error!"));
      }
    }
  )
}