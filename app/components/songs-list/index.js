import route from './songs-list.route';
import SongsListFactory from './songs-list.factory';

import songsSearch from './components/songs-search';
import songsCatalogue from './components/songs-catalogue';

import { SongsListComponent } from './songs-list.component';

export default angular.module('app.songs-list',
	[
		songsSearch,
		songsCatalogue
	])
	.factory('SongsListFactory', SongsListFactory)
	.component('songsList', SongsListComponent)
	.config(route)
	.name;