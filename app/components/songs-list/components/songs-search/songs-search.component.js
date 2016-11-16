import './songs-search.jade';
import './songs-search.scss';
import addToPlayListIco from 'images/playlist_add.svg';
import arrowBackIco from 'images/arrow_back.svg';
import closeIco from 'images/close.svg';

class SongsSearchController {
	/*@ngInject*/
	constructor ($state, SongsListFactory) {
		this.$state = $state;
		this.SongsListFactory = SongsListFactory;
		
		this.addToPlayListIco = addToPlayListIco;
		this.arrowBackIco = arrowBackIco;
		this.closeIco = closeIco;
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
		this.SongsListFactory.findSongsByQuery(this.searchQuery)
			.then((data) => {
				this.searchResult = data;
			});
	}

	orderSelectedSongs () {
		this.SongsListFactory.orderSongs(this.searchResult)
			.then((tableId) => this.$state.go('reservations', {tableId: this.SongsListFactory.orderedForTable}));
	}
}

export default {
	templateUrl: 'songs-search.jade',
	controller: SongsSearchController
}