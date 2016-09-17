import './all-songs-list.jade';
import './all-songs-list.scss';

class allSongsListController {
	/*@ngInject*/
	constructor ($state, AllSongsFactory, orderedSongsFactory) {
		this.$state = $state;
		this.allSongsFactory = AllSongsFactory;
		this.orderedSongsFactory = orderedSongsFactory;
		this.orderedForTable = $state.params.id;
	}

	$onInit () {
		this.getDefaultData();
	}

	get canOrderSongs () {
		return _.some(this.searchResult, {selected: true});
	}

	getDefaultData () {
		this.searchQuery = '';
		this.searchResult = [];
	}

	findSongsByQuery () {
		if (_.isUndefined(this.searchQuery) || this.searchQuery.length < 3) {
			return;
		}
		this.allSongsFactory.findSongsByQuery(this.searchQuery)
			.then((data) => {
				this.searchResult = data;
			});
	}

	orderSelectedSongs () {
		this.orderedSongsFactory.orderSongs(_.map(this.searchResult, 'id'), this.orderedForTable)
			.then((data) => this.$state.go('ordered-song-list'));
	}
}

export default {
	templateUrl: 'all-songs-list.jade',
	controller: allSongsListController
}