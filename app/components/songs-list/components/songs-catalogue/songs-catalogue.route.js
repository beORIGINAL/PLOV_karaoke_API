export default function ($stateProvider) {
	"ngInject";
	return $stateProvider.state({
		name: 'songs-list.catalogue',
		url: '/catalogue',
		component: 'songsCatalogue'
	})
}