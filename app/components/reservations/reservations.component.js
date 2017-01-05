import './reservations.scss';
import LOGO_IMG from '../../../assets/media/images/logo.png';
import ADD_TO_IMG from '../../../assets/media/images/playlist_add.svg';
import REMOVE_IMG from '../../../assets/media/images/remove_from_queue.svg';
import FAST_FORWARD_IMG from '../../../assets/media/images/fast_forward.svg';
import FAST_REWIND_IMG from '../../../assets/media/images/fast_rewind.svg';

export const ReservationsComponent = {
	template: require('./reservations.pug'),
	controller: class reservationsController {
		/*@ngInject*/
		constructor($state, ReservationsFactory){
			this.$state = $state;
			this.ReservationsFactory = ReservationsFactory;
			
			this.logo = LOGO_IMG;
			this.addToPlayListIco = ADD_TO_IMG;
			this.removeFromQueueIco = REMOVE_IMG;
			this.fastForwardIco = FAST_FORWARD_IMG;
			this.fastRewindIco = FAST_REWIND_IMG;
			
			this.tablesWhoReserve = [];
			this.reservedSongsList = [];
			this.currentReservationTable = $state.params.tableId;
			this.activeTabIndex = this.currentReservationTable - 1;
		}
		
		$onInit(){
			this.ReservationsFactory.getAllReservations()
				.then((result) => {
					this.tablesWhoReserve = result;
					const tableId = _.isNull(this.currentReservationTable) ? _.head(result) : this.currentReservationTable;
					this.loadReservedSongs(tableId);
				});
		}
		
		loadReservedSongs (id) {
			this.currentReservationTable = id;
			// activeTable.isActive = true;
			this.ReservationsFactory.getSongsForReservation(id)
				.then((result) => {
					this.reservedSongsList = result;
				})
		}
		
		forceQueue (song) {
			song.isForcedQueue = !song.isForcedQueue;
			this.ReservationsFactory.forceQueue(song)
				.then((data) => {
					this.reservedSongsList = _.orderBy(this.reservedSongsList, ['isForcedQueue', 'name'], ['desc', 'desc'])
				});
		}
		
		cancelReservation (song) {
			this.ReservationsFactory.removeSongFromQueue(song)
				.then(() => _.pullAllBy(this.reservedSongsList, [{ 'id': song.id }], 'id'));
		}
	}
};