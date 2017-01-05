import './songs-queue.scss';
import LOGO_IMG from '../../../assets/media/images/logo.png';

const TIMING_DELAY = 20*1000;

export const SongsQueueComponent = {
	template: require('./songs-queue.pug'),
	controller: class songsQueueController {
		/*@ngInject*/
		constructor($q, SongsQueueFactory, ReservationsFactory){
			this.$q = $q;
			this.logo = LOGO_IMG;
			this.SongsQueueFactory = SongsQueueFactory;
			this.ReservationsFactory = ReservationsFactory;
			this.tablesWhoReserve = [];
			this.songsQueueList = [];
		}
		
		$onInit () {
			this.getData().then(() => {
				this.timing = setInterval(this.getData.bind(this) , TIMING_DELAY);
			})
		}
		
		$onDestroy () {
			clearInterval(this.timing);
		}
		
		getData () {
			return this.$q.all([
				this.ReservationsFactory.getAllReservations(false)
					.then((result) => {
						this.tablesWhoReserve = result;
					}),
				this.SongsQueueFactory.getSongsQueueList()
					.then((data) => {
						this.songsQueueList = data;
					})
			]);
		}
		
		updateSongStatus (song) {
			song.isPlayed = true;
			this.SongsQueueFactory.updateSongStatus(song)
				.then((data) => {
					console.log('Do smth after update');
				});
		}
		
		toggleTableState (table) {
			table.isActive = false;
			this.ReservationsFactory.updateReservationStatus(table)
				.then((data) => {
					console.log('Do smth after update');
				})
		}
	}
};