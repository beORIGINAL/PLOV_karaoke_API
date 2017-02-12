import route from './songs-catalogue.route';
import { SongsCatalogueComponent } from './songs-catalogue.component';

export default angular.module('app.songs-list.catalogue', [])
	.component('songsCatalogue', SongsCatalogueComponent)
	.config(route)
	.name;