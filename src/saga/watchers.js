import {takeEvery} from 'redux-saga/effects';
import {loadMenu} from './workers';

export function* sagaWatcher() {
    yield takeEvery('LOAD_MENU', loadMenu);
}
