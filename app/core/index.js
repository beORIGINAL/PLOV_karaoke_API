import '../../node_modules/angular-material/angular-material.scss';

export default angular.module('app.core',
	[
		'ui.router',
		'ngAnimate',
		'ngMaterial'
	])
	.config(($locationProvider, $urlRouterProvider) => {
		"ngInject";
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/');
	})
	.name;