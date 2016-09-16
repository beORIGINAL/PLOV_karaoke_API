import './all-songs-list.jade';
import './all-songs-list.scss';

class allSongsListController {
	/*@ngInject*/
	constructor ($stateParams, AllSongsFactory, orderedSongsFactory) {
		this.allSongsFactory = AllSongsFactory;
		this.orderedSongsFactory = orderedSongsFactory;
		this.orderedForTable = $stateParams.id;
	}

	$onInit () {
		this.getDefaultData();
	}

	getDefaultData () {
		this.searchQuery = '';
		this.searchResult = [];
	}

	findSongsByQuery () {
		if (_.isUndefined(this.searchQuery) || this.searchQuery.length < 2) {
			return;
		}
		this.allSongsFactory.findSongsByQuery(this.searchQuery)
			.then((data) => {
				this.searchResult = data;
			});
	}

	get canOrderSongs () {
		return _.some(this.searchResult, {selected: true});
	}

	orderSelectedSongs () {
		this.orderedSongsFactory.orderSongs(_.map(this.searchResult, 'id'), this.orderedForTable);
	}
}

export default {
	templateUrl: 'all-songs-list.jade',
	controller: allSongsListController
}