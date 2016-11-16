import route from './reservations.route';
import reservationsComponent from './reservations.component';
import ReservationsFactory from './reservations.factory';

export default angular.module('app.reservations', [])
	.component('reservations', reservationsComponent)
	.factory('ReservationsFactory', ReservationsFactory)
	.config(route)
	.name;