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

// ROUTES
KNav.Router.map(function() {
	
	// APP ROUTING
	this.resource('app', function() {
	    // Edit App One
	    this.route('one', function(){
		    
		    this.route('index',{path:'/'});
		    // App Modules
		    this.route('dashboard');
		    this.route('users');
		    this.route('data');
		    this.route('logic');
		    this.route('files');
		    this.route('push');
		    this.route('branding');
		    this.route('analytics');
		    this.route('console');
		    this.route('settings');

	    });
	    // Edit App Two
	    this.route('two', function(){
		    
		    this.route('index',{path:'/'});
		    // App Modules
		    this.route('dashboard');
		    this.route('users');
		    this.route('data');
		    this.route('logic');
		    this.route('files');
		    this.route('push');
		    this.route('branding');
		    this.route('analytics');
		    this.route('console');
		    this.route('settings');

	    });
	});
});

// Apps
KNav.AppRoute = Ember.Route.extend ({
    model: function(params) {
        return this.store.find('app',1);
    }
});
KNav.AppOneRoute = Ember.Route.extend ({
    model: function(params) {
        return this.store.find('app',1);
    },
    renderTemplate: function(){
	    this.render('sidebar-one', { outlet: 'sidebar'});
	}
});
KNav.AppTwoRoute = Ember.Route.extend ({
    model: function(params) {
        return this.store.find('app',2);
    },
    renderTemplate: function(){
	    this.render('sidebar-two', { outlet: 'sidebar'});
	}
});
KNav.SidebarAppIndexRoute = Ember.Route.extend ({
    model: function(params) {
        return this.store.find('app',params.app_id);
    }
});

// Index
//KNav.IndexRoute = Ember.Route.extend({
//	model: function(){
//	    return this.store.find('app');
//	}
//});

// MODELS
// App Models
KNav.App = DS.Model.extend({
    name   : DS.attr('string'),
    color  : DS.attr('string'),
    creationDate : DS.attr('date')
});
// Add Test Apps
KNav.App.FIXTURES = [
    {
        id: 1,
        name: 'App 1',
        color: 'red',
        environments: 'Development'
    },
    {
        id: 2,
        name: 'App 2',
        color: 'blue',
        environments: 'Development'
    }
];

// CONTROLLERS
// App Controller
KNav.AppOneIndexController = Ember.ObjectController.extend({
	needs: 'app',
	color: 'red',
	setupController: function(controller,model){
		controller.set('app', this.store.find('app'));
	}
});

KNav.SidebarController = Ember.ObjectController.extend({
	needs: ['app'],
	color: function() {
		//console.log(KNav);
		//console.log(this.store.find('app',1));
		var color = this.get('app');
		console.log(color);
		return 'red';
    }.property('app')
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

