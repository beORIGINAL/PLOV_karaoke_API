import route from './songs-catalogue.route';
import songsCatalogueComponent from './songs-catalogue.component';

export default angular.module('app.songs-list.catalogue', [])
	.component('songsCatalogue', songsCatalogueComponent)
	.config(route)
	.name;