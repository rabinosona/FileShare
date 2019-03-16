import 
{ 
    SIGN_IN, 
    SIGN_UP, 
    UPLOAD_FILE_START, 
    UPLOAD_FILE_PROGRESS,
    UPLOAD_FILE_COMPLETED,
    UPLOAD_FILE_FAILURE
} from './constants';

export const signIn = params => ({
    type: SIGN_IN,
    data: params
});

export const signOut = () => ({
    type: SIGN_UP
});

export const uploadFileStart = file => ({
    type: UPLOAD_FILE_START,
    file: file
});

export const uploadFileProgress = (progress, file) => ({
    type: UPLOAD_FILE_PROGRESS,
    payload: progress,
    meta: { file },
});

export const uploadFileCompleted = (file) => ({
    type: UPLOAD_FILE_COMPLETED,
    meta: { file },
});

export const uploadFileFailure = (error, file) => ({
    type: UPLOAD_FILE_FAILURE,
    payload: error,
    meta: { file },
});


