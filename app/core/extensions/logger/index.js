import LoggerFactory from './logger.factory';
import LoggerConfig from './logger.config';

export default angular.module ('app.core.extensions.logger',
	[
		'toaster'
	])
	.factory('logger', LoggerFactory)
	.config(LoggerConfig)
	.name;