import { apiServerAddress } from '../../constants'
import { buffers, eventChannel, END } from 'redux-saga';

export default class ApiService {
    createUploadFileChannel(endpoint, file) {
        return eventChannel(emitter => {
            const xhr = new XMLHttpRequest();

            const onProgress = (e) => {
                if (e.lengthComputable) {
                    const progress = e.loaded / e.total;
                    emitter({ progress });
                }
            };

            const onFailure = (e) => {
                emitter({ error: "An error occured during file upload. " });
                emitter(END);
            };

            xhr.addEventListener('progress', onProgress);
            xhr.addEventListener('error', onFailure);
            xhr.addEventListener('abort', onFailure);
            xhr.onreadystatechange = () => {
                const { readyState, status } = xhr;
                if (readyState === 4){
                    if (status === 200) {
                        emitter({ success: true });
                        emitter(END);
                    }
                    else {
                        onFailure(null);
                    }
                }
            }

            xhr.open('POST', endpoint, true);
            xhr.send(file);

            return () => {
                xhr.upload.removeEventListener('progress', onProgress);
                xhr.upload.removeEventListener('error', onFailure);
                xhr.upload.removeEventListener('abort', onFailure);
                xhr.onreadystatechange = null;
                xhr.abort;
            }
        }, buffers.sliding(2))
    }
}