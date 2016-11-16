export default function RestConfig ($rootScope, Restangular) {
	'ngInject';
	const baseUrl = 'http://localhost:2428/api';
	// const baseUrl = '/api';
	Restangular.setBaseUrl(baseUrl);

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