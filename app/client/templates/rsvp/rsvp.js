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
    return Session.get('rsvpStatus').template;
   }

});

/*****************************************************************************/
/* Rsvp: Lifecycle Hooks */
/*****************************************************************************/
Template.Rsvp.created = function () {
  Session.set('rsvpStatus', undefined);
};

Template.Rsvp.rendered = function () {
  /* If no Session is defined, let's set it to the beginning form. */
  if (typeof Session.get('rsvpStatus') === 'undefined') {
    Session.set('rsvpStatus', {
      error: false,
      template: 'RsvpForm'
    });
  }
};

Template.Rsvp.destroyed = function () {
};