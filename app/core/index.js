import '../../node_modules/angular-material/angular-material.scss';

import RouteConfig from './configs/route.config';
import RestConfig from './configs/rest.config';
import ThemeConfig from './configs/theme.config';

import RestFactory from './factories/rest.factory';

export default angular.module('app.core',
	[
		'ui.router',
		'ngAnimate',
		'ngMaterial',
		'restangular'
	])
	.config(RouteConfig)
	.config(RestConfig)
	.config(ThemeConfig)
	.factory('RestAbstractFactory', RestFactory)
	.name;