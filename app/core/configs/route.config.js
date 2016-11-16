export default function RouteConfig ($urlRouterProvider) {
	'ngInject';
	
	$urlRouterProvider.otherwise('/reservations/1');
}