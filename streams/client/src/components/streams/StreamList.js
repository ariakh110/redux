import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderList= () => {
        return this.props.streams.map((stream)=>{
            return(
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon live"/>
                    <div className="content">
                        {stream.title}
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            );
        });
    };
    
    render() {
        console.log(this.props.streams);
        return (
            <div>
                <h2>streams</h2>
                <div className="ui called list">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps =(state) => {
    /*console.log("state:",state);*/
    return {streams: Object.values(state.streams)};
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);

