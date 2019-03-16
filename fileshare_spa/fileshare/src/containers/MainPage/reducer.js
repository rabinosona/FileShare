import { fromJS } from 'immutable';

import { SIGN_IN, SIGN_UP, UPLOAD_FILE_START, UPLOAD_FILE_PROGRESS, UPLOAD_FILE_COMPLETED, UPLOAD_FILE_FAILURE } from './constants';


export const initialState = fromJS({
    isUploading: false,
    isUploadingError: false,
    isUploadingComplete: false,
    fileUploadProgress: 0,
    csrf: null,
    uploadProgress: 0,
});

export const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN: {

        }
        case SIGN_UP: {

        }
        case UPLOAD_FILE_START: {
            return state.set('isUploading', true);
        }
        case UPLOAD_FILE_PROGRESS: {
            return state.set('uploadProgress', action.progress);
        }
        case UPLOAD_FILE_COMPLETED: {
            return state.set('isUploadingComplete', action.result);
        }
        case UPLOAD_FILE_FAILURE: {
            return state.set('isUploadingError', true);
        }
        default: 
            return state;
    }
}