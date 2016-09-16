import route from './ordered-song-list.route';
import orderedSongListComponent from './ordered-song-list.component';
import orderedSongsFactory from './ordered-songs-list.factory';

export default angular.module('app.ordered-song-list', [])
	.component('orderedSongList', orderedSongListComponent)
	.factory('orderedSongsFactory', orderedSongsFactory)
	.config(route)
	.name;