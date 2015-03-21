/*****************************************************************************/
/* ModalLogin: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ModalLogin.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'submit .login-form': function(e) {
      var username, password;

      username = App.helpers.trimInput(e.target.login_username.value);
      password = App.helpers.trimInput(e.target.login_password.value);

      Meteor.loginWithPassword(username, password, function(err){
        if (err) {
          Notifications.error('Error', err);
        } else {
          Notifications.success('Success', 'User ' + Meteor.user().profile.name + ' logged in successfully.', { timeout: 2000 });
          App.helpers.removeModal();
        }
      });
      return false;
    }
});

Template.ModalLogin.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* ModalLogin: Lifecycle Hooks */
/*****************************************************************************/
Template.ModalLogin.created = function () {
};

Template.ModalLogin.rendered = function () {
  App.helpers.renderModal();
};

Template.ModalLogin.destroyed = function () {
};