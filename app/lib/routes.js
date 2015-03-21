Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/guests', { 
	name: 'guests',
	onBeforeAction: function() {
		var user = Meteor.user();
		if (!Roles.userIsInRole(user, ['admin'])) {
			this.render('Login');
		} else {
			this.next();
		}
	}
});