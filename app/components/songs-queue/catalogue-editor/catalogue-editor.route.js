export default function ($stateProvider) {
	"ngInject";
	return $stateProvider.state({
		name: 'catalogue-editor',
		url: '/catalogue-editor',
		component: 'catalogueEditor'
	})
}