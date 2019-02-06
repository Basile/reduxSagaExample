import { all, call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import * as actionTypes from '../reducer/actionTypes';

function* getEntity() {
  try {
    const entity = yield call(() => fetch('http://localhost:4000/new')
      .then(response => response.json())
    );

    yield put({
      type: actionTypes.ENTITY_GET_SUCCESS,
      entity,
    });
  } catch(error) {
    yield put({
      type: actionTypes.ENTITY_GET_ERROR_LATEST,
      error: `Error getting new entity (${Date.now()})`,
    });
  }
}

function* watchGetEntity() {
  yield takeEvery(actionTypes.ENTITY_GET, getEntity);
}


function* getEntityError(action) {
  yield put({
    type: actionTypes.ENTITY_GET_ERROR,
    error: action.error,
  });
  yield delay(2000);
  yield put({
    type: actionTypes.ENTITY_GET_ERROR,
    error: '',
  });
}

function* watchGetEntityError() {
  yield takeLatest(actionTypes.ENTITY_GET_ERROR_LATEST, getEntityError);
}


function* watchFirstTenEntitiesCreated() {
  for (let i = 0; i < 10; i++) {
    yield take(actionTypes.ENTITY_GET_SUCCESS)
  }
  yield put({type: actionTypes.ENTITY_CONGRATS})
}

export default function* rootSaga() {
  yield all([
    watchGetEntity(),
    watchGetEntityError(),
    watchFirstTenEntitiesCreated(),
  ]);

  // let task1 = yield fork(watchGetEntity);
  // yield fork(watchGetEntityError);
  // yield fork(watchFirstTenEntitiesCreated);
};
