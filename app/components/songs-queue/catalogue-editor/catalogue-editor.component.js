import './catalogue-editor.scss';
import LOGO_IMG from 'images/logo.png';
import TURN_BACK_IMG from 'images/arrow_back.svg';
import CLOSE_IMG from 'images/close.svg';
import DONE_IMG from 'images/done.svg';
import CLOSE_WHITE_IMG from 'images/closeWhite.svg';
import DELETE_FOREVER from 'images/delete_forever.svg'
import NOTE_ADD from 'images/note_add_black.svg';
const NEW_SONG_MODEL = {
	id: '000-000',
    artist: '',
    title: ''
};

export const CatalogueEditorComponent = {
	template: require('./catalogue-editor.pug'),
	controller: class CatalogueEditorController {
		/*@ngInject*/
		constructor ($state, SongsListFactory) {
			this.$state = $state;
			this.SongsListFactory = SongsListFactory;
			
			this.logo = LOGO_IMG;
			this.arrowBackIco = TURN_BACK_IMG;
			this.closeIco = CLOSE_IMG;
			this.doneIco = DONE_IMG;
			this.closeWhiteIco = CLOSE_WHITE_IMG;
			this.deleteForeverIco = DELETE_FOREVER;
			this.addItemIco = NOTE_ADD;
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
		
		addNewSong () {
			this.searchResult.unshift(_.cloneDeep(NEW_SONG_MODEL));
            _.head(this.searchResult).inCreating = true;
            _.head(this.searchResult).inEditing = true;
		}
		
		enableEditing (event, song) {
			if (song.inEditing || song.inCreating) {
				event.stopPropagation();
				event.preventDefault();
			}
			if (!song.inCreating) {
                this.editableSongCopy = _.cloneDeep(song.plain());
			}
			song.inEditing = true;
		}
		
		rejectChanges (song) {
			if (!song.inCreating) {
                _.assignIn(song, this.editableSongCopy);
			} else {
				_.remove(this.searchResult, {id: song.id});
                song.inCreating = false;
			}

            song.inEditing = false;
		}
		
		updateSongData (song) {
            song.inEditing = false;
            if (song.inCreating) {
            	song.inCreating = false;
                return this.SongsListFactory.addNewSong(song)
					.then((data) => song = data);
			}
            return this.SongsListFactory.updateSongInfo(song);
		}

        deleteSong (song) {
			this.SongsListFactory.deleteSong(song)
				.then(() => {
                    song.inEditing = false;
                    _.remove(this.searchResult, {id: song.id});
				});
		}
	}
};