import route from './songs-queue.route';
import SongsQueueFactory from './songs-queue.factory';
import catalogueEditor from './catalogue-editor';
import queueHistory from './queue-history';

import { SongsQueueComponent } from './songs-queue.component';

export default angular.module('app.songs-queue',
	[
		catalogueEditor,
		queueHistory
	])
	.factory('SongsQueueFactory', SongsQueueFactory)
	.component('songsQueue', SongsQueueComponent)
	.config(route)
	.name;