/*****************************************************************************/
/* Guests Methods */
/*****************************************************************************/

Meteor.methods({
 /*
  * Example:
  *  '/app/guests/update/email': function (email) {
  *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
  *  }
  *
  */

	addGuest: function(guest) {

		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}

		Guests.insert({
			first: guest.first,
			last: guest.last,
			addr: guest.addr,
			diet: guest.diet,
			rsvp: guest.rsvp,
			owner: Meteor.userId()
		});

	},

	removeGuest: function(guestId) {
		Guests.remove(guestId);
	},

	setRsvp: function(guest, setRsvp) {
		Guests.update(guest._id, { $set: { rsvp: setRsvp }});
	},

	getRsvp: function(guest) {
		return guest.rsvp;
	}

});