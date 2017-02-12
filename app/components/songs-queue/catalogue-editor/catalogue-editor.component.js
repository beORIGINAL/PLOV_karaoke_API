import './catalogue-editor.scss';
import LOGO_IMG from 'images/logo.png';
import ADD_TO_IMG from 'images/playlist_add.svg';
import TURN_BACK_IMG from 'images/arrow_back.svg';
import CLOSE_IMG from 'images/close.svg';
import DONE_IMG from 'images/done.svg';
import CLOSE_WHITE_IMG from 'images/closeWhite.svg';

export const CatalogueEditorComponent = {
	template: require('./catalogue-editor.pug'),
	controller: class CatalogueEditorController {
		/*@ngInject*/
		constructor ($state, SongsListFactory) {
			this.$state = $state;
			this.SongsListFactory = SongsListFactory;
			
			this.logo = LOGO_IMG;
			this.addToPlayListIco = ADD_TO_IMG;
			this.arrowBackIco = TURN_BACK_IMG;
			this.closeIco = CLOSE_IMG;
			this.doneIco = DONE_IMG;
			this.closeWhiteIco = CLOSE_WHITE_IMG;
		}
		
		$onInit () {
			this.getDefaultData();
		}
		
		get canOrderSongs () {
			return _.some(this.searchResult, {selected: true});
		}

		get editingEnabled () {
			return _.some(this.searchResult, {inEditing: true});
		}
		getDefaultData () {
			this.searchQuery = '';
			this.searchResult = [];
			this.editableSongCopy = {};
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
		
		enableEditing (event, song) {
			if (song.inEditing) {
				event.stopPropagation();
				event.preventDefault();
			}
            this.editableSongCopy = _.cloneDeep(song.plain());
			song.inEditing = true;
		}
		
		rejectChanges (song) {
			_.assignIn(song, this.editableSongCopy);
            song.inEditing = false;
		}
		
		updateSongData (song) {
            song.inEditing = false;
            this.SongsListFactory.updateSongInfo(song);
		}
	}
};