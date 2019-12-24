import {
    PHOTOS_SUCCESS,
    PHOTOS_FAIL
} from "../Actions/Types";

const INITIAL_STATE = {
    photosResponse: null,
    photosFailedResponse: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case PHOTOS_SUCCESS:
            return {
                ...state,
                photosResponse: action.payload,
                photosFailedResponse: null
            };

        case PHOTOS_FAIL:
            return {
                ...state,
                photosFailedResponse: action.payload,
                photosResponse: null
            };

        default:
            return state;
    }
}
