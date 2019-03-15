import { apiServerAddress } from '../../constants'
import { buffers, eventChannel, END } from 'redux-saga';

export default class ApiService {
    createUploadFileChannel(endpoint, file) {
        return eventChannel(emitter => {
            const xhr = new XMLHttpRequest();

            const onProgress = () => {

            }

            const onFailure = () => {

            }

        })
    }
}