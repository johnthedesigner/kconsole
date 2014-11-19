// log binding activities
Ember.LOG_BINDINGS = true;

var KNav = Ember.Application.create({
	currentPath: '',
	// log transitions between pages
	LOG_TRANSITIONS: true,
	// log when Ember generates a controller or a route from a generic class
	LOG_ACTIVE_GENERATION: true,
	// log when Ember looks up a template or a view
	LOG_VIEW_LOOKUPS: true, 
});

KNav.ApplicationAdapter = DS.FixtureAdapter;

KNav.ApplicationController = Ember.Controller.extend({
  updateCurrentPath: function() {
    KNav.set('currentPath', this.get('currentPath'));
  }.observes('currentPath')
});

KNav.Router.map(function() {
	this.route('one');
	this.route('two');
	this.route('three');
	
	// APP ROUTING
	this.resource('apps', { path: '/app' }, function() {
		// Index
	    this.route('index', { path: '/' });
	    // Edit
	    this.route('dashboard', { path: '/:app_id/dashboard' });
	    this.route('dashboard', { path: '/:app_id' });
	    // Create
	    this.route('create');
	    // App Modules
	    this.route('users', { path: '/:app_id/users' });
	    this.route('data', { path: '/:app_id/data' });
	    this.route('logic', { path: '/:app_id/logic' });
	    this.route('files', { path: '/:app_id/files' });
	    this.route('push', { path: '/:app_id/push' });
	    this.route('branding', { path: '/:app_id/branding' });
	    this.route('analytics', { path: '/:app_id/analyics' });
	    this.route('console', { path: '/:app_id/console' });
	    this.route('settings', { path: '/:app_id/settings' });
	});
});

// NAVIGATION
// View
KNav.NavigationView = Ember.View.extend({
	tagName: 'nav',
	classNames: ['top-bar'],
	templateName: 'navigation'
});
// Controller
KNav.NavigationController = Ember.ArrayController.extend({
	model: Ember.A([
		Ember.Object.create({title: "Item One", location: 'one', active: false}),
		Ember.Object.create({title: "Item Two", location: 'two', active: false}),
		Ember.Object.create({title: "Item Three", location: 'three', active: false}),
		Ember.Object.create({title: "Apps", location: 'apps', active: false})
	]),
	title: "Test Nav"
});

KNav.ListLinkComponent = Ember.Component.extend({
	tagName: 'li',
	classNameBindings: ['active'],
	active: function() {
	    return this.get('childViews').anyBy('active');
	}.property('childViews.@each.active')
});
//export default NavigationController;
//console.log(Ember.ArrayController('navigation'));

// Index Apps Route
KNav.IndexRoute = Ember.Route.extend({
	model: function(){
	    return this.store.find('app');
	}
});
KNav.AppsRoute = Ember.Route.extend({
	model: function(){
	    return this.store.find('app');
	}
});

// the model for an App
KNav.App = DS.Model.extend({
    name   : DS.attr('string'),
    color  : DS.attr('string'),
    creationDate : DS.attr('date')
});

// These are fakes datas for the FixtureAdapter.
// The FixtureAdapter lets you work with fake datas while in development stage.
KNav.App.FIXTURES = [
    {
        id: 1,
        name: 'App 1',
        color: 'red'
    },
    {
        id: 2,
        name: 'App 2',
        color: 'blue'
    },
    {
        id: 3,
        name: 'App 3',
        color: 'green'
    }
];