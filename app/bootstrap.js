import App from './app';

angular.element(document).ready(() => {
	angular.bootstrap(document.body, [
		App
	], { strictDi: true })
});

if (module.hot) {
	module.hot.accept();
}