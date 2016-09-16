export default function ($stateProvider) {
	"ngInject";
	return $stateProvider.state({
		name: 'ordered-song-list',
		url: '/ordered-song-list',
		component: 'orderedSongList'
	})
}