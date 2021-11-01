import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from './StreamForm';
import _ from 'lodash';
import streams from '../../apis/streams';
class StreamEdit extends Component {
    componentDidM2ount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    onSubmit = (formValues) => {

    }
    render() {
        if (!this.props.stream) {
            return <div>loading...</div>        
        }
        console.log(this.props.stream)
        return (
            
            <>
                <h3>
                    Edit Stream
                </h3>
                <StreamForm 
                initialValues={_.pick(this.props.stream, 'title','description')}
                onSubmit={this.onSubmit}
                />
            </>
        );
    }
}
const mapStateToProps = (state,ownProps) => {
    return {stream:state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
