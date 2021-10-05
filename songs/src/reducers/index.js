import { combineReducers } from "redux";

const songReducer = () => {
    return [
        {title: 'A', duration: '4:05'},
        {title: 'B', duration: '2:50'},
        {title: 'C', duration: '6:00'},
        {title: 'D', duration: '5:10'},
    ];
}
const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}
export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})