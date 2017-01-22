import route from './queue-history.route';
import { QueueHistoryComponent } from './queue-history.component';

export default angular.module('app.songs-queue.history', [])
	.component('queueHistory', QueueHistoryComponent)
	.config(route)
	.name;