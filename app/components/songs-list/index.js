import songsListComponent from './songs-list.component';
import SongsListFactory from './songs-list.factory';
import route from './songs-list.route';

import songsSearch from './components/songs-search';
import songsCatalogue from './components/songs-catalogue';


export default angular.module('app.songs-list',
	[
		songsSearch,
		songsCatalogue
	])
	.component('songsList', songsListComponent)
	.factory('SongsListFactory', SongsListFactory)
	.config(route)
	.name;