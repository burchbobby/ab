/*****************************************************************************/
/* Login: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Login.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */

   /* LOG IN */
   'submit .login-form': function(e) {
      var username, password;

      var trimInput = function(val) {
        return val.replace(/^\s*|\s*$/g, "");
      }

      username = e.target.login_username.value;
      password = e.target.login_password.value;

      username = trimInput(username);
      password = trimInput(password);

      Meteor.loginWithPassword(username, password, function(err){
        if (err) {
          console.log('Error logging in:', err);
          Notifications.error('Error', err);
        } else {
          var user = Meteor.user().profile.name;
          Notifications.success('Success', 'User ' + user + ' logged in successfully.');
          Router.go('home');
        }
      });
      return false;
    }
});

Template.Login.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.created = function () {
};

Template.Login.rendered = function () {
};

Template.Login.destroyed = function () {
};