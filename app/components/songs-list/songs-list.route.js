export default function ($stateProvider) {
	"ngInject";
	return $stateProvider.state({
		name: 'songs-list',
		url: '/:id/songs-list',
		component: 'songsList'
	})
}