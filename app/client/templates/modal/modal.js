/*****************************************************************************/
/* Modal: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Modal.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Modal.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  getActiveModal: function() {
    return Session.get('activeModal');
  }

});

/*****************************************************************************/
/* Modal: Lifecycle Hooks */
/*****************************************************************************/
Template.Modal.created = function () {
};

Template.Modal.rendered = function () {
};

Template.Modal.destroyed = function () {
};