/*****************************************************************************/
/* AdminNav: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.AdminNav.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'click .logout': function(e) {
      var user = Meteor.user().profile.name;
      Meteor.logout(function(err) {
        if (err) {
          console.log('Error logging out:', err);
        } else {
          Notifications.success('Success', 'User ' + user + ' was logged out successfully.', { timeout: 2000 });
          Router.go('home');
        }
      });
   }
});

Template.AdminNav.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* AdminNav: Lifecycle Hooks */
/*****************************************************************************/
Template.AdminNav.created = function () {
};

Template.AdminNav.rendered = function () {
    this.$('.ui.dropdown').dropdown();
};

Template.AdminNav.destroyed = function () {
};