export default function ThemeConfig ($mdThemingProvider) {
	'ngInject';
	$mdThemingProvider.theme('default')
		.primaryPalette('light-blue', {
			'default': '400',
			'hue-1': '100',
			'hue-2': '600',
			'hue-3': 'A100'
		})
}