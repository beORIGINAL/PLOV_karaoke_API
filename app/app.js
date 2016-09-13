import HomeModule from './home';
import AboutModule from './about';
import MainModule from './main';

const ngModule = angular.module('app',
	[
		HomeModule,
		AboutModule,
		MainModule
	]);

angular.element(document).ready(() => {
	angular.bootstrap(document.body, [
		ngModule.name
	], { strictDi: true })
});