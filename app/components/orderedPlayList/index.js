import route from './ordered-play-list.route';
import orderedPlayListComponent from './ordered-play-list.component';
import orderedPlayListFactory from './ordered-play-list.factory';

export default angular.module('app.ordered-play-list', [])
	.component('orderedPlayList', orderedPlayListComponent)
	.factory('orderedPlayListFactory', orderedPlayListFactory)
	.config(route)
	.name;