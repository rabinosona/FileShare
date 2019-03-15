import 
{ 
    SIGN_IN, 
    SIGN_OUT, 
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
    type: SIGN_OUT
});

export const uploadFileStart = file => ({
    type: UPLOAD_FILE_START,
    file: file
});

export const uploadFileProgress = progress => ({
    type: UPLOAD_FILE_PROGRESS,
    file: progress
});

export const uploadFileCompleted = result => ({
    type: UPLOAD_FILE_COMPLETED,
    file: result
});

export const uploadFileFailure = error => ({
    type: UPLOAD_FILE_FAILURE,
    file: error
});


