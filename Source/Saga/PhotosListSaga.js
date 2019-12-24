import {call, put, takeLatest} from 'redux-saga/effects';
import {api} from '../Network';
import {GET_PHOTOS, PHOTOS_FAIL, PHOTOS_SUCCESS} from "../Redux/Actions/Types";
import {isValidElement} from "../Utils/helpers";

function* makeGetPhotosList(action) {
    try {
        const photosData = yield call(api.makeSettingsAPICall);
        if (isValidElement(photosData)
            && isValidElement(photosData.data)
            && isValidElement(photosData.data.length > 0)) {
            // api success
            yield put({type: PHOTOS_SUCCESS, payload: photosData.data});
        } else {
            // api failed
            yield put({type: PHOTOS_FAIL, payload: photosData});
        }
    } catch (e) {
        // generic error message
        console.log("Generic err message");
    }
}

function* PhotoListSaga() {
    yield takeLatest(GET_PHOTOS, makeGetPhotosList);
}

export default PhotoListSaga;
