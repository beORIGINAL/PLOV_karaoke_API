import route from './all-songs-list.route';
import AllSongsListComponent from './all-songs-list.component';

export default angular.module('app.all-songs-list', [])
	.component('allSongsList', AllSongsListComponent)
	.config(route)
	.name;