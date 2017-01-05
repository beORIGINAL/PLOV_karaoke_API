import route from './reservations.route';
import ReservationsFactory from './reservations.factory';

import { ReservationsComponent } from './reservations.component';

export default angular.module('app.reservations', [])
	.factory('ReservationsFactory', ReservationsFactory)
	.component('reservations', ReservationsComponent)
	.config(route)
	.name;