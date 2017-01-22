import route from './queue-history.route';
import { QueueHistoryComponent } from './queue-history.component';
import QueueHistoryFactory from './queue-history.factory';

export default angular.module('app.songs-queue.history', [])
	.component('queueHistory', QueueHistoryComponent)
	.factory('QueueHistoryFactory', QueueHistoryFactory)
	.config(route)
	.name;