import './ordered-play-list.jade';
import './ordered-play-list.scss';

class orderedPlayListController {
	/*@ngInject*/
	constructor(orderedPlayListFactory){
		this.OrderedPlayListFactory = orderedPlayListFactory;
		this.songsQueueList = [];
	}

	$onInit () {
		this.OrderedPlayListFactory.getSongsQueueList()
			.then((data) => {
				this.songsQueueList = data;
			})
	}

	uodateSongStatus (song) {
		this.OrderedPlayListFactory.updateSongStatus(song)
			.then((data) => {
				console.log('Do smth after update');
			});
	}
}

export default {
	templateUrl: 'ordered-play-list.jade',
	controller: orderedPlayListController
}