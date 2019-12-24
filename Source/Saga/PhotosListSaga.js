import {call, put, takeLatest} from 'redux-saga/effects';
import {api} from '../Network';
import {GET_PHOTOS, PHOTOS_FAIL, PHOTOS_SUCCESS} from "../Redux/Actions/Types";
import {isValidElement} from "../Utils/helpers";
import {PHOTOS_CONSTANTS} from "../Utils/Constants";

function* makeGetPhotosList(action) {
    const {page} = action;
    try {
        const photosData = yield call(api.makeSettingsAPICall, page);
        if (isValidElement(photosData)
            && isValidElement(photosData.data)
            && isValidElement(photosData.data.length > 0)) {
            // api success
            yield put({type: PHOTOS_SUCCESS, payload: {data : photosData.data, page: page}});
        } else {
            // api failed
            yield put({type: PHOTOS_FAIL, payload: { errorMsg : PHOTOS_CONSTANTS.GENERIC_ERROR }});
        }
    } catch (e) {
        // generic error message
        yield put({type: PHOTOS_FAIL, payload: { errorMsg : PHOTOS_CONSTANTS.API_FAILED }});
    }
}

function* PhotoListSaga() {
    yield takeLatest(GET_PHOTOS, makeGetPhotosList);
}

export default PhotoListSaga;
