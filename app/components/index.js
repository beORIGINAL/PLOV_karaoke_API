import allSongsList from './allSongsList';
import orderedSongsList from './orderedSongsList';
import orderedPlayList from './orderedPlayList';

export default angular.module('app.components',
	[
		allSongsList,
		orderedSongsList,
		orderedPlayList
	]).name;