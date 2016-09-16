export default function RestConfig (RestangularProvider) {
	'ngInject';
	const baseUrl = 'http://localhost:2427/api';
	RestangularProvider.setBaseUrl(baseUrl);

	RestangularProvider.addRequestInterceptor((elem, operation, route) => {
		if (operation === 'remove') {
			return null;
		}
		return elem;
	});
}