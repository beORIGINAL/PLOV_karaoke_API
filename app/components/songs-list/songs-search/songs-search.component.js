import './songs-search.scss';
import ADD_TO_IMG from 'images/playlist_add.svg';
import TURN_BACK_IMG from 'images/arrow_back.svg';
import CLOSE_IMG from 'images/close.svg';

export const SongsSearchComponent = {
	template: require('./songs-search.pug'),
	controller: class SongsSearchController {
		/*@ngInject*/
		constructor ($state, SongsListFactory) {
			this.$state = $state;
			this.SongsListFactory = SongsListFactory;
			
			this.addToPlayListIco = ADD_TO_IMG;
			this.arrowBackIco = TURN_BACK_IMG;
			this.closeIco = CLOSE_IMG;
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
}