export default function ($stateProvider) {
	"ngInject";
	return $stateProvider.state({
		name: 'songs-queue.history',
		url: '/history',
		component: 'queueHistory'
	})
}