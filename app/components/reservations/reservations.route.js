export default function ($stateProvider) {
	"ngInject";
	return $stateProvider.state({
		name: 'reservations',
		url: '/reservations/:tableId',
		component: 'reservations'
	})
};