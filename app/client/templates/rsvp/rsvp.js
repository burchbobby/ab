/*****************************************************************************/
/* Rsvp: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Rsvp.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   
});

Template.Rsvp.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

   rsvpTemplate: function() {
    return Session.get('rsvpTemplate');
   }

});

/*****************************************************************************/
/* Rsvp: Lifecycle Hooks */
/*****************************************************************************/
Template.Rsvp.created = function () {
  Session.set('rsvpTemplate', undefined);
};

Template.Rsvp.rendered = function () {
  /* If no Session is defined, let's set it to the beginning form. */
  if (typeof Session.get('rsvpTemplate') === 'undefined') {
  	Session.set('rsvpError', false);
  	Session.set('rsvpErrorType', null);
  	Session.set('rsvpTemplate', 'RsvpForm');
  }
};

Template.Rsvp.destroyed = function () {
};