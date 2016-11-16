import route from './songs-search.route';
import songsSearchComponent from './songs-search.component';

export default angular.module('app.songs-list.search', [])
	.component('songsSearch', songsSearchComponent)
	.config(route)
	.name;