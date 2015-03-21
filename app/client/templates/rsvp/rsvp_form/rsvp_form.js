/*****************************************************************************/
/* RsvpForm: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.RsvpForm.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'submit #guest-rsvp': function (e) {

      var first = e.target.first.value;
      var last = e.target.last.value;

      first = App.helpers.trimInput(first);
      last  = App.helpers.trimInput(last);

      var count = Guests.find({first: first, last: last}).count();

      if (count === 0) {
         console.log('Guest not found.');

         Session.set('rsvpError', true);
         Session.set('rsvpErrorType', 'GuestNotFound');
         Session.set('rsvpTemplate', 'RsvpError');
         
         // Guest does not exist in the DB.
         // We should return a friendly error.
         // Did you spell your name wrong? "Let me try that again."
         // We can't seem to find your name. Please get in touch with either Allison or Bobby so they can fix it!

      } else if (count === 1) {
         var guest = Guests.findOne({first: first, last: last});
         var hasRsvp = guest.rsvp;

         console.log('Guest: ', guest);

         if (!hasRsvp) {
            // This is a new guest. This should be handled separately.
            console.log('Guest does not have RSVP');
             // If guest has not RSVP'd...
            Meteor.call('setRsvp', guest, true); // Set the RSVP to true.

            Session.set('rsvpError', false);
            Session.set('rsvpErrorType', null);
            Session.set('rsvpTemplate', 'RsvpFood');

         } else {
            console.log('Guest has RSVP');
             // If guest has already RSVP'd...
             // Let's see how much data we have.

             // Check if the diet has been selected.
            var dietSelected = guest.diet;

            if (dietSelected.length) {
               console.log('Guest has selected food choice.');
               // If guest has selected a diet...
               // They've done everything we need.
               // We should bring them to the success screen.

               Session.set('rsvpError', false);
               Session.set('rsvpErrorType', null);
               Session.set('rsvpTemplate', 'RsvpCompleted');

            } else {
               console.log('Guest has not selected food choice.');
               
               Session.set('rsvpError', true);
               Session.set('rsvpErrorType', 'FoodNotFound');
               Session.set('rsvpTemplate', 'RsvpError');
               // If the guest has not selected a diet...
               // We should show them the diet selection screen.
            }
         }

      } else {
         // We really shouldn't be here. It means someone's name was entered twice in the Database.
      }
      return false;
   }
});

Template.RsvpForm.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* RsvpForm: Lifecycle Hooks */
/*****************************************************************************/
Template.RsvpForm.created = function () {
};

Template.RsvpForm.rendered = function () {
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

Template.RsvpForm.destroyed = function () {
};