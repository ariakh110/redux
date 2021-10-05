import React from "react";
import {connect} from "react-redux";

class SongList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                song list
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {songs: state.songs}
};
SongList.propTypes = {};

export default connect(mapStateToProps)(SongList);