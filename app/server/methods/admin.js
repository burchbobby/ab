/*****************************************************************************/
/* Admin Methods */
/*****************************************************************************/

Meteor.methods({
 /*
  * Example:
  *  '/app/admin/update/email': function (email) {
  *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
  *  }
  *
  */

	registerUser: function(email, password) {
		Accounts.createUser({email: email, password : password});
	}

});