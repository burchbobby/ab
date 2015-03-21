/*****************************************************************************/
/* GuestsFind: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.GuestsFind.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'submit #guests-find': function(e) {
    var name = App.helpers.trimInput(e.target.name.value);
    name = name.split(" ");

    var result = Guests.findOne({
      $or: [ { first: { $in: name } }, { last: { $in: name } } ]
    });

    console.log('Result:', result);
    
    return false;
   }
});

Template.GuestsFind.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* GuestsFind: Lifecycle Hooks */
/*****************************************************************************/
Template.GuestsFind.created = function () {
};

Template.GuestsFind.rendered = function () {
};

Template.GuestsFind.destroyed = function () {
};