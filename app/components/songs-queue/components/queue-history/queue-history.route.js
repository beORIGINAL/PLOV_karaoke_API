export default function ($stateProvider) {
	"ngInject";
	return $stateProvider.state({
		name: 'queue-history',
		url: '/queue-history',
		component: 'queueHistory'
	})
}