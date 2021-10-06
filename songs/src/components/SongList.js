import React from "react";
import {connect} from "react-redux";
import {selectedSong} from "../actions";

class SongList extends React.Component {

    renderList() {
        return (this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button onClick={()=>this.props.selectedSong(song)} className="ui button primary">selected</button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        }));
    };

    render() {
        //console.log('props',this.props)
        return (
            <div className="ui middle aligned divided list">
                {this.renderList()}
            </div>
        );
    }
}
//yani state va prop ra be ham motasel kon
const mapStateToProps = (state) => {
    //console.log('state ',state)
    return {songs: state.songs}
};
//connect miad state va props hamona ra ba functino mapStateToProps be ham motasel mokone
/** dar vaghe state khodemonra dakhel props miferstim*/
export default connect(mapStateToProps,{selectedSong})(SongList);