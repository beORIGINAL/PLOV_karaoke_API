import route from './all-songs-list.route';
import AllSongsListComponent from './all-songs-list.component';
import AllSongsFactory from './all-songs-list.factory';

export default angular.module('app.all-songs-list', [])
	.component('allSongsList', AllSongsListComponent)
	.factory('AllSongsFactory', AllSongsFactory)
	.config(route)
	.name;