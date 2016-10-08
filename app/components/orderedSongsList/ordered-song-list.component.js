import './ordered-song-list.jade';
import './ordered-song-list.scss';
import logo from '../../../assets/media/images/logo.png';
import addToPlayListIco from '../../../assets/media/images/playlist_add.svg';
import removeFromQueueIco from '../../../assets/media/images/remove_from_queue.svg';

class orderedSongListController {
	/*@ngInject*/
	constructor($state, orderedSongsFactory){
		this.$state = $state;
		this.logo = logo;
		this.addToPlayListIco = addToPlayListIco;
		this.orderedSongsFactory = orderedSongsFactory;
		this.removeFromQueueIco = removeFromQueueIco;
		this.tablesWhoReserve = [];
		this.reservedSongsList = [];
		this.currentReservationTable = $state.params.tableId;
		this.activeTabIndex = this.currentReservationTable - 1;
	}

	$onInit(){
		this.orderedSongsFactory.getAllReservations()
			.then((result) => {
				this.tablesWhoReserve = result;
				const tableId = _.isNull(this.currentReservationTable) ? _.head(result).id : this.currentReservationTable;
				this.loadReservedSongs(tableId);
			});
	}

	loadReservedSongs (id) {
		this.currentReservationTable = id;
		this.orderedSongsFactory.getSongsForReservation(id)
			.then((result) => {
				this.reservedSongsList = result;
			})
	}

	cancelOrdering (song) {
		this.orderedSongsFactory.removeSongFromQueue(this.currentReservationTable, song.queueId)
			.then(() => _.pullAllBy(this.reservedSongsList, [{ 'id': song.id }], 'id'));
	}
}

export default {
	templateUrl: 'ordered-song-list.jade',
	controller: orderedSongListController
}