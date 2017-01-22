import { ENABLE_DEBUG_MODE } from 'core/constants/app-config.constant';

export default function CommonConfig ($compileProvider) {
	'ngInject';
	
	$compileProvider.debugInfoEnabled(!ENABLE_DEBUG_MODE);
}