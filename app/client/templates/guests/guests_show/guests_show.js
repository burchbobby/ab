/*****************************************************************************/
/* GuestsShow: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.GuestsShow.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'click .remove': function(e, tmpl) {
      // TODO: Make this prettier. Possibly show another button in the place of delete, like 'Sure?'.
      // Clicking the button twice will confirm delete.
      // This works for now.
      if (confirm('Are you sure you wish to delete this guest?')) {
        Guests.remove(this._id);
      }
   }
});

Template.GuestsShow.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

   hasRsvp: function() {
    return this.rsvp;
   }
});

/*****************************************************************************/
/* GuestsShow: Lifecycle Hooks */
/*****************************************************************************/
Template.GuestsShow.created = function () {
};

Template.GuestsShow.rendered = function () {
};

Template.GuestsShow.destroyed = function () {
};