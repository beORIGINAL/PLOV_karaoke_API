export default function RouteConfig ($urlRouterProvider) {
	'ngInject';

	// $locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/reservations/1');
}