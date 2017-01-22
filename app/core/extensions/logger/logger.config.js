import { ENABLE_INTERCEPTOR_LOGS } from 'core/constants/app-config.constant';

export default function LoggerConfig ($logProvider) {
	'ngInject';
	$logProvider.debugEnabled(ENABLE_INTERCEPTOR_LOGS);
}