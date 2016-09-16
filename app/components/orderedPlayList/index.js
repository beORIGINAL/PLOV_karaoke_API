import route from './ordered-play-list.route';
import orderedPlayListComponent from './ordered-play-list.component';

export default angular.module('app.ordered-play-list', [])
	.component('orderedPlayList', orderedPlayListComponent)
	.config(route)
	.name;