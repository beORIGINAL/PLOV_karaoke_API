export default function ($stateProvider) {
	"ngInject";
	return $stateProvider.state({
		name: 'ordered-play-list',
		url: '/ordered-play-list',
		component: 'orderedPlayList'
	})
}