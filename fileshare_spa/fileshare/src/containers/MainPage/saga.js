import { SIGN_IN, SIGN_OUT, UPLOAD_FILE_START } from './constants';
import { uploadFileProgress, uploadFileFailure, uploadFileCompleted } from './actions';
import { ApiService } from '../../services/MainPage/ApiService';
import { put } from '@redux-saga/core/effects';

import { ApiServerAddress } from '../../constants';

export default function* mainPageRequestFlow() {
    yield takeLatest(UPLOAD_FILE_START, uploadFileSaga);
}

function* uploadFileSaga(file) {
    try {
        const channel = yield call(ApiService.createUploadFileChannel, `${ApiServerAddress}/uploadFile`, file);

        while (true) {
            const { progress, error, success } = yield take(channel);

            if (error) {
                yield put(uploadFileFailure(error, file));
                return;
            }
            if (success) {
                yield put(uploadFileCompleted(file));
                return;
            }

            yield put(uploadFileProgress(progress, file));
        }
    }
    catch (error) {
        yield put(uploadFileFailure(error, file));
    }
}