import {combineReducers} from "redux";
import PhotosReducer from './PhotosListReducers';

const AppReducer = combineReducers({
   photosState: PhotosReducer
});

export default AppReducer;
