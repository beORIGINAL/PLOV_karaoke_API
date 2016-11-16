import './songs-queue.jade';
import './songs-queue.scss';
import logo from '../../../assets/media/images/logo.png';

class songsQueueController {
	/*@ngInject*/
	constructor(SongsQueueFactory, ReservationsFactory){
		this.logo = logo;
		this.SongsQueueFactory = SongsQueueFactory;
		this.ReservationsFactory = ReservationsFactory;
		this.tablesWhoReserve = [];
		this.songsQueueList = [];
	}

	$onInit () {
		this.ReservationsFactory.getAllReservations()
			.then((result) => {
				this.tablesWhoReserve = result;
			});
		this.SongsQueueFactory.getSongsQueueList()
			.then((data) => {
				this.songsQueueList = data;
			})
	}

	updateSongStatus (song) {
		this.SongsQueueFactory.updateSongStatus(song)
			.then((data) => {
				console.log('Do smth after update');
			});
	}

	toggleTableState (table) {
		table.active = !table.active;
	}
}

export default {
	templateUrl: 'songs-queue.jade',
	controller: songsQueueController
}