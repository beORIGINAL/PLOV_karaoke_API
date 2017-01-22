import { APP_THEME } from 'core/constants/app-config.constant';

export default function ThemeConfig ($mdThemingProvider) {
	'ngInject';
	$mdThemingProvider
		.theme(APP_THEME.default.type)
		.primaryPalette(APP_THEME.default.name, APP_THEME.default.palette);
}