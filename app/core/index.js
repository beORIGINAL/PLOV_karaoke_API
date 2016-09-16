import '../../node_modules/angular-material/angular-material.scss';
import './app.scss';

import RouteConfig from './configs/route.config';
import RestConfig from './configs/rest.config';
import ThemeConfig from './configs/theme.config';

import RestAbstractFactory from './factories/rest.factory';
import ToasterFactory from './factories/toster.factory';
import LoggerFactory from './factories/logger.factory';

export default angular.module('app.core',
	[
		'ui.router',
		'ngAnimate',
		'ngMaterial',
		'restangular',
		'toaster'
	])
	.config(RouteConfig)
	.config(RestConfig)
	.config(ThemeConfig)
	.factory('RestAbstractFactory', RestAbstractFactory)
	.factory('ToasterFactory', ToasterFactory)
	.factory('LoggerFactory', LoggerFactory)
	.name;