/*****************************************************************************/
/* RsvpError: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.RsvpError.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */

   'click .rsvp-retry': function(e) {

   	Session.set('rsvpError', false);
   	Session.set('rsvpErrorType', null);
   	Session.set('rsvpTemplate', 'RsvpForm');

    return false;
   },

   'click .rsvp-contact': function(e) {
    
   },

   'click .rsvp-food': function(e) {
   	Session.set('rsvpError', false);
   	Session.get('rsvpErrorType', null);
   	Session.set('rsvpTemplate', 'RsvpFood');
   }
});

Template.RsvpError.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
   foodNotFound: function() {
   	return Session.get('rsvpErrorType') === "FoodNotFound";
   },
   guestNotFound: function() {
   	return Session.get('rsvpErrorType') === "GuestNotFound";
   }
});

/*****************************************************************************/
/* RsvpError: Lifecycle Hooks */
/*****************************************************************************/
Template.RsvpError.created = function () {
};

Template.RsvpError.rendered = function () {
};

Template.RsvpError.destroyed = function () {
};