export default function ($stateProvider) {
	"ngInject";
	return $stateProvider.state({
		name: 'songs-list.search',
		url: '/search',
		component: 'songsSearch'
	})
}