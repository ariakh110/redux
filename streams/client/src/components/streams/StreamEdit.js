import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamEdit extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    
    render() {
        if (!this.props.stream) {
            return <div>loading...</div>        
        }
        return (
            <div>
                edit
            </div>
        );
    }
}
const mapStateToProps = (state,ownProps) => {
    return {stream:state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps, { fetchStream })(StreamEdit);
