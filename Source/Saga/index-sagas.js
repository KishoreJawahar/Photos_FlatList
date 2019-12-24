import PhotoListSaga from './PhotosListSaga';

export default function* IndexSaga() {
    yield [
        PhotoListSaga()
    ];
}
