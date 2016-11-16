export default function ($stateProvider) {
	"ngInject";
	return $stateProvider.state({
		name: 'songs-queue',
		url: '/songs-queue',
		component: 'songsQueue'
	})
}