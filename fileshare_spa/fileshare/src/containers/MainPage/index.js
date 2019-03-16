import React from 'react';
import { connect } from 'react-redux';

import selectMainPage from './selectors';
import { uploadFileStart } from './actions';

class MainPage extends React.Component {
    upload(e) {
        const { onUpload } = this.props;

        const [file] = e.target.files || e.dataTransfer.files;
        onUpload(file);
    }

    render() {
        const { mainPage } = this.props;
        const { uploadProgress } = mainPage;

        return (
            <>
            <input type='file'
            onChange={this.upload} />
            <progress value={uploadProgress} />
            </>)
    }
}

const mapStateToProps = state => ({
    mainPage: selectMainPage()
});

function mapDispatchToProps(dispatch) {
    return {
        onUpload: file => dispatch(uploadFileStart(file)),
    }
}

export default MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage);


