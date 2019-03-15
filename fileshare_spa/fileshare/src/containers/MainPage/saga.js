import { SIGN_IN, SIGN_OUT, UPLOAD_FILE_START, UPLOAD_FILE_PROGRESS, UPLOAD_FILE_COMPLETED } from './constants';
import { ApiService } from '../../services/MainPage/ApiService';

export default function* mainPageRequestFlow() {
    yield takeLatest(UPLOAD_FILE_START, uploadFileSaga);
}

function* uploadFileSaga(action) {
    try {

    }
    catch (error) {

    }
}