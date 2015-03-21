/*****************************************************************************/
/* GuestsAdd: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.GuestsAdd.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'submit #guest-add': function(e) {

    var first, last, addr, diet, rsvp;
    var guest = {};

    // TODO: Find a better way to do this.

    // 1. Grab form field values.
    first = e.target.first.value;
    last = e.target.last.value;
    addr = e.target.addr.value;
    diet = e.target.diet.value;
    rsvp = e.target.rsvp.checked;

    // 2. Trim input where necessary.
    first = App.helpers.trimInput(first);
    last  = App.helpers.trimInput(last);
    addr  = App.helpers.trimInput(addr);
    diet  = App.helpers.trimInput(diet);

    // Is the user unique?
    var count = Guests.find({first: first, last: last}).count();
    
    if (count === 0) {
      // Create object.
      guest = {
        first: first,
        last: last,
        addr: addr,
        diet: diet,
        rsvp: rsvp
      }

      // Add guest.
      Meteor.call('addGuest', guest, function(err) {
        if (err) {
          console.log('Error adding guest: ', err);
        } else {
          Notifications.success('Success', 'Guest added successfully!', { timeout: 2000 });
          console.log('Success.');
        }
      });

    } else {
      Notifications.error('Error', 'A guest with that first and last name already exists.');
      console.log('A guest with that first and last name already exists. If you dont like this, tell Bobby to remove it.');
    }

    return false;

  }
});

Template.GuestsAdd.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* GuestsAdd: Lifecycle Hooks */
/*****************************************************************************/
Template.GuestsAdd.created = function () {
};

Template.GuestsAdd.rendered = function () {
  this.$('.ui.selection').dropdown();
  this.$('.ui.checkbox').checkbox();

  this.$('.ui.form').form({
    first: {
      identifier  : 'first',
      rules: [
        {
          type   : 'empty'
        }
      ]
    },
    last: {
      identifier  : 'last',
      rules: [
        {
          type   : 'empty'
        }
      ]
    }
  })
};

Template.GuestsAdd.destroyed = function () {
};