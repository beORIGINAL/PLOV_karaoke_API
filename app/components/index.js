import reservations from './reservations';
import songsList from './songs-list';
import songsQueue from './songs-queue';

export default angular.module('app.components',
	[
		reservations,
		songsList,
		songsQueue
	])
	.name;