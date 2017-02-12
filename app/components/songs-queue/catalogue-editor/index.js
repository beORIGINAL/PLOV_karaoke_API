import route from './catalogue-editor.route';
import { CatalogueEditorComponent } from './catalogue-editor.component';

export default angular.module('app.songs-queue.editor', [])
	.component('catalogueEditor', CatalogueEditorComponent)
	.config(route)
	.name;