import route from './songs-queue.route';
import SongsQueueFactory from './songs-queue.factory';
import catalogueEditor from './components/catalogue-editor';

import { SongsQueueComponent } from './songs-queue.component';

export default angular.module('app.songs-queue',
	[
		catalogueEditor
	])
	.factory('SongsQueueFactory', SongsQueueFactory)
	.component('songsQueue', SongsQueueComponent)
	.config(route)
	.name;