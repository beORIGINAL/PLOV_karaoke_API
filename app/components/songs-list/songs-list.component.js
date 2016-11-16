import './songs-list.jade';
import './songs-list.scss';
import logo from '../../../assets/media/images/logo.png';
import addToPlayListIco from '../../../assets/media/images/playlist_add.svg';
import arrowBackIco from '../../../assets/media/images/arrow_back.svg';
import closeIco from '../../../assets/media/images/close.svg';

class SongsListController {
	/*@ngInject*/
	constructor ($state, SongsListFactory, ReservationsFactory) {
		this.logo = logo;
		this.addToPlayListIco = addToPlayListIco;
		this.arrowBackIco = arrowBackIco;
		this.closeIco = closeIco;

		this.$state = $state;
		this.SongsListFactory = SongsListFactory;
		this.ReservationsFactory = ReservationsFactory;
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
		this.SongsListFactory.findSongsByQuery(this.searchQuery)
			.then((data) => {
				this.searchResult = data;
			});
	}

	orderSelectedSongs () {
		const orderedSongs = _.map(_.filter(this.searchResult, {selected: true}), 'id');
		this.ReservationsFactory.orderSongs(orderedSongs, this.orderedForTable)
			.then((data) => {
			debugger
				this.$state.go('reservations', {tableId: this.orderedForTable})
			});
	}
}

export default {
	templateUrl: 'songs-list.jade',
	controller: SongsListController
}