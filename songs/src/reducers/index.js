import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'No Scrubs',
      duration: '4:05',
    },
    {
      title: 'Macarena',
      duration: '2:30',
    },
    {
      title: 'Not my fault',
      duration: '3:14',
    },
    {
      title: 'Hips dont lie',
      duration: '2:56',
    },
    {
      title: 'Ojos Asi!',
      duration: '5:15',
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
