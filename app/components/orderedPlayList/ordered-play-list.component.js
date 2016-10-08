import './ordered-play-list.jade';
import './ordered-play-list.scss';
import logo from '../../../assets/media/images/logo.png';

class orderedPlayListController {
	/*@ngInject*/
	constructor(orderedPlayListFactory, orderedSongsFactory){
		this.logo = logo;
		this.OrderedPlayListFactory = orderedPlayListFactory;
		this.orderedSongsFactory = orderedSongsFactory;
		this.tablesWhoReserve = [];
		this.songsQueueList = [];
	}

	$onInit () {
		this.orderedSongsFactory.getAllReservations()
			.then((result) => {
				this.tablesWhoReserve = result;
			});
		this.OrderedPlayListFactory.getSongsQueueList()
			.then((data) => {
				this.songsQueueList = data;
			})
	}

	updateSongStatus (song) {
		this.OrderedPlayListFactory.updateSongStatus(song)
			.then((data) => {
				console.log('Do smth after update');
			});
	}

	toggleTableState (table) {
		table.active = !table.active;
	}
}

export default {
	templateUrl: 'ordered-play-list.jade',
	controller: orderedPlayListController
}