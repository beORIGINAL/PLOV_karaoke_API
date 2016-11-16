import './songs-catalogue.jade';
import './songs-catalogue.scss';
import addToPlayListIco from 'images/playlist_add.svg';
import arrowBackIco from 'images/arrow_back.svg';

class SongsCatalogueController {
	/*@ngInject*/
	constructor ($state, SongsListFactory) {
		this.$state = $state;
		this.SongsListFactory = SongsListFactory;
		
		this.addToPlayListIco = addToPlayListIco;
		this.arrowBackIco = arrowBackIco;
		
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

export default {
	templateUrl: 'songs-catalogue.jade',
	controller: SongsCatalogueController
}