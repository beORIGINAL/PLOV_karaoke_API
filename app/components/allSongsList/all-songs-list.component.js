import './all-songs-list.jade';
import './all-songs-list.scss';
import logo from '../../../assets/media/images/logo.png';
import addToPlayListIco from '../../../assets/media/images/playlist_add.svg';
import arrowBackIco from '../../../assets/media/images/arrow_back.svg';
import closeIco from '../../../assets/media/images/close.svg';

class allSongsListController {
	/*@ngInject*/
	constructor ($state, AllSongsFactory, orderedSongsFactory) {
		this.$state = $state;
		this.logo = logo;
		this.addToPlayListIco = addToPlayListIco;
		this.arrowBackIco = arrowBackIco;
		this.allSongsFactory = AllSongsFactory;
		this.closeIco = closeIco;
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
		const orderedSongs = _.map(_.filter(this.searchResult, {selected: true}), 'id');
		this.orderedSongsFactory.orderSongs(orderedSongs, this.orderedForTable)
			.then((data) => this.$state.go('ordered-song-list', {tableId: this.orderedForTable}));
	}
}

export default {
	templateUrl: 'all-songs-list.jade',
	controller: allSongsListController
}