import route from './ordered-song-list.route';
import orderedSongListComponent from './ordered-song-list.component';

export default angular.module('app.ordered-song-list', [])
	.component('orderedSongList', orderedSongListComponent)
	.config(route)
	.name;