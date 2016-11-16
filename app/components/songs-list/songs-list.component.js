import './songs-list.jade';
import './songs-list.scss';
import logo from '../../../assets/media/images/logo.png';

class SongsListController {
	/*@ngInject*/
	constructor ($state, SongsListFactory) {
		this.$state = $state;
		this.logo = logo;
		
		SongsListFactory.orderedForTable = $state.params.id;
	}
	
	$onInit () {
		this.$state.go('songs-list.search');
	}
	
	isActive (stateName) {
		return _.isEqual(stateName, this.$state.current.name);
	}
}

export default {
	templateUrl: 'songs-list.jade',
	controller: SongsListController
}