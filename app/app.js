import HomeModule from './home';
import AboutModule from './about';
import MainModule from './main';

import MyCtrl from './myctrl.controller';
import './app.scss';
const ngModule = angular.module('app',
	[
		HomeModule,
		AboutModule,
		MainModule
	])
	.controller('myCtrl', MyCtrl);

angular.element(document).ready(() => {
	angular.bootstrap(document.body, [
		ngModule.name
	])
});

if (module.hot) {
	module.hot.accept();
}