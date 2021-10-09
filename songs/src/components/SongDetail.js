import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
    if(!song) return <h1>Please select a song</h1>;
  return (
    <div>
      <h3>song details</h3>
      <p>title: {song.title}</p>
      <p>duration: {song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
