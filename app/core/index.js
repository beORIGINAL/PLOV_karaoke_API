import CommonConfig from './configs/common.config';
import RouteConfig from './configs/route.config';
import ThemeConfig from './configs/theme.config';

import Logger from './extensions/logger';
import RestConfig from './extensions/rest-config';

export default angular.module('app.core',
	[
		'ui.router',
		'ngAnimate',
		'ngMaterial',
		Logger,
		RestConfig
	])
	.config(CommonConfig)
	.config(RouteConfig)
	.config(ThemeConfig)
	.name;