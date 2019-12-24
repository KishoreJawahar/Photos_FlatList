import {
    PHOTOS_SUCCESS,
    PHOTOS_FAIL, GET_PHOTOS
} from "../Actions/Types";
import {getResult} from "../../Utils/helpers";

const INITIAL_STATE = {
    photosResponse: null,
    photosFailedResponse: null,
    isLoading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_PHOTOS:
            return {
                ...state,
                isLoading: true
            };

        case PHOTOS_SUCCESS:
            return {
                ...state,
                photosResponse: getResult(state.photosResponse, action.payload.data, action.payload.page),
                photosFailedResponse: null,
                isLoading: false
            };

        case PHOTOS_FAIL:
            return {
                ...state,
                photosFailedResponse: action.payload,
                photosResponse: null,
                isLoading: false
            };

        default:
            return state;
    }
}
