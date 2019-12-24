import {GET_PHOTOS} from "./Types";

export const getPhotosListAction = (page) => {
    return {
        type: GET_PHOTOS,
        page
    }
};
