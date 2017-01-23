import './songs-queue.scss';
import LOGO_IMG from '../../../assets/media/images/logo.png';

const TIMING_DELAY = 20*1000;
let CLICK_COUNTER = 0;

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
			if(CLICK_COUNTER === 2 && table.isActive && table.songsPerLap === 1) {
				console.info(table.songsPerLap);
				table.isActive = false;
				table.songsPerLap = 0;
				CLICK_COUNTER = 0;
			} else if (table.songsPerLap < 2) {
				table.songsPerLap++;
				table.isActive = table.songsPerLap > 0;
				CLICK_COUNTER++;
			} else if (table.songsPerLap === 2) {
				table.songsPerLap--;
			}
			this.updateReservationStatus(table);
			
		}
		
		changeLap ($event, table) {
			$event.stopPropagation();
			CLICK_COUNTER = 0;
			this.updateReservationStatus(_.assign(
				table, {
					songsPerLap: 0,
					isActive: false
				}
			));
		}
		
		updateReservationStatus (table) {
			this.ReservationsFactory.updateReservationStatus(table)
				.then((data) => {
					console.info('Do smth after update.', data);
				});
		}
	}
};