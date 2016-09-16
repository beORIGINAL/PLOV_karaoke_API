export default function ($stateProvider) {
	"ngInject";
	return $stateProvider.state({
		name: 'all-songs-list',
		url: '/:id/all-songs-list',
		component: 'allSongsList'
	})
}