import Logger from 'core/extensions/logger';
import RestAbstractFactory from './rest.factory';
import RestConfig from './rest.config';

export default angular.module ('app.core.extensions.rest-config',
	[
		'restangular',
		Logger
	])
	.factory('RestAbstractFactory', RestAbstractFactory)
	.run(RestConfig)
	.name;