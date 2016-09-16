import './ordered-song-list.jade';
import './ordered-song-list.scss';

class orderedSongListController {
	/*@ngInject*/
	constructor($state, orderedSongsFactory){
		this.$state = $state;
		this.orderedSongsFactory = orderedSongsFactory;
		this.tablesWhoReserve = [];
		this.reservedSongsList = [];
		this.qurrentReservationTable = null;
	}

	$onInit(){
		this.orderedSongsFactory.getAllReservations()
			.then((result) => {
				this.tablesWhoReserve = result;
				this.loadReservedSongs(_.head(result).id);
			});
	}

	loadReservedSongs (id) {
		this.qurrentReservationTable = id;
		this.orderedSongsFactory.getSongsForReservation(id)
			.then((result) => {
				this.reservedSongsList = result;
			})
	}

	orderSong (id) {
		this.orderedSongsFactory.orderSong(id);
	}

	cancelOrdering (id) {

	}
}

export default {
	templateUrl: 'ordered-song-list.jade',
	controller: orderedSongListController
}