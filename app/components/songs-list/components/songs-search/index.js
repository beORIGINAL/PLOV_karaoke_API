import route from './songs-search.route';
import { SongsSearchComponent } from './songs-search.component';

export default angular.module('app.songs-list.search', [])
	.component('songsSearch', SongsSearchComponent)
	.config(route)
	.name;