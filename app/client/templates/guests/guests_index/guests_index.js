/*****************************************************************************/
/* GuestsIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.GuestsIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */

  'submit .add-guest': function(e) {
    var first, last, rsvp;
    var guest = {};

    first = e.target.first_name.value;
    last = e.target.last_name.value;
    addr = e.target.addr.value;
    diet = e.target.diet.value;
    rsvp = e.target.rsvp.value;

    guest = {
      first: first,
      last: last,
      addr: addr,
      diet: diet,
      rsvp: rsvp
    }

    Meteor.call('addGuest', guest);

    return false;

  }
});

Template.GuestsIndex.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

  guests: function() {
    return Guests.find();
  }
});

/*****************************************************************************/
/* GuestsIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.GuestsIndex.created = function () {
};

Template.GuestsIndex.rendered = function () {
};

Template.GuestsIndex.destroyed = function () {
};