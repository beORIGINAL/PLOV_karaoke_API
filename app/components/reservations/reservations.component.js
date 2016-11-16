import './reservations.jade';
import './reservations.scss';
import logo from '../../../assets/media/images/logo.png';
import addToPlayListIco from '../../../assets/media/images/playlist_add.svg';
import removeFromQueueIco from '../../../assets/media/images/remove_from_queue.svg';

class reservationsController {
	/*@ngInject*/
	constructor($state, ReservationsFactory){
		this.$state = $state;
		this.logo = logo;
		this.addToPlayListIco = addToPlayListIco;
		this.ReservationsFactory = ReservationsFactory;
		this.removeFromQueueIco = removeFromQueueIco;
		this.tablesWhoReserve = [];
		this.reservedSongsList = [];
		this.currentReservationTable = $state.params.tableId;
		this.activeTabIndex = this.currentReservationTable - 1;
		// {
		// 	"id": 1,
		// 	"isActive": true,
		// 	"songsPerLap": 1,
		// 	"name": "Reservation 1"
		// }
	}

	$onInit(){
		this.ReservationsFactory.getAllReservations()
			.then((result) => {
				this.tablesWhoReserve = result;
				// const tableId = _.isNull(this.currentReservationTable) ? _.head(result) : this.currentReservationTable;
				// this.loadReservedSongs(tableId);
				this.loadReservedSongs(_.head(result));
			});
	}

	loadReservedSongs (activeTable) {
		this.currentReservationTable = activeTable.id;
		activeTable.isActive = true;
		this.ReservationsFactory.getSongsForReservation(activeTable.id)
			.then((result) => {
				this.reservedSongsList = result;
			})
	}

	cancelOrdering (song) {
		this.ReservationsFactory.removeSongFromQueue(this.currentReservationTable, song.queueId)
			.then(() => _.pullAllBy(this.reservedSongsList, [{ 'id': song.id }], 'id'));
	}
}

export default {
	templateUrl: 'reservations.jade',
	controller: reservationsController
}