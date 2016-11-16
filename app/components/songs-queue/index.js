import route from './songs-queue.route';
import songsQueueComponent from './songs-queue.component';
import SongsQueueFactory from './songs-queue.factory';

export default angular.module('app.songs-queue', [])
	.component('songsQueue', songsQueueComponent)
	.factory('SongsQueueFactory', SongsQueueFactory)
	.config(route)
	.name;