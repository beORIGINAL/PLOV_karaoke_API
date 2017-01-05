import './songs-list.scss';
import LOGO_IMG from '../../../assets/media/images/logo.png';

export const SongsListComponent = {
	template: require('./songs-list.pug'),
	controller: class SongsListController {
		/*@ngInject*/
		constructor ($state, SongsListFactory) {
			this.$state = $state;
			SongsListFactory.orderedForTable = $state.params.id;
			
			this.logo = LOGO_IMG;
		}
		
		$onInit () {
			this.$state.go('songs-list.search');
		}
		
		isActive (stateName) {
			return _.isEqual(stateName, this.$state.current.name);
		}
	}
};