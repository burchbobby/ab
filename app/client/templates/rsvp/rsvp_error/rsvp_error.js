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

    Session.set('rsvpStatus', {
      error: false,
      type: null,
      template: 'RsvpForm'
    });

    return false;
   },

   'click .rsvp-contact': function(e) {
    
   }
});

Template.RsvpError.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
   errorType: function() {
    return Session.get('rsvpStatus').type;
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