/*****************************************************************************/
/* Guests: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Guests.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'change .hide-confirmed': function (event) {
    Session.set("hideConfirmedGuests", event.target.checked);
  }
});

Template.Guests.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
   guests: function() {
    if (Session.get('hideConfirmedGuests')) {
      return Guests.find({ rsvp: {$ne: true} });
    } else {
      return Guests.find();
    }
   },
   guestCount: function() {
    return Guests.find().count();
   },
   rsvpCount: function() {
    return Guests.find({ rsvp: {$ne: false} }).count();
   }
});

/*****************************************************************************/
/* Guests: Lifecycle Hooks */
/*****************************************************************************/
Template.Guests.created = function () {
};

Template.Guests.rendered = function () {
  this.$('.ui.checkbox').checkbox();
};

Template.Guests.destroyed = function () {
};