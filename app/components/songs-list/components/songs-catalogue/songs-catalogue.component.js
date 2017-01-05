import './songs-catalogue.scss';
import ADD_TO_IMG from 'images/playlist_add.svg';
import TURN_BACK_IMG from 'images/arrow_back.svg';

export const SongsCatalogueComponent = {
	templateUrl: require('./songs-catalogue.pug'),
	controller: class SongsCatalogueController {
		/*@ngInject*/
		constructor ($state, SongsListFactory) {
			this.$state = $state;
			this.SongsListFactory = SongsListFactory;
			
			this.addToPlayListIco = ADD_TO_IMG;
			this.arrowBackIco = TURN_BACK_IMG;
			
			this.enAlphabet = this.genAlphabet('a-z');
			this.ruAlphabet = this.genAlphabet('а-я');
		}
		
		$onInit () {
			this.searchResult = [];
		}
		
		get canOrderSongs () {
			return _.some(this.searchResult, {selected: true});
		}
		
		genAlphabet (type) {
			const letters = type.split('-');
			return _.range(
				_.head(letters).charCodeAt(0),
				_.last(letters).charCodeAt(0) + 1)
				.map(code => String.fromCharCode(code).toUpperCase());
		}
		
		findByFirstLetter (letter) {
			this.SongsListFactory.findSongByStartWith(letter)
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