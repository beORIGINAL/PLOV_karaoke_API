export default function ($stateProvider) {
	"ngInject";
	return $stateProvider.state({
		name: 'all-songs-list',
		url: '/all-songs-list',
		component: 'allSongsList'
	})
}