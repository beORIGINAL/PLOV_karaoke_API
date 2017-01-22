import { BASE_URL } from 'core/constants/app-config.constant'

export default function RestConfig ($rootScope, Restangular) {
	'ngInject';
	Restangular.setBaseUrl(BASE_URL);

	Restangular.addRequestInterceptor((elem, operation) => {
		if (_.isEqual(operation, 'remove')) {
			return null;
		}
		$rootScope.xhr = true;
		return elem;
	});

	Restangular.addResponseInterceptor((data) => {
		$rootScope.xhr = false;
		return data;
	});
}